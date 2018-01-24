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
    build: {
      when: 'isNotTest',
      type: 'list',
      message: 'Vue build',
      choices: [
        {
          name: 'Runtime + Compiler: recomendado para la mayoría de proyectos de minsait',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name:
            'Runtime-only: 6KB menos de peso min+gzip, pero templates (o cualquier HTML) está solo permitido en archivos Vue -  Las funciones de render serán requeridas en cualquier sitio',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      message: '¿Instalar vue-router? (Obvio)',
    },
    lint: {
      when: 'isNotTest',
      type: 'confirm',
      message: '¿Usar ESLint para verificar el código? (Luego no te quejes)',
    },
    lintConfig: {
      when: 'isNotTest && lint',
      type: 'list',
      message: 'Elige una configuración para el ESLint',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard',
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb',
        },
        {
          name: 'ninguno (configurarlo a medida)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    unit: {
      when: 'isNotTest',
      type: 'confirm',
      message: '¿Instalar test unitarios? (¿El proyecto tiene presupuesto para esto?)',
    },
    runner: {
      when: 'isNotTest && unit',
      type: 'list',
      message: 'Elige un test runner',
      choices: [
        {
          name: 'Jest',
          value: 'jest',
          short: 'jest',
        },
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'ninguno (configurarlo a medida)',
          value: 'noTest',
          short: 'noTest',
        },
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
          name: 'No, gracias. Se escribirlo sin ayuda.',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
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
