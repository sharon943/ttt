<template>
  <div class="Consultingprogram">
    <div class="mytop">
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
            <div class="programsearchbox">
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

    <div class="mycontainer">
      <div class="consultingbox">
        <div class="ghlistbox darkgrey " v-for="(val,index) in news" :key="index">
          <div class="gh_list_tit blods">
            <a @click="gotogram(val)" class="fr cursor">全部 &gt;&gt;&gt;</a>
            <span class="f15 fwb m_r5">|</span>
            <span class="fwb f15 fm1"><a href="" target="_blank">{{val.name}}</a></span>
          </div>
          <div class="new_box_gh">
            <div class="gh_info_list m_t10">
              <ul>
                <li v-for="(item,num) in val.lists">
                  <span class="fr lightgrey">[{{item.time}}]</span>
                  <a @click="godetail(item)">{{item.tittle}}</a>
                </li>
              </ul>
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
        news: [
          {
            name: '平台公告',
            categoryid:'',
            lists: [
              {
                id: '',
                time: '2019年11月10日',
                tittle: '拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购朱永国：苏宁拼购及当下最新的招商政策',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购李先知：苏宁拼购双十一营销玩法',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '91家纺网志愿者贴心服务，助力五山森林音乐节！',
                url: ''
              }
            ]
          }, {
            name: '电子商务',
            categoryid:'',
            lists: [
              {
                id: '',
                time: '2019年11月10日',
                tittle: '拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购朱永国：苏宁拼购及当下最新的招商政策',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购李先知：苏宁拼购双十一营销玩法',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '91家纺网志愿者贴心服务，助力五山森林音乐节！',
                url: ''
              }
            ]
          }, {
            name: '职场人生',
            categoryid:'',
            lists: [
              {
                id: '',
                time: '2019年11月10日',
                tittle: '拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购朱永国：苏宁拼购及当下最新的招商政策',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购李先知：苏宁拼购双十一营销玩法',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '91家纺网志愿者贴心服务，助力五山森林音乐节！',
                url: ''
              }
            ]
          }, {
            name: '生活百科',
            categoryid:'',
            lists: [
              {
                id: '',
                time: '2019年11月10日',
                tittle: '拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购朱永国：苏宁拼购及当下最新的招商政策',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购李先知：苏宁拼购双十一营销玩法',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '91家纺网志愿者贴心服务，助力五山森林音乐节！',
                url: ''
              }
            ]
          }, {
            name: '微商专栏',
            categoryid:'',
            lists: [
              {
                id: '',
                time: '2019年11月10日',
                tittle: '拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购朱永国：苏宁拼购及当下最新的招商政策',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购李先知：苏宁拼购双十一营销玩法',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '91家纺网志愿者贴心服务，助力五山森林音乐节！',
                url: ''
              }
            ]
          }, {
            name: '91课堂',
            categoryid:'',
            lists: [
              {
                id: '',
                time: '2019年11月10日',
                tittle: '拼机遇·抖精彩-苏宁拼购招商会&amp;抖音运营公开课圆满落',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购朱永国：苏宁拼购及当下最新的招商政策',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '苏宁拼购李先知：苏宁拼购双十一营销玩法',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎陶方俊：【引流电商】“流量蓝海”品效结合打造电商爆款',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '巨量引擎贺晨阳：抖音短视频电商行业内容运营方法论',
                url: ''
              }, {
                id: '',
                time: '2019年11月10日',
                tittle: '91家纺网志愿者贴心服务，助力五山森林音乐节！',
                url: ''
              }
            ]
          },
        ]
      }
    },
    methods: {
      godetail(val) {
        let airticleid = val.id
        let routeData = this.$router.resolve({name: 'news_detail', query: airticleid});
        window.open(routeData.href, '_blank');

      },
      gotogram(val){
        let categoryid = val.id
        let routeData = this.$router.resolve({name: 'Consultingdetail', query: categoryid});
        window.open(routeData.href, '_blank');

      },
    },
    mounted() {

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.title = '资讯栏目'
      })
    }
  }
</script>
<style scoped>
  .Consultingprogram {
    font-size: 12px;
    background: #f6f5f5;
  }

  .mytop {
    background: #fff;
    border-bottom: 1px solid #f43e31;
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

  .consultingbox {
    padding: 16px 11px;
    display: flex;
    flex-wrap: wrap;
  }

  .ghlistbox {
    height: 230px;
    width: 388px;
    border: 1px solid #dfdfdf;
    margin-right: 7px;
    margin-bottom: 9px;
  }

  .ghlistbox:nth-child(3n) {
    margin-right: 0;
  }

  .gh_list_tit {
    border-bottom: 1px solid #eeeeee;
    line-height: 38px;
    height: 38px;
    padding: 0px 10px;
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
    padding: 10px;
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

  .gh_info_list li a {
    width: 230px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    font-weight: bold;
    position: absolute;
    cursor: pointer;
  }

  .gh_info_list li a:hover {
    color: #fd6619;
    text-decoration: underline;
  }

  .consultingtop .serachs {
    width: 562px;

  }

  .programsearchbox {
    position: relative;
    height: 40px;
    display: flex;
    border: 2px solid #f24e48;
    border-radius: 50px;
    overflow: hidden;
    margin-bottom: 7px;
  }

  .programsearchbox > div:nth-child(1) {
    width: 454px;
  }

  .programsearchbox > div:nth-child(1) > input {
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 16px;
    border: none;
  }

  .programsearchbox > div:nth-child(2) {
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

  .programsearchbox > div:nth-child(2) > span {
    display: inline-block;
    height: 20px;
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 20px;

  }

  .programsearchbox > div:nth-child(2) > span:nth-child(1) {
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

</style>
