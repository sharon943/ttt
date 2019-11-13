<template>
  <div class="productsearch">
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
    <div class="mycontainer" style="background: #fff" v-if="active==1">
      <div class="pricebox">
        <div class="item">
          <div class="icons icon-yuebao orange"></div>
          <div>
            <div class="secondfont">账户余额</div>
            <div>
              <span>￥</span><span class="orange blods">00.00</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="icons icon-9 blue"></div>
          <div>
            <div class="secondfont">优惠券</div>
            <div>
              <span class="blue blods">20张</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="icons icon-jifen red"></div>
          <div>
            <div class="secondfont">我的积分</div>
            <div>
              <span class="red blods">0分</span>
            </div>
          </div>
        </div>
        <div class="zhsafe">
          <div>账户安全</div>
          <div class="blods">
            <span class="orange">低</span>
            <span class="jindu lightgreybor"></span>
            <span class="blue">提升</span>
          </div>
          <div>
            <div>
              <span>手机：</span><span class="orange">已绑定</span>
            </div>
            <div>
              <span>邮箱：</span><span class="lightgrey">未绑定</span>
            </div>
          </div>
        </div>
      </div>
      <div class="homebox">
        <div class="manages">
          <div class="items">
            <div class="tittle secondfont blods">交易管理</div>
            <div class="lists">
              <div @click="active=2">我的购物车</div>
              <div @click="active=3">店铺订单</div>
              <div @click="active=4">代发订单</div>
              <div @click="active=5">售后订单</div>
            </div>
          </div>
          <div class="items">
            <div class="tittle secondfont blods">商品服务</div>
            <div class="lists">
              <div @click="active=6">管联商品</div>
              <div @click="active=7">店铺商品</div>
              <div @click="active=8">下载图片包</div>
              <div @click="active=9">产品收藏</div>
              <div @click="active=10">厂家关注</div>
              <div @click="active=11">浏览足迹</div>
              <div @click="active=12">资源动态</div>
              <div @click="active=13">商品批量操作</div>
            </div>
          </div>
          <div class="items">
            <div class="tittle secondfont blods">账户信息</div>
            <div class="lists">
              <div @click="active=14">账户信息</div>
              <div @click="active=15">账户安全</div>
              <div @click="active=16">账户授权</div>
              <div @click="active=17">账户余额</div>
              <div @click="active=18">优惠券</div>
              <div @click="active=19">我的积分</div>
              <div @click="active=20">信息通知</div>
              <div @click="active=21">推荐赢大奖</div>
              <div @click="active=22">寄件人设置</div>
            </div>
          </div>
        </div>
        <div class="tipboxs">
          <div class="dealbox ">
            <div>
              <div class="dealtips lightpinks">
                <div class="protittles">
                  <span class="oranges"></span>
                  <span class="blods">交易提醒</span>
                </div>
                <div>
                  <div>
                    <div>
                      <span>待付款</span>
                      <span class="orange">（1）</span>
                    </div>
                    <div>
                      <span class="lightgrey">待收获</span>
                      <span class="lightgrey">（0）</span>
                    </div>
                    <div>
                      <span class="lightgrey">售后中</span>
                      <span class="lightgrey">（0）</span>
                    </div>
                  </div>

                </div>
                <div class="productlist">
                  <div class="items">
                    <div>
                      <div>
                        <img src="../assets/img/1.png" alt="">
                      </div>
                      <div class="prodesc">
                        <div class="firstfont">
                          <span class="blods  blods">梦女爱童装（123-55/34）</span>
                          <span class="lightgrey">2个商品</span>
                        </div>
                        <div class="lightgrey">下单时间：2019-10-01 15：45：00</div>
                        <div class="lightgrey">订单状态：待付款</div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>金额</span>
                        <span class="orange">￥68</span>
                      </div>
                      <div class="oranges">订单支付</div>
                    </div>

                  </div>
                  <div class="items">
                    <div>
                      <div>
                        <img src="../assets/img/1.png" alt="">
                      </div>
                      <div class="prodesc">
                        <div class="firstfont">
                          <span class="blods  blods">梦女爱童装（123-55/34）</span>
                          <span class="lightgrey">2个商品</span>
                        </div>
                        <div class="lightgrey">下单时间：2019-10-01 15：45：00</div>
                        <div class="lightgrey">订单状态：待付款</div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>金额</span>
                        <span class="orange">￥68</span>
                      </div>
                      <div class="oranges">订单支付</div>
                    </div>

                  </div>
                </div>

              </div>
              <div class="enshrine">
                <div class="protittles">
                  <span class="oranges"></span>
                  <span class="blods">产品收藏</span>
                </div>
                <div class="enshrinelist">
                  <div class="item">
                    <div>
                      <div>
                        <img src="../assets/img/1.png" alt="">
                        <span class="oranges">￥200</span>
                      </div>
                    </div>
                    <div>
                      2019好看衣服上线
                    </div>
                  </div>
                </div>
                <div class="lightgreybor scbtn">查看全部收藏</div>
              </div>
            </div>
            <div>
              <div  class="shoppingcart">
                <div class="protittles">
                  <span class="oranges"></span>
                  <span class="blods">购物车</span>
                </div>
                <div class="carlist">
                  <div class="item">
                    <div>
                      <img src="../assets/img/1.png" alt="">
                    </div>
                    <div>
                      <div>这是这件物品标题</div>
                      <div><span>商场价：</span><span class="red blods">￥50.00</span></div>
                    </div>
                  </div>
                  <div class="item">
                    <div>
                      <img src="../assets/img/1.png" alt="">
                    </div>
                    <div>
                      <div>这是这件物品标题</div>
                      <div><span>商场价：</span><span class="red blods">￥50.00</span></div>
                    </div>
                  </div>
                  <div class="item">
                    <div>
                      <img src="../assets/img/1.png" alt="">
                    </div>
                    <div>
                      <div>这是这件物品标题</div>
                      <div><span>商场价：</span><span class="red blods">￥50.00</span></div>
                    </div>
                  </div>
                  <div class="item">
                    <div>
                      <img src="../assets/img/1.png" alt="">
                    </div>
                    <div>
                      <div>这是这件物品标题</div>
                      <div><span>商场价：</span><span class="red blods">￥50.00</span></div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="shopcollect">
                <div class="protittles">
                  <span class="oranges"></span>
                  <span class="blods">店铺收藏</span>
                </div>
                <div >
                    <div class="shopscs">
                      <div>
                        <div>
                          <img src="" alt="">
                        </div>
                        <div></div>
                      </div>
                      <div class="lines"></div>
                      <div>
                        <div>
                          <img src="" alt="">
                        </div>
                        <div></div>
                      </div>
                    </div>
                </div>
                <div class="lightgreybor scbtn">
                  查看全部收藏
                </div>
              </div>


            </div>
          </div>
          <div class="productpages">
            <div class="items">
              <div>
                <img src="../assets/img/2.png" alt="">
              </div>
              <div class="scproductprice">
                <div>
                  <div><span>￥</span><span class="blods red secondfont">150</span></div>
                  <div class="lightgrey"><span>分销数</span><span class="orange">20</span></div>
                </div>
                <div>小仙女店家#5432</div>
                <div class="lightgrey">2019新款儿童羽绒外套</div>
                <div>
                  <div>
                    <span class="orangrebor orange">新</span>
                    <span class="orangrebor orange">货</span>

                  </div>
                  <div>
                    <span class="orangrebor orange">收藏20</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div>
                <img src="../assets/img/2.png" alt="">
              </div>
              <div class="scproductprice">
                <div>
                  <div><span>￥</span><span class="blods red secondfont">150</span></div>
                  <div class="lightgrey"><span>分销数</span><span class="orange">20</span></div>
                </div>
                <div>小仙女店家#5432</div>
                <div class="lightgrey">2019新款儿童羽绒外套</div>
                <div>
                  <div>
                    <span class="orangrebor orange">新</span>
                    <span class="orangrebor orange">货</span>

                  </div>
                  <div>
                    <span class="orangrebor orange">收藏20</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div>
                <img src="../assets/img/2.png" alt="">
              </div>
              <div class="scproductprice">
                <div>
                  <div><span>￥</span><span class="blods red secondfont">150</span></div>
                  <div class="lightgrey"><span>分销数</span><span class="orange">20</span></div>
                </div>
                <div>小仙女店家#5432</div>
                <div class="lightgrey">2019新款儿童羽绒外套</div>
                <div>
                  <div>
                    <span class="orangrebor orange">新</span>
                    <span class="orangrebor orange">货</span>

                  </div>
                  <div>
                    <span class="orangrebor orange">收藏20</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div>
                <img src="../assets/img/2.png" alt="">
              </div>
              <div class="scproductprice">
                <div>
                  <div><span>￥</span><span class="blods red secondfont">150</span></div>
                  <div class="lightgrey"><span>分销数</span><span class="orange">20</span></div>
                </div>
                <div>小仙女店家#5432</div>
                <div class="lightgrey">2019新款儿童羽绒外套</div>
                <div>
                  <div>
                    <span class="orangrebor orange">新</span>
                    <span class="orangrebor orange">货</span>
                  </div>
                  <div>
                    <span class="orangrebor orange">收藏20</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div>
                <img src="../assets/img/2.png" alt="">
              </div>
              <div class="scproductprice">
                <div>
                  <div><span>￥</span><span class="blods red secondfont">150</span></div>
                  <div class="lightgrey"><span>分销数</span><span class="orange">20</span></div>
                </div>
                <div>小仙女店家#5432</div>
                <div class="lightgrey">2019新款儿童羽绒外套</div>
                <div>
                  <div>
                    <span class="orangrebor orange">新</span>
                    <span class="orangrebor orange">货</span>
                  </div>
                  <div>
                    <span class="orangrebor orange">收藏20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Mycar v-else-if="active==2"></Mycar>
    <shoporders v-else-if="active==3"></shoporders>
  </div>

