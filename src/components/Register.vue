<template>
  <div style=" background: #f6f5f5">
    <header>
      <img src="../assets/img/top.png" alt="">
      <div class="black_box">
        <section class="inside">
          <p>您好，欢迎来到童淘淘 <router-link :to="{path:'/'}">登录</router-link> <span>注册</span> </p>
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
        <ul class="registertitles">
          <li>
            <p :class="{active:showpurchase}" @click="showpurchase=true">采购商</p>
            <el-tooltip  class="item" effect="dark" content="淘宝店主及网商企业/个人注册成为采购身份" placement="right-start">
              <el-button style="margin-top: -120px"> <i class="el-icon-question"></i></el-button>
            </el-tooltip>
          </li>
         <li>
           <p :class="{active:!showpurchase}" @click="showpurchase=false">供应商</p>
           <el-tooltip  class="item" effect="dark" content="童装生产企业及经销商/代理商/批发商/统一注册身份为供应商" placement="right-start">
             <el-button style="margin-top: -120px"> <i class="el-icon-question"></i></el-button>
           </el-tooltip>
         </li>
          <span :class="['line',{active:!showpurchase}]"></span>
        </ul>
        <div class="registermodule1">
          <!--采购商部分-->
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
                <el-input type="number" v-model="form.phonecode" autocomplete="off" style="width: 150px"></el-input>
                <span class="getCode">获取验证码</span>
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
                  <el-checkbox label="其他" name="type"></el-checkbox><el-input type="text" v-model="form.otherplatform" placeholder="请输入第三方平台名称" autocomplete="off" style="width: 200px" class="thirdParty"></el-input>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="qq号码">
                <el-input v-model="form.qq" placeholder="请输入您的qq号码"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱地址" :rules="[{ required: false, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                <el-input v-model="form.email" placeholder="请输入您的邮箱地址"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!--供应商部分-->
          <div v-show="!showpurchase" class="supplybox">
            <span class="title">账户信息</span>
            <el-form ref="form" :model="form" label-width="100px" :rules="rules">
              <el-form-item label="用户名">
                <el-input v-model="supplyform.name"></el-input>
              </el-form-item>
              <el-form-item label="设置密码" prop="pass">
                <el-input type="password" v-model="supplyform.pass" placeholder="请设置6-16位密码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="重复密码" prop="checkPass">
                <el-input type="password" v-model="supplyform.checkPass" placeholder="重复输入已设置的密码，两次密码要一致" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="童淘淘店铺" prop="checkPass">
                <p style="width: 50px;display: inline-block">http://</p><el-input v-model="supplyform.store" class="linkAddress" placeholder="请输入6-20位字母和数字，不可修改" autocomplete="off"></el-input><p style="width: 100px;display: inline-block;margin-left: 10px">.tongtaotao.com</p>
              </el-form-item>
              <span class="title">联系信息</span>
              <el-form-item label="商家品牌" prop="checkPass">
                <el-input v-model="supplyform.brand" placeholder="请输入您的品牌名称（汉字，字母或数字）" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="取货地址" prop="checkPass">
                <el-input v-model="supplyform.address" placeholder="请输入门店地址方便（采购商/服务商）拿货" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="厂址" prop="checkPass">
                <el-input v-model="supplyform.Faddress" placeholder="您是生产厂家，请输入厂址，便于认证服务" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系人" prop="checkPass">
                <el-input v-model="supplyform.linePeople" placeholder="请填写真是姓名" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="checkPass">
                <el-input type="number" v-model="supplyform.phone" placeholder="请输入您的手机号码" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="qq号码">
                <el-input v-model="supplyform.qq" placeholder="请输入您的QQ号"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱地址" :rules="[{ required: false, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                <el-input v-model="supplyform.email" placeholder="请输入您正确的邮箱地址"></el-input>
              </el-form-item>
              <span class="title">公司信息</span>
              <el-form-item label="经营性质">
                <el-checkbox-group v-model="supplyform.type">
                  <el-checkbox label="生产厂家" name="type"></el-checkbox>
                  <el-checkbox label="门市销售" name="type"></el-checkbox>
                  <el-checkbox label="经销代理" name="type"></el-checkbox>
                  <el-checkbox label="个人" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="生产规模">
                <el-select v-model="supplyform.peopleNum" placeholder="请选择活动区域">
                  <el-option v-for="item in optionNum" :label="item.label" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="分销招募">
                <el-checkbox-group v-model="supplyform.type">
                  <el-checkbox label="1" name="type" style="display: block">阅读并同意 <span class="agreement">《开通分销招募服务》</span>，为网销代理供货</el-checkbox>
                  <el-checkbox label="2" name="type">门市销售</el-checkbox>
                  <el-checkbox label="3" name="type">经销代理</el-checkbox>
                  <el-checkbox label="4" name="type">个人</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交申请</el-button>
                <p>注册成功，即可成为供应商发布商品</p>
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
        optionNum:[{id:1,label:'1-5人'},{id:2,label:'5-15人'},{id:3,label:'15-35人'}],
        showpurchase:true,showupply:false,
        // 采购商表单部分
        form: {
          name: '',checkPass:'',pass:'',
          phone: '',phonecode:'',otherplatform:'',
          qq:'',email:'',
          type: [],

        },
        // 供应商表单部分
        supplyform:{
          name: '',checkPass:'',pass:'',
          phone: '',phonecode:'',otherplatform:'',
          qq:'',email:'',peopleNum:'',
          type: [],

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
  header > img{
    width: 100%;
    height: 80px;display: block;
  }
  .registertitles p.active{
    border-bottom: 1px solid #fff;
  }
  .agreement{
    color: #409EFF;cursor: pointer;
  }
  .supplybox{
    span.title{
      display: block;
      border-bottom: 1px solid #d5d5d5;
      margin-bottom: 10px;
      padding: 0 0 10px 30px;
    }
  }
.linkAddress{
  width: 200px;
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
    p{
      font-size: 12px;color:#eee;
      a{
        font-size: 12px;color: #fff;
      }
      span{
        cursor: pointer;
      }
    }
  }

  .inside ul{
    position: absolute;left:0;right:0;top:0;bottom: 0;margin:auto;
    width: 450px;height: 30px;
    color: #fff;
  }
  header ul{
    display: flex;justify-content: space-between;font-size:12px;
  }
  .getCode{
    width: 115px;height: 40px;line-height: 40px;text-align: center;background: #7f889a;display: inline-block;color:#fff;font-weight: 200;border-radius: 3px;
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
  .registertitles{
    p{
      cursor: pointer;
      font-size: 20px;width: 120px;height: 40px;line-height: 40px;text-align: center;position: absolute;border:1px solid #d5d5d5;top: -40px;
    }
    button{
      border:none;position: absolute;top:73px;background: transparent;
    }
    & > li:nth-of-type(1) p{
      left:100px;
    }
    & > li:nth-of-type(2) p{
      left:250px;
    }
    & > li:nth-of-type(1) button{
      left:178px;
    }
    & > li:nth-of-type(2) button{
      left:328px;
    }
  }


  .registermodule1{
    width: 60%;
    & > div{
      padding: 0 80px 0 50px;
    }
  }
  .rightimg{
    width: 40%;box-sizing: border-box;margin-bottom: 20px;height: auto;border-left: 2px solid #f5f5f5;
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
