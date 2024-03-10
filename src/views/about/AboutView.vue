<template>
  <div class="container">
    <div class="head clearfix">
      <h1 class="">防御态势</h1>
      <div class="time" id="showTime">{{ timeString }}</div>
      <!-- <div class="name">长沙双数科技有限公司</div> -->
    </div>
    <div class="mainbox">
      <ul class="clearfix nav1">
        <li style="width: 26%">
          <div class="box">
            <div class="tit"><span>资产统计</span>
              <p></p>
            </div>
            <div class="boxnav" style="height:33%">
              <!-- <assets-stic/> -->
              <ul class="assetsUi">
                <li>
                  <p>恶意组织</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
                <li>
                  <p>重保用户</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
              </ul>
            </div>
          </div>
          <div class="box">
            <div class="tit"><span>历史任务总数,数量 </span>
              <p></p>
            </div>
            <div class="boxnav" style="height:33%">
              <!-- <history-stic/> -->
              <ul class="assetsUi">
                <li>
                  <p>历史拦截成功次数</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
                <li>
                  <p>历史拦截失败次数</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
              </ul>
              
            </div>
          </div>

          

        </li>
        <li style="width:48%">
          <div class="box" style="position: relative">
            <div class="attr">
              <el-button class="el-button-custom el-acitve">世界</el-button>
              <el-button class="el-button-custom">详情</el-button>
            </div>
            <div class="" id="map" style="height: 700px; position: relative; z-index: 100">
              
              <word-map/>
            </div>
          </div>
          
        </li>
        <li style="width: 26%">
          <div class="box" style="height:40%">
            <div class="tit"><span>拦截协议TOP5</span>
              <p></p>
            </div>
            <div class="boxnav" id="" style="">
              <!-- <agreement-stic /> -->
              <ul class="agreementUi">
                <li>
                  <p>协议1</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
                <li>
                  <p>协议2</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
                <li>
                  <p>协议3</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
                <li>
                  <p>协议4</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
                <li>
                  <p>协议5</p>
                  <el-progress :text-inside="true" text-color="#fff" :stroke-width="26" :percentage="70"></el-progress>
                </li>
              </ul>
            </div>
          </div>
          <div class="box">
            <div class="tit"><span>拦截工具TOP5</span>
              <p></p>
            </div>
            <div class="boxnav" style="" id="echart7">
              <!-- <tools-stic/> -->
              <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>                                             
                    <th>拦截工具</th>
                    <th>工具1</th>
                    <th>工具2</th>
                    <th>工具3</th>
                  </tr>
                  <tr>
                    <td>拦截次数</td>
                    <td>1231</td>
                    <td>12</td>
                    <td>56</td>
                  </tr>
                    <tr>
                    <td>成功次数</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </li>
      </ul>
      <div class="footer">
        <div class="trend">
            <div class="tit"><span>趋势统计</span>
              <p></p>
            </div>
            <div class="boxnav" style="height: 250px;">
              <tendency-stic/>
            </div>
          </div>
        <div class="interdict">
          <div class="tit"><span>实时阻断任务</span>
            <p></p>
          </div>
          <div class="boxnav" style="">
            <!-- <interdency-stic /> -->
            <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>                                             
                <th>源地址</th>
                <th>国家</th>
                <th>目的地址</th>
                <th>重保用户</th>
                <th>通信时间</th>
                <th>阻断时间</th>
                <th>阻断工具</th>
                <th>恶意家族</th>
              </tr>
              <tr>
                <td align="center">北京昌平区王爷府</td>
                <td>中国</td>
                <td>美国华盛顿</td>
                <td>普通人民</td>
                <td>2022-12-12</td>
                <td>2022-12-14</td>
                <td>ftjp</td>
                <td>铁血家族</td>
              </tr>
              <tr>
                <td align="center">北京昌平区王爷府</td>
                <td>中国</td>
                <td>美国华盛顿</td>
                <td>普通人民</td>
                <td>2022-12-12</td>
                <td>2022-12-14</td>
                <td>ftjp</td>
                <td>铁血家族</td>
              </tr>
              <tr>
                <td align="center">北京昌平区王爷府</td>
                <td>中国</td>
                <td>美国华盛顿</td>
                <td>普通人民</td>
                <td>2022-12-12</td>
                <td>2022-12-14</td>
                <td>ftjp</td>
                <td>铁血家族</td>
              </tr>
              <tr>
                <td align="center">北京昌平区王爷府</td>
                <td>中国</td>
                <td>美国华盛顿</td>
                <td>普通人民</td>
                <td>2022-12-12</td>
                <td>2022-12-14</td>
                <td>ftjp</td>
                <td>铁血家族</td>
              </tr>
              <tr>
                <td align="center">北京昌平区王爷府</td>
                <td>中国</td>
                <td>美国华盛顿</td>
                <td>普通人民</td>
                <td>2022-12-12</td>
                <td>2022-12-14</td>
                <td>ftjp</td>
                <td>铁血家族</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
    <div class="dateTime">
      <el-select v-model="dateVal" placeholder="请选择时间">
        <el-option
          v-for="item in dateArr"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import AssetsStic from './component/assets_stic.vue'
