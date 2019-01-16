const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: 'Nombre del proyecto',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: 'Descripción',
      default: 'A minsait project',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: 'Autor',
      default: 'minsait',
    },
    onesait: {
      when: 'isNotTest',
      type: 'list',
      message: '¿Instalar el Sistema de Diseño de Onesait?',
      choices: [
        {
          name: 'Sí (Tengo configurado npm con el usuario y clave del Sistema de Diseño)',
          value: 'yes',
          short: 'yes',
        },
        {
          name: 'No, lo instalaré yo mismo más adelante.',
          value: 'noOds',
          short: 'noOds',
        }
      ],
    },
    e2e: {
      when: 'isNotTest',
      type: 'confirm',
      message: '¿Configurar test e2e con Nightwatch? (Mejor no te metas en este jardín)',
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message:
        '¿Ejecutamos la instalación después de crear el proyecto? (`npm install`)',
      choices: [
        {
          name: 'Si, usa Yarn (recomendado por el equipo de front de minsait)',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'Si, usa NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'No, gracias. Lo instalaré después.',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '.eslintrc.js': true,
    '.eslintignore': true,
    'config/test.env.js': true,
    'test/unit/**/*': true,
    'test/unit/jest.conf.js': true,
    'test/unit/setup.js': true,
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': true,
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
