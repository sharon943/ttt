<template>
  <div class="productsearch">
    <div class="mydetailtop storehome2top">
      <div style="background: #fff">
        <div class="mycontainer">
          <div class="consultingtop">
            <div class="shoplogo">
              <img :src="require('@/assets/img/logo.png')" alt="">
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
                <img :src="require('@/assets/img/erweima.png')" alt="">
              </div>
              <div>
                <img :src="require('@/assets/img/erweima.png')" alt="">
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
              <span :class="url=='/factoryDirect'?'red':''" @click="toPage('/factoryDirect')">厂家直供</span>
              <span :class="url=='/newStyle'?'red':''" @click="toPage('/newStyle')">今日新款</span>
              <span>库存直播频道</span>
              <span >爆款专区</span>
              <span :class="url=='/videoArea'?'red':''" @click="toPage('/videoArea')">视频专区</span>
              <span :class="url=='/weekhot'?'red':''" @click="toPage('/weekhot')">一周人气</span>
              <span >金牌厂家</span>
              <span >童装服务</span>
            </div>
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
        active:10,
        url:''
      }
    },
    methods: {
        /*
         *@date: 2019-11-20 20:53:32
         *@description: 切换页面
        */
      toPage(name){
        this.url = name;
        this.$router.push(name);
        
      },
      fatherMethod(){
        this.active=1
      }
    },
    mounted() {

    },
    created(){
      var name=this.$route.query.name
      console.log(name)
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '用户中心'
      })
    }
  }
