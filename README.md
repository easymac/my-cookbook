# My Cookbook

A collection of my recipes and a beautiful Next.js app to use them in the kitchen.

[See it in action!](https://cookbook.joshuawootonn.com/)

![mockup](./mockup.png)

## About my recipes

The recipes in this repository are a mix: some are my own creation, some are family or recipes with no known origin, and some are from cookbooks or adapted from other sources.

## Usage

### Deploy your own cookbook

This project is intended to be used with CI/CD which is made very simple with [Vercel](https://vercel.com/).

This project uses the currently beta `app` directory feature of Next.js 13 and there seems to be a bug with client-side navigation when deploying to Vercel.

It may be related to one of these issues:

https://github.com/vercel/next.js/issues/45495

https://github.com/vercel/next.js/issues/44728

https://github.com/vercel/next.js/issues/44826

Deployment to Vercel *works* but I consider client-side navigation to be a critical feature of this app. I'll investigate this issue further as Next.js 13 becomes more stable.

In the meantime, I'll be manually managing my own deployment.

#### Manual deployment

This project can be deployed manually using the standard Next.js build process. See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more information.

If you'd like any assistance with the process or have any questions, please open an issue--I'm happy to help!

### Recipes

Recipes are stored in the [Cooklang document format](https://cooklang.org/).

Store them in the `public/recipes` directory.

#### Metadata

This app uniquely handles certain metadata fields:

`title` (required): The title of the recipe. This is used in the recipe list and in the recipe page.

`author`: The author of the recipe. This appears in the information section of the recipe page.

`source`: The source of the recipe. This appears in the information section of the recipe page.

`description`: A short description of the recipe. This appears below the recipe in the recipe page.

`tags`: A list of tags for the recipe. This is used for searching and filtering recipes. Tags are case-insensitive. Store tags as a comma separated list.

`time`: The time it takes to make the recipe. This appears in the information section of the recipe page. *(No convention seems to exist within the Cooklang community for what this field should be called or how it should be formatted. Thus, the time field accepts any string.)*

`yield`: The yield of the recipe. This appears in the information section of the recipe page.

Additional metadata fields are ignored.


#### Images

To add an image to a recipe, give your image file the same name as the recipe. For example:

```
pubilc/recipes/recipe.cook
public/recipes/recipe.jpg
```

Supported image formats are: `png`, `jpg`, `jpeg`, `gif`, `svg`, `webp`.

## Goals

Storing a catalog of recipes is a pain in the butt and it shouldn't be.

Recipes should be easy to read to read and easy to share. A good digital recipe catalog will be both.

The most important quality of a recipe catalog, however, is *permanence*.

It isn't locked behind a specific account in a specific app; it isn't a ridiculous list of bookmarks in a browser; it doesn't disappear when a website goes down.

Git repositories are a great solution to the problem of keeping recipes; they only lack a good interface for reading and searching through them.

I'm combining Git with Next.js and Vercel to build a beautiful, easy-to-use recipe catalog with a flexible and open data store.

## Contributing

Contributions are welcome! Please open an issue or pull request if you'd like to contribute.

## TODO:

- **iOS splash images**: I've generated these for the iPhone 12, 13, and 14 lineups, excluding the Mini devices. If the alignment seems incorrect for your device, or if your device isn't supported, please open an issue and I'll add support.

- **Reinvestigate Vercel deployment**: As mentioned above, there seems to be a bug with client-side navigation when deploying to Vercel. I'll investigate this issue further as Next.js 13 becomes more stable.

- **Support for multiple recipe images**: Multiple images are supported, but only one is displayed in the recipe page. A component (carousel?) should be added to the recipe page to display all images.

- **Support for markdown recipe descriptions**: Currently, recipe descriptions are stored only within the Cooklang document as plaintext. I'm considering adding support for markdown descriptions using the same filename convention as recipe images. For example, `public/recipes/recipe.cook` and `public/recipes/recipe.md`.

- **Rework layout for route transitions**: I moved away from route transitions for the purpose of performance: when loading a recipe page from a new session, I didn't want to necessarily load a recipe list as well. Having no route transitions has the added benefit of playing nicely with mobile swipe-to-go-back-gestures. However, I'd like to rework the layout to support route transitions in the future.

