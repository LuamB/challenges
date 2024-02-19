# React Project Setup

## Learning Objectives

- Having a general understanding of project scaffolding
- Learning how to work with Vite to scaffold a React project
- Knowing the purpose of a bundler
- Understanding common `npm` scripts
- Knowing the difference between `public` and `src` folder

---

## Project Scaffolding

Project scaffolding is the process of creating a new project. You will use
[Vite](https://vitejs.dev/guide/#getting-started) to create a new React
project automatically.

> 💡 In principle, you could create a new React project from scratch. However, this would be a lot
> of work and we would have to set up a lot of things ourselves. For example, you would have to set
> up a development server, a build process and a test runner. You would also have to configure up a
> module bundler and a transpiler. This is a lot of work and you would have to do it every time you
> want to create a new project.

> 💡 Vite, by the way, works quite similarly to the `ghcd` tool you have probably already
> used.

## Vite

Vite is a local development server for web applications. It also includes a tool that allows you to create a React project with a single command. It is a
great tool to get started with React.

> 📙 Read
> [**Scaffolding Your First Vite Project** at the Vite Docs](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
> to learn how to create a new project using `npm`.

### Folder Structure

Vite scaffolds a folder structure for you with a lot of files and folders.

Most important are `src`, `src/components`, and `public`, which we will discuss.

### Available Scripts

Vite has a few more npm scripts than the ones you have seen so far. Besides starting a
development server and running tests, you can use them to build your app.

The most important scripts for us are `dev`, `lint` and `preview`. `build` is generally used only for production environments.

> 📙 Read more about
> [building and previewing a Vite+React site](https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site)

### Adding a Stylesheet

You can directly import CSS files in your JavaScript files.

It is a common pattern to colocate your CSS with your components. This means that you have a CSS
file with the same name as the component that is imported in the component's JavaScript file. It's a
good practice to use the BEM naming convention for your CSS classes to avoid naming conflicts
between components.

> 📙 Read more about
> [**Adding a Stylesheet** at the Vite Docs](https://vitejs.dev/guide/features.html#css).

### Adding Images, Fonts and Files

You can directly import image files or fonts in your JavaScript files.

> 📙 Read more about
> [**Adding Images, Fonts and Files** at the Vite Docs](https://vitejs.dev/guide/assets.html#static-asset-handling).

## Resources

- [Scaffolding Your First Vite Project\*at the Vite Docs](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Building and previewing a Vite+React site](https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site)
- [Adding a Stylesheet at the Vite Docs](https://vitejs.dev/guide/features.html#css)
- [Adding Images, Fonts and Files at the Vite Docs](https://vitejs.dev/guide/assets.html#static-asset-handling)
