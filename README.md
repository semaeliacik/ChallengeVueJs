Bonus Sorunun Cevap:
const data = [
  { id: 1, name: 'user 1' },
  { id: 2 },
  { id: 3, name: 'user 3' },
  { id: 4 },
  {},
  { id: 6, name: 'user 6' },
];

function removeDataAtIndex2(data) {
  return data.filter((_, index) => index !== 2).map((item) => item.name).filter(Boolean);
}

console.log(removeDataAtIndex2(data)); // ['user 1', 'user 2', 'user 4', 'user 5', 'user 6']



# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
