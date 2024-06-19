# React + TypeScript + Vite + Vitest + Amplify Gen 2

Accompanies this video: https://www.youtube.com/watch?v=Tl5AZFiVWBQ See the video for more information. This repo itself is mainly for reference.

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
