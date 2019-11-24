<template>
  <div class="mycar">
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>我的购物车</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">全部商品</div>
      </div>
    </div>
    <div class="mycontainer">
      <div class="carbox">
        <div class="darkgrey shopedits">
          <div>
            <div>
              <!--<div class="lightgreybor cursor"></div>-->
              <!--<div class="cursor">全选</div>-->
              <el-checkbox class="cursor" :indeterminate="isIndeterminate" v-model="checkAll_" @change="handleCheckAllChange_">全选</el-checkbox>
            </div>
            <div>货名</div>
          </div>
          <div>
            规格
          </div>
          <div>总数</div>
          <div>供货价</div>
          <div>操作</div>
        </div>
        <div v-for="(r,i) in orderShops">
          <div class="shopedits" style="margin-bottom: 9px;">
            <div>
              <div>
                <el-checkbox :indeterminate="r.isIndeterminate" v-model="r.checkAll" @change="handleCheckAllChange(r.checkAll,i)">这是一家店名</el-checkbox>
              </div>
            </div>
          </div>
          <div>
            <el-checkbox-group v-model="r.checks" @change="handleCheckedOrdersChange(r.checks,i)">
           <div>
            <div class="caredit" v-for="(row,index) in Orders" :key="index">
              <div class="carlist darkgrey lightgreybor">
                <div>
                  <el-checkbox :label="row">{{null}}</el-checkbox>
                  <div>
                    <div>
                      <img src="../../assets/img/1.png" alt="">
                    </div>
                    <div>
                      <div>货号：456456</div>
                      <div class="orange">￥60.00</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <span class="lightgrey">已选1色2码</span>
                    <span class="blue cursor" @click="edit(index)">修改</span>
                  </div>
                  <div>
                    <table class="common-sema-table">
                      <tbody>
                      <tr>
                        <td class="common-sema-se">卡其色</td>
                        <td>
                          <ul class="common-sema-item">
                            <li>
										         <span class="inline-block">
										             XL
										             										         </span>
                              <span class="common-sema-no">×1</span>
                            </li>
                            <li>
										         <span class="inline-block">
										             L
										             										         </span>
                              <span class="common-sema-no">×1</span>
                            </li>
                            <li>
										         <span class="inline-block">
										             M
										             										         </span>
                              <span class="common-sema-no">×1</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      </tbody>
                      <tbody>
                      <tr>
                        <td class="common-sema-se">黑色</td>
                        <td>
                          <ul class="common-sema-item">
                            <li>
										         <span class="inline-block">
										             L
										             										         </span>
                              <span class="common-sema-no">×2</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>2</div>
                <div class="blods orange">160.00</div>
                <div>
                  <div class="cursor">收藏</div>
                  <div class="cursor">删除</div>
                  <div class="lightgreybor cursor">补差价</div>
                </div>
              </div>
            </div>
          </div>
        </el-checkbox-group>
          </div>
        </div>
        <div class="darkgrey alllist">
          <div>
            <div>
              <div><el-checkbox class="cursor" :indeterminate="isIndeterminate" v-model="checkAll_" @change="handleCheckAllChange_">全选</el-checkbox></div>
            </div>
            <div>
              <div class="cursor">删除</div>
              <div class="cursor">收藏</div>
            </div>
          </div>
          <div>
            已选货品（10）
          </div>
          <div>
            <div>商品合计：</div>
            <div class="orange">￥160</div>
          </div>
          <div class="oranges cursor">
            结算
          </div>
        </div>
      </div>
    </div>


    <el-dialog
      title="修改采购单"
      :visible.sync="editVisible"
      width="680px"
      center>
      <div class="cart_con">
        <div class="con">
          <div class="color">
            <dl class="clearfix" id="list_color">
              <dt>颜色</dt>
              <dd>
                <ul>
                  <li :class="{act:thecolor==item.color}" v-for="(item,nums) in colors" :key="nums"
                      @click="changecolor(item.color)"><a href="javascript:;">{{item.color}}</a><b v-if="item.num>0">{{item.num}}</b>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="size">
            <dl class="clearfix">
              <dt>尺码</dt>
              <dd>
                <table>
                  <tbody id="bodycount">
                  <form id="updatecart"></form>
                  <tr :class="val.color" style="display: table-row;" v-for="(val,index) in prolist" :key="index">
                    <td class="model">
                      <span>{{val.size}}</span>
                    </td>
                    <td class="model">
                      <span>{{val.price}}</span>
                    </td>

                    <td class="count">
                      <div>
                        <el-input-number v-model="val.num" @change="handleChange" :min="0"
                                         style="transform: scale(0.7)"></el-input-number>

                      </div>
                    </td>

                  </tr>
                  </tbody>
                </table>
              </dd>
            </dl>
          </div>
        </div>
        <div style="text-align: center">
          <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure()">确 定</el-button>
      </span>
        </div>

      </div>

    </el-dialog>

  </div>