import HistoryStic from './component/history_stic.vue'
import AgreementStic from './component/agreement_stic.vue'
import InterdencyStic from './component/interdict_stic.vue'
import ToolsStic from './component/tools_stic.vue'
import TendencyStic from './component/tendency_stic.vue'
import WordMap from '../../components/wordMap.vue'
export default {
  data(){
    return {
      timeString:'',
      timeFn:null,
      dateVal:'',
      dateArr:[
        {label:'一天',value:'1'},
        {label:'七天',value:'7'},
        {label:'一个月',value:'31'},
        {label:'一年',value:'365'},
      ]
    }
  },
  components:{
    AssetsStic,
    WordMap,
    HistoryStic,
    AgreementStic,
    InterdencyStic,
    ToolsStic,
    TendencyStic
  },
  created(){
    this.timeFn = setTimeout(this.getTime,1000);//開始运行
  },
  methods:{
    getTime(){
        clearTimeout(this.timeFn);//清除定时器
        let dt = new Date();
        var y=dt.getFullYear();
        var mt=dt.getMonth()+1;
        var day=dt.getDate();
        var h=dt.getHours();//获取时
        var m=dt.getMinutes();//获取分
        var s=dt.getSeconds();//获取秒
        this.timeString= y+"/"+mt+"/"+day+" "+h+":"+m+":"+s+"";
        this.timeFn = setTimeout(this.getTime,1000); //设定定时器，循环运行     
    }
  }
}
</script>
<style scoped>
.dateTime{
  position: fixed;
  top:0px;
  right:10%;
  z-index: 1000;
}
.container{
  height:100vh;
}
.nav1{
  height:100%;
}
.nav1 li{
  height:100%;
}
.assetsUi{
  padding:10px;
}
.assetsUi li{
  margin-top:35px;
}
.assetsUi li p{
  color:#fff;
  line-height: 40px;
  font-size:16px;
}
.agreementUi{
  padding:10px;
}
.agreementUi li{
  line-height: 25px;
}
.agreementUi li p{
  color:#fff;
  line-height: 45px;
  font-size:16px;
}
.mainbox{
  height:calc(100% - 90px)
}
.box{
  height:33%;
  position: relative;
}
.box .attr {
  display: flex;
  z-index: 1000;
  width:100%;
  margin-top:25px;
  position:absolute;
  justify-content: flex-end;
}
.attr .el-button-custom{
  color:#fff;
  font-weight: bold;
  border-color:transparent;
  background:#0b283c;
}
.attr .el-acitve{
  border-color: #37b7c4;
}
/deep/ .dateTime .el-input__inner{
  background:#033c76;
  border-color:#021c36;
}
/deep/ .dateTime .el-select-dropdown{
  background:#033c76!important;
  border-color:#021c36;
}
/deep/ .el-progress-bar__outer{
  height:12px!important;
}
.footer{display:flex;}
.footer{
  position: fixed;
  bottom:15px;
  right:20px;
  left:20px;
  justify-content: space-between;
}
.footer .trend{
  width:44%;
}
.footer .interdict{
  width:54%;

}
</style>