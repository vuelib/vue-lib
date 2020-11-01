const fs = require('fs')
const mkdirp = require('mkdirp')
const inquirer = require('inquirer')
const fsPromises = require('fs').promises
const questions = require('./questions')
const vuePlaceholder = require('./placeholder/vue.js')
const testPlaceholder = require('./placeholder/test.js')
const datasetPlaceholder = require('./placeholder/dataset.js')
const storiesPlaceholder = require('./placeholder/stories.js')

const [, , ...args] = process.argv

function toPascalCase(name) {
  return `${name}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}

async function generateComponent() {

  try {

    const input = args[0]
    const { directory } = await inquirer.prompt(questions)
    const normalizedPath = input.split('/').map((el) => toPascalCase(el))

    let path = directory !== 'none' ? `./src/components/${directory.toLowerCase()}` : './src/components'
    normalizedPath.forEach((el) => path += `/${el}`)

    const name = normalizedPath[normalizedPath.length - 1]

    if (!fs.existsSync(path)) {
      await mkdirp.sync(path)

      const importPath = path.replace('./src/', '@/')

      await fsPromises.writeFile(`${path}/${name}.vue`, vuePlaceholder(name))
      await fsPromises.writeFile(`${path}/${name}.dataset.ts`, datasetPlaceholder())
      await fsPromises.writeFile(`${path}/${name}.test.ts`, testPlaceholder(name, importPath))
      await fsPromises.writeFile(`${path}/${name}.stories.ts`, storiesPlaceholder(name, directory, importPath))

      console.info(`\nThe component ${name} has been successfully created!\n`)
    } else {
      console.info(`\n[error] ${path} already exists\n`)
    }

  } catch (e) {
    console.info(`[error] ${e}`)
  }

}

if (!args[0]) console.info('[error] Please enter a component name at the end of the command \'npm run generator\'\n')
else if (args.length >= 2) console.info('[error] You must pass no more than one argument\n')
else {
  console.info('Welcome to Vue Component Generator\n')

  generateComponent()
}
