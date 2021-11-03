<template>
  <section>
    <h1>RMV Navigation</h1>
    <the-map></the-map>
  </section>
</template>

<script>
import TheMap from "./components/TheMap.vue";

export default {
  components: {
    TheMap,
  },

}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
