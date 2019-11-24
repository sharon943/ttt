<template>
  <div class="mycar undertake">
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>售后订单</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">售后订单</div>
      </div>
    </div>
    <div class="mycontainer" >
      <div class="undertakebox">
        <div class="lightgreybor">
          <el-select v-model="value" placeholder="我要退款">
            <el-option
              v-for="item in allsale"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="jztimes">
          时间：
          <div class="times lightgreybor">
            <el-date-picker
              v-model="starttime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div>至</div>
          <div class="times lightgreybor">
            <el-date-picker
              v-model="endtime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
        <div>
          <div>类型：</div>
          <div class="tbordernumer">
            <div  class="selectbtn lightgreybor" style="border-right: none;width: 176px">
              <el-select v-model="value" placeholder="淘宝订单编号">
                <el-option
                  v-for="item in allshops"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div  class="lightgreybor" style="text-align: left">
              <el-input v-model="proname" placeholder=""></el-input>
            </div>
          </div>
          <div class="sercchbtn">
            搜索
          </div>
        </div>
      </div>

      <el-checkbox-group v-model="checkedOrders" class="boxes" @change="handleCheckedOrdersChange">
        <div v-for="row in orderLists">
          <div>
            <div class="itemdesc">
              <div>
                <div class="prostatus" style="border: none;padding-right: 3px">
                  <el-checkbox  :label="row.id" :key="row.id">{{null}}</el-checkbox>
                  <span class="red redbor" style="padding: 2px 3px;">换货中</span>
                </div>
                <div>订单号：1909303763077</div>
                <div>生成时间：2019-9-30 14：05</div>
                <div>商品数量：1</div>
                <div>
                  <div>
                    服务费：<span class="red">2.00</span>元
                  </div>
                  <div>
                    质检费：<span class="red">2.00</span>元
                  </div>
                  <div>
                    订单总价：<span class="red">2.00</span>元
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="underlists" >
          <div class="thed">
            <div class="productpic">
              <span  style="margin: 0 auto">商品图片</span>
            </div>
            <div  class="productcode">
              <span>货号</span>
            </div>
            <div class="productsize">
              <span>颜色/尺码</span>
            </div>
            <div  class="productnum">
              <span>数量</span>
            </div>
            <div  class="productprice">
              <span>拿货价</span>
            </div>
            <div class="orderstatus">
              <span class="red firstfont">订单状态</span>
            </div>
            <div class="ordertrack">
              <span class="red">拿货轨迹</span>
            </div>
            <div class="express">
              <span>快递信息</span>
            </div>
            <div class="withmess">
              <span>拿货信息</span>
            </div>
            <div class="orderdesc">
              <span>订单备注</span>
            </div>
            <div class="proedit">
              <span>操作</span>
            </div>
          </div>
          <div class="prolists">
            <div class="proitem lightgreybor">
              <div class="itembox">
                <div>
                  <div class="productpic">
                  <span>
                    <img src="../../assets/img/1.png" alt="">
                  </span>
                  </div>
                </div>
                <div>
                  <div  class="productcode">
                    <span>豆仔小当家&卡通</span>
                  </div>
                </div>
                <div>
                  <div class="productsize">
                    <span>白色/30</span>
                  </div>
                </div>
                <div>
                  <div  class="productnum">
                    <span>1</span>
                  </div>
                </div>
                <div>
                  <div  class="productprice">
                    <span>9.90</span>
                  </div>
                </div>
                <div>
                  <div class="orderstatus">
                    <span >已完成</span>
                  </div>
                </div>
                <div>
                  <div class="ordertrack" style="text-align: center">
                    <div >安排拿货员（周边地区拿货取消是，着急请联系厂家代发）</div>
                    <div>拿货中</div>
                    <div style="text-align: center">
                      <div style="border: 1px dotted #F43E31;padding: 2px 4px;display: inline-block" class="red">轨迹</div>
                    </div>

                  </div>
                </div>
                <div>
                  <div class="express" style="text-align: left">
                    <div>快递:申通快递 <span style="border:1px dotted #19a4f4;padding: 2px;margin-left: 3px" class="blue">普</span> </div>
                    <div>快递费：4.00</div>
                    <div>单号：</div>
                  </div>
                </div>
                <div>
                  <div class="withmess" style="text-align: left">
                    <div>浙江省杭州市客户地址什么的</div>
                    <div>陈雅元 18634301234</div>
                  </div>
                </div>
                <div>
                  <div class="orderdesc">
                    <div></div>
                  </div>
                </div>
                <div>
                  <div class="proedit">
                    <div class="blue cursor">查看详情</div>
                    <div class="blue cursor">退款</div>
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
        proname:'',
        value:'',
        allsale:[
          {
            value: '我要退款',
            label: '我要退款'
          }, {
            value: '我要退款退货',
            label: '我要退款退货'
          },{
            value: '我要换货',
            label: '我要换货'
          }
        ],
        allshops:[
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        starttime:'',
        endtime:'',
        orderLists:[{id:1},{id:2}],
        checkedOrders:[],
        checkAll: false,isIndeterminate: true,Orders:[1,2]

      }
    },
    methods: {
      backTohome(){
        this.$parent.fatherMethod();
      },
      handleCheckedOrdersChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.Orders.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.Orders.length;
      },

    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '售后订单'
      })
    }
  }
