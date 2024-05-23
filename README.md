# React + TypeScript + Vite + Vitest + Amplify Gen 2

Create onyx-store-react-gen2 repo in github

```
npm create vite@latest onyx-store-react-gen2 -- --template react-ts
cd onyx-store-react-gen2
npm i
npm i -save-dev vitest
npm create amplify@latest
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:davidsilva/onyx-store-react-gen2.git
git push -u origin main
```

Go to AWS Amplify -> Create New App -> Choose GitHub -> Choose repo (onyx-store-react-gen2)
Might require giving permission for AWS to access the repo.

Go through the steps of deploying....

This command will watch for changes:

```
npx ampx sandbox
```

Add Amplify React UI components:

```
npm i @aws-amplify/ui-react
```

```
npm run dev
```

Need to edit generated form to specify authMode.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
