<template>
  <div class="storehome2">
    <div class="mydetailtop storehome2top">
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
      <div class="tablist">
        <div class="mycontainer">
          <div class="tabs">
            <div class="mytab firstfont">
              <span class="active">资讯栏目</span>
              <span>所有产品</span>
              <span>已下架产品</span>
            </div>
            <div>
              厂家动态
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mycontainer" style="background: none">
      <div class="storehome2gg">
        <div class="sl-ad">
          <div class="ad_top1">
            <div class="ad_top1_content">
              <ul id="fullScreenSlides" class="full-screen-slides"  v-for="(val,index) in order" :key="index">
                <li class="sli-item" style="z-index: 800; display: list-item;"  v-if="val.isshow">
                  <p class="c9 fz16 sl-adtitle">狠狠爱</p>
                  <p class="c3 m0 fz12 sl-addesc">2019新款提花宝宝绒四件套</p>
                  <div>
                    <img src="https://www.zhaojiafang.com/data/upload/shop/rec_position/b83d542eb7cdb5b14195.png"></div></li>
                <li class="sli-item" style="z-index: 800; display: list-item;" v-if="!val.isshow">
                  <p class="c9 fz16 sl-adtitle">宜代光年</p>
                  <p class="c3 m0 fz12 sl-addesc">2019新款纯色牛奶绒 系列四件套</p>
                  <div>
                    <img src="https://www.zhaojiafang.com/data/upload/shop/rec_position/4e44565c13d4981b9041.jpg"></div></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="store2tj">
          <div>
            <div class="secondfont store2tittle">橱窗推荐</div>
            <div class="stroe2cctj">
              <div class="lightgreybor stroe2tjbox">
                <a href="" target="_blank">
                  <div>
                    <img src="../assets/img/11.png" alt="" class="storepic">
                  </div>
                  <div class="blods">
                    <div><span>￥</span><span class="orange secondfont productprice2">80</span></div>
                    <div><span>分销数</span><span class="orange">2344</span></div>
                  </div>
                  <div class="blods">
                    穿个大熊熊的外套
                  </div>
                </a>

              </div>
              <div class="lightgreybor stroe2tjbox">
                <a >
                  <div>
                    <img src="../assets/img/11.png" alt="" class="storepic">
                  </div>
                  <div class="blods">
                    <div><span>￥</span><span class="orange secondfont productprice2">80</span></div>
                    <div><span>分销数</span><span class="orange">2344</span></div>
                  </div>
                  <div class="blods">
                    穿个大熊熊的外套
                  </div>
                </a>
              </div>
              <div class="lightgreybor stroe2tjbox">
                <a >
                  <div>
                    <img src="../assets/img/11.png" alt="" class="storepic">
                  </div>
                  <div class="blods">
                    <div><span>￥</span><span class="orange secondfont productprice2">80</span></div>
                    <div><span>分销数</span><span class="orange">2344</span></div>
                  </div>
                  <div class="blods">
                    穿个大熊熊的外套
                  </div>
                </a>
              </div>
              <div class="lightgreybor stroe2tjbox">
                <a >
                  <div>
                    <img src="../assets/img/11.png" alt="" class="storepic">
                  </div>
                  <div class="blods">
                    <div><span>￥</span><span class="orange secondfont productprice2">80</span></div>
                    <div><span>分销数</span><span class="orange">2344</span></div>
                  </div>
                  <div class="blods">
                    穿个大熊熊的外套
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="secondfont store2tittle">走货</div>
            <div class="lightgreybor store2zh">
              <a class="cursor" v-for="(val,index) in 3" :key="index">
                <div>
                  <img src="../assets/img/18.png" alt="">
                </div>
                <div>
                  <span>sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span><span>还有300人也收藏了</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="store2list">
        <div class="blods secondfont store2tablist">
          <span :class="{active:category=='所有'}" @click="changecategory('所有')">所有</span>
          <span :class="{active:category=='裤子'}" @click="changecategory('裤子')">裤子</span>
          <span :class="{active:category=='T恤'}" @click="changecategory('T恤')">T恤</span>
          <span :class="{active:category=='衬衫'}" @click="changecategory('衬衫')">衬衫</span>
        </div>
        <div class="store2selecs blods">
          <div class="items">
            <span :class="{active:state=='综合'}" @click="changestate('综合')">综合</span>
            <span :class="{active:state=='销量'}" @click="changestate('销量')">销量</span>
            <span :class="{active:state=='人气'}" @click="changestate('人气')">人气</span>
            <span :class="{active:state=='竞争力'}" @click="changestate('竞争力')">竞争力</span>
            <span :class="{active:state=='性价比'}" @click="changestate('性价比')">性价比</span>
            <span :class="{active:state=='最新'}" @click="changestate('最新')">最新</span>
            <div class="changeprice" @click="changestate('价格升序')">
              <div :class="{active:state=='价格升序'||state=='价格降序'}">价格</div>
              <div>
                <span :class="{active:state=='价格升序'}" class="icon-jiantouarrow492 icons"
                      @click.stop="changestate('价格升序')"></span>
                <span :class="{active:state=='价格降序'}" class="icon-jiantousanjiaoxia icons"
                      @click.stop="changestate('价格降序')"></span>
              </div>
            </div>
          </div>
          <div class="store2price">
            <span class="lightgreybor"><el-input v-model="sprice" placeholder=""></el-input></span>
            <span>至</span>
            <span class="lightgreybor"><el-input v-model="bprice" placeholder=""></el-input></span>
          </div>
          <div>
            <span class="lightgreybor pricebtn">确定</span>

          </div>
        </div>
        <div class="store2zhbox">
          <div class="lightgreybor stroe2tjbox stroe2zhitem" v-for="(val,index) in 10" :key="index">
            <a class="cursor">
              <div>
                <img src="../assets/img/11.png" alt="" class="storepic">
              </div>
              <div class="blods">
                <div><span>￥</span><span class="orange secondfont productprice2">80</span></div>
                <div><span>分销数</span><span class="orange">2344</span></div>
              </div>
              <div class="blods">
                穿个大熊熊的外套
              </div>
              <div class="stroe2sc">
                <span class="lightgreybor orange">收藏80</span>
              </div>
            </a>
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
        timer:null,
        category: '所有',
        state: '综合',
        sprice: '',
        bprice: '',
        isshow:true,
        order:[1,2,3,4,5]
      }
    },
    methods: {
      changecategory(i) {
        this.category = i
      },

      changestate(i) {
        this.state = i
      },
      get(i) {
        this.order[i]["isshow"]=!this.order[i]["isshow"];
      }

    },
    mounted() {
      // this.order.map((obj, index) => {
      //   this.$set(obj, "isshow",true)
      // })
      // console.log(this.order)
      // for(var i=0;i<this.order.length;i++){
      //   setInterval(this.get(i), 3000)
      // }

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '店铺首页'
      })
    },
    beforeDestroy() {
      // clearInterval(this.timer);
    }
  }
