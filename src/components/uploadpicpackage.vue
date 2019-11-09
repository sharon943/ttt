<template>
  <div class="mycar">
    <div class="mydetailtop storehome2top">
      <div style="background: #fff">
        <div class="mycontainer">
          <div class="consultingtop">
            <div class="shoplogo">
              <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="serachs">
              <div class="selecttype">
                <span class="active">商品</span>
                <span>厂家</span>
              </div>
              <div class="Consultingsearchbox">
                <div>
                  <input type="text" placeholder="根据产品标题、厂家名称进行搜索">
                </div>
                <div>
                  <span class="iconfont icon-sousuo"></span>
                  <span class="iconfont icon-paizhao"></span>
                </div>
              </div>
              <div class="tjlist">
                <span>童裙</span>
                <span>秋冬童裙</span>
                <span>哈伦裤</span>
                <span>童T恤</span>
                <span>羽绒裤</span>
                <span>棉服</span>
                <span>中长款</span>
              </div>
            </div>
            <div class="sdcode">
              <div>
                <img src="../assets/img/erweima.png" alt="">
              </div>
              <div>
                <img src="../assets/img/erweima.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tablist">
        <div class="mycontainer">
          <div class="tabs">
            <div class="mytab blods firstfont">
              <span class="active"><i class="iconfont icon-liebiao1"></i>童装批发采购平台</span>
              <span>首页</span>
              <span>厂家直供</span>
              <span>今日新款</span>
              <span>库存直播频道</span>
              <span class="red">爆款专区</span>
              <span>视频专区</span>
              <span>一周人气</span>
              <span>金牌厂家</span>
              <span>童装服务</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey">用户中心 &gt;</span>
          <span>店铺订单</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">店铺订单</div>
      </div>
    </div>
    <div class="mycontainer">

    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '下载图片包'
      })
    }
  }
</script>
<style scoped>
  .mycar {
    font-size: 12px;
    background: #f6f5f5;
  }

  .mydetailtop {
    background: #fff;
    border-bottom: 1px solid #f43e31;

  }

  .storehome2top {
    background: #f6f5f5;
  }

  .tablist {
    background: #f6f5f5;
  }

  .consultingtop {
    width: 100%;
    height: 122px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .consultingtop > div:nth-child(1) {
    display: inline-block;
    height: auto;
  }

  .cursor {
    cursor: pointer;
  }

  .tabs {
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #f6f5f5;

  }

  .tabs > div:nth-child(1) {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .tabs > div > span {
    display: flex;
    height: 100%;
    padding: 0 22px;
    align-items: center;
  }

  .mytab > .active {
    background: #f43e31; /* 红色背景 */
    color: #fff;
  }

  .consultingtop .serachs {
    width: 562px;

  }

  .Consultingsearchbox {
    position: relative;
    height: 40px;
    display: flex;
    border: 2px solid #f24e48;
    border-radius: 50px;
    overflow: hidden;
    margin-bottom: 7px;
  }

  .Consultingsearchbox > div:nth-child(1) {
    width: 454px;
  }

  .Consultingsearchbox > div:nth-child(1) > input {
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 16px;
    border: none;
  }

  .Consultingsearchbox > div:nth-child(2) {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    width: 120px;
    align-items: center;
    border-radius: 50px;
    background-image: linear-gradient(90deg, #f24e48 0%, #ff6349 100%);
  }

  .Consultingsearchbox > div:nth-child(2) > span {
    display: inline-block;
    height: 20px;
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
  }

  .Consultingsearchbox > div:nth-child(2) > span:nth-child(1) {
    border-right: 1px solid #fff;
  }

  .selecttype {
    padding: 0 18px;
    display: flex;

  }

  .selecttype > span {
    width: 50px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #666;
    border-radius: 50px;
    margin-bottom: 2px;
  }

  .selecttype > .active {
    background-image: linear-gradient(90deg, #f24e48 0%, #ff6349 100%);
    color: #fff;
  }

  .tjlist {
    display: flex;
    padding: 0 18px;
    color: #666;
  }

  .tjlist > span {
    margin-right: 25px;
  }

  .sdcode {
    width: 170px;
    display: flex;
    justify-content: space-between;
  }

  .sdcode > div {
    height: 80px;
    width: 80px;
    box-shadow: 2px 4px 10px #fdd9d8;
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



</style>
