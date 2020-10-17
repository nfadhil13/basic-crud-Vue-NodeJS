<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>

          <base-button mode="flat" @click="onDelete(id)"> Delete </base-button>
      </header>
      <p>{{ content }}</p>
    </base-card>
  </li>
</template>

<script>
export default {
  inject:[
    'onDelete'
  ],
  props: {
    id: {
      type: Number,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>

.author{
  font-size: 1rem;
}

li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>