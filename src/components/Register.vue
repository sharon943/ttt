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
                <span class="getCode" @click="findRegCode" >获取验证码</span>
              </el-form-item>


              <el-form-item label="qq号码">
                <el-input v-model="form.qq" placeholder="请输入您的qq号码"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱地址" :rules="[{ required: false, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                <el-input v-model="form.email" placeholder="请输入您的邮箱地址"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="checkCode">立即创建</el-button>
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
              <el-form-item label="您的店铺">
                <el-checkbox-group v-model="supplyform.type">
                  <el-checkbox label="淘宝网店" name="type"></el-checkbox>
                  <el-checkbox label="天猫商城" name="type"></el-checkbox>
                  <el-checkbox label="阿里巴巴" name="type"></el-checkbox>
                  <el-checkbox label="京东商城" name="type"></el-checkbox>
                  <el-checkbox label="微店店主" name="type"></el-checkbox>
                  <el-checkbox label="手机微商" name="type"></el-checkbox>
                  <el-checkbox label="蘑菇街" name="type"></el-checkbox>
                  <el-checkbox label="实体店主" name="type"></el-checkbox>
                  <el-checkbox label="随便逛逛" name="type"></el-checkbox>
                  <el-checkbox label="其他" name="type"></el-checkbox><el-input type="text" v-model="supplyform.otherplatform" placeholder="请输入第三方平台名称" autocomplete="off" style="width: 200px" class="thirdParty"></el-input>
                </el-checkbox-group>
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
              <el-form-item label="短信验证码" prop="checkPass">
                <el-input type="number" v-model="supplyform.phonecode" autocomplete="off" style="width: 150px"></el-input>
                <span class="getCode" @click="findRegCode" >获取验证码</span>
              </el-form-item>
              <el-form-item label="qq号码">
                <el-input v-model="supplyform.qq" placeholder="请输入您的QQ号"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱地址" :rules="[{ required: false, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                <el-input v-model="supplyform.email" placeholder="请输入您正确的邮箱地址"></el-input>
              </el-form-item>
              <span class="title">公司信息</span>
              <el-form-item label="经营性质">
                <el-radio v-model="supplyform.radio" label="生产厂家">生产厂家</el-radio>
                <el-radio v-model="supplyform.radio" label="门市销售">门市销售</el-radio>
                <el-radio v-model="supplyform.radio" label="经销代理">经销代理</el-radio>
                <el-radio v-model="supplyform.radio" label="个人">个人</el-radio>
              </el-form-item>
              <el-form-item label="生产规模">
                <el-select v-model="supplyform.peopleNum" placeholder="请选择生产规模" >
                  <el-option v-for="item in optionNum" :label="item.label" :value="item.label" :key="item.label"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="分销招募">
                <el-checkbox-group v-model="supplyform.type2">
                  <el-checkbox label="1" name="type" style="display: block">阅读并同意 <span class="agreement">《开通分销招募服务》</span>，为网销代理供货</el-checkbox>
                  <el-checkbox label="2" name="type">门市销售</el-checkbox>
                  <el-checkbox label="3" name="type">经销代理</el-checkbox>
                  <el-checkbox label="4" name="type">个人</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="checkCode
">提交申请</el-button>
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
  import api from '../api/api';
  import axios from 'axios';
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
          name: '',checkPass:'',pass:'',radio:'',
          phone: '',phonecode:'',otherplatform:'',
          qq:'',email:'',peopleNum:'',
          type: [],type1: [],type2: [],

        }
      }
    },
    created(){
    },
    mounted(){

    },
    methods: {

        //采购商注册
        onSubmit() {
            if (!this.form.name) {
                this.$message.error("请输入姓名");
                return;
            }
            if (!this.form.pass) {
                this.$message.error("请输入密码");
                return;
            }
            if (!this.form.checkPass) {
                this.$message.error("请确认密码");
                return;
            }
            if (!this.form.phonecode) {
                this.$message.error("请输入验证码");
                return;
            }
            if (!this.form.qq) {
                this.$message.error("请输入QQ号");
                return;
            }
            if (!this.form.email) {
                this.$message.error("请输入邮箱");
                return;
            }
            if (!this.form.phone) {
                this.$message.error("请输入手机号");
                return;
            }
            if(this.form.pass!=this.form.checkPass){
                this.$message.error("两次密码不一致");
                return;
            }

            let formData = new FormData();
            formData.append("mobile", this.form.phone);
            formData.append("password", this.form.pass);
            formData.append("account", this.form.name);
            formData.append("qqCode", this.form.qq);
            formData.append("email", this.form.email);

            var instance = axios.create({
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                timeout: 5000,
            });
            instance.post('/tongtaotao/v1/user/insert', formData)
                .then((res) => {
                    if (res.data.code ==200){
                        this.$message({message: '注册成功',type: 'success'});
                        this.$router.push({name:'Login'})
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch((error)=> {
                    this.$message.error(error);
                })
            return;
        },
        //检查验证码
        checkCode() {
            let formData = new FormData();

            if(this.showpurchase){
                if (!this.form.name) {
                    this.$message.error("请输入姓名");
                    return;
                }
                if (!this.form.pass) {
                    this.$message.error("请输入密码");
                    return;
                }
                if (!this.form.checkPass) {
                    this.$message.error("请确认密码");
                    return;
                }
                if (!this.form.phonecode) {
                    this.$message.error("请输入验证码");
                    return;
                }
                if (!this.form.qq) {
                    this.$message.error("请输入QQ号");
                    return;
                }
                if (!this.form.email) {
                    this.$message.error("请输入邮箱");
                    return;
                }
                if (!this.form.phone) {
                    this.$message.error("请输入手机号");
                    return;
                }
                if(this.form.pass!=this.form.checkPass){
                    this.$message.error("两次密码不一致");
                    return;
                }
                formData.append("mobile", this.form.phone);
                formData.append("code", this.form.phonecode);
            }else{
                if (!this.supplyform.name) {
                    this.$message.error("请输入姓名");
                    return;
                }
                if (!this.supplyform.pass) {
                    this.$message.error("请输入密码");
                    return;
                }
                if (!this.supplyform.checkPass) {
                    this.$message.error("请确认密码");
                    return;
                }
                if(this.supplyform.pass!=this.supplyform.checkPass){
                    this.$message.error("两次密码不一致");
                    return;
                }
                if (!this.supplyform.store) {
                    this.$message.error("请输入店铺地址");
                    return;
                }

                //联系信息
                if (!this.supplyform.brand) {
                    this.$message.error("请输入品牌");
                    return;
                }
                if (!this.supplyform.store) {
                    this.$message.error("请输入商家品牌");
                    return;
                }
                if (!this.supplyform.address) {
                    this.$message.error("请输入取货地址");
                    return;
                }
                if (!this.supplyform.Faddress) {
                    this.$message.error("请输入厂址");
                    return;
                }
                if (!this.supplyform.linePeople) {
                    this.$message.error("请输入联系");
                    return;
                }
                if (!this.supplyform.phone) {
                    this.$message.error("请输入手机号码");
                    return;
                }
                if (!this.supplyform.phonecode) {
                    this.$message.error("请输入验证码");
                    return;
                }

                if (!this.supplyform.qq) {
                    this.$message.error("请输入QQ号");
                    return;
                }
                if (!this.supplyform.email) {
                    this.$message.error("请输入邮箱");
                    return;
                }
                formData.append("mobile", this.supplyform.phone);
                formData.append("code", this.supplyform.phonecode);

            }

            var instance = axios.create({
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                timeout: 5000,
            });
            instance.post('/tongtaotao/v1/code/check/register/mobile/code', formData)
                .then((res) => {
                    if (res.data.code ==200){
                        if(this.showpurchase){
                            this.onSubmit();
                        }else{
                            this.regSupplier();
                        }
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch((error)=> {
                    this.$message.error(error);
                })
            return;

        },
        //获取验证码
        findRegCode() {
            let formData = new FormData();
            if(this.showpurchase){
                if (!this.form.phone) {
                    this.$message.error("请输入手机号");
                    return;
                }
                formData.append("mobile", this.form.phone);

            }else{
                if (!this.supplyform.phone) {
                    this.$message.error("请输入手机号");
                    return;
                }
                formData.append("mobile", this.supplyform.phone);
            }
            var instance = axios.create({
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                timeout: 5000,
            });
            instance.post('/tongtaotao/v1/code/send/register/mobile', formData)
                .then((res) => {
                    if (res.data.code ==200){
                        this.$message({
                            message: '发送成功',
                            type: 'success'
                        });
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch((error)=> {
                    this.$message.error(error);
                })
            return;
        },
        //供应商注册
        regSupplier(){
            //公司信息
            if (! this.supplyform.peopleNum) {
                this.$message.error("请选择生产规模");
                return;
            }
            if (! this.supplyform.radio) {
                this.$message.error("请选择经营性质");
                return;
            }
            console.log(this.supplyform.peopleNum);
            var myThirdStore="";
            for(var x=0;x<=this.supplyform.type.length;x++){
                if("undefined"!=this.supplyform.type[x] && undefined!=this.supplyform.type[x] ){
                    if("其他" == this.supplyform.type[x]){
                        myThirdStore+=this.supplyform.otherplatform+","
                    }else{
                        myThirdStore+=this.supplyform.type[x]+","
                    }
                }
            };
            if(""!=myThirdStore){
                myThirdStore=myThirdStore.slice(0, myThirdStore.length-1);
            }
            let formData = new FormData();
            formData.append("mobile", this.supplyform.phone);
            formData.append("password", this.supplyform.pass);
            formData.append("account", this.supplyform.name);
            formData.append("qqCode", this.supplyform.qq);
            formData.append("email", this.supplyform.email);
            formData.append("merchantBrand", this.supplyform.brand);
            formData.append("factoryAddress", this.supplyform.Faddress);
            formData.append("empiricalNature",this.supplyform.radio);
            formData.append("productionPersonType", this.supplyform.peopleNum);
            formData.append("deliveryAddress", this.supplyform.address);
            formData.append("myThirdStore", myThirdStore);
            formData.append("httpAccessUrl", 'http://'+this.supplyform.store+'.tongtaotao.com');
            console.log(formData);
            var instance = axios.create({
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                timeout: 5000,
            });
            instance.post('/tongtaotao/v1/user/insert/vendor', formData)
                .then((res) => {
                    if (res.data.code ==200){
                        this.$message({message: '申请成功',type: 'success'});
                        this.$router.push({name:'Login'})

                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch((error)=> {
                    this.$message.error(error);
                })
            return;
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
