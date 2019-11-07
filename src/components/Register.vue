<template>
  <div style=" background: #f6f5f5">
    <header>
      <img src="../assets/img/top.png" alt="">
      <div class="black_box">
        <section class="inside">
          <p>您好，欢迎来到童淘淘 <span>登录</span> <span>注册</span> </p>
          <ul>
            <li>免费代发</li>
            <li>功能服务</li>
            <li>我是厂家</li>
            <li>用户中心</li>
            <li>运费测算</li>
            <li>在线客服</li>
          </ul>
          <p>手机童淘淘</p>
        </section>
      </div>
      <div class="top_bottomLogin registermain">
        <section class="box">
          <img src="../assets/img/logo.png" alt="" class="logo">
          <span></span>
          <p>欢迎来到童淘淘</p>
        </section>
      </div>
    </header>
    <section class="registerbox">
      <div class="modules">
        <div class="registertitles">
          <p :class="{active:showpurchase}" @click="showpurchase=true">采购商</p>
          <p :class="{active:!showpurchase}" @click="showpurchase=false">供应商</p>
          <span :class="['line',{active:!showpurchase}]"></span>
        </div>
        <div class="registermodule1">
          <div v-show="showpurchase">
            <el-form ref="form" :model="form" label-width="100px" :rules="rules">
              <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="设置密码" prop="pass">
                <el-input type="password" v-model="form.pass" placeholder="请设置6-16位密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="form.checkPass" placeholder="重复输入已设置的密码，两次密码要一致" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="checkPass">
                <el-input type="number" v-model="form.phone" placeholder="便于安全找回密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="短信验证码" prop="checkPass">
                <el-input type="number" v-model="form.phonecode" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="您的店铺">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="淘宝网店" name="type"></el-checkbox>
                  <el-checkbox label="天猫商城" name="type"></el-checkbox>
                  <el-checkbox label="阿里巴巴" name="type"></el-checkbox>
                  <el-checkbox label="京东商城" name="type"></el-checkbox>
                  <el-checkbox label="微店店主" name="type"></el-checkbox>
                  <el-checkbox label="手机微商" name="type"></el-checkbox>
                  <el-checkbox label="蘑菇街" name="type"></el-checkbox>
                  <el-checkbox label="实体店主" name="type"></el-checkbox>
                  <el-checkbox label="随便逛逛" name="type"></el-checkbox>
                  <el-checkbox label="其他" name="type"></el-checkbox><el-input type="text" v-model="form.otherplatform" autocomplete="off"></el-input>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="qq号码">
                <el-input v-model="form.qq" placeholder="请输入您的qq号码"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱" :rules="[{ required: false, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-show="!showpurchase" class="supplybox">
            <span class="title">账户信息</span>
            <el-form ref="form" :model="form" label-width="100px" :rules="rules">
              <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="设置密码" prop="pass">
                <el-input type="password" v-model="form.pass" placeholder="请设置6-16位密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="重复密码" prop="checkPass">
                <el-input type="password" v-model="form.checkPass" placeholder="重复输入已设置的密码，两次密码要一致" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="童淘淘店铺" prop="checkPass">
                <p>http://</p><el-input v-model="form.store" placeholder="请输入6-20位字母和数字，不可修改" autocomplete="off"></el-input><p>.tongtaotao.com</p>
              </el-form-item>
              <span class="title">联系信息</span>
              <el-form-item label="手机号码" prop="checkPass">
                <el-input type="number" v-model="form.phone" placeholder="便于安全找回密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="短信验证码" prop="checkPass">
                <el-input type="number" v-model="form.phonecode" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="您的店铺">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="淘宝网店" name="type"></el-checkbox>
                  <el-checkbox label="天猫商城" name="type"></el-checkbox>
                  <el-checkbox label="阿里巴巴" name="type"></el-checkbox>
                  <el-checkbox label="京东商城" name="type"></el-checkbox>
                  <el-checkbox label="微店店主" name="type"></el-checkbox>
                  <el-checkbox label="手机微商" name="type"></el-checkbox>
                  <el-checkbox label="蘑菇街" name="type"></el-checkbox>
                  <el-checkbox label="实体店主" name="type"></el-checkbox>
                  <el-checkbox label="随便逛逛" name="type"></el-checkbox>
                  <el-checkbox label="其他" name="type"></el-checkbox><el-input type="text" v-model="form.otherplatform" autocomplete="off"></el-input>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="qq号码">
                <el-input v-model="form.qq" placeholder="请输入您的qq号码"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱" :rules="[{ required: false, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>

        </div>
        <div class="rightimg">
          <img src="../assets/img/18.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import api from '../api/api'
  export default {
    data() {
      return {
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        showpurchase:true,showupply:false,form: {
          name: '',checkPass:'',pass:'',
          phone: '',phonecode:'',otherplatform:'',
qq:'',email:'',
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    created(){
    },
    mounted(){

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }


    },
  }
</script>
<style scoped lang="scss">
  header img{
    width: 100%;
    height: 80px;
  }
  .registertitles p.active{
    border-bottom: 1px solid #fff;
  }
  .supplybox{
    span.title{
      display: block;
      border-bottom: 1px solid #d5d5d5;
      margin-bottom: 10px;
      padding: 0 0 10px 30px;
    }
  }
  span.line{
    width: 100px;height: 2px;background: #f3463a;position: absolute;left:110px;top:-2px
  }
  span.active{
    left:260px;
  }
  .black_box{
    width: 100%;background: #000;
    height: 30px;
  }
  .inside{
    width: 1200px;display: flex;height: 100%;line-height: 30px;margin:0 auto;position: relative;justify-content: space-between;
  }
  .inside p{
    font-size: 12px;color:#eee;
  }
  .inside ul{
    position: absolute;left:0;right:0;top:0;bottom: 0;margin:auto;
    width: 450px;height: 30px;
    color: #fff;
  }
  header ul{
    display: flex;justify-content: space-between;font-size:12px;
  }
  .top_bottomLogin{
    width: 1200px;background: #fff;margin:0 auto;
    height: 84px;font-size: 12px;padding: 16px 0 30px 30px;
  }
  .top_bottomLogin .box{
    width: 500px;height:100%;
    display: flex;
  }
  .logo{
    width: 190px;height: 68px;
  }
  .top_bottomLogin .box p{
    font-size: 34px;line-height: 68px;
    color: #bbbbbb;
  }
  .top_bottomLogin .box span {
    width: 2px;height: 53px;background: #bbbbbb;margin-top: 8.5px;margin-right: 15px;
  }
  .registermain .box{
    background: #fff;
  }
  .registerbox{
    width: 1200px;margin:0 auto;background: #fff;height: auto;padding-top: 20px;

  }
  .registerbox .modules{
    width: 1190px;border:1px solid #d5d5d5;margin:40px  auto 0;height: auto;position: relative;display: flex;
  }
  .registertitles p{
    cursor: pointer;
    font-size: 20px;width: 120px;height: 40px;line-height: 40px;text-align: center;position: absolute;border:1px solid #d5d5d5;top: -40px;
  }
  .registertitles p:nth-of-type(1){
    left:100px;
  }
  .registertitles p:nth-of-type(2){
    left:250px;
  }
  .registermodule1{
    width: 60%;
  }
  .rightimg{
    width: 40%;border-left: 2px solid #f5f5f5;box-sizing: border-box;margin-bottom: 20px;
  }
  .rightimg img{
    width: 380px;height: 736px;margin:30px auto 0;display: block;
  }
  .registermodule1{
    padding: 20px;
  }
  .registermodule1 dl{
    font-size: 14px;display: flex;line-height: 40px;
  }
  .registermodule1 dl dt{
    width: 100px;text-align: right;
  }
  .registermodule1 dl input{
    border:1px solid #ddd;padding:5px;width: 300px;
  }
</style>
