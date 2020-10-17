<template>
  <TheHeader :title="appTitle"/>
  <TheBeritaMain/>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader"
import TheBeritaMain from "./components/berita/TheBeritaMain"
export default {
  components : {
    TheHeader,
    TheBeritaMain
  },
  data(){
    return {
      appTitle:'Simple CRUD'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

