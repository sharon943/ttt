<template>
  <div class="mycar undertake">
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
      <div class="warning">
        <div>
          <span class="icons icon-yduigantanhaokongxin red"></span>
        </div>
        <div>
          <div>
            <span>1.</span>
            <span>店铺商品管理实现一站式集中处理淘宝/天猫等各店铺的商品管理</span>
          </div>
          <div>
            <span>2.</span>
            <span>在进行迪纳普商品管理之前，必须在系统中添加授权店铺（附上链接），才能同步下载，更新商品信息</span>
          </div>
          <div>
            <span>3.</span>
            <span>同步下载商品信息：把网店店铺商品同步到本地，方便集中管理；同步更新商品信息；把本地本地编辑修改后的商品信息同步到网点店铺；批量删除；只删除本地商品</span>
          </div>
        </div>
      </div>
      <div class="undertakebox">
        <div>
          <div class="undertakebox1">
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
            <div class="lightgreybor">
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
              <el-input v-model="value" placeholder="请输入内容"></el-input>
            </div>
            <div class="sercchbtn">
              搜索
            </div>
          </div>
          <div class="undertakebox2">
            <div class="lightgreybor">批量上架</div>
            <div  class="lightgreybor">批量下架</div>
            <div  class="lightgreybor">
              <div style="display: inline-flex">
                <span class="icons icon-shanchu red"></span>
                <span>批量删除</span>
              </div>

            </div>
          </div>
        </div>
        <div class="undertakebox3">
          <div class="reds radius5">同步下载商品信息</div>
          <div class="reds radius5">同步更新商品信息</div>
        </div>
      </div>

      <div class="underlists">
        <div class="thed blods">
          <div class="productpic">
            <span style="margin: 0 auto">店铺名称</span>
          </div>
          <div class="productcode">
            <span>商品信息</span>
          </div>
          <div class="productsize">
            <span>供货商品信息</span>
          </div>
          <div class="productnum">
            <span>店铺库存</span>
          </div>
          <div class="productprice">
            <span>实际库存</span>
          </div>
          <div class="orderstatus">
            <span>库存预警</span>
          </div>
          <div class="ordertrack">
            <span>店铺商品状态</span>
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
                <div class="proedit blods">
                  <div style="display: inline-block">
                    <div style="display: flex;margin-bottom: 10px">
                      <div class="cursor m8">上架</div>
                      <div class="cursor">下架</div>
                    </div>
                    <div>
                      <div class="red cursor">删除</div>
                    </div>
                  </div>

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
        document.title = '店铺商品'
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

  .warning {
    display: flex;
    padding: 20px 0 20px 29px;
    border-bottom: 1px solid #efefef;
  }

  .warning > div:nth-child(1) {
    font-size: 48px;
    margin-right: 24px;
  }

  .warning > div:nth-child(2) > div {
    display: flex;
  }

  .warning > div:nth-child(2) > div > span {
    display: block;
    line-height: 23px;
  }

  .warning > div:nth-child(2) > div > span:nth-child(1) {
    width: 36px;
  }

  .warning > div:nth-child(2) > div > span:nth-child(2) {
    width: 710px;
    display: flex;
    flex-wrap: wrap;
  }
  .undertakebox{
    margin-bottom: 18px;
  }
  .undertakebox>div:nth-child(1){
    display: flex;
    justify-content: space-between;
  }
  .undertakebox1 {
    display: inline-flex;
    align-items: center;
    height: 65px;
    padding: 0 13px;
  }
  .undertakebox2{
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
  .underlists > .thed {
    height: 38px;
    display: flex;
    align-items: center;
    background: #dadada;
    /*color: #515056;*/
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
    width: 186px;
  }

  .productsize {
    width: 186px;
  }

  .productnum {
    width: 98px;
  }

  .productprice {
    width: 98px;
  }

  .orderstatus {
    width: 120px;
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
    width: 178px;
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
  .radius5{
    border-radius: 5px;
  }
  .undertakebox3>div{
    padding: 16px 64px;
    margin-right: 15px;
    display: inline-block;
  }
  .m8{
    margin-right: 14px;
  }
</style>
