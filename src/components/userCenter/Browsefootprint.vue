<template>
  <div class="mycar">
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey"  @click="backTohome">用户中心 &gt;</span>
          <span>浏览足迹</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">浏览足迹</div>
      </div>
    </div>
    <div class="mycontainer">
      <div class="mytimes">
        <div class="timebox" :class="{activetime:index==0}" v-for="(val,index) in list" :key="index">
          <div>
            <div class="darkgrey">今天 16:30</div>
            <div class="conbox">
              <div>
                <img src="../../assets/img/1.png" alt="">
              </div>
              <div>
                <div class="orange blods">2019年新款上市，服装特卖，血亏价格</div>
                <div>
                  <span class="darkgrey">商品价格：</span><span class="red firstfont">￥68</span> <span class="delline lightgrey" style="margin-left: 8px">￥200</span>
                </div>
              </div>
            </div>
          </div>
          <div class="editbox">
            <div style="display: inline-block">
              <div class="oranges">加入购物车</div>
              <div class="lightgreybor">删除该记录</div>
            </div>
          </div>
          <div class="timeline">
            <div class="circles"></div>
            <div class="line"></div>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        list:[1,2,3,4]
      }
    },
    methods: {
      backTohome(){
        this.$parent.fatherMethod();
      },
    },
    mounted() {

    },
    created(){

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '浏览足迹'
      })
    }
  }
</script>
<style scoped>
  .mycar {
    font-size: 12px;
    background: #f6f5f5;
    padding-bottom: 80px;
  }

  .mytab > .active {
    background: #f43e31; /* 红色背景 */
    color: #fff;
  }
  .consultingtop .serachs {
    width: 562px;

  }
  .productserchnav {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
  }

  .mynavs {
    display: flex;
    border-bottom: 1px solid #f43e31;
  }

  .mynavs > div {
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
  }
  .timebox{
    width: 1068px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 17px 0;
    padding-right: 34px;
    position: relative;
  }
  .timebox>div:nth-child(1){
    display: flex;
  }
  .timebox>div:nth-child(1)>div:nth-child(1){
    width: 82px;
    text-align: right;
    margin-right: 45px;
    padding-top: 15px;
  }
  .conbox{
    display: flex;
    height: 60px;
    align-items: center;
  }
  .conbox>div:nth-child(1){
    width: 60px;
    height: 60px;
    margin-right: 14px;
  }
  .conbox>div:nth-child(1)>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .conbox>div:nth-child(2)>div{

    height: 16px;
    align-items: center;
    display: flex;
  }
  .conbox>div:nth-child(2)>div:nth-child(1){
    margin-bottom: 6px;
  }
  .delline{
    text-decoration: line-through;
  }
  .editbox{
    display: flex;
    align-items: center;

  }
  .editbox>div>div{
    border-radius: 5px;
    padding: 0 30px;
    height: 26px;
    line-height: 26px;
    cursor: pointer;
  }
  .editbox>div>div:nth-child(1){
    margin-bottom: 6px;
  }
  .timeline{
    position: absolute;
    left: 100px;
    top: 9px;
  }
  .timeline>.circles{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #bababa;
  }
  .timeline>.line{
    width: 4px;
    height: 93px;
    background: #bababa;
    margin: 0 auto;
    position: relative;
    top: -5px;
    border-radius: 50px;
  }
  .activetime{

  }
  .timebox:hover{
    background: #f4f4f4;
    border-radius: 10px;
  }
  .activetime>.timeline>.circles{
    background: #fc6b1f;
  }
  .activetime>.timeline>.line{
    background: #fc6b1f;
  }
  .mytimes{
    padding-top: 18px;
    padding-bottom: 70px;
  }
</style>