</template>
<script>
  const Ordersoptions=[1,2]
  export default {
    data() {
      return {
        //各家订单
        orderShops:[{id:1,checks:[],isIndeterminate:true,checkAll:false,checkedOrders:[1,2]},{id:2,checks:[],isIndeterminate:true,checkAll:false,checkedOrders:[1,2]}],
        Orders:Ordersoptions,
        //全选开关数据
        checkAll_:false,isIndeterminate:true,
        proindex: -1,
        editVisible: false,
        thecolor: '黑色',
        colors: [
        {
          color: '黑色',
          num: 0
        },
        {
          color: '卡其色',
          num: 2
        }
      ],
        prolist: [
        {
          color: '黑色',
          size: 90,
          price: 120.00,
          num: 1
        }, {
          color: '黑色',
          size: 100,
          price: 120.00,
          num: 2
        }, {
          color: '黑色',
          size: 110,
          price: 120.00,
          num: 3
        }
      ]

      }
    },
    methods: {
      backTohome(){
        this.$parent.fatherMethod();
      },
      handleCheckedOrdersChange(value,i){
        console.log(value,i)
        let checkedCount = value.length;
        this.orderShops[i].checkAll = checkedCount === this.Orders.length;
        this.orderShops[i].isIndeterminate = checkedCount > 0 && checkedCount < this.Orders.length;
        // console.log(this.checkedOrders)
      },
      handleCheckAllChange(val,i){
        console.log(val,i)
        this.orderShops[i].checks = val ? this.Orders : [];
        this.orderShops[i].isIndeterminate = false;
        console.log(this.orderShops[i].checks)
      },
      handleCheckAllChange_(val){
        for(var i=0;i<this.orderShops.length;i++){
          this.orderShops[i].checks=val ? this.orderShops[i].checkedOrders:[]
          this.orderShops[i].isIndeterminate = false;
          this.orderShops[i].checkAll = val;
        }
      },
      edit(index) {
        this.proindex = index
        this.editVisible = true
      },
      sure() {

      },
      changecolor(name) {
        this.thecolor = name
        this.getprolist()
      },
      getprolist() {

      },
      handleChange() {

      },
      changenum(index) {

      }
    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '我的购物车'
      })
    }
  }
