<template>
    <header>
        <h1>{{ title }}</h1>
    </header>

</template>


<script>
export default {
    props : {
        title : String
    }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 , header p {
  color: white;
  margin: 0;
}

header p {
    
}
</style>