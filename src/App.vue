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
  data() {
    return {
      zoom: 2,
      iconWidth: 25,
      iconHeight: 40,

    };
  },
  methods: {
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
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
