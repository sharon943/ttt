<template>
  <div class="mycar">
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
      <div class="undertakebox">
        <div class="undertakebox1">
          <div class="lightgreybor longinputs" style="width: 418px">
            <el-input v-model="value" placeholder="请输入内容"></el-input>
          </div>
          <div class="sercchbtn">
            搜索
          </div>
        </div>
        <div class="undertakebox2">
          <div class="lightgreybor blods">
            <div style="display: inline-flex" class="red">
              <span class="icons icon-shanchu  m8 secondfont"></span>
              <span>批量删除</span>
            </div>
          </div>
          <div class="red redbor blods">批量加购</div>
        </div>
      </div>
      <div class="underlists">
        <div class="thed">
          <div class="productpic"  >
            <span style="margin: 0 auto">商品图片</span>
          </div>
          <div class="productprice">
            <span>拿货价</span>
          </div>
          <div class="express">
            <span>联系方式</span>
          </div>
          <div class="withmess">
            <span>库存情况</span>
          </div>
          <div class="productcode">
            <span>变动时间</span>
          </div>
        </div>
        <div class="prolists">
          <div class="proitem lightgreybor darkgrey">
            <div class="itembox">
              <div>
                <div>
                  <div style="display: flex;align-items: center">
                    <img src="../../assets/img/1.png" alt="" style="width: 106px;height: 106px">
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div style="margin-bottom: 12px">豆仔小当家</div>
                  <div ><span>价格：</span><span class="red blods secondfont">￥9.90</span></div>
                </div>
              </div>
              <div>
                <div style="text-align: left">
                  <div style="color: #000;" class="blods">厂家：童装店</div>
                  <div>电话：18634301234</div>
                  <div>QQ：18634301234</div>
                  <div>地址：浙江省杭州市客户地址什么的</div>
                </div>
              </div>
              <div>
                <div>
                  库存紧张/下架/库存充足
                </div>
              </div>
              <div>
                <div>
                  <span >2019-03-21 03:24</span>
                </div>
              </div>
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
        value:''
      }
    },
    methods: {},
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '货源动态'
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

  .m8 {
    margin-right: 8px;
  }

  .tbordernumer {
    width: 394px;
    display: flex;
  }

  .tbordernumer > div:nth-child(2) {
    width: 220px;
  }

  .undertakebox {
    display: flex;
    align-items: center;
    height: 65px;
    padding: 0 13px;
  }

  .undertakebox > div {
    margin-right: 9px;
  }

  .undertakebox > .jztimes {
    width: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;

  }

  .undertakebox > .jztimes > .times {
    width: 106px;
  }

  .undertakebox > div:last-child {
    display: flex;
    width: auto;
  }

  .undertakebox > div:last-child > .sercchbtn {
    width: 62px;
    height: 100%;
    background: #535353;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    position: relative;
    left: -2px;
  }
  .underlists{
    width: 1160px;
    margin: 0 auto;
  }
  .underlists > .thed {
    height: 38px;
    display: flex;
    align-items: center;
    background: #dadada;
    color: #515056;
  }

  .underlists > .thed > div {
    text-align: center;
  }

  .underlists > .thed > div:nth-child(1) {
    display: flex;
    padding-left: 5px;
  }

  .underlists > .thed > div:nth-child(1) > .lightgreybor {
    width: 20px;
    height: 20px;
    background: #fff;
    margin-right: 5px;
    display: block;
    border-color: #a6a6a6;
  }

  .productpic {
    width: 20%;
  }

  .productcode {
    width: 20%;
  }

  .productprice {
    width: 20%;
  }
  .express {
    width: 20%;
  }

  .withmess {
    width: 20%;
  }
  .proitem {

  }

  .itembox {
    display: flex;
    background: #fff;
  }

  .itembox > div {
    width: 20%;
    align-items: center;
    justify-content: space-around;

    border-right: 1px solid #efefef;
    text-align: center;
    display: flex;

  }

  .itembox > div:last-child {
    border-right: none;
  }

  .itembox > div > div {
    display: inline-block;
    padding: 12px 10px;
  }

  .productpic img {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  .itembox > div > div > div {
    margin-bottom: 4px;
  }

  .prolists {
    background: #fff;
    padding-bottom: 120px;
    margin-bottom: 80px;
  }

  .prostatus {
    display: flex;
    align-items: center;
  }

  .prostatus > .lightgreybor {
    width: 17px;
    height: 15px;
    background: #fff;
    margin-right: 4px;
  }

  .undertakebox {
    margin-bottom: 18px;
    display: flex;
    justify-content: space-between;
  }

  .undertakebox > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }

  .undertakebox1 {
    display: inline-flex;
    align-items: center;
    height: 65px;
    padding: 0 13px;
  }

  .undertakebox2 {
    display: inline-flex;
    align-items: center;
    height: 65px;
    padding: 0 13px;
    justify-content: flex-end;
  }

  .undertakebox2 > div {
    height: 34px;
    line-height: 34px;
    margin-left: 9px;
    padding: 0 35px;
  }

  .undertakebox1 > div {
    margin-right: 9px;
  }

  .undertakebox1 > .sercchbtn {
    height: 34px;
    line-height: 34px;
    width: 62px;
    background: #535353;
    text-align: center;
    color: #fff;
    border-radius: 3px;
  }

</style>
