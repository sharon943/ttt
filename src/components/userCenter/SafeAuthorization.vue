<template>
  <div>
    <!--<headTop></headTop>-->
    <main>
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>账户安全</span>
        </div>
      </div>
      <div class="main">
        <ul>
          <li v-for="(item,index) in categories" :class="{active:index==activeindex}" @click="activeindex=index">{{item}}</li>
        </ul>
        <section class="modification" v-if="activeindex==0">
           <ul class="tengXunbox">
             <li>
               <img src="../../assets/img/applogo/qq.png" alt="">
               <p>qq账号</p>
               <span class="active">绑定</span>
             </li>
             <li>
               <img src="../../assets/img/applogo/wechat.png" alt="">
               <p>微信账号</p>
               <span >解除绑定</span>
             </li>
           </ul>
          <div class="mailBox">
            <section>
              <img src="../../assets/img/applogo/email.png" alt="">
              <p>邮箱绑定</p>
            </section>
            <section>
              <input type="text" v-model="mailAddress"> <span>输入邮箱</span>
              <button>提交</button>
            </section>
          </div>
        </section>
        <section class="modification" v-if="activeindex==1">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 45%;">
            <el-form-item label="账户名">
              <div>可爱的泡泡</div>
            </el-form-item>
            <el-form-item label="原密码" prop="Opass">
              <el-input type="password" v-model="ruleForm.Opass" autocomplete="off"></el-input>
              <span style="color:#0688e6;cursor: pointer" @click="activeindex=2">忘记密码？</span>
            </el-form-item>
            <el-form-item label="新密码" prop="pass" required>
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" required>
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </section>
        <section class="modification payForm" v-else-if="activeindex==2">
          <el-form :model="payForm" :rules="rules" ref="payForm" label-width="110px" class="demo-ruleForm" style="width: 45%;">
            <el-form-item label="您的手机号">
              <div class="payFormMoblie">18234052315</div>
              <span class="changeMobile" @click="activeindex=3">更改手机</span>
            </el-form-item>
            <el-form-item label="短信验证码" prop="code" class="payForm_code">
              <el-input type="password" v-model="payForm.code" autocomplete="off"></el-input>
              <span class="getCode">获取短信验证码</span>
            </el-form-item>
            <el-form-item label="设置支付密码" prop="payPass" required>
              <el-input type="password" v-model="payForm.payPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认支付密码" prop="checkpayPass" required>
              <el-input type="password" v-model="payForm.checkpayPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('payForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </section>
        <section class="modification payForm" v-else-if="activeindex==3">
          <el-form :model="changeMPform" :rules="rules" ref="changeMPform" label-width="110px" class="demo-ruleForm" style="width: 45%;">
            <el-form-item label="原手机号">
              <div class="payFormMoblie">18234052315</div>
            </el-form-item>
            <el-form-item label="短信验证码" prop="code" class="payForm_code">
              <el-input type="password" v-model="changeMPform.code" autocomplete="off"></el-input>
              <span class="getCode">获取短信验证码</span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('changeMPform')">提交</el-button>
            </el-form-item>
          </el-form>
        </section>
      </div>
    </main>

  </div>
</template>
<script>
  // import headTop from '../config/headTop'
  export default {
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入您的新密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }else if(this.payForm.checkpayPass !== ''){
            this.$refs.payForm.validateField('checkPass');

          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入支付密码'));
        } else if (value !== this.payForm.payPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        categories:['第三方绑定账号','修改登录密码','修改支付密码','修改手机号'],
        activeindex:0,
        ruleForm: {
          payPass: '',
          code: '',
          checkpayPass: '',
        },
        payForm:{code:'',payPass:'',checkpayPass:''},
        changeMPform:{code:''},
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],

          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur'}
          ],
          checkpayPass: [
            { validator: validatePass3, trigger: 'blur'}
          ],
          Opass: [
            { required: true, message: '请填写您的原密码', trigger: 'blur' }
          ],
          payPass:[
            { required: true, message: '请填写您的支付密码', trigger: 'blur' }

          ]
        }
      }
    },
    methods:{
      backTohome(){
        this.$parent.fatherMethod();
      },
    },
    components:{
      // headTop,
    },
  }
</script>
<style scoped lang="scss">
  main{
    margin:0 auto;background:#f6f5f5;height: auto;border-top: 1px solid #f3463a;
    & >p{
      width: 1200px;margin:20px auto 0;color:#666;cursor: pointer;
      span{
        font-size: 16px;color:#333;
      }
    }
    .main{
     background: #fff;width: 1200px;border-top: 1px solid #f3463a;height: auto;margin:50px auto 0;position: relative;
     & > ul{
       width: 50%;display: flex;justify-content: space-between;position: absolute;top:-40px;left: 0;cursor: pointer;
       li{
         width: 150px;text-align: center;height: 40px;line-height: 40px;
       }
       li.active{
         background: #f3463a;color: #fff;
       }
     }
      .modification{
        padding: 30px 0 50px;
        .payFormMoblie{
          display: inline-block
        }
        .changeMobile{
          color:#0688e6;cursor: pointer;margin-left: 10px;
        }
        .getCode{
          color: #fd8140;border:1px solid #fd8140;box-sizing: border-box;
          cursor: pointer;
          width: 60%;
          background: #fff1e9;
          display: inline-block;
          text-align: center;
          border-radius: 3px;
        }
        .tengXunbox,.mailBox{
          width: 300px;display: flex;justify-content: space-between;
          img{
            width: 60px;height: 60px;
          }
          li{
            width: 50%;text-align: center;
            p{
              font-size: 14px;margin-bottom: 15px;
            }
            span{
              padding:5px 8px;background:#bababa ;border-radius: 5px;color:#fff;cursor: pointer;
            }
            span.active{
              background:#fc6c21 ;
            }
          }
        }
        .mailBox{
          margin-top: 50px;width: 450px;
          & > section:nth-of-type(1){
            width: 150px;text-align: center;
          }
          & > section:nth-of-type(2){
            width: 300px;text-align: center;
            button{
              display: block;width: 80px;height: 35px;line-height: 35px;background: #fc6c21;color: #fff;margin:30px 0 0 15px;
            }
          }
          section{
             input{
               border:1px solid #e2e2e2;height: 35px;line-height: 35px;width: 200px;padding-left: 5px;
             }
          }
        }
      }
    }
  }

</style>
