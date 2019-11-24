<template>
  <div>
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>商户批量操作</span>
        </div>
      </div>
      <div class="mynavs cursor">
        <div :class="['tittle',{reds:IsdefaultBox}]" @click="IsdefaultBox=true">批量一键上传</div>
        <div :class="['tittle',{reds:!IsdefaultBox}]" @click="IsdefaultBox=false">批量下载表情包</div>
      </div>
    </div>
    <div class="mycontainer" style="background: #fff; padding-top: 25px;" >
      <div class="undertakebox">
        <div class="undertakebox1">
          <div class="lightgreybor longinputs" style="width: 418px">
            <el-input v-model="value" placeholder="请输入内容"></el-input>
          </div>
          <div class="sercchbtn cursor">
            搜索
          </div>
        </div>
        <div class="undertakebox2"  @click="handleCheckAllChange">
          <div class="lightgreybor red cursor">批量一键上传</div>
        </div>
      </div>
      <el-checkbox-group v-model="checkedOrders" class="boxes" @change="handleCheckedOrdersChange" v-if="IsdefaultBox">
        <div class="underlists">
          <div v-if="isdefault" >
            <div  v-for="row in orderLists">
              <div class="thed">
                <div class="productpic">
                  <el-checkbox  :label="row.id" :key="row.id">{{null}}</el-checkbox>
                  <span style="width: 158px;">商品图片</span>
                </div>
                <div class="productcode">
                  <span>货号</span>
                </div>
                <div class="productprice">
                  <span>拿货价</span>
                </div>

                <div class="ordertrack">
                  <span>厂家名称</span>
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
                        <span>豆仔小当家&卡通</span>
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
          <div v-else class="main">
            <el-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">
              <ul class="boxes" v-for="(row,index) in Stores" :key="index">
              <li>
                <div class="boxLeft">
                  <section class="l_top">
                    <p><el-checkbox :label="row.id">{{row.name}}</el-checkbox>  <span>金牌厂家</span></p>
                    <p>武汉江岸区某某大街上203 <img src="../../assets/img/ismargin.png" alt=""></p>
                    <img src="../../assets/img/rz.png" alt="" class="img1">
                    <img src="../../assets/img/yyzz.png" alt="" class="img2">
                  </section>
                  <section class="l_middle">
                    <div>
                      <p>目前有货： <span>4566</span></p>
                      <p>联系方式： <span>123456789011</span></p>
                    </div>
                    <div>
                      <p>供应登记： <span>lv20</span></p>
                      <p>最新数据： <span>2018-9-12</span></p>
                    </div>
                  </section>
                  <section class="l_bottom">
                    <span>进入店铺</span>
                    <span>关注商家</span>
                  </section>
                </div>
                <ul class="products">
                  <li v-for="(item,index) in productsARR" :key="index">
                    <img src="../../assets/img/13.png" alt="">
                    <p>6斤服装大甩卖生意好啊</p>
                    <p><span>$30.00</span> 91387人看过</p>
                  </li>
                </ul>
              </li>
            </ul>
            </el-checkbox-group>
          </div>
        </div>
      </el-checkbox-group>
      <el-checkbox-group v-model="checkedOrdersPic" class="boxes" @change="handleCheckedOrdersChangePic" v-else>
        <div class="underlists">
          <div v-if="isdefault" >
            <div  v-for="row in orderListsPic">
              <div class="thed">
                <div class="productpic">
                  <el-checkbox  :label="row.id" :key="row.id">{{null}}</el-checkbox>
                  <span style="width: 158px;">商品图片</span>
                </div>
                <div class="productcode">
                  <span>货号</span>
                </div>
                <div class="productprice">
                  <span>拿货价</span>
                </div>

                <div class="ordertrack">
                  <span>厂家名称</span>
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
                        <span>豆仔小当家&卡通</span>
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
      </el-checkbox-group>
    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        checked:true,
        value: '',
        productsARR:[{id:1},{id:2},{id:3},{id:4}],
        Stores:[{id:1,name:'萌萌童装1'},{id:2,name:'萌萌童装2'},{id:3,name:'萌萌童装3'},{id:4,name:'萌萌童装4'}],
        isdefault:true,//true:默认展示。false:以搜索为结果的"厂家名称"展示的界面
        orderLists:[{id:1},{id:2}],
        checkedOrders:[],
        Orders:[1,2],checkAll:false,
        //以搜索为结果的"厂家名称"展示的界面的选框参数
        checkList:[],
        IsdefaultBox:true,//true展示批量一键上传，false批量下载表情包
        //批量下载表情包的参数
        orderListsPic:[{id:1},{id:2},{id:3}],
        checkedOrdersPic:[],
        OrdersPic:[1,2],checkAllPic:false,
      }
    },
    methods: {
      backTohome(){
        this.$parent.fatherMethod();
      },
      handleCheckedOrdersChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.Orders.length;
      },
      handleCheckedOrdersChangePic(value){
        let checkedCount = value.length;
        this.checkAllPic = checkedCount === this.OrdersPic.length;
      },
      handleCheckAllChange(e){
        if(this.IsdefaultBox){   //展示批量一键上传
          if(this.isdefault){    //批量一键上传下的默认
            this.checkedOrders =this.Orders; //如果这里的批量不是全选的意思删掉这行
          }else {           //批量一键上传下的以搜索为结果的"厂家名称"展示的界面
            var Options=[]
            for (let i = 0; i < this.Stores.length; i++) {
              Options.push(this.Stores[i].id)
            }
            this.checkList = Options;
          }
        }else{  //批量下载表情包
          this.checkedOrdersPic =this.OrdersPic;
        }

      },
      handleCheckedCitiesChange(value) {
        console.log(value)
        let checkedCount = value.length;
      },
    },
    created: function () {

    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '商户批量操作'
      })
    }
  }
