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
input,button{
  border: none;outline: none;outline:medium;
}
.orderInfo .el-form-item__content{
  width: 300px;float: left;margin-left: 0!important;
}
.orderInfo .el-form-item{
  padding-left: 50px;
}
.orderInfo .el-button--primary{
  background-color: #d73a19;
  border-color: #d73a19;
}
.orderInfo .el-textarea{
  width: 500px;
}
.phoneBox .el-form-item__content{
  width: 800px;
}
.phoneBox .el-form-item__content .el-input{
  width: 300px;
}
.el-table td, .el-table th.is-leaf{
  text-align: center;
}

/*input::before,input::after{*/
  /*background: #fff!important;*/
/*}*/
/*input{*/
  /*background: #fff!important;*/
/*}*/
</style>
