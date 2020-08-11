<template>
  <div id="app">
    <ChatApp />
  </div>
</template>

<script>
import ChatApp from './components/ChatApp'

export default {
  name: 'App',
  components: {
    ChatApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #212542;
  color: #e0e1e6;
  height: 100vh;
  width: 100vw;
}
</style>
