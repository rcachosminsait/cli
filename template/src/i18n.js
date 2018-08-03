import Vue from 'vue'
import VueI18n from 'vue-i18n'
import esLocale from '@onesait/onesait-ds/lib/locale/lang/es'
import enLocale from '@onesait/onesait-ds/lib/locale/lang/en'
import OnesaitLocale from '@onesait/onesait-ds/lib/locale'

Vue.use(VueI18n)

const messages = {
  es: {
    ...esLocale,
    login: {
      user: 'Usuario',
      password: 'Contraseña',
      submitButton: 'Enviar',
      rules: {
        user: 'Introduzca el usuario',
        password: 'Introduzca la contaseña'
      },
      logging: 'Inicando sesión...',
      loginError: 'El usuario y/o la contraseña no son correctos'
    }
  },

  en: {
    ...enLocale,
    login: {
      user: 'User',
      password: 'Password',
      submitButton: 'Send',
      rules: {
        user: 'Please, type a user name',
        password: 'Please, type a password'
      },
      logging: 'Loading...',
      loginError: 'User or password invalid'
    }
  }
}

const i18n = new VueI18n({
  locale: 'es',
  messages
})

OnesaitLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
