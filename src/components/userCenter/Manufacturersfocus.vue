<template>
  <div>
    <!--<headTop></headTop>-->
    <main>
      <p>用户中心 > <span>账户安全</span></p>
      <div class="main">
        <ul class="topUL">
          <li class="active">厂家关注</li>
          <li>批量取消关注</li>
        </ul>
        <ul class="boxes" v-for="row in Stores">
          <li>
            <div class="boxLeft">
              <section class="l_top">
                <p>萌萌童装 <span>金牌厂家</span></p>
                <p>武汉江岸区某某大街上203 <img src="../../assets/img/ismargin.png" alt=""></p>
                <img src="../../assets/img/29.png" alt="">
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
              <li v-for="item in productsARR">
                <img src="../../assets/img/13.png" alt="">
                <p>6斤服装大甩卖生意好啊</p>
                <p><span>$30.00</span> 91387人看过</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>

  </div>
</template>
<script>
  // import headTop from '../config/headTop'
  export default {
    data(){

      return {
        productsARR:[{id:1},{id:2},{id:3},{id:4}],
        Stores:[{id:1},{id:2},{id:3},{id:4}],
      }
    },
    components:{
      // headTop,
    },
  }
</script>
<style scoped lang="scss">
  main{
    margin:0 auto;background:#f6f5f5;height: auto;border-top: 1px solid #f3463a;
    & >p{
      width: 1200px;margin:20px auto 0;color:#666;cursor: pointer;
      span{
        font-size: 16px;color:#333;
      }
    }
    .main{
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
      .boxes{
        margin-bottom: 10px;background: #fff;padding: 20px;
        & > li{
          margin-bottom: 10px;display: flex;justify-content: space-between;
          .boxLeft{
            width: 35%;
            & >section{
              height: 62px;
            }
            .l_top{
              position: relative;
              p{
                font-size: 12px;
                span{
                  display: inline-block;width: 80px;height: 25px;line-height: 25px;background: #ffd929;color:#bb5800;text-align: center;border:1px solid #bb5800
                }
                img{
                  width: 10px;height: 10px;
                }
              }
              & >img{
                width: 30px;height: 15px;position: absolute;right:0;top:21px;
              }
            }
            .l_middle{
              border-top:1px solid #f6f5f5;border-bottom:1px solid #f6f5f5;height: 95px;padding: 25px 0;
              & >div{
                display: flex;justify-content: space-between;font-size: 12px;
                p{
                  color:#8c8c8c;width: 150px;
                  span{
                    color:#333;font-size: 13px;
                  }
                }
              }
              & >div:nth-of-type(1){
                margin-bottom: 6px;
              }
            }
            .l_bottom{
              padding: 30px 50px;display: flex;justify-content: space-between;
              span{
                width: 120px;height: 35px;line-height: 35px;display: inline-block;text-align: center;border:1px solid #d0d0d0;color:#d0d0d0;
              }
              & >span:nth-of-type(1){
                border-color: #f45148;color: #f45148;
              }
            }
          }
          .products {
          display: flex;justify-content: space-between;
            li{
              width: 185px;height: 245px;border:1px solid #e7e7e7;box-sizing: border-box;
              border-left: none;
              p{
                margin-left: 10px;
              }
              &>p:nth-of-type(1){
                font-size: 14px;color:#333;margin: 10px 0 10px 10px;
              }
              & >p:nth-of-type(2){
                font-size: 12px;color:#666;text-align: right;margin: 0 10px;
                span{
                  color:#f45148;font-size: 14px;float: left;
                }
              }
              img{
                width: 160px;height: 160px;margin:7.5px auto 0;display: block;
              }
            }
            & > li:nth-of-type(1){
              border-left: 1px solid #e7e7e7;
            }

        }
        }


      }
    }
  }

</style>
