<template>
  <router-view/>
</template>

<style>
@import url(@/assets/css/main.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 90vh;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

* {
  padding: 0px;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
