<template>
  <div class="hello">
    <div class="hello__intro">
      <h1 class="hello__title">{{ msg }}</h1>
      <p class="hello__version">Estás usando la versión 1.0. de Onesait-Cli.</p>
    </div>
    <div class="whatsnew">
      <h2 class="whatnew__title">Novedades de la versión:</h2>
      <ul>
        <li>Inluye componente de menú lateral y header</li>
        <li>Incorporación del Sistema de Componentes onesait-ds</li>
        <li>Agregado el módulo de multidioma</li>
        <li>Incluido un eslint personalizado</li>
        <li>Módulo de login</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloIndra',
  data () {
    return {
      msg: 'Un lenguaje de diseño compartido para un desarrollo de producto más ágil y de mejor calidad'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  max-width:70rem;
  margin:auto;

  &__intro {
    margin: rem(50) 0 rem(150) 0px;
    max-width: rem(600);
    color: #000;
    line-height: 1.3
  }

  &__title {
    font-size: rem(36);
    font-weight: 500;
    margin: rem(20) 0;
  }

  &__version {
    font-size: rem(10);
  }

  ul {
    padding: 0;
    text-align:left;
    width:100%;
    margin: 2rem auto;

    li {
      padding: 1rem 1rem 1rem;
      font-size: rem(14);
      line-height: rem(18);
      color: #525050;
    }
  }
}
</style>