<template>
  <div class="Shopdetails">
    <div class="shophead">
      <div class="mycontainer">
        <div class="shopname">
          <div>
            <div class="red bigfont blods">哈米童装服装店</div>
            <div>
              <div>
                <a class="lightgrey" href="http://maomltz598.3e3e.cn/">http://maomltz598.3e3e.cn/</a>
              </div>
              <div class="lightgrey">
                <span class="cursor">保存快捷方式</span>
                <span>|</span>
                <span class="cursor">关注</span>
              </div>
            </div>
            <div class="khakis smallbtn lightgreybor">金牌标签</div>

          </div>
          <div>
            <div class="darkgrey">
              <div>
                <div class="contact">
                  <div>拿货咨询：</div>
                  <div>25****67</div>
                  <div>
                    <span class="icon-md-qq"></span>
                  </div>
                </div>
              </div>
              <div>
                <div class="shoptels">
                  <div class="icons icon-tel"></div>
                  <div class="blods black">15657584647</div>
                  <div class="lightgreybor lightgrey">完成号码</div>
                </div>
              </div>
              <div>
                <div>拿货地址：浙江省湖州市织里镇栋梁北路288号汇联跨境电商</div>
              </div>
            </div>
            <div class="ercode">
              <img src="../assets/img/ismargin.png" alt="">
            </div>
          </div>
        </div>
        <div class="tabs">
          <div class="mytab firstfont">
            <span>店铺首页</span>
            <span class="active">供应商品</span>
            <span>已下架产品</span>
          </div>
          <div class="darkgrey">
            <span>厂家动态</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mycontainer">
      <div class="commodity">
        <div class="left">
          <div class="picdetail">
            <div>
              <img src="../assets/img/shopdetail/list.jpg" alt="">
            </div>
            <div class="lunbolist">
              <swiper :options="swiperOptionlist">
                <swiper-slide v-for="(val,index) in 6" :key="index">
                  <div class="items">
                    <img src="../assets/img/shopdetail/list.jpg" alt="">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="accounts">
            <div class="edit">
              <div class="share-box">
                <a href="javascript:;" pid="oicocmq" class="product-uncollected">收藏<span
                  class="lightgrey">(21)</span></a>
                <a href="javascript:;" class="product-share" pid="oicocmq"><span class="lightgrey">分享</span><i
                  class="small"></i></a>
              </div>
            </div>
            <div class="threefont blods shoptitle">童装&羊羔毛</div>
            <div class="red tsmess">发布及下载请不要随意修改货号便于供应链为你提高找货速度</div>
            <div class="updates blods">
              <div class="oranges lightorangrebor">
                <div>
                  <span class="firstfont">今日</span>
                  <span>更新</span>
                </div>
              </div>
              <div class="orangrebor">
                <div>
                  <span class="darkgrey firstfont">分销数</span><span class="orange">21</span>
                </div>
              </div>
            </div>
            <div class="lightgreybor shopprice">
              <div class="lightpinks">
                <div>
                  <span class="darkgrey">供货价</span>
                  <span class="red threefont">
                                    <b class="supnumfont supplyprice">￥40.</b>00
                                </span>
                </div>
                <div>
                  <span class="darkgrey">整拿价</span>
                  <span class="lightgrey wholeprice">暂未设置，请联系厂商</span>
                </div>
              </div>
              <div class="firstfont darkgrey blods shopdesc">
                <div class="descdetail">
                  <span>2019冬季新款羊羔毛外套</span>
                  <span>偏小一码</span>
                </div>
                <span><i></i></span>
              </div>
            </div>
            <div class="editlist lightgrey">
              <div class="normalfont rules">
                <div>
                  <span class="duigou orange"></span>
                  <span>三日新款</span>
                </div>
                <div>
                  <span class="duigou orange"></span>
                  <span>一件起批</span>
                </div>
                <div>
                  <span class="duigou orange"></span>
                  <span>支持代发拿货</span>
                </div>
              </div>
              <div class="productheight">
                <div>身高</div>
                <div class="size">
                  <div class="lightgreybor cursor" :class="{activesize:size==val}" v-for="(val,index) in sizelist" :key="index" @click="size=val">{{val}}</div>
                </div>
                <div>
                  <span>(标准尺码，共<b class="orange">5</b>个码)</span>
                </div>
              </div>
              <div class="productcolor">
                <div>
                  颜色
                </div>
                <div>
                  <div>
                    <div>
                      黑色
                    </div>
                    <div>
                      40.00
                    </div>
                    <div>
                      <div>0件可售</div>
                      <div class="editnum">
                        <el-input-number size="mini" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      灰黑色
                    </div>
                    <div>
                      40.00
                    </div>
                    <div>
                      <div>0件可售</div>
                      <div class="editnum">
                        <el-input-number size="mini" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        <!--<div class="subtract">-</div>-->
                        <!--<input data_step="1" data_min="0" data_max="50" data_digit="0" value="10"/>-->
                        <!--<div class="add">+</div>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="operation">
              <div>
                <div class="lightorangrebor rosereds firstfont blods onlineorder">在线下单</div>
                <div class="addtoCart orangrebor lightoranges operationbtn orange">
                  <div>
                    <span class="iconfont icon-jiarujinhuodan"></span><span>加入购物车</span>
                  </div>
                </div>
              </div>
              <div>
                <div class="blods release">
                  <div class="reds firstfont releasetb">发布到淘宝</div>
                  <div class="orangrebor lightoranges orange  morerelease"><span>更多发布</span><span
                    class="iconfont icon-zhankai"></span></div>
                </div>
                <div class="orangrebor lightoranges orange firstfont blods operationbtn uploadpics">下载图片包
                </div>
                <div class="orangrebor lightoranges orange firstfont operationbtn bulkoperation">加入批量操作
                </div>
              </div>
              <div>
                <div class="Sorrels firstfont Association">关联商品</div>
                <div class="lightgrey Associationdesc">关联后产品的上下架将会在后台单独通知</div>
              </div>
            </div>
          </div>

        </div>
        <div class="right">
          <div class="firstfont blods Feature">
            橱窗推荐
          </div>
          <div class="mychuchuang">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(val,index) in 6" :key="index" class="swiperpro">
                <div class="Featureddproducts">
                  <div class="lightgreybor items">
                    <div>
                      <img src="../assets/img/shopdetail/recommend.jpg" alt="">
                    </div>
                    <div class="darkgrey">
                      <div>
                        <span>￥</span><span class="red  blods productprice">20</span>
                      </div>
                      <div>夏季新款热卖</div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>

          </div>

        </div>
      </div>

    </div>
    <div class="mycontainer">
      <div class="companyData">
        <div class="lightgreybor left">
          <div class="Sorrels threefont companyname">
            童淘淘认证商家
          </div>
          <div class="rzmess firstfont companymess">
            <div class="red blods secondfont myshopname">店名</div>
            <div class="companyrz">
              <div>
                <div class="lightgrey">经营模式：</div>
                <div>经销代理</div>
              </div>
              <div>
                <div class="lightgrey">供应等级：</div>
                <div>Lv12</div>
              </div>
              <div>
                <div class="lightgrey">实名认证：</div>
                <div>
                  <span>罗*英</span>
                  <span><img src="../assets/img/main/product/id_card.png" alt=""></span>
                </div>
              </div>
              <div>
                <div class="lightgrey">营业执照认证：</div>
                <div>
                  <span><img src="../assets/img/shopdetail/license.jpg" alt=""></span>
                </div>
              </div>
            </div>
            <div class="lightgreybor focuson">关注商家</div>
          </div>

          <div class="rzmess">
            <div class="blods secondfont">联系方式</div>
            <div class="companyrz">
              <div>
                <div class="lightgrey">电话：</div>
                <div></div>
              </div>
              <div>
                <div class="lightgrey">货址：</div>
                <div></div>
              </div>
              <div>
                <div class="lightgrey">厂址：</div>
                <div></div>
              </div>
              <div>
                <div class="lightgrey">QQ：</div>
                <div></div>
              </div>
              <div>
                <div class="lightgrey">微信：</div>
                <div></div>
              </div>
            </div>
            <div class="scan">
              <div>
                <img src="../assets/img/shopdetail/code.jpg" alt="">
              </div>
              <div class="lightgrey">扫码进入童淘淘店铺</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="prodetails lightgreybor">
            <div class="lightgreys darkgrey active" @click="selitem='商品详情'">
              <div><span>商品详情</span></div>
            </div>
            <div class="lightgreys darkgrey" @click="selitem='拿货咨询'">
              <div><span>拿货咨询</span></div>
            </div>
            <div class="lightgreys darkgrey" @click="selitem='发布人气'">
              <div><span>发布人气</span><span class="orange">6</span></div>
            </div>
            <div class="lightgreys darkgrey" @click="selitem='下载人气'">
              <div><span>下载人气</span><span class="orange">9</span></div>
            </div>
            <div class="lightgreys darkgrey" @click="selitem='数据'">
              <div><span>数据</span></div>
            </div>
            <div class="lightgreys darkgrey" @click="selitem='投诉'">
              <div><span>投诉</span></div>
            </div>
            <div class="lightgreys darkgrey" @click="selitem='服务承诺'">
              <div><span>服务承诺</span></div>
            </div>
            <div class="lightgreys darkgrey " @click="innerVisible=true">
              <div class="shopsvcode"><span class="shopcode"><img
                src="../assets/img/main/product/phone_ico.png" alt=""></span><span>商家手机店铺</span></div>
            </div>
          </div>
          <div class="prodesc">
            <div class="proitem" v-if="selitem=='商品详情'">
              <div class="lightgrey attributeList">
                <div>
                  <div><span>风格：</span><span><span href="">百搭</span></span></div>
                  <div><span>产地：</span><span>中国大陆</span></div>
                  <div><span>颜色分类：</span><span><span>米黄色</span> <span>灰色</span></span></div>
                </div>
                <div>
                  <div><span>适用季节：</span><span><span>冬季</span></span></div>
                  <div><span>安全等级：</span><span><span>B类</span></span></div>

                </div>
                <div>
                  <div><span>图案：</span><span><span>百搭</span></span></div>
                  <div><span>是否带帽子：</span><span><span>中国大陆</span></span></div>
                  <div><span>参考身高：</span><span><span>100</span><span>110</span><span
                  >120</span><span
                  >90</span><span>80</span></span></div>
                </div>
                <div>
                  <div><span>适用性别：</span><span><span>中性</span></span></div>
                  <div><span>衣门襟：</span><span><span>拉链衫</span></span></div>

                </div>
              </div>
              <div class="keywordbox">
                <div class="tittle">标题关键词推荐</div>
                <div class="keyword">
                  <i class="arrow" style="border-right-color: #949494"></i>2019新款羊羔毛外套 加棉加厚小棉衣
                </div>
              </div>
              <div>
                <div class="darkgrey messdetails">
                  <div>
                    <span>【厂家名称】：</span><span></span>
                  </div>
                  <div>
                    <span>【货号】：</span><span></span>
                  </div>
                  <div>
                    <span>【批发价】：</span><span></span>
                  </div>
                  <div>
                    <span>【材质】：</span><span></span>
                  </div>
                  <div>
                    <span>【颜色种类】：</span><span></span>
                  </div>
                  <div>
                    <span>【联系电话】：</span><span></span>
                  </div>
                  <div>
                    <span>【退换货规则】：</span><span></span>
                  </div>
                </div>
                <div class="productdescs">
                  <img src="../assets/img/shopdetail/20191007776264001_750.jpg" alt="">
                  <img src="../assets/img/shopdetail/20191007776264002_750.jpg" alt="">
                </div>
              </div>
            </div>
            <div class="proitem" v-if="selitem=='拿货咨询'">
              <div class="refers">
                <div class="refermethod"><h2>上门拿货方式</h2></div>
                <div class="lightgrey referul">
                  <div>
                    <span>拿货地址： </span>
                    <span> 大河村 大河新村一区50-5后门</span>
                  </div>
                  <div>
                    <span>联系电话：</span>
                    <span>13967261240 </span>
                  </div>
                  <div>
                    <span>厂家联系人QQ：</span>
                    <span>1226052354 <i class="icon-md-qq"></i></span>
                  </div>
                  <div>
                    <span>联系我时,请告知是在3E3E.CN上看到的信息</span>
                  </div>
                </div>
                <div class="refermethod"><h2>代发拿货方式:400-806-8866</h2></div>
                <div class="referts"><span href="javascript:;">生意网官方代发</span></div>
                <div class="refersbtn"><span>立即找代发货</span></div>
              </div>
            </div>
            <div class="proitem" v-if="selitem=='发布人气'">
              <div class="lightgrey publishitem">
                <div>
                  <ul>
                    <li class="pubtaobao">
                      <span class="name"> 木***子</span>
                      <span class="level">
                                            <img src="../assets/img/slevel/s_5.gif" alt="">
                                        </span>
                      <span class="time">2019-10-31 11:38:46</span>
                    </li>
                    <li class="pubtaobao">
                      <span class="name"> 木***子</span>
                      <span class="level">
                                            <img src="../assets/img/slevel/s_6.gif" alt="">
                                        </span>
                      <span class="time">2019-10-31 11:38:46</span>
                    </li>
                    <li class="pubtaobao">
                      <span class="name"> 木***子</span>
                      <span class="level">
                                            <img src="../assets/img/slevel/s_7.gif" alt="">
                                        </span>
                      <span class="time">2019-10-31 11:38:46</span>
                    </li>
                    <li class="pubtaobao">
                      <span class="name"> 木***子</span>
                      <span class="level">
                                            <img src="../assets/img/slevel/s_8.gif" alt="">
                                        </span>
                      <span class="time">2019-10-31 11:38:46</span>
                    </li>
                    <li class="pubtaobao">
                      <span class="name"> 木***子</span>
                      <span class="level">
                                            <img src="../assets/img/slevel/s_9.gif" alt="">
                                        </span>
                      <span class="time">2019-10-31 11:38:46</span>
                    </li>
                    <li class="pubtaobao">
                      <span class="name"> 木***子</span>
                      <span class="level">
                                            <img src="../assets/img/slevel/s_10.gif" alt="">
                                        </span>
                      <span class="time">2019-10-31 11:38:46</span>
                    </li>
                    <li class="pubtaobao">
                      <span class="name"> 木***子</span>
                      <span class="level">
                                            <img src="../assets/img/slevel/s_12.gif" alt="">
                                        </span>
                      <span class="time">2019-10-31 11:38:46</span>
                    </li>
                  </ul>
                </div>
                <div class="publishright">
                  <div>人气商品</div>
                  <div><span>
                                    <img src="../assets/img/shopdetail/20191007776264001_750.jpg" alt="">
                                </span></div>
                  <div class="operate">
                    <a href="javascript:;" class="product-collected" pid="oiimams"><i
                      class="icon-supplier-collected"></i>关注</a>
                    <a href="javascript:;" class="product-share" pid="oiimams">分享</a>

                    <span>供货价 <i class="text-orange">60.00</i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="proitem" v-if="selitem=='下载人气'">
              <div class="downbox">
                <ul class="lightgrey">
                  <li>
                    <span class="name">飞***人</span>
                    <span class="level"></span>
                    <span class="source">
                                        图片包
                                    </span>
                    <span class="time">2019-11-01 16:22:15</span>
                  </li>
                  <li>
                    <span class="name">飞***人</span>
                    <span class="level"></span>
                    <span class="source">
                                        图片包
                                    </span>
                    <span class="time">2019-11-01 16:22:15</span>
                  </li>
                </ul>
                <div class="publishright">
                  <div>人气商品</div>
                  <div><a href="">
                    <img src="../assets/img/shopdetail/20191007776264001_750.jpg" alt="">
                  </a></div>
                  <div class="operate">
                    <a href="javascript:;" class="product-collected" pid="oiimams"><i
                      class="icon-supplier-collected"></i>关注</a>
                    <a href="javascript:;" class="product-share" pid="oiimams">分享</a>

                    <span>供货价 <i class="text-orange">60.00</i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="proitem" v-if="selitem=='数据'"></div>
            <div class="proitem" v-if="selitem=='投诉'">
              <div class="lightgrey complaint">
                <div class="tips">
                  产品投诉成立会直接影响该产品的排名权重及评估分值，请谨慎处理！系统会对投诉人信息保密，请勿担忧。
                </div>
                <div class="form-box">
                  <div class="type">
                    <label>投诉类型：</label>
                    <select name="complain_category_id" id="complain_category_id">
                      <option value="">请选择投诉类别</option>
                      <option value="1">-标价与门市价格不符</option>
                      <option value="2">-产品已停止供货</option>
                      <option value="3">-经常缺货，供货极不稳定</option>
                      <option value="4">-产品质量很糟糕</option>
                      <option value="5">-不提供售后服务</option>
                      <option value="6">-文字描述与实物不符</option>
                      <option value="7">-非实拍图片与实物不符</option>

                    </select>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="small" type="primary" style="height: 22px;padding: 2px 15px">点击上传</el-button>
                    </el-upload>
                    <!--<input type="button" value="附件" onclick="$('#complain_imgs').click();" class="file-btn">-->
                    <!--<span id="complain_imgs_msg" style="display:inline;float:none;">上传图片</span>-->
                    <form id="complain_img_upload" style="display:none">
                      <input type="file" id="complain_imgs" accept=".jpg" multiple="multiple">
                      <input type="hidden" id="complain_imgs_path" value="">
                    </form>
                  </div>
                  <div class="reason">
                    <label>投诉理由：</label>
                    <textarea id="review"></textarea>
                  </div>
                  <input type="button" class="submit" value="提交投诉" id="reviewbtn">
                  <p class="bot-tips">为保证投诉处理的公正性，请尽量对情况进行详细客观的描述。</p>
                </div>
              </div>
            </div>
            <div class="proitem" v-if="selitem=='服务承诺'">
              <div class="buyexplain lightgrey">无说明</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mydialog">
      <el-dialog
        width="150px"
        title=""
        :visible.sync="innerVisible">
        <div class="ewcodes">
          <img src="../assets/img/logo.png" alt="">
        </div>
      </el-dialog>
    </div>


  </div>


