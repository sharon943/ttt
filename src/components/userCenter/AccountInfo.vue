<template>
  <div>
    <!--<headTop></headTop>-->
    <main>
      <p>用户中心 > <span>账户信息</span></p>
      <div class="main">
        <ul class="topUL">
          <li class="active">我的资料</li>
        </ul>
        <section class="formBox">
          <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="登录用户名" style="position: relative">
            <el-input v-model="form.nickName" disabled></el-input>
            <span style="position: absolute;right:-80px;bottom:0;color:#666">不可修改</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <el-input v-model="form.address" placeholder="请输入您的淘宝、微店、或1688店铺地址"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="备用联系电话">
            <el-input v-model="form.phone" placeholder="请输入您的备用联系电话"></el-input>
          </el-form-item>
          <el-form-item label="QQ号">
            <el-input v-model="form.qqNum"></el-input>
          </el-form-item>
          <el-form-item label="您的店铺来源">
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
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
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

      return {
        form: {
          name: '',
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    components:{
      // headTop,
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
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
      width: 1200px;border-top: 1px solid #f3463a;height: auto;margin:50px auto 0;position: relative;background: #fff;
      .topUL{
        width: 50%;display: flex;justify-content: space-between;position: absolute;top:-40px;left: 0;cursor: pointer;
        li{
          width: 150px;text-align: center;height: 40px;line-height: 40px;
        }
        li.active{
          background: #f3463a;color: #fff;
        }
      }
      .formBox{
        padding:20px 30px;width: 60%;
      }
    }
  }

</style>
