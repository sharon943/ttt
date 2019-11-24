<template>
  <div class="productsearch">
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
      <div class="productserchnav">
        <span>首页 &gt;</span>
        <span class="lightgrey">搜索结果</span>
      </div>
    </div>
    <div class="mycontainer" style="background: #fff">
      <div class="productserchbox">
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>

      </div>
      <div class="productlistboxs">
        <div>
          <div class="lightgreybor productsearchtab store2selecs">
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
                <span :class="{active:state=='价格升序'}" class="icon-jiantouarrow492 iconfont"
                      @click.stop="changestate('价格升序')"></span>
                  <span :class="{active:state=='价格降序'}" class="icon-jiantousanjiaoxia iconfont"
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
              <span class="lightgreybor pricebtn cursor" @click="submits">确定</span>
            </div>
          </div>
          <div class="productpages">
            <div class="items cursor" v-for="(val,index) in 12" :key="index">
              <div @mouseenter="showshadow(index)" @mouseleave.stop="hideshadow">
                <img src="../assets/img/2.png" alt="" @mouseenter="showvisible=true">
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
                            <img src="http://www.3e3e.cn/upload/site/yzltz123.png" alt="" width="126" height="126">
                            <span>手机详情请扫描二维码找厂商洽谈货源更方便</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="scproductprice">
                <div>
                  <div><span>￥</span><span class="blods red secondfont">150</span></div>
                  <div class="lightgrey">15色5码</div>
                </div>
                <div>小仙女店家#5432</div>
                <div>
                  <div>
                    <span class="orangrebor orange">新</span>
                    <span class="orangrebor orange">货</span>
                    <span class="orangrebor orange">爆</span>
                    <span class="orangrebor orange">人</span>
                  </div>
                  <div>
                    <span class="orangrebor orange cursor enshrine">收藏20</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div class="searchpages">
            <div class="pages">
              <div class="gobtn " @click="prev()" :class="{activego:pageindex==1||pageindex==-1}">上一页</div>
              <div>
                <el-pagination
                  background
                  layout="pager"
                  :page-sizes="pageSizes"
                  :current-page="pageindex"
                  :total="total" @current-change="currentchanges" @size-change="sizechanges">
                </el-pagination>
              </div>
              <div class="gobtn" @click="next()" :class="{activego:pageindex==total/pageSizes}">下一页</div>
              <div>总共{{total/pageSizes}}页</div>
              <div class="gopages">
                <span>到</span>
                <span>
                   <el-input class="thepages" v-model="pages" placeholder=""></el-input>
                </span>
                <span>页</span>
              </div>
              <div class="surebtn lightgreybor" @click="gotos()">确定</div>
            </div>
          </div>
        </div>
        <div>
          <div class="itwmss">
            <div>
              <img src="../assets/img/9.png" alt="">
            </div>
            <div>
              <div>
                <span class="firstfont">五颜六色的童装</span>
                <span class="red blods">￥60</span>
              </div>
              <div><span class="lightgreybor">广告</span></div>
            </div>


          </div>
          <div class="itwmss">
            <div>
              <img src="../assets/img/9.png" alt="">
            </div>
            <div>
              <div>
                <span class="firstfont">五颜六色的童装</span>
                <span class="red blods">￥60</span>
              </div>
              <div><span class="lightgreybor">广告</span></div>
            </div>

          </div>
          <div class="itwmss">
            <div>
              <img src="../assets/img/9.png" alt="">
            </div>
            <div>
              <div>
                <span class="firstfont">五颜六色的童装</span>
                <span class="red blods">￥60</span>
              </div>
              <div><span class="lightgreybor">广告</span></div>
            </div>

          </div>
        </div>
      </div>
      <div class="productserchbox">
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
          </div>
        </div>
        <div class="lightgreybor items">
          <div class="secondfont red">小仙女嫁妆</div>
          <div class="darkgrey">2019秋季全国醉逍遥的衣服</div>
          <div>
            <img src="../assets/img/2.png" alt="">
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
        state: '综合',
        activeindex: -1,
        showvisible: true,
        showhide: true,
        pages: '',
        pageindex: 1,
        total: 120,
        pageSizes: [10],
        sprice: '',
        bprice: ''
      }
    },
    watch: {},
    methods: {
      changestate(i) {
        this.state = i
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
        document.title = '产品搜索'
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

  .productserchnav {
    height: 34px;
    line-height: 34px;
    padding-left: 10px;
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

  .productsearchtab > div:nth-child(1) {
    border-left: 0 !important;
  }

  .productsearchtab > .active {
    background: #fff;
    border-right: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
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

  .productlistboxs {
    display: flex;
    justify-content: space-between;
  }

  .productlistboxs > div:nth-child(1) {
    width: 980px;
  }

  .productlistboxs > div:nth-child(2) {
    width: 206px;
  }

  .itwmss {
    height: 269px;
  }

  .itwmss > div:nth-child(1) {
    height: 206px;
    width: 100%;
  }

  .itwmss > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .itwmss > div:nth-child(2) {
    display: flex;
    padding: 10px 13px;
  }

  .itwmss > div:nth-child(2) > div:nth-child(1) {

  }

  .itwmss > div:nth-child(2) > div:nth-child(1) > span {
    display: block;
  }

  .itwmss > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) {
    color: #000;
    margin-bottom: 5px;
  }

  .itwmss > div:nth-child(2) > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

  }

  .itwmss > div:nth-child(2) > div:nth-child(2) > span {
    display: inline-block;
    width: 38px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    position: absolute;
    right: 37px;
  }

  .productpages {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 45px;
  }

  .productpages > .items {
    width: 220px;
    margin-right: 32px;
    height: 334px;
    position: relative;
  }

  .productpages > .items:nth-child(4n) {
    margin-right: 0;
  }

  .productpages > .items > div:nth-child(1) {
    display: block;
    width: 100%;
    height: 220px;
    position: relative;
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
    margin-bottom: 10px;
  }

  .scproductprice > div:last-child > div > span {
    display: inline-block;
    padding: 2px 3px;
  }

  .searchpages {
    width: 740px;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    background: #f6f5f5;
    margin: 0 auto;
  }

  .searchpages > .pages {
    display: inline-flex;
    margin: 0 auto;
    color: #000;
    align-items: center;

  }

  .searchpages > .pages > .gobtn {
    padding: 10px 8px;
    display: flex;
    align-items: center;
    background: #fff;
    cursor: pointer;
  }

  .surebtn {
    cursor: pointer;
  }

  .searchpages > .pages > div {
    margin-right: 10px;
  }

  .searchpages > .pages > div > span {
    margin-right: 8px;
    padding: 9px 12px;
    background: #fff;
    color: #666;
    cursor: pointer;
  }

  .searchpages > .pages > div > span:last-child {
    margin-right: 0;
  }

  .searchpages > .pages > .activego {
    background: none;
  }

  .searchpages > .pages .activepage {
    background: #fc6b1f; /* 橙色背景 */
    color: #fff;
  }

  .searchpages > .pages .ignores {
    padding: 0;
    background: none;
  }

  .searchpages > .pages > .surebtn {
    background: #f1f1f1;
    text-align: center;
    padding: 7px 8px;
    margin-left: 8px;
  }

  .searchpages > .pages > .gopages {
    width: 74px;
    display: flex;
    justify-content: space-between;
  }

  .searchpages > .pages > .gopages > span {
    width: 40px;
    padding: 0;
    background: none;

  }

  .searchpages > .pages > .gopages > span > .thepages {
    display: block;
    width: 40px;
    height: 100%;
    background: #fff;
    outline: none;
    border: 0;
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

  .icons {
    display: inline-block;
    vertical-align: middle;
    background-image: url('../assets/img/main/icons.png');
  }

  .icon-tel {
    background-position: -56px -158px;
    width: 11px;
    height: 17px;
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
  .two-code-img:before {
    content: "";
    background: url('../assets/img/logo.png');
    width: 10px;
    height: 18px;
    position: absolute;
    left: -10px;
    bottom: 9px;
  }

  .two-code-img img {
    margin-bottom: 8px;
  }

  .two-code-img span {
    line-height: 17px;
    display: block;
  }
  .enshrine:hover{
    background: #f43e31;
    color: #fff;
  }
</style>