</script>
<style scoped>
  .storehome2 {
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

  .storehome2gg {
    background: #fff;
  }

  .storehome2gg > div:nth-child(1) {
    border-bottom: 1px solid #efefef;
    text-align: center;
    padding-top: 30px;
  }

  .storehome2gg > div:nth-child(1) > div:nth-child(1) {
    display: inline-flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .storehome2gg > div:nth-child(1) > div:nth-child(1) > span {
    margin-right: 10px;
  }

  .storehome2gg > div:nth-child(1) > div:nth-child(1) > span:last-child {
    margin-right: 0;
  }

  .store2tj {
    display: flex;
    padding: 18px 10px;
    justify-content: space-between;
    height: 402px;
    border-bottom: 1px solid #efefef;
  }

  .store2tittle {
    display: inline-block;
    padding: 0 7px;
    line-height: 32px;
    border-bottom: 2px solid #f43e31;
    margin-left: 20px;
    margin-bottom: 20px;
    color: #000;
    font-weight: bold;
  }

  .store2tj > div:nth-child(1) {
    width: 906px;

  }

  .store2tj > div:nth-child(2) {
    width: 245px;
  }

  .stroe2cctj {
    display: flex;
    flex-wrap: wrap;
    color: #000;
  }

  .stroe2cctj > div {
    width: 220px;
    height: 292px;
    margin-right: 8px;
  }

  .stroe2cctj > div:nth-child(4n) {
    margin-right: 0;
  }

  .stroe2tjbox > a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .stroe2tjbox > a > div:nth-child(1) {
    width: 100%;
    height: 220px;
  }

  .stroe2tjbox > a > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .stroe2tjbox > a > div:nth-child(2) {
    height: 38px;
    padding: 0 13px;
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .stroe2tjbox > a > div:nth-child(2) > div {
    display: inline-block;
  }

  .stroe2tjbox > a > div:nth-child(3) {
    color: #279ae9;
    padding: 0 13px;
  }

  .store2zh {
    height: 292px;
    padding: 10px;

    overflow: hidden;
    /*overflow: auto;*/
  }

  .store2zh > a {
    height: 68px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: #666;
  }

  .store2zh > a > div:nth-child(1) {
    width: 68px;
    height: 68px;
  }

  .store2zh > a > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .store2zh > a > div:nth-child(2) {
    width: 147px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .store2zh > a > div:nth-child(2) > span {
    display: block;
    line-height: 18px;
    word-break: break-all;
  }

  .store2tablist {
    display: flex;
    border-bottom: 1px solid #f43e31;
    background: #fff;
    color: #000;
  }

  .store2tablist > span {
    display: block;
    padding: 0 20px;
    line-height: 37px;
    cursor: pointer;
  }

  .store2tablist > .active {
    background: #f43e31; /* 红色背景 */
    color: #fff;
  }

  .store2selecs {
    display: flex;
    height: 36px;
    align-items: center;
    background: #eeeeee;
  }

  .store2selecs > div {
    display: flex;
    align-items: center;
    margin-right: 4px;
  }

  .store2selecs > div > span {
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
  }

  .store2selecs > .items > span {
    color: #000;
    cursor: pointer;
  }

  .store2selecs > .items > .active {
    color: #f43e31;
  }

  .store2selecs > .items > span {
    border-right: 1px solid #d9d9d9;
  }

  .store2selecs > .items > span:last-child {
    border-right: none;
  }

  .store2price {
    width: 118px;
    display: flex;
    justify-content: space-between;
  }

  .store2price > span {
    line-height: 21px;
    height: 21px;
    display: block;
  }

  .store2price > .lightgreybor {
    width: 46px;
    background: #fff;
    text-align: center;
    padding: 0;
  }

  .store2price > .lightgreybor > input {
    display: block;
    outline: none;
    border: 0;
    width: 100%;
    height: 100%;
  }

  .store2zhbox {
    padding: 24px 18px;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding-bottom: 40px;
  }

  .stroe2zhitem {
    height: 308px;
    width: 220px;
  }

  .store2zhbox > .stroe2zhitem {
    margin-right: 16px;
    margin-bottom: 14px;
  }

  .store2zhbox > .stroe2zhitem:nth-child(5n) {
    margin-right: 0;
  }

  .stroe2zhitem > a > .stroe2sc {
    padding: 0 10px;
    display: flex;
    justify-content: flex-end;
    margin-top: 3px;
  }

  .stroe2zhitem > a > .stroe2sc > span {
    width: 50px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    display: inline-block;
  }

  .pricebtn {
    width: 58px;
    text-align: center;
    font-size: 12px;
    background: #666666;
    color: #fff;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }

  .changeprice {
    padding: 0 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

  }

  .changeprice > div:nth-child(2) {
    margin-left: 4px;
  }

  .changeprice > div:nth-child(2) > span {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .changeprice .active {
    color: #f43e31;
  }

  .sl-ad {
    width: 100%;
    display: inline-block;
  }

  .ad_top1 {
    box-shadow: 0px 0 2px 0 rgba(0, 0, 0, 0.21);
    height: 238px;
    overflow: hidden;
  }

  .ad_top1_content {

  }

  #fullScreenSlides {
    display: inline-block;
    width: 240px;
    height: 230px;
    margin-top: 3px;

  }

  .full-screen-slides {
    position: relative;
    z-index: 1;
  }

  .full-screen-slides li {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .sli-item {
    text-align: center;
    background-color: white;
    border-right: 1px solid #ececec;
  }

  .sl-adtitle {
    width: 180px;
    height: 27px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 auto;
    word-break: break-all;
    line-height: 27px;
  }

  .fz16 {
    font-size: 16px;
  }

  .c9 {
    color: #F60;
  }

  .sl-addesc {
    line-height: 14px;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 16px;
    display: block;
  }

  .sl-addesc {
    width: 90%;
    margin: 0 auto;
    min-height: 20px;
  }

  .m0 {
    margin: 0;
  }

  .c3 {
    color: #999;
  }
  .full-screen-slides:last-child li{
    border-right: none;
  }
</style>
