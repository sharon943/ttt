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
            <div  class="lightgreybor"></div>
          </div>
          <div class="oranges">搜索</div>
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
    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        value:'',
        shopnames:[
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }
        ]
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

  .editsteps {
    padding: 28px;
    min-height: 496px;
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
</style>
