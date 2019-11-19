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
              <div class="lightgreybor cursor"></div>
              <div class="cursor">全选</div>
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
        <div class="shopedits" style="margin-bottom: 9px;">
          <div>
            <div>
              <div class="lightgreybor"></div>
              <div>这是一家店名</div>
            </div>

          </div>
        </div>
        <div>
          <div class="caredit">
            <div class="carlist darkgrey lightgreybor">
              <div>
                <div class="lightgreybor"></div>
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
                  <span  class="blue cursor">修改</span>
                </div>
                <div class="lightgreybor">
                  <div>黄色</div>
                  <div>
                    <span>120</span>
                    <span>x2</span>
                  </div>
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
          <div class="caredit">
            <div class="carlist darkgrey lightgreybor">
              <div>
                <div class="lightgreybor"></div>
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
                  <span class="blue cursor">修改</span>
                </div>
                <div class="lightgreybor">
                  <div>黄色</div>
                  <div>
                    <span>120</span>
                    <span>x2</span>
                  </div>
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
        <div class="darkgrey alllist">
          <div>
            <div>
              <div class="lightgreybor"></div>
              <div class="cursor">全选</div>
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

  </div>

</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      backTohome(){
        this.$parent.fatherMethod();
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
    height: 105px;
    margin-bottom: 13px;
    margin-top: 9px;

  }

  .carlist {
    padding: 18px 36px 18px 37px;
    display: inline-flex;
    margin-left: 25px;
    width: 1117px;
  }

  .carlist > div:nth-child(1) {
    display: flex;
    width: 305px;
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
    width: 183px;
  }

  .carlist > div:nth-child(2) > div {
    display: flex;
    justify-content: space-between;
  }

  .carlist > div:nth-child(2) > div:nth-child(2) {
    display: flex;
    margin-top: 14px;
    align-items: center;
  }

  .carlist > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) {
    width: 58px;
    border-right: 1px solid #efefef;
    height: 29px;
    text-align: center;
    line-height: 29px;
  }

  .carlist > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    width: 125px;
  }

  .carlist > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span {
    display: inline-block;
  }

  .carlist > div:nth-child(3) {
    width: 202px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .carlist > div:nth-child(4) {
    width: 155px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 152px;
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
    background-color: #fff;
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
    width: 329px;
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
    width: 183px;
  }

  .shopedits > div:nth-child(3) {
    width: 202px;
    justify-content: space-around;
  }

  .shopedits > div:nth-child(4) {
    width: 155px;
    justify-content: space-around;
    margin-right: 152px;
  }

  .shopedits > div:nth-child(5) {
    width: 46px;
    justify-content: space-around;

  }

</style>