</script>
<style scoped>
  .mycar {
    font-size: 12px;
    background: #f6f5f5;
  }

  .cursor {
    cursor: pointer;
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


  .m8{
    margin-right: 8px;
  }
  .tbordernumer{
    width: 394px;
    display: flex;
  }
  .tbordernumer>div:nth-child(2){
    width: 220px;
  }
  .undertakebox{
    display: flex;
    align-items: center;
    height: 65px;
    padding: 0 13px;
  }
  .undertakebox>div{
    height: 34px;
    line-height: 34px;
    width: 157px;
    margin-right: 9px;
  }
  .undertakebox>.jztimes{
    width: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;

  }
  .undertakebox>.jztimes>.times{
    width: 106px;
  }
  .undertakebox>div:last-child{
    display: flex;
    width: auto;
  }
  .undertakebox>div:last-child>.sercchbtn{
    width: 62px;
    height: 100%;
    background: #535353;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    position: relative;
    left: -2px;
  }
  .underlists>.thed{
    height: 38px;
    display: flex;
    align-items: center;
    background: #dadada;
    color: #515056;
  }
  .underlists>.thed>div{
    text-align: center;
  }
  .underlists>.thed>div:nth-child(1){
    display: flex;
    padding-left: 5px;
  }
  .underlists>.thed>div:nth-child(1)>.lightgreybor{
    width: 20px;
    height: 20px;
    background: #fff;
    margin-right: 5px;
    display: block;
    border-color: #a6a6a6;
  }
  .productpic{
    width: 106px;
  }
  .productcode{
    width: 106px;
  }
  .productsize{
    width: 84px;
  }
  .productnum{
    width: 52px;
  }
  .productprice{
    width: 68px;
  }
  .orderstatus{
    width: 84px;
  }
  .ordertrack{
    width: 132px;
  }
  .express{
    width: 166px;
  }
  .withmess{
    width: 135px;
  }
  .orderdesc{
    width: 156px;
  }
  .proedit{
    width: 104px;
  }
  .proitem{

  }
  .itemdesc{
    display: flex;
    justify-content: space-between;
    height: 41px;
    align-items: center;
    padding: 0 13px;
    background: #f8f8f8;
    border-bottom: 1px solid #efefef;
  }
  .itemdesc>div{
    display: flex;
    align-items: center;
    height: 13px;
  }
  .itemdesc>div:nth-child(1){
    height: 13px;
  }
  .itemdesc>div:nth-child(1)>div{
    padding: 0 11px;
    border-right: 1px solid #605d69;
  }
  .itemdesc>div:nth-child(1)>div:last-child{
    border-right: 0;
    display: flex;
  }
  .itemdesc>div:nth-child(1)>div:last-child>div{
    margin-right: 10px;
  }
  .itemdesc>div:nth-child(2){
    height: 27px;
    align-items: center;
  }
  .itemdesc>div:nth-child(2)>.lightgreybor{
    padding: 0 12px;
    height: 27px;
    line-height: 27px;
  }
  .itembox{
    display: flex;
    background: #fff;
  }
  .itembox>div{
    align-items: center;
    justify-content: space-around;

    border-right: 1px solid #efefef;
    text-align: center;
    display: flex;

  }
  .itembox>div:last-child{
    border-right: none;
  }
  .itembox>div>div{
    display: inline-block;
    padding: 12px 10px;
  }
  .productpic img{
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
  .itembox>div>div>div{
    margin-bottom: 4px;
  }
  .prolists{
    background: #fff;
    padding-bottom: 20px;
  }
  .prostatus{
    display: flex;
    align-items: center;
  }
  .prostatus>.lightgreybor{
    width: 17px;
    height: 15px;
    background: #fff;
    margin-right: 4px;
  }
</style>
