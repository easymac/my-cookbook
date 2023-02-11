import fs from 'fs'
import path from 'path'
import { Recipe, Metadata } from '@cooklang/cooklang-ts'

const recipesDirectory = path.join(process.cwd(), 'public/recipes')

const recipeMap = buildRecipeMap()

export function getAllTags(): string[] {
  const tags = new Set()
  for (const recipe of recipeMap.values()) {
    if (recipe.metadata.tags) {
      recipe.metadata.tags.split(',').forEach((tag) => tags.add(tag.trim()))
    }
  }
  return Array.from(tags)
}

export function getAllRecipes(): Recipe[] {
  return Array.from(recipeMap.values())
}

export function getRecipeBySlug(slug: string): Recipe {
  return recipeMap.get(slug)
}

export function getAllRecipesMetadata(): Metadata[] {
  return Array.from(recipeMap.values()).map((recipe) => recipe.metadata)
}

function buildRecipeMap() {
  const recipeMap = new Map()
  const directoryContents = parseDirectory(recipesDirectory)

  directoryContents
    .filter((path: string) => path.endsWith('.cook'))
    .forEach((path: string) => {
      const slug = path.split('/').slice(-1)[0].replace(/\.cook$/, '')
      if (recipeMap.has(slug)) {
        throw new Error(`Duplicate slug: ${slug}`)
      }

      const recipe = new Recipe(fs.readFileSync(path, 'utf8'))
      recipe.metadata.slug = slug

      // Parse directory contents to find images with the same name as the
      // recipe, and add them to the recipe object.
      recipe.metadata.images = directoryContents
        .filter((imagePath: string) => {
          return imagePath.startsWith(path.replace(/\.cook$/, ''))
              && imagePath.match(/\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg$/)
        })
        .map((imagePath: string) => imagePath.replace(recipesDirectory, '/recipes'))
        .join(', ')

      // Parse recipe's metadata to find tags.
      let recipeTags: string[] = [];
      if (recipe.metadata.tags) {
        recipeTags = recipe.metadata.tags.split(',').map(tag => tag.trim())
      } else {
        recipeTags = []
      }

      // Parse the path name to convert semantic directory names into tags.
      // This follows a general Next.js convention of using directory names,
      const directoryTags = path
        .replace(recipesDirectory, '')
        .split('/')
        .slice(0, -1)
        .filter((tag) => tag.length)
        .filter((tag) => recipeTags.indexOf(tag) === -1)
      
      recipe.metadata.tags = recipe.metadata.tags + ', ' + directoryTags.join(', ')

      recipeMap.set(slug, recipe)
    })

  return recipeMap
}

function parseDirectory(path: string): string[] {
  const contents: string[] = []
  const files = fs.readdirSync(path, { withFileTypes: true })
  for (const file of files) {
    if (file.isDirectory()) {
      contents.push(...parseDirectory(path + "/" + file.name))
    } else {
      contents.push(path + "/" + file.name)
    }
  }
  return contents
}