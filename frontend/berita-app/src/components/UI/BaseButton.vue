<template>
    <button :type="type" :class="mode">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props : {
        type : {
            type : String
        },
        mode : {
            type : String
        }
    }
}
</script>

<style scoped>
button {
  margin-top:0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: black;
  border: 1px solid black;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #363636;
  border-color: #363636;
}

.flat {
  background-color: transparent;
  color: #111111;
  border-color: black;
  border: 2px solid black;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>