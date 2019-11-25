<template>
  <div class="top">
    <img :src="require('@/assets/images/ad.png')" alt class="top_ad" />
    <main>
      <el-row class="top_menu">
        <el-col :span='6' class="top_menu_left">您好！欢迎来到童淘淘。<span>登录</span><span>注册</span> </el-col>
        <el-col :span='12' class="top_menu_mid">
            <span>免费代发</span>
            <span>功能服务<i class="el-icon-bottom"></i></span>
            <span>我是厂家<i class="el-icon-bottom"></i></span>
            <span>用户中心</span>
            <span>运费测算</span>
            <span>在线客服</span>
        </el-col>
        <el-col :span='6' class="top_menu_right">
            <span>手机童淘淘<i class="el-icon-bottom" style='color:#fff'></i></span>
        </el-col>
      </el-row>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang='scss'>
.top {
  width: 100%;
  &_ad {
    display: block;
    width: 100%;
    // height: 80px;
  }
  main {
    background-color: #000;
    .top_menu {
      width: 1200px;
      margin: 0 auto; 
      color: #999;
          font-size: 12px;
      &_left{
          text-align: left;
          height: 30px;
          line-height: 30px;
          span{
              display: inline-block;
              margin-left: 20px;
              cursor: pointer;
              
          }
      }
      &_mid{
          text-align: right;
          height: 30px;
          line-height: 30px;
          span{
              display: inline-block;
              margin-left: 30px;
              i{
                  color: #999;
                  height:  12px;
                  width: 12px;
              }
          }
      }
      &_right{
          text-align: right;
          height: 30px;
          line-height: 30px;
          i{
                  color: #fff;
              }
      }
    }
  }
}
</style>