</template>
<script>
  import Mycar from './userCenter/mycar'                //购物车
  import Shoporders from './userCenter/shoporders'     //店铺订单
  import Browsefootprint from './userCenter/Browsefootprint'     //浏览足迹
  import GrandPrize from './userCenter/GrandPrize'     //推广赢大奖
  import Message from './userCenter/Message'           //消息通知
  import MyPoints from './userCenter/MyPoints'           //消息通知
  import Productcollection from './userCenter/productcollection'           //产品收藏
  import Relatedproducts from './userCenter/relatedproducts'           //关联产品
  import SafeAuthorization from './userCenter/SafeAuthorization'           //账户安全和授权
  import Saleorder from './userCenter/saleorder'           //售后订单
  import Storeproducts from './userCenter/storeproducts'           //店铺商品
  import Undertakesorder from './userCenter/Undertakesorder'           //代发订单
  import uploadpicpackage from './userCenter/uploadpicpackage'           //下载图片包
  import Supplydynamic from './userCenter/Supplydynamic'           //货源动态
  import Manufacturersfocus from './userCenter/Manufacturersfocus'           //厂家关注
  import AccountInfo from './userCenter/AccountInfo'           //账户信息
  export default {
    data() {
      return {
        active:1,

      }
    },
    components:{
      Mycar,Shoporders,Browsefootprint,GrandPrize,Message,MyPoints,Productcollection,Relatedproducts,SafeAuthorization,Saleorder,
      Storeproducts,Undertakesorder,uploadpicpackage,Manufacturersfocus,Supplydynamic,AccountInfo
    },
    methods: {},
    mounted() {

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
    background-image: url('../assets/img/pageBg.png');
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
