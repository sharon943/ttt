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
html,body,#app{
  height:100%;background: #f6f5f5;
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
.giftBox .el-input{
  width: 50px;margin-right: 50px;margin-left: 10px;
}
.giftBox .el-input input.el-input__inner{
  height: 30px;line-height: 30px;width: 50px;padding: 0;
}
.giftBox .el-checkbox{
  margin-bottom: 10px;
}
.el-step__title.is-finish,.el-step__head.is-finish {
  color: #ef1e1e;border-color: #ef1e1e;
}
.el-step__icon-inner[class*=el-icon]:not(.is-status) {
  font-size: 35px;
  font-weight: 550;
}
header > img{
  display: block;
}
.Area .el-select{
  width: 96.5px;
}
.modification button.el-button,.modification button.el-button:hover,.modification button.el-button:active,.modification button.el-button span,.modification button.el-button--primary,.modification .el-button:focus{
  background: #fc6c21;border-color:#fc6c21;width: 136px;height: 38px;
}
.modification .el-form-item{
   width: 100%;
}
.modification .el-input{
  width: 70%;
}
.payForm .el-input{
  width: 100%;
}
.payForm_code .el-input{
  width: 38%;
}
.formBox button.el-button,.formBox button.el-button:hover,.formBox button.el-button:active,.formBox button.el-button span,.formBox button.el-button--primary,.formBox .el-button:focus{
  background: #f3463a;border-color:#f3463a;
}
.formBox .el-checkbox__input.is-checked .el-checkbox__inner, .formBox .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #f3463a;
  border-color: #f3463a;
}
.formBox span.el-checkbox__inner:hover,.formBox .is-focus span.el-checkbox__inner{
  border-color: #f3463a;
}
/*input::before,input::after{*/
  /*background: #fff!important;*/
/*}*/
/*input{*/
  /*background: #fff!important;*/
/*}*/
</style>
