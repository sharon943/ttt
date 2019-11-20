<template>
  <div class="mycar undertake">
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>下载图片包</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">下载图片包</div>
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
          <div class="lightgreybor">
            <div style="display: inline-flex" class="red">
              <span class="icons icon-shanchu  m8 secondfont"></span>
              <span>批量删除</span>
            </div>
          </div>
          <div class="oranges">批量加购</div>
          <div class="oranges">批量收藏</div>
          <div class="oranges">批量一键发布</div>
        </div>
      </div>
      <div class="underlists">
        <div class="thed">
          <div class="productpic">
            <span class="lightgreybor"></span>
            <span  style="width: 158px;">商品图片</span>
          </div>
          <div class="productcode">
            <span>货号</span>
          </div>
          <div class="productprice">
            <span>拿货价</span>
          </div>

          <div class="ordertrack">
            <span >厂家名称</span>
          </div>
          <div class="express">
            <span>联系电话</span>
          </div>
          <div class="withmess">
            <span>厂址</span>
          </div>
        </div>
        <div class="prolists">
          <div class="proitem lightgreybor darkgrey">
            <div class="itembox">
              <div>
                <div class="productpic">
                  <div style="display: flex;align-items: center">
                    <div>
                      <img src="../../assets/img/1.png" alt="">
                    </div>
                    <div class="blods" style="margin-left: 8px;width: 80px;text-align: left;color: #000">红色家族童装套装</div>
                  </div>
                </div>
              </div>
              <div>
                <div class="productcode">
                  <span >豆仔小当家&卡通</span>
                </div>
              </div>

              <div>
                <div class="productprice">
                  <span class="red blods secondfont">￥9.90</span>
                </div>
              </div>

              <div>
                <div class="ordertrack">


                </div>
              </div>
              <div>
                <div class="express">

                </div>
              </div>
              <div>
                <div class="withmess" style="text-align: left">
                  <div>浙江省杭州市客户地址什么的</div>
                  <div>陈雅元 18634301234</div>
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
        value: '',
        allsale: [
          {
            value: '我要退款',
            label: '我要退款'
          }, {
            value: '我要退款退货',
            label: '我要退款退货'
          }, {
            value: '我要换货',
            label: '我要换货'
          }
        ],
        allshops: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        starttime: '',
        endtime: ''

      }
    },
    methods: {
      backTohome(){
        this.$parent.fatherMethod();
      },
    },
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
    width: 186px;
  }

  .productcode {
    width: 146px;
  }

  .productsize {
    width: 84px;
  }

  .productnum {
    width: 52px;
  }

  .productprice {
    width: 108px;
  }

  .ordertrack {
    width: 168px;
  }

  .express {
    width: 226px;
  }

  .withmess {
    width:358px;
  }

  .orderdesc {
    width: 156px;
  }

  .proedit {
    width: 104px;
  }

  .proitem {

  }

  .itembox {
    display: flex;
    background: #fff;
  }

  .itembox > div {
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
