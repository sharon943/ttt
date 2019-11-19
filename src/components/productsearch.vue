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
          <div class="lightgreybor productsearchtab">
            <div :class="{active:itemname=='综合'}" @click="itemname='综合'">综合</div>
            <div :class="{active:itemname=='价格'}" @click="itemname='价格'">价格</div>
            <div :class="{active:itemname=='人气'}" @click="itemname='人气'">人气</div>
            <div :class="{active:itemname=='竞争力'}" @click="itemname='竞争力'">竞争力</div>
            <div :class="{active:itemname=='性价比'}" @click="itemname='性价比'">性价比</div>
            <div :class="{active:itemname=='最新'}" @click="itemname='最新'">最新</div>
            <div :class="{active:itemname=='价格s'}" @click="itemname='价格s'">价格s</div>
            <div class="store2price">
              <span class="lightgreybor"><input type="text"></span>
              <span>-</span>
              <span class="lightgreybor"><input type="text"></span>
            </div>
            <div @click="submits">提交</div>
          </div>
          <div class="productpages">
            <div class="items">
              <div>
                <img src="../assets/img/2.png" alt="">
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
                    <span class="orangrebor orange">收藏20</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="searchpages">
            <div class="pages">
              <div class="gobtn activego">上一页</div>
              <div>
                <span class="lightgreybor activepage">1</span>
                <span class="lightgreybor">2</span>
                <span class="lightgreybor">3</span>
                <span class="lightgreybor">4</span>
                <span class="lightgreybor">5</span>
                <span class="lightgreybor">6</span>
                <span class="lightgreybor">7</span>
                <span class="ignores">...</span>
                <span class="lightgreybor">50</span>
              </div>
              <div class="gobtn darkgrey lightgreybor">下一页</div>
              <div>总共50页</div>
              <div class="gopages">
                <span>到</span>
                <span>
                                <input type="text">
                            </span>
                <span>页</span>
              </div>
              <div class="surebtn lightgreybor">确定</div>
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
        itemname: '综合',
      }
    },
    methods: {
      submits() {


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

  .productsearchtab {
    height: 34px;
    background: #f6f5f5;
    display: flex;
    align-items: center;
    width: 980px;
  }

  .productsearchtab > div {
    padding: 0 14px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
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
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
  }

  .store2price > span {
    display: inline-block;
  }

  .store2price > span > input {
    width: 42px;
    display: block;
    text-align: center;
    font-weight: bold;

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

  .searchpages > .pages > .gopages > span > input {
    display: block;
    width: 40px;
    height: 100%;
    background: #fff;
    outline: none;
    border: 0;
  }
</style>
