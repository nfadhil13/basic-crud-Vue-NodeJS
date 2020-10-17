<template>
    <div :class="mode">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props : {
    mode : {
        type : String
    }
  }
}
</script>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.center{
  display: flex;
  justify-content: center;
}
</style>