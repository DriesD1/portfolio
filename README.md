# First–Person Portfolio

## Install and Update

**Yarn** `v1.22.21` is recommended because of the excellent interactive upgrade feature. You are free to use npm or whichever package manager, but never combine package managers.

> **Do not** update `Leva`. 
> 
> If you did, execute: `yarn add leva@0.9.34`

1. Install `yarn`
2. Update `yarn yarn:update`

## Publish

> Go through all steps described below.
> 
> Repeat **Build and Push** for  every subsequent publish.
> 
>> It can take some minutes before the changes become visible. If nothing changes after 10 minutes, you did something wrong.

### Project Settings

1. In `package.json`, change the value of `homepage`.
2. Replace the part `«github-account-name»` with your own GitHub account name. E.g. `/ixr-«github-account-name»` → `/ixr-OlivierParent`

### Build and Push

1. **Build** the project to the `/docs` folder by executing `yarn build` in your project folder.
2. **Add** all files and folders.
3. **Commit** the built project to the `main` branch of your repository.
4. **Push** the `main` branch to your GitHub repository.

### GitHub Settings

Enable GitHub Pages on the repository.

   1. Go to **Settings → Pages**.
   2. Scroll to **Build and deployment**.
   3. Set the **Branch** to `main` and the folder to `/docs`.
