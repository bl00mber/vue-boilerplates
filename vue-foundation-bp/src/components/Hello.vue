<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem (Foundation-UI styled)</h2>
    <div class="menu-centered">
      <ul class="menu">
        <a class="button" href="http://router.vuejs.org/" target="_blank">vue-router</a>
        <a class="button" href="http://vuex.vuejs.org/" target="_blank">vuex</a>
        <a class="button" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        <a class="button" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </ul>
    </div>
    <br/>

    <div class="slider" data-slider data-initial-start="25" data-initial-end="75">
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <input type="hidden">
      <input type="hidden">
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
    $(document).ready(function () {
      $(document).foundation()

      $('h2').click(function () {
        $('h2').hide()
      })
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
