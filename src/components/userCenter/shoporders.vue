<template>
  <div class="mycar">
    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>店铺订单</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">店铺订单</div>
      </div>
    </div>
    <div class="mycontainer">
      <div class="editsteps">
        <div>操作步骤图</div>
        <div class="steps">
          <div class="thestep">
            <div>
              <div>
                <div class="red">1</div>
                <div class="firstfont darkgrey">同步淘宝订单</div>
              </div>
              <div>
                <div class="red">2</div>
                <div class="firstfont darkgrey">匹配商品</div>
              </div>
              <div>
                <div class="red">3</div>
                <div class="firstfont darkgrey">选择快递</div>
              </div>
              <div>
                <div class="red">4</div>
                <div class="firstfont darkgrey">提交订单</div>
              </div>
              <div>
                <div class="red">5</div>
                <div class="firstfont darkgrey">童淘淘拿货发货</div>
              </div>
              <div>
                <div class="red">6</div>
                <div class="firstfont darkgrey">回传淘宝单号</div>
              </div>
            </div>
            <div class="lines"></div>
          </div>
        </div>
        <div class="editserachs">
          <div class="selectbtn lightgreybor">
            <el-select v-model="value" placeholder="店铺名">
              <el-option
                v-for="item in shopnames"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectbtn lightgreybor">
            <el-select v-model="value" placeholder="发货状态">
              <el-option
                v-for="item in shopnames"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectbtn lightgreybor">
            <el-select v-model="value" placeholder="是否代发">
              <el-option
                v-for="item in shopnames"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="tbordernumer">
            <div  class="selectbtn lightgreybor" style="border-right: none;width: 176px">
              <el-select v-model="value" placeholder="淘宝订单编号">
                <el-option
                  v-for="item in shopnames"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div  class="lightgreybor serchs">
              <el-input v-model="value" placeholder=""></el-input>
            </div>
          </div>
          <div class="oranges cursor">搜索</div>
        </div>
        <div class="editdeletes">
          <div>
            <div class="selectbtn lightgreybor" style="width: 195px">
              <el-select v-model="value" placeholder="淘宝留言以及备注">
                <el-option
                  v-for="item in shopnames"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="cirbtns darkgrays cursor">订单批量同步</div>
            <div class="cirbtns darkgrays cursor">批量代发下单</div>
          </div>
          <div>
            <div class="cirbtns oranges cursor">刷新订单状态</div>
            <div class="cirbtns oranges cursor">批量导出订单</div>
          </div>
        </div>
      </div>
      <el-checkbox-group v-model="checkedOrders" class="boxes" @change="handleCheckedOrdersChange">
        <div class="underlists" v-for=" (row,index) in orderLists" :key="index">
          <div class="thed">
            <div class="productpic">
              <el-checkbox :label="row.id" :key="row.id">{{null}}</el-checkbox>
              <span>商品图片</span>
            </div>
            <div class="productcode">
              <span>货号</span>
            </div>
            <div class="productsize">
              <span>颜色/尺码</span>
            </div>
            <div class="productnum">
              <span>数量</span>
            </div>
            <div class="productprice">
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
            <div class="proitem lightgreybor" >
              <div class="itemdesc">
                <div>
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
                <div>
                  <div>发货商：</div>
                  <div class="lightgreybor">3E3E.CN官方合作代发</div>
                </div>
              </div>
              <div class="itembox">
                <div>
                  <div class="productpic">
                <span>
                  <img src="../../assets/img/1.png" alt="">
                </span>
                  </div>
                </div>
                <div>
                  <div class="productcode">
                    <span>豆仔小当家&卡通</span>
                  </div>
                </div>
                <div>
                  <div class="productsize">
                    <span>白色/30</span>
                  </div>
                </div>
                <div>
                  <div class="productnum">
                    <span>1</span>
                  </div>
                </div>
                <div>
                  <div class="productprice">
                    <span>9.90</span>
                  </div>
                </div>
                <div>
                  <div class="orderstatus">
                    <span>已完成</span>
                  </div>
                </div>
                <div>
                  <div class="ordertrack" style="text-align: center">
                    <div>安排拿货员（周边地区拿货取消是，着急请联系厂家代发）</div>
                    <div>拿货中</div>
                    <div style="text-align: center">
                      <div style="border: 1px dotted #F43E31;padding: 2px 4px;display: inline-block" class="red">轨迹
                      </div>
                    </div>

                  </div>
                </div>
                <div>
                  <div class="express" style="text-align: left">
                    <div>快递:申通快递 <span style="border:1px dotted #19a4f4;padding: 2px;margin-left: 3px"
                                       class="blue">普</span></div>
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
      </el-checkbox-group>

    </div>


    <!--代发须知-->
    <div class="explain-contact">
      <img src="../../assets/img/daifa2.jpeg">
      <a target="_blank" href="http://www.zhaojiafang.com/index.php?act=activity&op=dfoption"
         style="position: absolute;bottom:150px;width: 110px;height: 130px;display: inline-block;left: 0px;"></a>
      <a class="contact-qq" target="_blank" href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&amp;uin=3609751767"></a>
      <a class="contact-wechat" href="javascript:;" @click="wechatVisible=true"></a>
      <a class="contact-phone" href="javascript:;" @click="contactVisible=true"></a>
    </div>

    <div class="mydialog">
      <el-dialog
        width="277px"
        title=""
        :visible.sync="wechatVisible">
        <div class="ewcodes">
          <img src="../../assets/img/code.jpg" alt="">
          <span>扫一扫，咨询微信客服</span>

        </div>
      </el-dialog>
      <el-dialog
        width="277px"
        title=""
        :visible.sync="contactVisible">
        <div class="kfphone">

          <div class="phone">
            <p style="font-size: 18px;color:#555;padding-top:20px">客服热线</p>
            <br>
            400-115-0886
          </div>

        </div>
      </el-dialog>
    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        wechatVisible:false,
        contactVisible:false,
        value:'',
        shopnames:[
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        orderLists: [{id: 1}, {id: 2}],
        checkedOrders: [],
        checkAll: false, isIndeterminate: true, Orders: [1, 2]
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
        document.title = '店铺订单'
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


  .consultingtop .serachs {
    width: 562px;

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

  .editsteps {
    padding: 28px;
    min-height: 320px;
  }

  .editsteps > div:nth-child(1) {
    text-align: center;
    margin-bottom: 14px;
  }

  .editsteps > div:nth-child(2) {
    width: 1014px;
    margin: 0 auto;
  }
  .steps {
    position: relative;
    height: 115px;
  }
  .steps > .thestep {
    position: relative;

    overflow: hidden;
    width: 100%;
    height: 100%;

  }
  .steps > .thestep>div:nth-child(1){
    display: inline-flex;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
  }
  .steps > .thestep>div:nth-child(1)>div{
    width: 169px;
    text-align: center;
  }
  .steps > .thestep>div:nth-child(1)>div>div:nth-child(1){
    width: 44px;
    height: 44px;
    border: 1px dotted #F43E31;
    border-radius: 50%;
    text-align: center;
    line-height: 44px;
    font-size: 23px;
    font-weight: bolder;
    margin: 0 auto;
    margin-bottom: 17px;
    background: #fff;
  }
  .steps > .thestep>.lines{
    position: absolute;
    left: 74px;
    top: 22px;
    width: 858px;
    height: 1px;
    background: #F43E31;
    z-index: 1;
  }
  .editserachs{
    display: flex;
    margin-bottom: 28px;
    height: 48px;
    align-items: center;
  }
  .editserachs>div{
    margin-right: 23px;
  }
  .editserachs>div:last-child{
    margin-right: 0;
    width: 118px;
    height: 48px;
    line-height: 48px;
    text-align: center;
  }
  .editdeletes{
    display: flex;
    justify-content: space-between;
  }
  .selectbtn{
    height: 42px;
    line-height: 42px;
    width: 174px;
  }
  .tbordernumer{
    width: 394px;
    display: flex;
  }
  .tbordernumer>div:nth-child(2){
    width: 220px;
  }
  .editdeletes>div:nth-child(1)>div{
    margin-right: 22px;
  }
  .cirbtns{
    border-radius: 5px;
    height: 44px;
    line-height: 44px;
    padding: 0 24px;
    text-align: center;
  }
  .darkgrays{
    background: #707070;
    color: #fff;
  }
  .editdeletes>div{
    display: flex;
  }
  .editdeletes>div:nth-child(2)>div{
    margin-right: 20px;
  }
  .serchs .el-input__inner{
    height: 100%;
  }
  .explain-contact {
    position: fixed;
    right: 0px;
    top: 50%;
    z-index: 2;
    margin-top: -190px;
  }
  .explain-contact img {
    width: 110px;
    /*margin-right: 50px;*/
  }
  .contact-qq {
    position: absolute;
    bottom: 115px;
    width: 70px;
    height: 20px;
    display: inline-block;
    left: 20px;
  }
  .contact-wechat {
    position: absolute;
    bottom: 84px;
    width: 70px;
    height: 20px;
    display: inline-block;
    left: 20px;
  }
  .contact-phone {
    position: absolute;
    bottom: 54px;
    width: 70px;
    height: 20px;
    display: inline-block;
    left: 20px;
  }
  .ewcodes{
    width: 277px;
    height: 310px;
    border: 5px solid #F43E31;
    background: none;
    border-radius: 5px;
    overflow: hidden;
  }
  .ewcodes img {
    width: 260px;
    height: 260px;
    position: absolute;
    top: 6px;
    left: 8px;
  }
  .ewcodes span {
    bottom: 15px;
    position: absolute;
    color: #000;
    font-size: 14px;
    width: 260px;
    display: inline-block;
    text-align: center;
  }
  .kfphone .phone {
    width: 277px;
    /*height: 100px;*/
    border: 5px solid #F43E31;
    background: #fff;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    color: #fc4a00;
    padding-bottom: 30px;
  }
  .underlists > .thed {
    height: 38px;
    display: flex;
    align-items: center;
    background: #dadada;
    color: #515056;
    margin-bottom: 16px;
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
    width: 106px;
  }

  .productcode {
    width: 106px;
  }

  .productsize {
    width: 84px;
  }

  .productnum {
    width: 52px;
  }

  .productprice {
    width: 68px;
  }

  .orderstatus {
    width: 84px;
  }

  .ordertrack {
    width: 132px;
  }

  .express {
    width: 166px;
  }

  .withmess {
    width: 135px;
  }

  .orderdesc {
    width: 156px;
  }

  .proedit {
    width: 104px;
  }

  .proitem {
    margin-bottom: 14px;
  }

  .itemdesc {
    display: flex;
    justify-content: space-between;
    height: 41px;
    align-items: center;
    padding: 0 13px;
    background: #f8f8f8;
    border-bottom: 1px solid #efefef;
  }

  .itemdesc > div {
    display: flex;
    align-items: center;
    height: 13px;
  }

  .itemdesc > div:nth-child(1) {
    height: 13px;
  }

  .itemdesc > div:nth-child(1) > div {
    padding: 0 11px;
    border-right: 1px solid #605d69;
  }

  .itemdesc > div:nth-child(1) > div:last-child {
    border-right: 0;
    display: flex;
  }

  .itemdesc > div:nth-child(1) > div:last-child > div {
    margin-right: 10px;
  }

  .itemdesc > div:nth-child(2) {
    height: 27px;
    align-items: center;
  }

  .itemdesc > div:nth-child(2) > .lightgreybor {
    padding: 0 12px;
    height: 27px;
    line-height: 27px;
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
    margin-bottom: 20px;
  }

</style>
