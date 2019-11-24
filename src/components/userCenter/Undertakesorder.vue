<template>
  <div class="mycar undertake">

    <div class="mycontainer" style="background: none">
      <div class="mycontainer" style="background: none">
        <div class="productserchnav">
          <span class="lightgrey" @click="backTohome">用户中心 &gt;</span>
          <span>代发订单</span>
        </div>
      </div>
      <div class="mynavs">
        <div class="tittle reds">代发订单</div>
      </div>
    </div>
    <div class="mycontainer">
      <div class="undertake">
        <div class="undertaketips">
          <div>
            <div>代发拿货范围：</div>
            <div>您的客户经理：</div>
            <div>退 换 货地址：</div>
            <div>
              <div>代发须知：</div>
              <div>&nbsp;</div>
            </div>
            <div class="blue">运费价格表：</div>
          </div>
          <div class="lightgreybor">
            <div>
              浙江省湖州市织里镇及周边
            </div>
            <div>童淘淘代发部 座机：400-115-0886 手机号：xxxxxxxxxxxxx 下单过程中有任何问题可电联</div>
            <div>
              浙江省湖州市织里镇栋梁北路288号1号楼304室<span class="red">（拒收到付件）</span> 联系电话：xxxxxxxxxxxxxx
            </div>
            <div>
              <div>手续费每单收件<span class="red">¥0.00</span>，续件<span class="red">¥0.00</span></div>
              <div>快递费由平台根据订单总重量自动计算 <span class="red">为保证及时发货 请网销的朋友尽量找网销货源稳定的门店拿货</span></div>
            </div>
            <div>
              <span class="cursor blue">运费的价格请点击查询</span>
            </div>
          </div>
        </div>
        <div class="undertakeedit ">
          <div class="secondfont blods">
            <div @click="changestatus('全部')" :class="{active:status=='全部'}">
              <div>
                <span>全部订单</span>
                <span class="nums reds">1</span>
              </div>
            </div>
            <div @click="changestatus('待支付')" :class="{active:status=='待支付'}">
              <div>
                <span>待支付</span>
                <span></span>
              </div>
            </div>
            <div @click="changestatus('待发货')" :class="{active:status=='待发货'}">
              <div>
                <span>待发货</span>
                <span></span>
              </div>

            </div>
            <div @click="changestatus('已发货')" :class="{active:status=='已发货'}">
              <div>
                <div>
                  <span>已发货</span>
                  <span></span>
                </div>

              </div>
            </div>
            <div @click="changestatus('已完成')" :class="{active:status=='已完成'}">
              <div>
                <span>已完成</span>
                <span></span>
              </div>
            </div>
            <div @click="changestatus('已取消')" :class="{active:status=='已取消'}">
              <div>
                <span>已取消</span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="darkgrey">
            <div class="lightgreybor" @click="handleCheckAllChange('export')">
              <span class="red icons icon-daochu secondfont m8"></span><span>导出订单</span>
            </div>
<<<<<<< HEAD
            <div  class="lightgreybor" @click="handleCheckAllChange('into')">
              <span class="red icons icon-daoru secondfont m8"></span><span>导入发货单</span>
            </div>
            <div  class="lightgreybor" @click="handleCheckAllChange('establish')">
              <span class="red icons icon-order-add secondfont m8"></span><span>创建发货单</span>
            </div>
            <div  class="lightgreybor" @click="handleCheckAllChange('compensation')">
=======
            <div class="lightgreybor">
              <span class="red icons icon-daoru secondfont m8"></span><span>导入发货单</span>
            </div>
            <div class="lightgreybor">
              <span class="red icons icon-order-add secondfont m8"></span><span>创建发货单</span>
            </div>
            <div class="lightgreybor">
