<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@font-face {
  font-family: 'zy';
  src: url('./assets/font/jt.ttf');
  font-weight: normal;
}
#app{
  height:100%;
}

*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  /*font-size: 16px;*/
  font-family: 'xh';
}
</style>
