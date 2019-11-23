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
            <div class="mycontainer">
                <div class="tabs">
                    <div class="mytab firstfont">
                        <span class="active">资讯栏目</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mycontainer" style="background: none">
        <div class="zxbox">
            <div class="consultingbox">
                <div class="ghlistbox darkgrey ">
                    <div class="gh_list_tit blods">
                        <div>
                            <span class="f15 fwb m_r5">|</span>
                            <span class="fwb f15 fm1"><a href="" target="_blank">平台公告</a></span>
                        </div>
                    </div>

                    <div class="new_box_gh">
                        <div class="selecttb">
                            <span :class="{active:status=='全部'}" @click="changestatus('全部')">全部</span>
                            <span :class="{active:status=='最新动态'}" @click="changestatus('最新动态')">最新动态</span>
                        </div>
                        <div class="gh_info_list m_t10">
                            <ul v-if="status=='全部'">
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >苏宁拼购朱永国：苏宁拼购及当下最新的招商政策</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >苏宁拼购李先知：苏宁拼购双十一营销玩法</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款</a>
                                </li>
                                <li>
                                    <span class=" fr lightgrey">[11月01日]</span>
                                    <a >巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[10月23日]</span>
                                    <a >91家纺网志愿者贴心服务，助力五山森林音乐节！</a>
                                </li>
                            </ul>
                            <ul v-if="status=='最新动态'">
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >1拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >1苏宁拼购朱永国：苏宁拼购及当下最新的招商政策</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >1苏宁拼购李先知：苏宁拼购双十一营销玩法</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[11月01日]</span>
                                    <a >1巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款</a>
                                </li>
                                <li>
                                    <span class=" fr lightgrey">[11月01日]</span>
                                    <a >1巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论</a>
                                </li>
                                <li>
                                    <span class="fr lightgrey">[10月23日]</span>
                                    <a >191家纺网志愿者贴心服务，助力五山森林音乐节！</a>
                                </li>
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

            </div>
        </div>

    </div>
</div>
</template>
<script>
  export default{
    data(){
      return{
        status:'全部'
      }
    },
    methods:{
      changestatus(i){
        this.status=i
      }
    },
    mounted(){

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
	background: #f6f5f5;
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
</style>
