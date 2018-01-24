<template lang="pug">
  div.hello
    h1 {{msg}}
    p Este generador de proyectos está basado en el template webpack de vue-cli, con una configuración más relacionada con las necesidades de nuestros proyectos corporativos y los estándares y normas que hemos decidido utlizar en nuestro equipo.
    p Las funcionalidades agregadas a esta aplicación son, entre otras:
    ul
      li 
        a(href="https://github.com/axios/axios" target="_blank") 
          i Axios
          p Agregada librería Axios para su uso como cliente HTTP.
      li 
        a(href="https://pugjs.org/api/getting-started.html" target="_blank") 
            i Pug
            p Compilación de archivos .pug: Nuestro HTML estará escrito en formato pug para facilitar la lectura, reducir el tamaño de los archivos .vue y para facilitar la integración con nuestros proveedores.
      li 
        a(href="http://coffeescript.org/" target="_blank") 
          i Coffee
          p Compilación de coffeeScript: Es posible escribir el código en formato coffee. Se ha agregado para facilitar la integración de código con proveedores externos.
      li
        a(href="https://vuex.vuejs.org/en/intro.html" target="_blank") 
          i Vuex
          p Añadido Vuex para la centralización de los datos, eventos y acciones comunes entre componentes.
      li 
        a(href="https://alligator.io/vuejs/global-event-bus/" target="_blank") 
          i Events
          p Añadido eventbus para comunicación entre componentes, cuando el uso de Vuex se vea excesivo.
      li
        a(href="https://github.com/axios/axios" target="_blank") 
          i Faker
          p Agregado "faker", funcionalidad para crear un servidor de servicios json para testeo de nuestras aplicaciones. Más información:
            a(href="https://github.com/marak/Faker.js/" target="_blank") Faker 
            | y 
            a(href="https://github.com/typicode/json-server" target="_blank") Json-Server

    h2.moreInfo
      p Podrás encontrar más información en los siguientes enlaces:
    ul
      li
        a(href="http://router.vuejs.org/" target="_blank") Vue-Router
</template>

<script>
export default {
  name: 'HelloIndra',
  data () {
    return {
      msg: '¡Bienvenido/a al generador de proyectos de Vue.js para Indra / Minsait!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  max-width:70rem;
  margin:auto;

  h1, h2 {
    font-weight: bold;
  }

  h1 {
    font-size:1.4rem;
    margin:2rem 0;
  }

  p {
    margin: 1rem auto;
    line-height:1.4rem;
    max-width: 50rem;
  }

  a {
    color: #42b983;
  }

  ul {
    padding: 0;
    text-align:left;
    width:100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2rem auto;

    li {
      display: inline-block;
      margin: 1rem;
      width: 18rem;
      padding: 1rem 1rem 1rem;
      border-radius: 5px;
      font-size: 14px;
      line-height: 18px;
      color: #525050;

      > a {
        color: #525050;
        text-decoration: none;
        display:flex;

        > * {
          width:64%;
        }

        i {
          font-size: 33px;
          overflow: hidden;
          transform: rotate(-24deg);
          align-self: center;
          color: cadetblue;
          margin: 3%;
          width: 30%;
          line-height: 40px;
          font-weight: bold;
        }
      }
    }
  }

 
}

</style>
