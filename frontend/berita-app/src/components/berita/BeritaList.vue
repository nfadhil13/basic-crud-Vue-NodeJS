<template>
  <base-card mode="center" v-if="articles.length<1">
    <p>No Item in the list</p>
  </base-card>
  <ul v-else>
    <berita-item
    v-for="article in articles"
    :key="article.id"
    :id="article.id"
    :title="article.title"
    :content="article.content"
    :author="article.author"
    ></berita-item>
  </ul>
</template>

<script>
import BeritaItem from './BeritaItem'
export default {
  components : {
      BeritaItem
  },
  inject :[
    'articles'
  ],
  data(){
    return{
    }
  },
  methods :{
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>