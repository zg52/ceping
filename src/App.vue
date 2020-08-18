<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;
}
body {
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  smoothing: antialiased;
  width: 10rem;
  margin: 0 auto!important;
  overflow-y: hidden;min-height:100vh;
  height: 100vh;
  overflow: hidden;
}
body,
html {
  position: relative;
  -webkit-overflow-scrolling: touch;
  color: #333;
}
 img {
  border: 0;
}
</style>
