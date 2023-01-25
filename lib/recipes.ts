import fs from 'fs'
import path from 'path'
import { Recipe } from '@cooklang/cooklang-ts'

// TODO: Export a Recipe type

const recipesDirectory = path.join(process.cwd(), 'public/recipes')

const recipeMap = buildRecipeMap()

export function getAllRecipes() {
  return Array.from(recipeMap.values())
}

export function getRecipeBySlug(slug) {
  return recipeMap.get(slug)
}

export function getAllRecipesMetadata() {
  return Array.from(recipeMap.values()).map((recipe) => recipe.metadata)
}

function buildRecipeMap() {
  const recipeMap = new Map()
  const directoryContents = parseDirectory(recipesDirectory)

  directoryContents
    .filter((path) => path.endsWith('.cook'))
    .forEach((path) => {
      const slug = path.replace(recipesDirectory, '').replace(/\.cook$/, '')
      if (recipeMap.has(slug)) {
        throw new Error(`Duplicate slug: ${slug}`)
      }

      const recipe = new Recipe(fs.readFileSync(path, 'utf8'))
      recipe.metadata.slug = slug

      // Parse directory contents to find images with the same name as the
      // recipe, and add them to the recipe object.
      recipe.metadata.images = directoryContents
        .filter((imagePath) => {
          return imagePath.startsWith(path.replace(/\.cook$/, ''))
              && imagePath.match(/\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg$/)
        })
        .map((imagePath) => imagePath.replace(recipesDirectory, '/recipes'))

      // Parse recipe's metadata to find tags.
      if (recipe.metadata.tags) {
        recipe.metadata.tags = recipe.metadata.tags.split(',').map(tag => tag.trim())
      } else {
        recipe.metadata.tags = []
      }

      // Parse the path name to convert semantic directory names into tags.
      // This follows a general Next.js convention of using directory names,
      const directoryTags = path
        .replace(recipesDirectory, '')
        .split('/')
        .slice(0, -1)
        .filter((tag) => tag.length)
        .filter((tag) => recipe.metadata.tags.indexOf(tag) === -1)
      
      recipe.metadata.tags = recipe.metadata.tags.concat(directoryTags)

      recipeMap.set(slug, recipe)
    })

  return recipeMap
}

function parseDirectory(path) {
  const contents = []
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