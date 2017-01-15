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
    <h2>Ecosystem (Semantic-UI styled)</h2>
    <div class="ui three item menu">
      <a class="item" href="http://router.vuejs.org/" target="_blank">vue-router</a>
      <a class="item" href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      <a class="item" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      <a class="item" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
    $(document).ready(function () {
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
