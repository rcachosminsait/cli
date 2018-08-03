<template lang="pug">
  ods-form(:model='loginForm', :rules='rules' ref='loginForm')
    ods-form-item(label='Usuario' prop='user')
      ods-input(type='text' v-model='loginForm.user')
    ods-form-item(label='Contraseña' prop='password')
      ods-input(type='password' v-model='loginForm.password')
    ods-form-item
      ods-button(type='primary' native-type="submit" @click="submitForm('loginForm')") Enviar
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: this.$t('login.rules.user'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('login.rules.password'), trigger: 'blur' }
        ]
      }
    }
  },

  methods: {

    submitForm (formName) {
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let load = this.$loading({
            lock: true,
            text: this.$t('login.logging')
          })

          if (this.loginForm.user === 'admin' && this.loginForm.password === 'admin') {
            this.$notify.closeAll()
            sessionStorage.sessionToken = 'UserAdmitted'
            sessionStorage.userId = 'administrator'
            load.close()
            this.$router.push({ name: 'Home' })
          } else {
            load.close()
            this.$notify.closeAll()
            this.$notify({
              title: 'Error',
              message: _this.$t('login.loginError'),
              type: 'error',
              position: 'top-right',
              duration: 5000
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  .ods-form{
    width: 30%;
  }

  /deep/ .ods-form-item__label {
    line-height: 12px;
  }
</style>
