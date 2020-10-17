<template>
  <base-card mode="center">
    <base-button
      @click="setCurrentComponent('berita-list')"
      :mode="beritalistButtonState"
    >Daftar Berita</base-button>
    <base-button
      @click="setCurrentComponent('add-berita')"
      :mode="addBeritaButtonState"
    >Tambar Berita</base-button>
  </base-card>
  <base-card mode="center">
    <input type="text" v-model="searchKey" />
    <base-button @click="search()">Search</base-button>
  </base-card>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</template>

<script>
import BeritaList from "./BeritaList";
import AddBerita from "./AddBerita";
import axios from "axios";
export default {
  components: {
    BeritaList,
    AddBerita,
  },
  provide() {
    return {
      articles: this.articles,
      onDelete: this.deleteArticleById,
      onSubmit: this.addArticle,
    };
  },
  computed: {
    beritalistButtonState() {
      return this.currentComponent === "berita-list" ? "" : "flat";
    },
    addBeritaButtonState() {
      return this.currentComponent === "berita-list" ? "flat" : "";
    },
  },
  data() {
    return {
      currentComponent: "berita-list",
      articles: [],
      searchKey: "",
    };
  },
  methods: {
    setCurrentComponent(component) {
      this.currentComponent = component;
    },
    async getAll() {
      try {
        this.articles.splice(0, this.articles.length);
        const apiCall = await axios.get("http://localhost:8080/artikel/list");
        if (apiCall != null) {
          apiCall.data.forEach((element) => {
            this.articles.push(element);
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async deleteArticleById(id) {
      try {
        const apiCall = await axios.post(
          "http://localhost:8080/artikel/delete",
          {
            id: id,
          }
        );
        if (apiCall != null) {
          this.getAll();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async addArticle(author, title, content) {
      try {
        const apiCall = await axios.post("http://localhost:8080/artikel/post", {
          username: author,
          title: title,
          content: content,
        });
        if (apiCall != null) {
          console.log(apiCall.data);
          this.getAll();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async search() {
      try {
        this.articles.splice(0, this.articles.length);
        const apiCall = await axios.get(
          "http://localhost:8080/artikel/search",
          {
            params :{ searchkey: this.searchKey}
          }
        );
        console.log(apiCall)
        if (apiCall != null) {
          apiCall.data.data.forEach((element) => {
            this.articles.push(element);
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style scoped>
input {
  display: block;
  width: 80%;
  font: inherit;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
}
</style>