>>>>>>> news
              <span class="red icons icon-jiacha secondfont m8"></span><span>补差价</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="mycontainer" style="background: none">
      <div class="undertakebox">
        <div class="lightgreybor">
          <el-select v-model="value" placeholder="全部发货商">
            <el-option
              v-for="item in allshops"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="lightgreybor">
          <el-select v-model="value" placeholder="补款标识">
            <el-option
              v-for="item in allshops"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
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
            <div class="selectbtn lightgreybor" style="border-right: none;width: 176px">
              <el-select v-model="value" placeholder="淘宝订单编号">
                <el-option
                  v-for="item in allshops"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="lightgreybor">
              <el-input v-model="proname" placeholder=""></el-input>
            </div>
          </div>
          <div class="sercchbtn">
            搜索
          </div>
        </div>
      </div>
      <div class="undertakeprices ">
        <div>
          <div class="icons blods icon-liebiao red secondfont"></div>
          <div>共<span class="red blods">1</span>单</div>
        </div>
        <div>
          <div class="icons blods  icon-jifen2 red secondfont"></div>
          <div>总金额<span class="red blods">15.00</span>元</div>
        </div>
      </div>
      <el-checkbox-group v-model="checkedOrders" class="boxes" @change="handleCheckedOrdersChange">
        <div class="underlists" v-for="row in orderLists">
          <div class="thed">
            <div class="productpic">
              <el-checkbox  :label="row.id" :key="row.id">{{null}}</el-checkbox>
              <span>商品图片</span>
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
          <div class="proedit">
            <span>操作</span>
          </div>
        </div>
        <div class="prolists">
          <div class="proitem lightgreybor" v-for="(val,index) in 4" :key="index">
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
                    <div style="border: 1px dotted #F43E31;padding: 2px 4px;display: inline-block" class="red">轨迹</div>
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
      </el-checkbox-group>
      </div>
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
        checked: true,
        proname: '',
        status: '全部',
        value: '',
        allshops: [
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
      handleCheckAllChange(e) {
        switch (e) {
          case 'export':
            console.log(1);
            break;
          case 'into':
            console.log(1);
            break;
          case 'establish':
            console.log(3);
            break;
          case 'compensation':
            console.log(4);
            break;

        }
        this.checkedOrders = this.Orders; //如果这里的批量不是全选的意思删掉这行
      },
      changestatus(i) {
        this.status = i
      }
    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '代发订单'
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

  .undertake {
    padding-top: 17px;
  }

  .undertaketips {
    display: flex;
    width: 1153px;
    height: 168px;
    margin: 0 auto;
    margin-bottom: 23px;
  }

  .undertaketips > div {
    padding: 13px;
    display: block;
  }

  .undertaketips > div:nth-child(1) {
    width: 120px;
    height: 100%;
    background: #f4f4f4;
    color: #666;
  }

  .undertaketips > div:nth-child(2) {
    width: 1032px;
  }

  .undertaketips > div > div {
    margin-bottom: 8px;
    display: block;
  }

  .undertaketips > div > div > div {
    margin-bottom: 8px;
  }

  .undertakeedit {
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .undertakeedit > div {
    height: 100%;
  }

  .undertakeedit > div:nth-child(1) {
    padding-top: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }

  .undertakeedit > div:nth-child(1) > div {
    cursor: pointer;
    height: 100%;
  }

  .undertakeedit > div:nth-child(1) > div > div {
    padding: 0 15px;
    display: inline-flex;
    align-items: center;
    border-right: 1px solid #efefef;
  }

  .undertakeedit > div:nth-child(1) > div > div:last-child {
    border-right: 0;
  }

  .undertakeedit > div:nth-child(1) > div > div > .nums {
    margin-left: 15px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 2px;
    font-size: 10px;
    padding: 0 5px;
  }

  .undertakeedit > div > .active {
    border-bottom: 1px solid #f43e31;
  }

  .undertakeedit > div:nth-child(2) {
    height: 36px;
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
    font-weight: bold;

  }

  .undertakeedit > div:nth-child(2) > div {
    display: flex;
    margin-left: 10px;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
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
  }

  .undertakebox > div {
    height: 34px;
    line-height: 34px;
    width: 157px;
    margin-right: 9px;
  }

  .undertakebox > div:nth-child(3) {
    width: 258px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;

  }

  .undertakebox > div:nth-child(3) > .times {
    width: 106px;
  }

  .undertakebox > div:nth-child(4) {
    display: flex;
    width: auto;
  }

  .undertakebox > div:nth-child(4) > .sercchbtn {
    width: 62px;
    height: 100%;
    background: #535353;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    position: relative;
    left: -2px;
  }

  .undertakeprices {
    display: flex;
    justify-content: flex-end;
    height: 16px;
    align-items: center;
    margin-bottom: 24px;
  }

  .undertakeprices > div {
    padding: 0 13px;
    display: flex;
    align-items: center;
    height: 16px;
  }

  .undertakeprices > div:last-child {
    border-left: 1px solid #999;
  }

  .undertakeprices > div > div:nth-child(1) {
    margin-right: 10px;
  }
  .underlists > .thed{
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
<<<<<<< HEAD
=======

>>>>>>> news
  .prolists {
    background: #fff;
    padding-bottom: 20px;
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
</style>
