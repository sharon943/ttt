<template>
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
    <div class="top_bottom">
      <section class="box">
        <img src="../assets/img/logo.png" alt="" class="logo">
        <section class="search_box">
          <div class="topnav">
            <span>商品</span>
            <span>厂家</span>
          </div>
          <div class="middlebox">
            <input type="text" placeholder="根据产品标题，厂家名字进行命名">
            <button class="photo"></button>   <!--拍照button-->
            <button class="search"></button>  <!--搜索button-->
          </div>
          <ul>
            <li>童群</li>
            <li>秋装童群</li>
            <li>哈伦裤</li>
            <li>T恤</li>
            <li>羽绒裤</li>
            <li>棉服</li>
            <li>中长款</li>
          </ul>
        </section>
        <section class="ma_box">
          <img src="../assets/img/erweima.png" alt="">
          <img src="../assets/img/erweima.png" alt="">
        </section>

      </section>
    </div>
  </header>
</template>
<script>
  import api from '../api/api'
  export default{
    data(){
       return{
         menu:['门店管理','会员管理','营销工具','统计报表'],shop_view:false,member_view:false,Pic_view:false,market_view:false,report_view:false,
         activeindex:'',moreview:false,name:'',logo_src:'',more_view:false,goods_view:false,
       }
    },
    mounted(){
    },
    created(){
    if(parseInt(localStorage.shop_view)>2){
      this.shop_view=true
    }
    if(parseInt(localStorage.member_view)>2){
      this.member_view=true
    }
    if(parseInt(localStorage.Pic_view)>2){
      this.Pic_view=true
    }
    if(parseInt(localStorage.market_view)>2){
      this.market_view=true
    }
    if(parseInt(localStorage.report_view)>2){
      this.report_view=true
    }
    if(parseInt(localStorage.more_view)>2){
      this.more_view=true
    }
    if(parseInt(localStorage.goods_view)>2){
      this.goods_view=true
    }
      this.name=localStorage.brand_name
      this.logo_src=localStorage.logo
    },
    methods:{
      more(){
        var box=document.getElementById('more')
        box.style.display='block'
        // this.$router.push('more')
      },
      q(c,o){
        console.log(c)
      }
    },
    watch: {
      activeindex:'q'
    }
  }
</script>
<style scoped lang="scss">
  header img{
    width: 100%;
    height: 80px;
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
  .top_bottom{
    width: 100%;background: #fff;
    height: 124px;font-size: 12px;
  }
  .top_bottom .box{
    width: 1200px;margin:0 auto;height:100%;
    padding: 30px;display: flex;justify-content: space-between;
  }
  .logo{
    width: 190px;height: 68px;
  }
  .ma_box{
    width: 160px;
    height: 75px;    display: flex;
    justify-content: space-between;
  }
  .ma_box img{
    width: 75px;
    height: 75px;
  }
  .middlebox{
    width: 560px;height: 40px;    margin: 15px auto;
    background-image: url('../assets/img/search-box.png');background-repeat: no-repeat;background-size: 100% 100%;
  }
  .middlebox input{
    padding: 10px;    width: 400px;
    background: transparent;
    line-height: 22px;
  }
  .search,.photo{
    width: 60px;height: 100%;float: right;    background: transparent;
  }
  .topnav{
    margin-left: 20px;
  }
  .search_box ul{
    margin-left: 20px;width: 400px;
  }





</style>
