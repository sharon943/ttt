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
                <el-input v-model="proname" placeholder="根据产品标题、厂家名称进行搜索"></el-input>
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
      <div class="allproductdesc">
        <div>
          <div>童淘淘欢迎你！</div>
          <div class="lightgreybor allproductsearch">
            <span class="iconfont icon-sousuo"></span>
            <span >
               <el-input v-model="ordernumber" placeholder="搜索标题、货号"></el-input>
             </span>
          </div>
        </div>
        <div></div>
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
            <span class="lightgreybor pricebtn" @click="submits">确定</span>

          </div>
        </div>
        <div class="allproductbox">
          <div class="allproductrz">
            <div class="lightgreybor left">
              <div class="Sorrels threefont companyname">
                童淘淘认证商家
              </div>
              <div class="rzmess firstfont companymess">
                <div class="red blods secondfont myshopname">店名</div>
                <div class="companyrz">
                  <div>
                    <div class="lightgrey">经营模式：</div>
                    <div>经销代理</div>
                  </div>
                  <div>
                    <div class="lightgrey">供应等级：</div>
                    <div>Lv12</div>
                  </div>
                  <div>
                    <div class="lightgrey">实名认证：</div>
                    <div>
                      <span>罗*英</span>
                      <span><img src="../assets/img/main/product/id_card.png" alt=""></span>
                    </div>
                  </div>
                  <div>
                    <div class="lightgrey">营业执照认证：</div>
                    <div>
                      <span><img src="../assets/img/shopdetail/license.jpg" alt=""></span>
                    </div>
                  </div>
                </div>
                <div class="lightgreybor focuson">关注商家</div>
              </div>

              <div class="rzmess">
                <div class="blods secondfont">联系方式</div>
                <div class="companyrz">
                  <div>
                    <div class="lightgrey">电话：</div>
                    <div></div>
                  </div>
                  <div>
                    <div class="lightgrey">货址：</div>
                    <div></div>
                  </div>
                  <div>
                    <div class="lightgrey">厂址：</div>
                    <div></div>
                  </div>
                  <div>
                    <div class="lightgrey">QQ：</div>
                    <div></div>
                  </div>
                  <div>
                    <div class="lightgrey">微信：</div>
                    <div></div>
                  </div>
                </div>
                <div class="scan">
                  <div>
                    <img src="../assets/img/shopdetail/code.jpg" alt="">
                  </div>
                  <div class="lightgrey">扫码进入童淘淘店铺</div>
                </div>
              </div>
              <div class="pdleft darkgrey">
                <div class="lightgrey rzduibox">
                  <div class="blods firstfont ">
                    已通过的认证
                  </div>
                  <div>
                    <div>
                      <span class="duigou orange"></span>金牌商家<span></span>
                    </div>
                    <div>
                      <span class="duigou orange"></span>金牌商家<span></span>
                    </div>
                  </div>
                </div>

                <div class="lightgrey rzduibox">
                  <div class="blods firstfont ">
                    发货及物流
                  </div>
                  <div>
                    <div>
                      <span class="duigou orange"></span><span>金牌商家</span>
                    </div>
                    <div>
                      <span class="duigou orange"></span><span>金牌商家</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div class="lightgreybor lightgrey storegonggao">
              <div class="threefont blods tittle">商家动态公告</div>
              <div class="firstfont mess">公告信息公告信息公告信息公告信息公告信息公告信息公告信息</div>
              <div>2019-11-03 11:06:20</div>
            </div>
          </div>
          <div class="store2zhbox">

            <div class="lightgreybor stroe2tjbox stroe2zhitem cursor" v-for="(val,index) in 12" :key="index">
              <a >
                <div @mouseenter="showshadow(index)" @mouseleave.stop="hideshadow">
                  <img src="../assets/img/11.png" alt="" class="storepic" @mouseenter="showvisible=true">
                  <div class="shadows orangrebor" v-if="showhide&&(index==activeindex)">
                    <div class="oranges" v-show="showvisible">
                      <span>传淘宝</span>
                      <span>加购物车</span>
                      <span>一件代发</span>
                    </div>
                    <div class="shadowbox" @mouseenter="showvisible=false">
                      <div>
                        <div>
                          <span class="secondfont">￥</span><span class="secondfont red blods">120</span>
                        </div>
                        <div class="orangrebor orange">一件起批</div>
                      </div>
                      <div style="padding-bottom: 30px;border-bottom: 1px solid #dfdfdf">
                        <div>
                          <div>商家名称：</div>
                          <div></div>
                        </div>
                        <div>
                          <div>商家验证：</div>
                          <div></div>
                        </div>
                        <div>
                          <div>供应等级：</div>
                          <div></div>
                        </div>
                        <div>
                          <div>主要属性：</div>
                          <div>
                            <span class="orange">2</span>色
                            <span class="orange">6</span>码
                          </div>
                        </div>
                      </div>
                      <div class="zixunbox">
                        <div>
                          <div><span><img src="../assets/img/main/product/id_card.png" alt=""></span><span>姓名</span></div>
                          <div><span class="icons icon-tel"></span><span>电话</span></div>

                        </div>
                        <div>
                          联系地址
                        </div>
                        <div>
                          <div><img src="../assets/img/main/qq_talk.png" alt="" style="width: 77px;height: 22px"></div>
                          <div class="two-code-ico">
                            <img src="../assets/img/main/product/phone_ico.png" alt="">
                            <div class="two-code-img">
                              <img src="../assets/img/code.jpg" alt="" width="126" height="126">
                              <span>手机详情请扫描二维码找厂商洽谈货源更方便</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="blods">
                  <div><span>￥</span><span class="orange secondfont productprice2">80</span></div>
                  <div><span>分销数</span><span class="orange">2344</span></div>
                </div>
                <div class="blods">
                  穿个大熊熊的外套
                </div>
                <div class="stroe2sc">
                  <span class="lightgreybor orange enshrine" @click.stop="focus(index)">收藏80</span>
                </div>
              </a>
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
        proname:'',
        ordernumber:'',
        category: '所有',
        activeindex: -1,
        state: '综合',
        sprice: '',
        bprice: '',
        isshow: true,
        order: [1, 2, 3, 4, 5],
        showvisible: true,
        showhide: true,
        pages: '',
        pageindex: 1,
        total: 120,
        pageSizes: [10],
      }
    },
    methods: {
      changecategory(i) {
        this.category = i
      },

      changestate(i) {
        this.state = i
      },
      focus(index){

      },
      prev() {
        if (this.pageindex == 1) {
          return
        } else {
          this.pageindex = this.pageindex - 1
        }
      },
      next() {
        if (this.pageindex == this.total / this.pageSizes) {
          return
        } else {
          this.pageindex = this.pageindex + 1
        }
        console.log(this.pageindex)
      },
      gotos() {
        if (this.pages == '') {
          return
        } else if (this.pages <= 0) {
          this.pageindex = 1
        } else if (this.pages >= (this.total / this.pageSizes)) {
          this.pageindex = this.total / this.pageSizes
        } else {
          this.pageindex = this.pages
        }
      },
      currentchanges(e) {
        this.pageindex = e
      },
      sizechanges(e) {

      },

      submits() {
        if (this.sprice != '' && this.bprice != '') {

        } else {
          return
        }
      },
      showshadow(index) {
        this.activeindex = index
        this.showhide = true

      },
      hideshadow() {
        this.activeindex = -1
        this.showhide = false
        this.showvisible = true
      }
    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '全部产品'
      })
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

  .allproductdesc {
    height: 53px;
    border-bottom: 1px solid #e8e8e8;
  }

  .allproductdesc > div:nth-child(1) {
    height: 36px;
    background: #ececec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }

  .allproductsearch {
    width: 125px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding-left: 10px;
  }

  .allproductsearch > .icon-sousuo {
    font-size: 16px;
  }

  .allproductsearch > span > input {
    display: block;
    border: 0;
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
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
    padding: 0 3px;

  }

  .storehome2gg > div:nth-child(1) {
    height: 108px;
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
    position: relative;
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

  .allproductbox {
    display: flex;
    justify-content: space-between;
    padding: 20px 16px;
    background: #fff;
    padding-bottom: 60px;

  }

  .allproductbox > .allproductrz {

  }

  .allproductbox > .store2zhbox {
    width: 910px;
    padding: 0;
    /*height: 600px;*/
  }

  .allproductbox .store2zhbox > .stroe2zhitem {
    margin-right: 10px;
  }

  .allproductbox .store2zhbox > .stroe2zhitem:nth-child(5n) {
    margin-right: 10px;
  }

  .allproductbox .store2zhbox > .stroe2zhitem:nth-child(4n) {
    margin-right: 0;
  }

  .allproductrz {
    width: 216px;
    margin-right: 3px;
  }

  .rzmess {
    padding: 0 14px;
    padding-top: 16px;
  }

  .companymess {
    height: 246px;
    border-bottom: 1px solid #e8e8e8;
  }

  .companyname {
    height: 55px;
    line-height: 55px;
    text-align: center;
  }

  .myshopname {
    text-align: center;
  }

  .companyrz {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 15px;
  }

  .companyrz > div {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    height: 14px;
  }

  .companyrz > div > div {
    display: flex;
    align-items: center;
  }

  .companyrz > div > div > span {
    margin-right: 4px;
    display: block;
  }

  .companyrz > div > div > span > image {
    display: block;

  }

  .focuson {
    height: 28px;
    line-height: 28px;
    margin: 0 auto;
    text-align: center;
    width: 120px;
    margin-top: 25px;
    cursor: pointer;
  }

  .scan {
    margin-top: 24px;
    text-align: center;
  }

  .scan > div:nth-child(1) {
    width: 85px;
    height: 85px;
    border-radius: 8px;
    overflow: hidden;
    background: #e33a33;
    padding: 6px;
    margin: 0 auto;
  }

  .scan > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .scan > div:nth-child(2) {
    margin-top: 17px;
    margin-bottom: 26px;
  }

  .pdleft {
    padding: 0 4px;
    border-top: 1px solid #e8e8e8;
  }

  .rzduibox {
    width: 100%;
    padding: 14px 2px;
    height: 73px;
    border-bottom: 1px solid #e8e8e8;
  }

  .rzduibox > div {
    display: flex;
  }

  .rzduibox > div:nth-child(2) {
    margin-top: 12px;
  }

  .rzduibox > div:nth-child(2) span {
    display: block;
  }

  .rzduibox .duigou {
    width: 12px;
    height: 12px;
    background-image: url('../assets/img/main/ico_arrow.png');
    margin-right: 4px;
  }

  .rzduibox > div:nth-child(2) > div {
    margin-right: 8px;
    display: flex;
    align-items: center;
    height: 18px;
  }

  .rzduibox:last-child {
    border: none;
  }

  .storegonggao {
    width: 100%;
    min-height: 194px;
    padding: 16px 14px;
    margin-top: 40px;
  }

  .storegonggao > .tittle {
    color: #000;
  }

  .storegonggao > .mess {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .storegonggao > .time {

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
  .shadows {
    position: absolute;
    left: 0;
    bottom: -250px;
    background: #fff;
    padding-bottom: 6px;
    width: 100%;
    z-index: 10;
  }

  .shadows > div:nth-child(1) {
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .shadowbox > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 8px;
    align-items: center;
  }

  .shadows > div:nth-child(1) > span {
    width: 33.333333%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;

  }

  .shadows > div:nth-child(1) > span:hover {
    background: #ff3c3c;
  }

  .shadowbox > div:nth-child(1) > div:nth-child(2) {
    padding: 0 8px;
  }

  .shadowbox > div:nth-child(2) {
    padding: 0 8px;
  }

  .shadowbox > div:nth-child(2) > div {
    display: flex;
    color: #666;
    font-size: 14px;
    line-height: 24px;
    /*justify-content: space-between;*/
  }
  .zixunbox {
    padding: 0 8px;
    padding-top: 10px;
  }

  .zixunbox > div {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .zixunbox > div:nth-child(1) {
    height: 20px;
  }

  .zixunbox > div:nth-child(1) > div {
    margin-right: 8px;
  }

  .zixunbox > div:nth-child(1) > div > span {
    margin-right: 4px;
  }

  .zixunbox > div:nth-child(3) {
    justify-content: space-between;
  }

  .two-code-ico {
    background: url(http://plus.go2.cn/images/main/search/two_code_ico_normal.png) no-repeat;
    width: 16px;
    height: 16px;
    position: relative;
    cursor: pointer;
  }

  .two-code-img {
    position: absolute;
    left: 27px;
    bottom: -13px;
    border: 1px solid #ff6c00;
    padding: 18px 20px 13px 21px;
    text-align: center;
    display: none;
    cursor: default;
    z-index: 2;
    background: #fff;
  }
  .two-code-ico:hover .two-code-img {
    display: block;
  }
  .two-code-img img {
    margin-bottom: 8px;
  }

  .two-code-img span {
    line-height: 17px;
    display: block;
  }
  .enshrine:hover{
    background: #fd6619;
    color: #fff;
  }
  .two-code-img:before {
    content: "";
    background: url('../assets/img/left_arrow.png');
    width: 10px;
    height: 18px;
    position: absolute;
    left: -10px;
    bottom: 9px;
  }
</style>

