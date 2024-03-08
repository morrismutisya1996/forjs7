<template>
  <div>
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
            <div class="boxnav">
              <!-- <assets-stic/> -->
              <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>                                             
                  <th>发病统计</th>
                  <th>甲类</th>
                  <th>乙类</th>
                  <th>丙类</th>
                </tr>
                <tr>
                  <td>发病数（万）</td>
                  <td>0.03<span class="text-b">↓0.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                </tr>
                  <tr>
                  <td>发病率（%）</td>
                  <td>0.3<span class="text-b">↓0.01%</span></td>
                  <td>100%<span class="text-d">↑4.01</span></td>
                  <td>81.92%<span class="text-d">↑4.01</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div class="box">
            <div class="tit"><span>历史任务统计 </span>
              <p></p>
            </div>
            <div class="boxnav" style="height:140px;">
              <!-- <history-stic/> -->
              <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>                                             
                    <th>发病统计</th>
                    <th>甲类</th>
                    <th>乙类</th>
                    <th>丙类</th>
                  </tr>
                  <tr>
                    <td>发病数（万）</td>
                    <td>0.03<span class="text-b">↓0.01%</span></td>
                    <td>163.00<span class="text-d">↑4.01%</span></td>
                    <td>163.00<span class="text-d">↑4.01%</span></td>
                  </tr>
                    <tr>
                    <td>发病率（%）</td>
                    <td>0.3<span class="text-b">↓0.01%</span></td>
                    <td>100%<span class="text-d">↑4.01</span></td>
                    <td>81.92%<span class="text-d">↑4.01</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="box">
            <div class="tit"><span>趋势统计</span>
              <p></p>
            </div>
            <div class="boxnav" style="height: 250px;">
              <!-- <tendency-stic/> -->
              <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>                                             
                    <th>发病统计</th>
                    <th>甲类</th>
                    <th>乙类</th>
                    <th>丙类</th>
                  </tr>
                  <tr>
                    <td>发病数（万）</td>
                    <td>0.03<span class="text-b">↓0.01%</span></td>
                    <td>163.00<span class="text-d">↑4.01%</span></td>
                    <td>163.00<span class="text-d">↑4.01%</span></td>
                  </tr>
                    <tr>
                    <td>发病率（%）</td>
                    <td>0.3<span class="text-b">↓0.01%</span></td>
                    <td>100%<span class="text-d">↑4.01</span></td>
                    <td>81.92%<span class="text-d">↑4.01</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </li>
        <li style="width:48%">

          <div class="box" style="position: relative">
            <div class="" id="map" style="height: 557px; position: relative; z-index: 100">
              <word-map/>
            </div>
          </div>
          
        </li>
        <li style="width: 26%">
          <div class="box">
            <div class="tit"><span>协议统计</span>
              <p></p>
            </div>
            <div class="boxnav" id="" style="">
              <!-- <agreement-stic /> -->
              <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>                                             
                  <th>发病统计</th>
                  <th>甲类</th>
                  <th>乙类</th>
                  <th>丙类</th>
                </tr>
                <tr>
                  <td>发病数（万）</td>
                  <td>0.03<span class="text-b">↓0.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                </tr>
                  <tr>
                  <td>发病率（%）</td>
                  <td>0.3<span class="text-b">↓0.01%</span></td>
                  <td>100%<span class="text-d">↑4.01</span></td>
                  <td>81.92%<span class="text-d">↑4.01</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div class="box">
            <div class="tit"><span>工具统计</span>
              <p></p>
            </div>
            <div class="boxnav" style="" id="echart7">
              <!-- <tools-stic/> -->
              <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>                                             
                  <th>发病统计</th>
                  <th>甲类</th>
                  <th>乙类</th>
                  <th>丙类</th>
                </tr>
                <tr>
                  <td>发病数（万）</td>
                  <td>0.03<span class="text-b">↓0.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                </tr>
                  <tr>
                  <td>发病率（%）</td>
                  <td>0.3<span class="text-b">↓0.01%</span></td>
                  <td>100%<span class="text-d">↑4.01</span></td>
                  <td>81.92%<span class="text-d">↑4.01</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div class="box">
            <div class="tit"><span>实时阻断任务统计(top5)</span>
              <p></p>
            </div>
            <div class="boxnav" style="">
              <!-- <interdency-stic /> -->
              <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>                                             
                  <th>发病统计</th>
                  <th>甲类</th>
                  <th>乙类</th>
                  <th>丙类</th>
                </tr>
                <tr>
                  <td>发病数（万）</td>
                  <td>0.03<span class="text-b">↓0.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                  <td>163.00<span class="text-d">↑4.01%</span></td>
                </tr>
                  <tr>
                  <td>发病率（%）</td>
                  <td>0.3<span class="text-b">↓0.01%</span></td>
                  <td>100%<span class="text-d">↑4.01</span></td>
                  <td>81.92%<span class="text-d">↑4.01</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </li>
      </ul>
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
  top:50px;
  right:10px;
}
/deep/ .dateTime .el-input__inner{
  background:#033c76;
  border-color:#021c36;
}
/deep/ .dateTime .el-select-dropdown{
  background:#033c76!important;
  border-color:#021c36;
}
</style>