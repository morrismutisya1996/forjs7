<template>
  <div class="home">
      <assets-stic />
      <div id="echarts" ref="wordMap" _echarts_instance_="ec_1709447161562"
        style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"></div>
      <history-stic />
      <agreement-sitc />
      <tool-stic/>
      <interdict-stic />
  </div>
</template>

<script>
import * as geoJson from '../assets/js/word.js'
import AssetsStic from '../components/assets_stic.vue'
import HistoryStic from '../components/history_stic.vue'
import AgreementSitc from '../components/agreement_stic.vue'
import ToolStic from '../components/tools_stic.vue'
import InterdictStic from '../components/interdict_stic.vue'
// import * as geoCoordMap from '../assets/js/geoCoordMap'
export default {
  name: 'HomeView',
  data(){
    return {
      myChart:null,
      options:null
    }
  },
  components:{
    AssetsStic,
    HistoryStic,
    AgreementSitc,
    ToolStic,
    InterdictStic
  },
  mounted(){
    this.myChart = this.$echarts.init(this.$refs['wordMap']);
    this.$echarts.registerMap('world', geoJson.default);
    let option = this.init()
    this.myChart.setOption(option);
  },
  methods:{
    init(){
      return {
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: '#0A131A', // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#00091a', // 100% 处的颜色
                },
            ],
            globalCoord: false, // 缺省为 false
        },
        title: {
            top: 10,
            // text: '世界流量统计',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc',
            },
        },

        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['流量'],
            textStyle: {
                color: '#fff',
            },
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {},
        },
        
        geo: {
            map: 'world',
            zoom: 1.23,
            show: true,
            roam: true,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    areaColor: "#54a1c6",//'#3a7fd5',
                    borderColor: '#0a53e9', //线
                    shadowColor: '#092f8f', //外发光
                    shadowBlur: 20,
                },
                emphasis: {
                    areaColor: '#0a2dae', //悬浮区背景
                },
            },
        },
        series: [
          {
            type:  "lines",
            large:true,                
            effect:  { //运动线的
                "show":  true,
                "period":  6,
                "trailLength":  0.9,
                "color":  "#f00",
                "symbolSize":  13,
                "roundTrip":true
            },
            
            "lineStyle":  {
                dashOffset: 5,
                "normal":  {
                    "color":  "#fff",
                    "width":  0,
                    "curveness":  0.2
                }
            },
            
            "data":  [
                [
                    {
                        label:{
                            show:true,
                            position:'start',
                            color:'#000',
                            formatter:'张三'
                        },
                        "coord":  [
                            -106.411142,56.364887
                        ]
                    },
                    {
                        
                        label:{
                            show:true,
                            position:'end',
                            color:'#fff',
                            formatter:'李四',
                        },
                        "coord":  [
                            130.987576,46.376259
                        ],
                    }
                ],
                [
                    {
                        "name":'王五',
                        label:{
                            show:true,
                            position:'start',
                            color:'#f00',
                            formatter(params){
                                return params.name
                            }
                        },
                        "coord":  [
                            -154.054967,62.476415
                        ]
                    },
                    {
                        "name":'李四',
                        label:{
                            show:true,
                            position:'end',
                            color:'#fff',
                            formatter(params){
                                return params.name
                            }
                        },
                        "coord":  [
                            102.95527,-2.043183
                        ],
                    }
                ],
            ]
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
.home{
  display: flex;
}
#echarts {
  width: 500px;
  height:500px;
}
</style>