</script>
<style scoped>
  .productsearch {
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

  .zxbox .consultingbox {
    width: 830px;
    min-height: 498px;
    padding: 0;
  }

  .zxbox .ghlistbox {
    width: 100%;
    background: #fff;
    height: auto;
    min-height: 504px;
  }

  .zxbox .ghlistbox > .gh_list_tit {
    line-height: 38px;
    height: 38px;
    border: none;
    padding: 0;
  }

  .zxbox .ghlistbox > .gh_list_tit > div {
    width: 388px;
    padding: 0px 10px;
    border-bottom: 1px solid #eeeeee;
  }

  .fr {
    float: right;
  }

  .m_r5 {
    margin-right: 5px;
  }

  .m_t10 {
    margin-top: 10px;
  }

  .f15 {
    font-size: 15px;
  }

  .fwb {
    font-weight: bold;
  }

  .fm1 {
    font-family: Microsoft YaHei;
  }

  .new_box_gh {
    padding: 16px;

  }

  .gh_info_list li {
    line-height: 25px;
    background-position: -6px -44px;
    padding-left: 18px;
    overflow: hidden;
    height: 25px;
    /* background-image: url('./../assets/img/pageBg.png'); */
    background-repeat: no-repeat;
  }

  .fr {
    float: right;
  }

  .zxbox .gh_info_list li a {
    width: 600px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    font-weight: bold;
  }

  .gh_info_list li a:hover {
    color: #fd6619;
    text-decoration: underline;
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

  .selecttb {
    display: flex;
    margin-bottom: 18px;
  }

  .selecttb > span {
    display: block;
    color: #666;
    font-weight: bold;
    margin-right: 24px;
  }

  .selecttb > .active {
    color: #F43E31;
  }

  .productserchbox {
    background: #fff;
    padding: 20px 0;
    border-left: 1px solid #efefef;
    display: flex;
    margin-bottom: 30px;

  }

  .productserchbox > .items {
    width: 240px;
    border-left: 0;
    padding: 9px;
    text-align: center;
  }

  .productserchbox > .items > div {
    margin-bottom: 7px;
  }

  .productserchbox > .items > div:last-child {
    margin-bottom: 0;
  }

  .productserchbox > .items > div > img {
    display: block;
    height: 175px;
    width: 100%;
  }

  .productsearchtab {
    height: 34px;
    background: #f6f5f5;
    display: flex;
    align-items: center;
    width: 980px;
  }

  .productsearchtab > div {
    padding: 0 14px;
  }

  .productsearchtab > div:nth-child(1) {
    border-left: 0 !important;
  }

  .productsearchtab > .active {
    background: #fff;
    border-right: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }

  .productsearchtab .store2price {
    width: 118px;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  .pricebox {
    height: 152px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
  }

  .pricebox > div {
    height: 100%;
  }

  .pricebox > .item {
    padding: 45px 40px;
    display: flex;
    align-items: center;
    padding-right: 0;
    border-right: 1px solid #efefef;
    width: 288px;
  }

  .pricebox > .item > div:nth-child(1) {
    font-size: 64px;
  }

  .pricebox > .item > div:nth-child(2) {
    width: 126px;
    text-align: center;
    color: #000;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .pricebox > .item > div:nth-child(2) > div:nth-child(2) {

  }

  .pricebox > .item > div:nth-child(2) > div:nth-child(2) > span:last-child {
    font-size: 20px;
  }

  .pricebox > .zhsafe {
    padding: 20px 24px;
  }

  .pricebox > .zhsafe > div {
    display: flex;
  }

  .pricebox > .zhsafe > div:nth-child(1) {
    margin-bottom: 30px;
  }

  .pricebox > .zhsafe > div:nth-child(2) {
    margin-bottom: 25px;
  }

  .pricebox > .zhsafe > div:nth-child(2) > .jindu {
    width: 214px;
    height: 15px;
    border-radius: 50px;
    margin: 0 10px;
  }

  .pricebox > .zhsafe > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
  }

  .homebox {
    display: flex;
  }

  .manages {
    border-right: 1px solid #efefef;
    width: 215px;
    text-align: center;
  }

  .manages > .items {
    border-bottom: 1px solid #efefef;
    padding-top: 18px;
    padding-bottom: 8px;
  }

  .manages > .items > .tittle {
    margin-bottom: 16px;
  }

  .manages > .items > .lists > div {
    margin-bottom: 20px;cursor: pointer;
  }

  .productpages {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 45px;
  }

  .productpages > .items {
    width: 179px;
    margin-right: 10px;
  }

  .productpages > .items:nth-child(4n) {
    margin-right: 0;
  }

  .productpages > .items > div:nth-child(1) {
    display: block;
    width: 100%;
    height: 220px;
  }

  .productpages > .items > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .scproductprice {
    padding: 13px;
  }

  .scproductprice > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  }

  .scproductprice > div:last-child > div > span {
    display: inline-block;
    padding: 2px 3px;
  }

  .dealbox{
    display: flex;
    justify-content: space-between;
  }
  .dealbox > div:nth-child(1) {
    width: 654px;
    border-right: 1px solid #efefef;
  }
  .dealbox > div:nth-child(2){
    width: 330px;

  }
  .dealbox > div:nth-child(2)>div{
    padding: 20px 15px;
    padding-bottom: 0;
  }

  .dealtips {
    padding: 19px 10px;
    min-height: 324px;
  }

  .protittles {
    display: flex;
    height: 16px;
    align-items: center;
  }

  .protittles > span:nth-child(1) {
    height: 14px;
    width: 2px;
    margin-right: 5px;
  }

  .dealtips > div:nth-child(2) {
    line-height: 23px;
    margin-bottom: 13px;
    display: flex;
    justify-content: space-around;
  }

  .dealtips > div:nth-child(2) > div {
    display: inline-flex;
    justify-content: space-around;
  }

  .dealtips > div:nth-child(2) > div > div {
    margin: 0 32px;
  }

  .productlist > .items {
    height: 80px;
    padding: 9px 21px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
    background: #ece2e1;
  }

  .productlist > .items > div {
    display: flex;
    align-items: center;
  }

  .productlist > .items > div:nth-child(1) {
    width: 354px;
  }

  .productlist > .items > div:nth-child(1) > div:nth-child(1) {
    width: 60px;
    height: 60px;
  }

  .productlist > .items > div:nth-child(1) > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .prodesc {
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .productlist > .items > div:nth-child(2) {
    width: 233px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .productlist > .items > div:nth-child(2) > div:nth-child(2) {
    padding: 7px 22px;
    border-radius: 3px;
  }
  .enshrine{
    padding: 17px 20px;
  }
  .enshrinelist{
    margin-top: 14px;
    display: flex;
    margin-bottom: 7px;
  }
  .enshrinelist>.item{
    width: 132px;
    text-align: center;
    margin-right: 12px;
  }
  .enshrinelist>.item>div:nth-child(1){
    width: 100%;

  }
  .enshrinelist>.item>div:nth-child(1)>div{
    width: 120px;
    height: 120px;
    margin: 0 auto;
    position: relative;
  }
  .enshrinelist>.item>div:nth-child(1)>div>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .enshrinelist>.item>div:nth-child(1)>div>span{
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 6px 10px;
    text-align: center;
    display: block;
  }
  .enshrinelist>.item>div:nth-child(2){
    margin: 10px auto;
  }
  .scbtn{
    text-align: center;
    margin: 0 auto;
    display: block;
    width: 109px;
    height: 23px;
    margin-bottom: 53px;
    line-height: 22px;
  }
  .carlist{
    padding: 15px 18px;
  }
  .carlist>.item{
    display: flex;
    height: 71px;
    padding-bottom: 10px;
  }
  .carlist>.item>div:nth-child(1){
    width: 60px;
    height: 60px;
    margin-right: 14px;
  }
  .carlist>.item>div:nth-child(1)>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .carlist>.item>div:nth-child(2){
    padding-top: 5px;
  }
  .carlist>.item>div:nth-child(2)>div:nth-child(1){
    margin-bottom: 8px;
  }
  .carlist>.item>div:nth-child(2)>div:nth-child(1){
    display: flex;
  }
  .shoppingcart{
    border-bottom: 1px solid #efefef;
  }
  .shopcollect>div:nth-child(2){
    padding: 20px 5px;
  }
  .shopscs{
    display: flex;
    width: 176px;
    margin: 0 auto;
    position: relative;
    height: 92px;
    margin-bottom: 20px;
  }
  .shopscs>.lines{
    position: absolute;
    top: 22px;
    left: 50%;
    height: 60px;
    width: 1px;
    background: #efefef;
  }
  .shopscs>div{
    width: 50%;
    text-align: center;
  }
  .shopscs>div>div:nth-child(1){
    margin-bottom: 20px;
    height: 40px;
  }
  .shopscs>div>div:nth-child(1)>img{
    display: block;
    height: 40px;
    width: auto;
    margin: 0 auto;
  }

</style>
