<template>
  <div id="app">
    <Test/>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
body{
  background-color: #eeeeee;
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  }

body, html {
   margin: 0;
   height: 100%;
  }


</style>
