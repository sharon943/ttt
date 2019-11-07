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
  list-style: none;
  /*font-size: 16px;*/
  font-family: 'xh';
}
.registermodule1 button.el-button,.registermodule1 button.el-button:hover,.registermodule1 button.el-button:active,.registermodule1 button.el-button span,.registermodule1 button.el-button--primary,.registermodule1 .el-button:focus{
    background: #f3463a;border-color:#f3463a;
  }
.el-checkbox__input.is-checked+.el-checkbox__label {
  color: #606266!important;
}
.thirdParty  > input.el-input__inner{
    height: 30px;
  }

</style>