</template>
<script>
  export default {
    data() {
      return {
        sizelist:['80','90','100','110','120'],
        size:'80',
        selitem: '商品详情',
        fileList: [],
        innerVisible:false,
        num: 1,
        swiperOptionlist:{
          slidesPerView: 5,
          spaceBetween: 10,
          // init: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperOption: {
          // loop:true,
          autoplay : 3000,
          direction: 'vertical',
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }

      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleChange(value) {
        console.log(value);
      }
    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '店铺详情'
      })
    }
  }
</script>
<style scoped>
  .Shopdetails {
    font-size: 12px;
    width: 100%;
    padding-bottom: 80px;
  }

  .shophead {
    border-bottom: 1px solid #f43e31;
    width: 100%;
  }

  .shopname {
    height: 124px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .shopname > div:nth-child(1) {
    padding-top: 26px;
  }

  .shopname > div:nth-child(1) > div {
    margin-bottom: 5px;
  }

  .shopname > div:nth-child(1) > div:nth-child(2) {
    display: flex;
  }

  .shopname > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) {
    margin-right: 12px
  }

  .shopname > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a {
    display: block;
    color: #999;
  }

  .shopname > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
    display: flex;
  }

  .shopname > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span {
    margin-right: 5px;
    cursor: pointer;
  }
  .shopname > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:hover {
    color: #fd6619;
  }
  .shopname > div:nth-child(1) > div:last-child {
    width: 95px;
  }

  .shopname > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    padding-top: 22px;
  }

  .shoptels {
    height: 22px;
    display: flex;
    align-items: center;
    width: 193px;
    justify-content: flex-end;
  }

  .shoptels .black {
    color: #000;
    font-weight: bolder;
    margin-right: 10px;
    margin-left: 4px;
  }

  .shoptels > div:nth-child(1) {
    width: 12px;
    height: 17px;
  }

  .shoptels > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .shoptels > div:nth-child(3) {
    width: 73px;
    text-align: center;
  }

  .shopname > div:nth-child(2) > div:nth-child(1) {
    margin-right: 14px;
  }

  .shopname > div:nth-child(2) > div:nth-child(1) > div {
    margin-bottom: 10px;
    line-height: 22px;
    display: flex;
    justify-content: flex-end;
  }

  .contact {
    height: 22px;
    display: flex;
    align-items: center;
    width: 193px;
    justify-content: space-between;
    padding-left: 2px;
    margin-top: 6px;
  }

  .contact > div:nth-child(2) {
    display: inline-block;
    transform: scale(0.9);
  }

  .contact > div:nth-child(3) {
    width: 75px;
    height: 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #b4e5fc;
    border: 1px solid #d6eef9;
    border-radius: 3px;
  }

  .contact > div:nth-child(3) > span:nth-child(2) {
    color: #666;

  }

  .cursor {
    cursor: pointer;
  }

  .tabs {
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .commodity {
    height: 637px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    background: #fff;
  }

  .commodity > .left {
    display: flex;
  }

  .picdetail {
    width: 450px;
    margin-right: 12px;
  }

  .picdetail > div:nth-child(1) {
    width: 450px;
    height: 450px;
  }

  .picdetail > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .picdetail > div:nth-child(2) {
    display: flex;
    margin-top: 13px;
  }

  .picdetail > div:nth-child(2)  .items {
    width: 58px;
    height: 58px;
    margin-right: 9px;
  }

  .picdetail > div:nth-child(2)  .items > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .accounts {
    width: 470px;
    border-top: 1px solid #e7e7e7;
    padding: 0 8px;
  }

  .edit {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 3px;
  }

  .edit > div {
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
  }

  .share-box a {
    float: left;
    text-align: center;
    margin: 0px 10px 0 10px;
    background-repeat: no-repeat;
    padding-left: 18px;
    color: #9a9a9a;
  }

  .product-uncollected {
    background: url('../assets/img/main/icon_uncollected.png') no-repeat 0 center !important;
  }

  .share-box .product-share {
    background: url('../assets/img/main/icon-share.png') no-repeat 4px center;
  }

  .shoptitle {
    margin-bottom: 14px;
  }

  .tsmess {
    margin-bottom: 16px;
  }

  .updates {
    display: flex;
    text-align: center;
    margin-bottom: 6px;
  }

  .updates > div {
    display: flex;
    height: 26px;
    align-items: center;
    width: 74px;
    margin-right: 2px;
  }

  .updates > div > div {
    display: inline-block;
    margin: 0 auto;
  }

  .shopprice {

  }

  .wholeprice {
    font-size: 13px;
  }

  .shopprice > div:nth-child(1) {
    padding: 18px 14px 12px 14px;
    border-bottom: 1px solid #e8e8e8;
  }

  .shopprice > div:nth-child(1) > div {
    display: flex;
  }

  .shopprice > div:nth-child(1) > div > span:nth-child(1) {
    margin-right: 8px;
  }

  .shopprice > div:nth-child(1) > div:nth-child(1) {
    height: 24px;
    line-height: 24px;
    margin-bottom: 18px;
  }

  .shopprice > div:nth-child(1) > div:nth-child(2) {
    line-height: 16px;
  }

  .supplyprice {
    padding-left: 7px;
  }

  .shopprice > div:nth-child(2) {
    padding: 12px 14px;
  }

  .shopdesc {
    position: relative;
  }

  .shopdesc > span {
    position: absolute;
    top: -20px;
    left: 20px;
    display: block;
    height: 0;
    width: 0;
    font-size: 0;
    line-height: 0;
    border-color: transparent transparent #e6e6e6 transparent;
    border-style: dashed dashed solid dashed;
    border-width: 10px;
  }

  .shopdesc > span > i {
    position: absolute;
    top: -9px;
    left: -10px;
    display: block;
    height: 0;
    width: 0;
    font-size: 0;
    line-height: 0;
    border-color: transparent transparent #fff transparent;
    border-style: dashed dashed solid dashed;
    border-width: 10px;
  }

  .editlist {
    padding-left: 14px;
    margin-top: 12px;
  }

  .editlist > div {
    display: flex;
    margin-bottom: 14px;
  }

  .rules > div {
    margin-right: 35px;
    height: 13px;
    display: flex;
    align-items: center;
  }

  .rules > div > span:nth-child(1) {
    margin-right: 2px;
  }

  .productheight {
    height: 25px;
    display: flex;
    align-items: center;
  }

  .productheight > div {
    margin-right: 8px;
  }

  .productheight > .size {
    display: flex;

  }

  .productheight > .size > div {
    height: 25px;
    line-height: 25px;
    padding: 0 3px;
    margin-right: 4px;
    text-align: center;
  }

  .productheight > .size > .activesize {
    color: #fd6619;
    border: 1px solid #fd6619;
  }

  .productcolor {
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #f6f6f6;
  }

  .productcolor > div:nth-child(1) {

  }

  .productcolor > div:nth-child(2) {
    width: 404px;
  }

  .productcolor > div:nth-child(2) > div {
    border-top: 2px solid #f6f6f6;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
  }

  .productcolor > div:nth-child(2) > div > div:nth-child(1) {
    width: 114px;
  }

  .productcolor > div:nth-child(2) > div > div:nth-child(2) {
    width: 108px;
  }

  .productcolor > div:nth-child(2) > div > div:last-child {
    width: 184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .editnum {
    height: 27px;
    line-height: 27px;
    /*display: flex;*/
    /*justify-content: space-between;*/
  }

  /*.editnum > div {*/
    /*text-align: center;*/
    /*width: 27px;*/
    /*height: 27px;*/
  /*}*/

  /*.editnum > input {*/
    /*width: 63px;*/
    /*border-left: 1px solid #e5e5e5;*/
    /*border-right: 1px solid #e5e5e5;*/
    /*text-align: center;*/
    /*font-weight: bolder;*/
  /*}*/

  .operation > div {
    display: flex;
    height: 40px;
    line-height: 40px;
    align-items: center;
    text-align: center;
    margin-bottom: 9px;
  }

  .operation > div {
    display: flex;
    justify-content: space-between;
  }

  .onlineorder {
    width: 327px;
  }

  .addtoCart {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .addtoCart > div {
    display: inline-flex;
  }

  .operationbtn {
    width: 118px;
  }

  .release {
    display: flex;
  }

  .releasetb {
    width: 125px;
    border: 1px solid #f42341;
    border-right: none;
    background: #f10c28;
  }

  .morerelease {
    width: 86px;
  }

  .Association {
    width: 125px;
  }

  .Associationdesc {
    width: 310px;
    text-align: left;
  }

  .commodity > .right {
    width: 190px;
  }

  .Feature {
    border-left: 2px solid #fc6b1f;
    height: 14px;
    padding-left: 4px;
    margin-left: 3px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .Featureddproducts {
    width: 100%;
  }

  .Featureddproducts > .items {
    width: 100%;
    height: 238px;
  }

  .Featureddproducts > .items > div:nth-child(1) {
    width: 100%;
    height: 180px;
    border-bottom: 1px solid #e6e6e6;
  }

  .Featureddproducts > .items > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .Featureddproducts > .items > div:nth-child(2) {
    padding: 9px 12px;
  }

  .Featureddproducts > .items > div:nth-child(2) > div {
    margin-bottom: 7px;
  }

  .productprice {
    font-size: 16px;
  }

  .companyData {
    display: flex;
    background: #fff;
  }

  .companyData > .left {
    width: 255px;
    margin-right: 3px;
  }

  .rzmess {
    padding: 0 14px;
    padding-top: 16px;
  }

  .companymess {
    height: 246px;
    border-bottom: 1px solid #e8e8e8;
  }

  .companyname {
    height: 55px;
    line-height: 55px;
    text-align: center;
  }

  .myshopname {
    text-align: center;
  }

  .companyrz {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 15px;
  }

  .companyrz > div {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    height: 14px;
  }

  .companyrz > div > div {
    display: flex;
    align-items: center;
  }

  .companyrz > div > div > span {
    margin-right: 4px;
    display: block;
  }

  .companyrz > div > div > span > image {
    display: block;

  }

  .focuson {
    height: 28px;
    line-height: 28px;
    margin: 0 auto;
    text-align: center;
    width: 120px;
    margin-top: 25px;
  }

  .scan {
    margin-top: 24px;
    text-align: center;
  }

  .scan > div:nth-child(1) {
    width: 85px;
    height: 85px;
    border-radius: 8px;
    overflow: hidden;
    background: #e33a33;
    padding: 6px;
    margin: 0 auto;
  }

  .scan > div:nth-child(1) > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .scan > div:nth-child(2) {
    margin-top: 17px;
    margin-bottom: 26px;
  }

  .companyData > .right {
    padding-top: 8px;
  }

  .prodetails {
    border-bottom: none;
    height: 36px;
    display: inline-flex;
    align-items: center;
  }

  .prodetails > div {
    text-align: center;
    line-height: 36px;
    border-left: 1px solid #e8e8e8;

    cursor: pointer;
  }

  .prodetails > div:first-child {
    border-left: none;
  }

  .prodetails > div > div {
    padding: 0 12px;
    display: flex;
    color: #999;
  }

  .prodetails > .active {
    color: #fff !important;
    font-weight: bold;
    background: #ff6c00;
    height: 100%;
    line-height: 31px;
    border-color: #ff6c00 !important;
  }

  .prodetails > .active > div {
    color: #fff !important;
  }

  .prodetails > div > div:hover {
    color: #ff6c00;
  }

  .prodesc {
    overflow: hidden;
    padding: 15px 18px;
    border: 1px solid #e8e8e8;

    border-top: 3px solid #ff6c00;
    width: 785px;
    position: relative;
    top: -1px;
    z-index: 1;
  }

  .prodesc > .proitem {

  }

  .attributeList {
    display: flex;
  }

  .attributeList > div {
    width: 184px;
    padding-right: 7px;
    overflow: hidden;
    color: #a3a3a3;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .attributeList > div > div {
    height: 17px;
    display: flex;
    align-items: center;
    margin: 13px 0 0;
  }

  .attributeList > div > div > span {
    display: flex;
    align-items: center;
  }

  .attributeList > div > div > span > a {
    display: block;
    color: #a3a3a3;
    margin-right: 4px;
  }

  .attributeList > div > div > span > a:hover {
    color: #fd6619;
  }

  .keywordbox {
    padding: 20px 0;
    padding-left: 2px;
    display: flex;
    align-items: center;
  }

  .keywordbox > .keyword {
    color: #fff;
    padding: 2px 4px;
    margin-left: 10px;
    position: relative;
    background: #949494;
    line-height: 16px;
  }

  .keywordbox .keyword .arrow {
    position: absolute;
    left: -12px;
    top: 4px;
    border: 6px solid transparent;
    border-right-color: #949494;
  }

  .productdescs {
    display: block;
  }

  .productdescs > img {
    display: block;
    width: auto;
    max-width: 100%;
  }

  .messdetails {
    margin-bottom: 8px;
  }

  .messdetails > div {
    display: flex;
    align-items: center;
    height: 17px;
  }

  .refers .refermethod {
    color: #343434;
    line-height: 40px;
  }

  .refers > .referul {
    line-height: 25px;
  }

  .refers > .referul > div {
    display: flex;
    align-items: center;
  }

  .refers > .referul > div > span {
    display: flex;
    align-items: center;
  }

  .referts > a {
    display: block;
    color: #0c93ff;
    font-size: 13px;
    font-weight: bold;
  }

  .refersbtn {
    display: inline-block;
    margin-top: 10px;
    padding: 0 15px;
    line-height: 40px;
    color: #fff;
    background-color: #0c93ff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px;
  }

  .refersbtn > a {
    display: block;
    color: #fff;
  }

  .icon-md-qq {
    background: url('../assets/img/main/qq_talk.png') no-repeat 0 0;
    width: 77px;
    height: 22px;
    cursor: pointer;
    display: inline-block;
  }

  .icons {
    display: inline-block;
    vertical-align: middle;
    background-image: url('../assets/img/main/icons.png');
  }

  .icon-tel {
    background-position: -56px -158px;
    width: 11px;
    height: 17px;
  }

  .duigou {
    width: 12px;
    height: 12px;
    background-image: url('../assets/img/main/ico_arrow.png');
  }

  .publishitem {
    display: flex;
    justify-content: space-between;
  }

  .publishitem > div:nth-child(1) > ul {
    width: 522px;
    float: left;
    border-right: 1px solid #e8e8e8;
    min-height: 270px;
  }

  .pubtaobao {
    display: flex;
  }

  .pubtaobao > span {
    display: inline-flex;
    height: 20px;
    overflow: hidden;
    line-height: 20px;
    align-items: center;
    margin-bottom: 4px;
  }

  .pubtaobao > .name {
    width: 130px;
  }

  .pubtaobao > .level {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pubtaobao > .level > img {
    display: block;
  }

  .pubtaobao > .time {
    width: 140px;
  }

  .publishright {
    width: 220px;
    padding-left: 20px;
  }

  .publishright > .operate {
    position: relative;
  }

  .publishright > div > span {
    display: block;

  }

  .publishright > div:nth-child(2) {
    margin: 15px 0;
  }

  .publishright > div > span > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .publishright .operate span {
    display: inline-block;
    color: #999;
  }

  .publishright .operate span:hover {
    color: #ff6c00;
  }

  .icon-supplier-collected {
    background-image: url('../assets/img/main/product/collected.png');
  }

  .publishright .product-share {
    padding: 0 10px;
    border-left: 1px solid #dfdfdf;
    margin: 0 5px;
  }

  .publishright .operate span {
    position: absolute;
    right: 0;
    top: -6px;
  }

  .publishright .operate span i {
    font-size: 18px;
    position: relative;
    color: #ff6c00;
    font-style: normal;
  }

  a:hover {
    color: #ff6c00;
  }

  .prodetails > div .shopcode {
    width: 22px;
    height: 100%;
    display: flex;
  }

  .shopcode {
    display: inline-flex;
    width: 16px;
    height: 100%;
    align-items: center;
  }

  .shopcode > img {
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }

  .shopsvcode {
    display: flex;
    align-items: center;
  }

  .downbox {
    display: flex;
    justify-content: space-between;
  }

  .downbox > ul {
    width: 522px;
    border-right: 1px solid #e8e8e8;
    min-height: 270px;
  }

  .downbox > ul > li {
    margin: 6px 0;
    overflow: hidden;
    display: flex;
  }

  .downbox > ul > li > .name {
    width: 130px;
  }

  .downbox > ul > li > .level {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .downbox > ul > li > .source {
    width: 80px;
  }

  .downbox > ul > li > .time {
    width: 140px;
  }

  .complaint > .tips {
    position: relative;
    border-top: none;
    background-color: #fff;
    color: #f00;
  }

  .form-box {
    background: #e8e8e8;
    padding: 10px;
    margin-top: 10px;
  }

  .form-box .type {
    line-height: 22px;
  }

  .form-box .type select {
    height: 22px;
    vertical-align: top;
  }

  .form-box .type .file-btn {
    border: none;
    background: #C7C7C7;
    cursor: pointer;
    padding: 3px 7px;
  }

  .form-box .reason {
    margin-top: 20px;
  }

  #review {
    padding: 5px;
    width: 435px;
    height: 190px;
    vertical-align: top;
    border: 1px solid #efefef;
    background: #fff;
  }

  .form-box .submit {
    background: #c7c7c7;
    color: #000;
    padding: 5px 10px;
    display: inline-block;
    margin: 10px 64px;
  }

  .form-box .bot-tips {
    margin-left: 65px;
  }

  .ercode > img {
    display: block;
    width: 100px;
    height: 100px;
  }
  .upload-demo{
    display: inline-flex;
  }
  .ewcodes{
    width: 150px;
    height: 150px;
  }
  .ewcodes>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .swiperpro{
    height: 238px!important;
    /*margin-bottom: 20px;*/
  }
  .swiperpro:last-child{
    margin-bottom: 0;
  }
  .mychuchuang{
    height: 500px;
    overflow: hidden;
  }
  .mychuchuang .swiper-container{
    height: 500px;
  }
  .lunbolist{
    width: 100%;
  }
</style>
