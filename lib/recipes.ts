import fs from 'fs'
import path from 'path'
import { Recipe } from '@cooklang/cooklang-ts'

// TODO: Export a Recipe type

const recipesDirectory = path.join(process.cwd(), 'public/recipes')

export function getRecipeSlugs() {
  return fs.readdirSync(recipesDirectory).map((slug) => slug.replace(/\.cook$/, ''))
}

export function getRecipeBySlug(slug) {
  const recipePath = path.join(recipesDirectory, `${slug}.cook`)
  const fileContents = fs.readFileSync(recipePath, 'utf8')
  const recipe = new Recipe(fileContents)

  return {
    slug: slug.replace(/\.cook$/, ''),
    recipe,
  }
}

export function getAllRecipes() {
  return getRecipeSlugs().map((slug) => getRecipeBySlug(slug))
}