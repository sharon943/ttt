<template>
  <div class="Consultingdetail">
    <div class="mydetailtop">
      <div class="mycontainer">
        <div class="consultingtop">
          <div class="shoplogo">
            <img src="../assets/img/logo.png" alt="">
          </div>
          <div class="serachs">
            <div class="selecttype">
              <span class="active">商品</span>
              <span>厂家</span>
            </div>
            <div class="Consultingsearchbox">
              <div>
                <input type="text" placeholder="根据产品标题、厂家名称进行搜索">
              </div>
              <div>
                <span class="iconfont icon-sousuo"></span>
                <span class="iconfont icon-paizhao"></span>
              </div>
            </div>
            <div class="tjlist">
              <span>童裙</span>
              <span>秋冬童裙</span>
              <span>哈伦裤</span>
              <span>童T恤</span>
              <span>羽绒裤</span>
              <span>棉服</span>
              <span>中长款</span>
            </div>
          </div>
          <div class="sdcode">
            <div>
              <img src="../assets/img/erweima.png" alt="">
            </div>
            <div>
              <img src="../assets/img/erweima.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="tablist">
        <div class="mycontainer" >
          <div class="tabs">
            <div class="mytab firstfont">
              <span class="active">资讯栏目</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mycontainer" >
      <div class="zxbox">
        <div class="consultingbox">
          <div class="ghlistbox darkgrey ">
            <div class="news_tit_div">
              <h2>{{tittle}}</h2>
              <p style="text-align: center">
                2019-11-21 13:19:42 <span class="m_l10">来源：网络</span>
                <span class="m_l10">浏览次数：</span>
                【<span class="fontsize" @click="fontsize=16" >大</span>】【<span  class="fontsize" @click="fontsize=14" >中</span>】【<span  class="fontsize" @click="fontsize=12" >小</span>】
              </p>
            </div>
            <div class="article" :class="{secondfont:fontsize=='16',firstfont:fontsize=='14',normalize:fontsize=='12'}" >
              <div v-html="content"></div>
            </div>
            <div class="operation">
              <span class="shoucang"><a href="javascript:window.external.addFavorite(window.location.href,tittle);">加入收藏</a></span>
              <span class="print"><a href="javascript:window.print();">打印本页</a></span>
              <span class="close"><a href="javascript:window.close();">关闭窗口</a></span>
              <span class="top"><a href="javascript:window.scrollTo(0,0);">返回顶部</a></span>
            </div>
            <div class="sm_div_box">
              <span class="blods">免责声明：</span>本文仅代表作者个人观点，与本网站无关。其原创性以及文中陈述文字和内容未经本站证实，对本文以及其中全部或者部分内容、文字的真实性、完整性、及时性本站不做任何保证或承诺，请读者仅作参考，并请自行核实相关内容。
            </div>
            <div class="about_blow_div">
              <div class="tit_div3">相关阅读</div>
              <div class="about_blow_list c">
                <ul>
                  <li><a href="default.php?act=news_detail&amp;id=8640" title="宝宝冬天盖什么被子好？盖多少合适？一定要看完！">宝宝冬天盖什么被子好？盖多少合适？一定要看完！</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8639" title="这个冬天，床品保暖的最佳组合是......">这个冬天，床品保暖的最佳组合是......</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8630" title="什么是丽丝绒？你了解吗？">什么是丽丝绒？你了解吗？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8623" title="万万没想到洗个东西，还有这么多学问？">万万没想到洗个东西，还有这么多学问？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8622" title="如何给老人选择合适的床上用品？">如何给老人选择合适的床上用品？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8621" title="床垫上要铺床褥吗？看你做对了吗！">床垫上要铺床褥吗？看你做对了吗！</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8619" title="60%室内污染来自被子 ,99%的人都不知道！">60%室内污染来自被子 ,99%的人都不知道！</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8611" title="牛奶绒、水晶绒、雪花绒各种绒，教你怎么选！">牛奶绒、水晶绒、雪花绒各种绒，教你怎么选！</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8610" title="哪款被子和你最配，答案在这里！">哪款被子和你最配，答案在这里！</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8336" title="床品褪色掉色的三大原因，你知道吗？">床品褪色掉色的三大原因，你知道吗？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8335" title="生活小常识丨你知道柠檬水还能这么用吗？">生活小常识丨你知道柠檬水还能这么用吗？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8332" title="一觉醒来身上沾了很多小绒毛，你的羽绒被还好么？">一觉醒来身上沾了很多小绒毛，你的羽绒被还好么？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8331" title="生活小常识丨家纺四件套面料的辨别方法">生活小常识丨家纺四件套面料的辨别方法</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8330" title="怎样正确使用枕头，你真的知道吗？">怎样正确使用枕头，你真的知道吗？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8329" title="你知道什么是“子母被”吗？">你知道什么是“子母被”吗？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8328" title="床品泛黄有污渍？这样洗，就对了！">床品泛黄有污渍？这样洗，就对了！</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8327" title="生活小技能丨床品缩水怎么办？">生活小技能丨床品缩水怎么办？</a></li>
                  <li><a href="default.php?act=news_detail&amp;id=8326" title="床上用品设计分类怎么分？">床上用品设计分类怎么分？</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="zxright">
          <div>
            <div class="serachbox lightgreybor">
              <input type="text">
            </div>
            <div class="reds tosearch">搜咨询</div>
          </div>
          <div class="lightgreybor">
            <div class="gh_info_list tjinfo m_t10">
              <ul>
                <li>
                  <a href="" target="_blank">拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落</a>
                </li>
                <li>
                  <a href="" target="_blank">苏宁拼购朱永国：苏宁拼购及当下最新的招商政策</a>
                </li>
                <li>
                  <a href="" target="_blank">苏宁拼购李先知：苏宁拼购双十一营销玩法</a>
                </li>
                <li>
                  <a href="" target="_blank">巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款</a>
                </li>
                <li>
                  <a href="" target="_blank">巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论</a>
                </li>
                <li>
                  <a href="" target="_blank">91家纺网志愿者贴心服务，助力五山森林音乐节！</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="lightgreybor tjproduct">
            <div>
                            <span class="pic">
                                <img src="" alt="">
                            </span>
              <span class="name">夏季衣服大合集</span>
            </div>
            <div>
                            <span class="pic">
                                <img src="" alt="">
                            </span>
              <span class="name">夏季衣服大合集</span>
            </div>
            <div>
                            <span class="pic">
                                <img src="" alt="">
                            </span>
              <span class="name">夏季衣服大合集</span>
            </div>
            <div>
                            <span class="pic">
                                <img src="" alt="">
                            </span>
              <span class="name">夏季衣服大合集</span>
            </div>
          </div>

          <div class="cq_ask">
            <div class="tit_div2">热门阅读排行</div>
            <div class="rig_infodiv">
              <div class="h_ph">
                <ul>
                  <li v-for="(val,index) in hotnews" :key="index">
                    <a :href="val.url" :title="val.tittle">
                      <span class="num" :class="{num_on:index<=2}">{{index+1}}</span>{{val.tittle}}</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        airticleid:'',
        tittle:'这个冬天，床品保暖的最佳组合是......',
        status:'全部',
        fontsize:12,
        hotnews:[
          {tittle:'宝宝冬天盖什么被子好？盖多少合适？一定要看完！',url:''},
          {tittle:'这个冬天，床品保暖的最佳组合是......',url:''},
          {tittle:'宝宝冬天盖什么被子好？盖多少合适？一定要看完！',url:''},
          {tittle:'宝宝冬天盖什么被子好？盖多少合适？一定要看完！',url:''},
          {tittle:'这个冬天，床品保暖的最佳组合是......',url:''},
          {tittle:'恬静柔软，温暖一生——j-3',url:''},
          {tittle:'这个冬天，床品保暖的最佳组合是......',url:''},
          {tittle:'恬静柔软，温暖一生——j-3',url:''},
          {tittle:'恬静柔软，温暖一生——j-3',url:''},
          {tittle:'恬静柔软，温暖一生——j-3',url:''},
        ],
        content:"\n" +
        "\t\t\t\t\t<p> <a href=\"http://www.91jf.com/\">【91家纺网】</a></p><p> <span style=\"font-size:14px;font-family:Microsoft YaHei;\">最近的天气呈现出断崖式的降温，冷得有点不知所措，真正的冬天来了！</span></p><span style=\"font-size:14px;font-family:Microsoft YaHei;\">现在，一个温暖的被窝显得尤为重要，被窝虽好，学问也多，很多人问小编，冬天哪种床品是保暖的最佳组合？接下来，小编就给大家讲一下。</span><br><img src=\"http://img2.91jf.com/qcloud/editor/20191121/20191121131808_12407.jpg\" alt=\"\"><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\"><strong>选择纯棉磨毛或短毛绒四件套</strong></span><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">为什么我们接触毛绒绒的面料会觉得很温暖，而接触光滑的真丝就觉得凉？这是面料的“接触冷暖感”所决定。当我们皮肤刚接触面料时，织物与皮肤之间存在温差，产生热交换吸收热量，即冷感；接触面积多与少决定了冷感时间。</span><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">纯棉磨毛与短毛绒因为表面很多绒毛，降低了皮肤与面料表层接触的面积，同时绒毛间产生了静止空气层，使面料蓄温和隔离冷空气，具备超暖性。</span><br><img src=\"http://img2.91jf.com/qcloud/editor/20191121/20191121131822_97206.jpg\" alt=\"\"><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">建议中青年人群使用纯棉磨毛面料，其吸湿性能较好；老年人或特别怕冷的人可以使用短毛绒，虽然没有纯棉吸湿，但透气性能不错，且相对更暖。</span><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\"><strong>选择羽绒被</strong></span><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">我们知道羽绒被是所有被子里最保暖的。但羽绒分鸭绒和鹅绒，分圈养和散养，分成鹅和仔鹅；虽然都是羽绒，但品种、生产、地域、养殖方式不同，保暖性能也不太一样，所以羽绒被要选大朵绒。</span><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">一般来说鹅绒比鸭绒大，散养比圈养大，寒冷地带比非寒冷地带大，成鹅比仔鹅大等；把相同重量、规格的羽绒被一起比较，选体积大的准没错。</span><br><img src=\"http://img2.91jf.com/qcloud/editor/20191121/20191121131845_50420.jpg\" alt=\"\"><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\"><strong>选择乳胶床垫或者提高床垫柔软度</strong></span><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">除了盖的要保暖，垫的也要保暖！根据自身情况，家里没有乳胶床垫，就提高床垫的柔软度，这样更舒适、保暖；如果可以，一床乳胶垫就可以解决你的问题。</span><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">乳胶由几百万个蜂窝气孔组成，身体排出的热气和汗水可以快速发散，不像棉絮那样吸收后发散慢，慢慢的棉絮就变成了一块铁板。乳胶吸收热量会迅速的向周边扩散，不亚于垫了一床电热毯哦~</span><br><img src=\"http://img2.91jf.com/qcloud/editor/20191121/20191121131900_44583.jpg\" alt=\"\"><br><span style=\"font-size:14px;font-family:Microsoft YaHei;\">这样的组合，再也不用担心怕冷了！</span><p> 更多最新资讯请关注：<a href=\"http://www.91jf.com/\">91家纺网</a></p>\t\t\t\t\t<span class=\"f12 c7\">（责任编辑：91家纺网）</span>\n" +
        "\t\t\t\t"
      }
    },
    methods:{
      changestatus(i){
        this.status=i
      }
    },
    mounted(){
      this.airticleid = this.$route.query.airticleid
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '店铺详情页'
      })
    }
  }