</script>
<style scoped>
  .mycar {
    font-size: 12px;
    background: #f6f5f5;
  }

  .tablist {
    background: #f6f5f5;
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

  .caredit {
    /*height: 105px;*/
    margin-bottom: 13px;
    margin-top: 9px;
    /*border-bottom: 1px solid #dfdfdf;*/
    text-align: center;
  }

  .carlist {
    padding: 12px 0px 18px 37px;
    display: inline-flex;
    /*margin-left: 25px;*/
    width: 1117px;
    align-items: center;

  }
  .caredit:last-child{
    border-bottom: 0;
  }
  .carlist > div:nth-child(1) {
    display: flex;
    width: 280px;
  }

  .carlist > div:nth-child(1) > div:nth-child(1) {
    width: 14px;
    height: 14px;
    margin-right: 7px;
  }

  .carlist > div:nth-child(1) > div:nth-child(2) {
    display: flex;
  }

  .carlist > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) {
    width: 60px;
    height: 60px;
    margin-right: 9px;
  }

  .carlist > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .carlist > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
    padding-top: 5px;
  }

  .carlist > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div {
    margin-bottom: 8px;
  }

  .carlist > div:nth-child(2) {
    width: 300px;
  }

  .carlist > div:nth-child(2) > div {
    display: flex;
    justify-content: space-between;
  }


  .carlist > div:nth-child(3) {
    width: 182px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .carlist > div:nth-child(4) {
    width: 155px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 58px;
  }

  .carlist > div:nth-child(5) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 46px;
    text-align: center;
  }

  .carlist > div:nth-child(5) > div:nth-child(1) {
    margin-bottom: 8px;
  }

  .carlist > div:nth-child(5) > div:nth-child(2) {
    margin-bottom: 5px;
  }

  .carlist > div:nth-child(5) > div:nth-child(2) {
    height: 22px;
    width: 46px;
    line-height: 22px;
  }

  .alllist {
    margin-top: 29px;
    height: 48px;
    display: flex;
    align-items: center;
    background: #e3e3e3;
    padding-left: 26px;
    font-size: 13px;
    position: relative;
  }

  .carbox {
    padding-bottom: 47px;
    padding-top: 22px;
  }

  .alllist > div {
    display: flex;
    align-items: center;
  }

  .alllist > div > div {
    display: flex;
    align-items: center;
  }

  .alllist > div:nth-child(1) {
    width: 343px;
  }

  .alllist > div:nth-child(1) > div:nth-child(1) {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }

  .alllist > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
    width: 16px;
    height: 16px;
    margin-right: 9px;
    /*background-color: #fff;*/
  }

  .alllist > div:nth-child(1) > div:nth-child(2) > div {
    margin-right: 20px;
  }

  .alllist > div:nth-child(2) {
    width: 182px;
    text-align: center;
    margin-right: 262px;
  }

  .alllist > div:nth-child(3) {
    width: 230px;
  }

  .alllist > div:nth-child(4) {

    width: 157px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    justify-content: space-around;
  }

  .shopedits {
    display: flex;
    align-items: center;
    height: 16px;
    padding-left: 39px;
    margin-bottom: 18px;
  }

  .shopedits > div {
    display: flex;
    align-items: center;
  }

  .shopedits > div > div {
    display: flex;
    align-items: center;
  }

  .shopedits > div:nth-child(1) {
    width: 317px;
  }

  .shopedits > div:nth-child(1) > div:nth-child(1) {
    margin-right: 68px;
  }

  .shopedits > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
    width: 16px;
    height: 16px;
    margin-right: 9px;
    background-color: #fff;
  }

  .shopedits > div:nth-child(2) {
    width: 300px;
  }

  .shopedits > div:nth-child(3) {
    width: 182px;
    justify-content: space-around;
  }

  .shopedits > div:nth-child(4) {
    width: 155px;
    justify-content: space-around;
    margin-right: 52px;
  }

  .shopedits > div:nth-child(5) {
    width: 46px;
    justify-content: space-around;

  }

  .cart_con {
    width: 582px;
    background: #fff;
  }

  .cart_con .con {
    width: 550px;
    margin: 0 auto;
    margin-bottom: 35px;
  }

  .cart_con .con .color {
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
  }

  .cart_con .con dl {
    margin-left: 80px;
  }

  .cart_con .con dl dt {
    float: left;
    width: 60px;
    margin-left: -80px;
    text-align: center;
    line-height: 30px;
  }

  .cart_con .con dl dd {
    float: left;
  }

  .cart_con .con dl dd ul li.act {
    background: #fff8f4;
    border-color: #ff7300;
    color: #ff7300;
  }

  .cart_con .con .color dd li {
    position: relative;
    margin: 5px 5px;
  }

  .cart_con .con dl dd ul li {
    float: left;
    list-style: none;
    border: 1px solid #ebebeb;
  }

  .cart_con .con dl dd ul li a {
    display: inline-block;
    padding: 5px 10px 5px 15px;
    color: #999;
  }

  .cart_con .con .color dd li b {
    color: #ff7300;
    font-size: 9px;
    margin-right: 2px;
    vertical-align: bottom;
  }

  .cart_con .con .size {
    margin-top: 13px;
    overflow-y: auto;
    max-height: 360px;
  }

  .cart_con .con dl {
    margin-left: 80px;
  }

  .cart_con .con dl dt {
    float: left;
    width: 60px;
    margin-left: -80px;
    text-align: center;
    line-height: 30px;
  }

  .cart_con .con dl dd {
    float: left;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .cart_con .con table {
    width: 100%;
  }

  .cart_con .con table tbody td {
    height: 35px;
    padding-left: 5px;
    font-size: 14px;
    vertical-align: middle;
    padding-left: 5px;
    font-size: 12px;
  }

  .cart_con .con table tbody td.model {
    width: 300px;
    font-weight: bold;
  }


  .common-sema-table {
    margin-top: 8px;
    border: 1px solid #ddd;
    /*border-top-width: 2px;*/
  }
  .common-sema-table tr {
    border-bottom: 1px dotted #d5d7d9;
  }
  .common-sema-se {
    width: 90px;
    text-align: center;
    border-right: 1px solid #d5d7d9;
  }
  .common-sema-item {
    width: 205px;
  }
  .common-sema-item li {
    position: relative;
    margin: 5px 0;
    padding-left: 5px;
    float: none;
    height: 22px;
    line-height: 22px;
  }
  .cart-goods-list li {
    float: left;
    padding-left: 5px;
  }
  .inline-block {
    width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  .common-sema-no {
    position: absolute;
    right: 5px;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  table {
    display: table;
  }
  .myprolist{

    width: 1117px;
    margin: 0 auto;
  }
</style>
