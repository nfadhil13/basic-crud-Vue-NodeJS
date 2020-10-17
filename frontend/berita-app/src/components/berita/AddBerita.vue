<template>
  <teleport to="body"> 
  <base-dialog v-if="isInputInvalid" title="Invalid Input">
    <template #default>
      <p> Tidak boleh ada field kosong! </p>
    </template>
    <template #actions>
      <base-button @click="hideDialog()">OK!</base-button>
    </template>
  </base-dialog>
  </teleport>
  <base-card>
    <form @submit.prevent="onSubmit(author,name,content)">
      <div>
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="title"/>
      </div>
      <div>
        <label for="content">Content</label>
        <textarea id="content" name="content" rows="3" v-model="content"> </textarea>
      </div>
      <div>
        <label for="author">Author Username</label>
        <input id="author" name="author" type="text" v-model="author"/>
      </div>
      <div>
          <base-button type="submit">Tambah Berita</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
    inject : ['onSubmit'],
    data(){
        return {
            title : '',
            content : '',
            author : '',
            isInputInvalid : false
        }
    },
    methods : {
      hideDialog(){
        this.isInputInvalid = false
      },
      submit(){
        if(this.title.trim() === '' 
        || this.content.trim() === ''
        || this.author.trim() === ''){
          this.isInputInvalid = true
          return;
        }
        this.onSubmit(this.title , this.content , this.author);
        this.title = ''
        this.content = ''
        this.author = ''
      }
    }

}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>