</script>
<style scoped>
  .Consultingdetail {
    font-size: 12px;
    background: #fff;
  }

  .mydetailtop {
    background: #fff;
    border-bottom: 1px solid #f43e31;
  }
  .tablist{
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

  .zxbox .consultingbox {
    width: 830px;
    min-height: 498px;
    padding: 0;
  }
  .zxbox .ghlistbox {
    width: 100%;
    background: #fff;
    height: auto;
    min-height: 504px;
  }

  .zxbox .ghlistbox>.gh_list_tit {
    line-height: 38px;
    height: 38px;
    border: none;
    padding: 0;
  }
  .zxbox .ghlistbox>.gh_list_tit>div{
    width: 388px;
    padding: 0px 10px;
    border-bottom: 1px solid #eeeeee;
  }
  .fr {
    float: right;
  }

  .m_r5 {
    margin-right: 5px;
  }

  .m_t10 {
    margin-top: 10px;
  }

  .f15 {
    font-size: 15px;
  }

  .fwb {
    font-weight: bold;
  }

  .fm1 {
    font-family: Microsoft YaHei;
  }

  .new_box_gh {
    padding: 16px;

  }

  .gh_info_list li {
    line-height: 25px;
    background-position: -6px -44px;
    padding-left: 18px;
    overflow: hidden;
    height: 25px;
    background-image: url('../assets/img/pageBg.png');
    background-repeat: no-repeat;
  }

  .fr {
    float: right;
  }

  .zxbox .gh_info_list li a {
    width: 600px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    font-weight: bold;
  }

  .gh_info_list li a:hover {
    color: #fd6619;
    text-decoration: underline;
  }

  .consultingtop .serachs {
    width: 562px;

  }
  .Consultingsearchbox{
    position: relative;
    height: 40px;
    display: flex;
    border: 2px solid #f24e48;
    border-radius: 50px;
    overflow: hidden;
    margin-bottom: 7px;
  }
  .Consultingsearchbox>div:nth-child(1){
    width: 454px;
  }
  .Consultingsearchbox>div:nth-child(1)>input{
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 16px;
    border: none;
  }
  .Consultingsearchbox>div:nth-child(2){
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    width: 120px;
    align-items: center;
    border-radius: 50px;
    background-image: linear-gradient(90deg, #f24e48 0%,#ff6349 100%);
  }
  .Consultingsearchbox>div:nth-child(2)>span{
    display: inline-block;
    height: 20px;
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
  }
  .Consultingsearchbox>div:nth-child(2)>span:nth-child(1){
    border-right: 1px solid #fff;
  }

  .selecttype{
    padding: 0 18px;
    display: flex;

  }
  .selecttype>span{
    width: 50px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #666;
    border-radius: 50px;
    margin-bottom: 2px;
  }
  .selecttype>.active{
    background-image: linear-gradient(90deg, #f24e48 0%,#ff6349 100%);
    color: #fff;
  }
  .tjlist{
    display: flex;
    padding: 0 18px;
    color: #666;
  }
  .tjlist>span{
    margin-right: 25px;
  }

  .sdcode{
    width: 170px;
    display: flex;
    justify-content: space-between;
  }
  .sdcode>div{
    height: 80px;
    width: 80px;
    box-shadow: 2px 4px 10px #fdd9d8;
  }
  .selecttb{
    display: flex;
    margin-bottom: 18px;
  }
  .selecttb>span{
    display: block;
    color: #666;
    font-weight: bold;
    margin-right: 24px;
    cursor: pointer;
  }
  .selecttb>.active{
    color: #F43E31;
  }
  .zxbox{
    display: flex;
    justify-content: space-between;
    padding: 18px 14px;
  }
  .zxright{
    width: 305px;

  }
  .zxright>div:nth-child(1){
    display: flex;
    justify-content: space-between;
    height: 36px;
    align-items: center;
    margin-bottom: 5px;
  }
  .tosearch{
    text-align: center;
    height: 100%;
    width: 63px;
    line-height: 36px;
    cursor: pointer;
  }
  .serachbox{
    height: 100%;
  }
  .serachbox>input{
    display: block;
    outline: none;
    border: 0;
    width: 236px;
    background: #fff;
    height: 100%;
  }
  .zxright>div:nth-child(2){
    background: #fff;
    padding: 16px;
    min-height: 206px;
  }
  .tjinfo>ul>li>a{
    width: 257px;
  }

  .tjproduct{
    display: flex;
    flex-wrap: wrap;
    padding: 16px 12px;
    background: #fff;
    padding-bottom: 0;
    border-top: none;
  }
  .tjproduct>div{
    width: 130px;
    height: 120px;
    margin-right: 15px;

  }
  .tjproduct>div:nth-child(2n){
    margin-right: 0;
  }
  .tjproduct>div>span{
    display: block;
  }
  .tjproduct>div>.pic{
    background: #dfdfdf;
  }
  .tjproduct>div>span>img{
    display: block;
    width: 100%;
    height: 90px;
  }
  .tjproduct>div>.name{
    padding-left: 2px;
    padding-top: 8px;
  }
  .news_tit_div{
    background: #f6f6f6;
    padding: 20px;
  }
  .news_tit_div h2 {
    text-align: center;
    font-size: 24px;
    color: #000000;
    margin-top: 5px;
  }
  .news_tit_div p {
    margin-top: 30px;
  }
  .fontsize:hover{
    color: #fd6619;
    cursor: pointer;
  }
  .m_l10 {
    margin-left: 10px;
  }
  .article{
    width: 100%;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 180%;
    clear: both;
    color: rgb(51, 51, 51);
    overflow: hidden;
    padding-top: 35px;
  }
  .cq_ask {
    border: 1px solid #e2e2e2;
    margin-top: 20px;
  }
  .tit_div2 {
    background: #ffa200;
    height: 38px;
    font-size: 16px;
    padding-left: 10px;
    line-height: 38px;
    font-family: Microsoft YaHei;
    color: #fff;
    border-bottom: 1px solid #ebebeb;
  }
  .rig_infodiv {
    padding: 10px;
  }
  .h_ph li {
    border-bottom: 1px dashed #dddddd;
    line-height: 27px;
    overflow: hidden;
  }
  .h_ph li:last-child{
    border-bottom: none;
  }
  .h_ph li span.num {
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    color: #ffffff;
    display: inline-block;
    vertical-align: middle;
    background: #a0a0a0;
    margin-right: 5px;
  }
  .h_ph li span.num_on {
    background: #fa7205;
  }
  .h_ph li>a:hover{
    color: #fd6619;
  }
  .operation {
    background: white;
    height: 37px;
    font-size: 14px;
    line-height: 37px;
    text-align: center;
    border-top: 1px #C8C8C8 dashed;
    border-bottom: 1px #EEEEEE solid;
  }
  .operation span.shoucang {
    background: url(../assets/img/icon_cang.gif) 12px 10px no-repeat;
  }
  .operation span {
    display: block;
    float: left;
    width: 92px;
    height: 37px;
    text-align: right;
  }
  .operation span.print {
    background: url(../assets/img/icon_print.gif) 12px 10px no-repeat;
  }

  .operation span.close {
    background: url(../assets/img/icon_close.gif) 12px 10px no-repeat;
  }
  .operation span.top {
    background: url(../assets/img/icon_top.gif) 12px 10px no-repeat;
  }
  .sm_div_box{
    background: #f6f6f6;
    color: #999999;
    padding: 15px;
  }
  .about_blow_div{
    padding: 15px 15px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  }
  .tit_div3 {
    color: #ff4400;
    font-weight: bold;
    background-position: -9px -358px;
    padding-left: 20px;
    padding-bottom: 18px;
  }
  .c {
    clear: both;
    zoom: 1;
  }
  .c:after {
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
    content: '.';
  }
  .about_blow_list li {
    float: left;
    width: 245px;
    background-position: -6px -42px;
    padding-left: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 20px;
  }
  .about_blow_list li,.tit_div3{
    background-image: url(../assets/img/pageBg.png);
    background-repeat: no-repeat;
    font-size: 12px;
    line-height: 24px;
  }
  .about_blow_list li a:hover {
    text-decoration: underline;
    color: #f40;
  }
  a:hover, a:active {
    color: #ff7300;
  }
</style>
