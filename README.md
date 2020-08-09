webpack --mode development ( for development , more readale)
mode: "production", - оптимизация файла (удаление пробелов)
"scripts": {
"dev": "webpack-dev-server --inline --hot", - inline - для обновления всего файла, hot - слежка за куском кода

context: path.resolve(\_\_dirname, "src"), - все начинается с src папки

use: ["style-loader", "css-loader"], - порядок важен! справа налево! вначале пропускает через сыы а потом добавялет в style

@import "~normilizer.css"; ~ говорит о том что нужно пойти в node_modules

"private": "true" вместо main: index.js - улучшение проекта которое предотвратит случайное публикование пакета