</script>
<style scoped lang="scss">
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

  .tjlist > span {
    margin-right: 25px;
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

  .undertakebox .el-input__inner {
    outline: none;
    border: none;
  }
  .underlists .thed {
    height: 38px;
    display: flex;
    align-items: center;
    background: #dadada;
    color: #515056;
  }

  .underlists .thed > div {
    text-align: center;
  }

  .underlists .thed > div:nth-child(1) {
    display: flex;
    padding-left: 5px;
  }

  .underlists .thed > div:nth-child(1) > .lightgreybor {
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
    width: 358px;
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
    padding-bottom: 20px;
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

  .main {
    width: 1200px;border-top: 1px solid #f3463a;height: auto;margin:50px auto 0;position: relative;
    .topUL{
      width: 50%;display: flex;justify-content: space-between;position: absolute;top:-40px;left: 0;cursor: pointer;
      li{
        width: 150px;text-align: center;height: 40px;line-height: 40px;
      }
      li.active{
        background: #f3463a;color: #fff;
      }
    }
    .boxes {
      margin-bottom: 10px;
      background: #fff;
      padding: 20px;
      & > li {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        .boxLeft {
          width: 35%;
          & > section {
            height: 62px;
          }
          .l_top {
            position: relative;
            p {
              font-size: 12px;
              span {
                display: inline-block;
                width: 80px;
                height: 25px;
                line-height: 25px;
                background: #ffd929;
                color: #bb5800;
                text-align: center;
                border: 1px solid #bb5800
              }
              img {
                width: 10px;
                height: 10px;
              }
            }
            & > .img1 {
              width: 18px;
              height: 18px;
              position: absolute;
              right: 25px;
              top: 0px;
            }
            & > .img2 {
              width: 21px;
              height: 18px;
              position: absolute;
              right: 0;
              top: 0px;
            }
          }
          .l_middle {
            border-top: 1px solid #f6f5f5;
            border-bottom: 1px solid #f6f5f5;
            height: 95px;
            padding: 25px 0;
            & > div {
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              p {
                color: #8c8c8c;
                width: 150px;
                span {
                  color: #333;
                  font-size: 13px;
                }
              }
            }
            & > div:nth-of-type(1) {
              margin-bottom: 6px;
            }
          }
          .l_bottom {
            padding: 30px 50px;
            display: flex;
            justify-content: space-between;
            span {
              width: 120px;
              height: 35px;
              line-height: 35px;
              display: inline-block;
              text-align: center;
              border: 1px solid #d0d0d0;
              color: #d0d0d0;
            }
            & > span:nth-of-type(1) {
              border-color: #f45148;
              color: #f45148;
            }
          }
        }
        .products {
          display: flex;
          justify-content: space-between;
          li {
            width: 185px;
            height: 245px;
            border: 1px solid #e7e7e7;
            box-sizing: border-box;
            border-left: none;
            p {
              margin-left: 10px;
            }
            & > p:nth-of-type(1) {
              font-size: 14px;
              color: #333;
              margin: 10px 0 10px 10px;
            }
            & > p:nth-of-type(2) {
              font-size: 12px;
              color: #666;
              text-align: right;
              margin: 0 10px;
              span {
                color: #f45148;
                font-size: 14px;
                float: left;
              }
            }
            img {
              width: 160px;
              height: 160px;
              margin: 7.5px auto 0;
              display: block;
            }
          }
          & > li:nth-of-type(1) {
            border-left: 1px solid #e7e7e7;
          }

        }
      }

    }
  }
</style>
