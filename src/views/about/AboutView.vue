<template>
  <div>
    <div class="head clearfix">
      <h1 class="">外部访问态势统计图</h1>
      <div class="time" id="showTime">{{ timeString }}</div>
      <div class="name">长沙双数科技有限公司</div>
    </div>
    <div class="mainbox">
      <ul class="clearfix nav1">
        <li style="width: 26%">
          <div class="box">
            <div class="tit"><span>资产统计</span>
              <p></p>
            </div>
            <div class="boxnav" style="height: 320px;">
              
            </div>
          </div>
          <div class="box">
            <div class="tit"><span>历史任务统计 </span>
              <p></p>
            </div>
            <div class="boxnav" style="height:140px;">
              
            </div>
          </div>

          <div class="box">
            <div class="tit"><span>趋势统计</span>
              <p></p>
            </div>
            <div class="boxnav" style="height: 250px;">
              
            </div>
          </div>

        </li>
        <li style="width:48%">

          <div class="box" style="position: relative">
            地图区域
            <div class="" id="map" style="height: 557px; position: relative; z-index: 100"></div>
          </div>
          <div class="box">
            <div class="tit"><span>实时阻断任务统计（top5）</span>
              <p></p>
            </div>
            <div class="boxnav" style="height: 250px;">
              
            </div>
          </div>
        </li>
        <li style="width: 26%">
          <div class="box">
            <div class="tit"><span>协议统计</span>
              <p></p>
            </div>
            <div class="boxnav" id="" style="height: 280px;">
              
            </div>
          </div>
          <div class="box">
            <div class="tit"><span>工具统计</span>
              <p></p>
            </div>
            <div class="boxnav" style="height: 180px;" id="echart7">
            </div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import AssetsStic from './component/assets_stic.vue'
export default {
  data(){
    return {
      timeString:'',
      timeFn:null
    }
  },
  components:{
    AssetsStic
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
