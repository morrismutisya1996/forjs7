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
import * as geoJson from '../../assets/js/word.js'
import AssetsStic from '../about/component/assets_stic.vue'
import HistoryStic from '../about/component/history_stic.vue'
import AgreementSitc from '../about/component/agreement_stic.vue'
import ToolStic from '../about/component/tools_stic.vue'
import InterdictStic from '../about/component/interdict_stic.vue'
// import * as geoCoordMap from '../assets/js/geoCoordMap'
export default {
    name: 'HomeView',
    data(){
        return {
            myChart:null,
            options:null,
            series:[],
            linesData: [[
                [
                    {
                        //企业
                        coord: [-104.328223,56.969199],
                        fromName: "企业1",
                        level: 1
                    },
                    {
                        coord: [208.940947,63.3134],
                        toName: "企业2",
                        fromName:'企业2',
                        value: 1
                    }
                ],
                [
                    {
                        //企业
                        coord: [121.4648, 31.2891],
                        fromName: "企业1",
                        level: 1
                    },
                    {
                        coord: [113.8953, 22.901],
                        toName: "企业2",
                        fromName:'企业2',
                        value: 1
                    }
                ]
            ]]
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
    this.linesData.forEach(item => {
        this.series.push(
            // 企业点 样式
            {
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    period: 10, //动画时间，值越小速度越快
                    brushType: "fill", //波纹绘制方式 stroke, fill
                    scale: 3 //波纹圆环最大原6
                },
                label: {
                    normal: {
                        show: true,
                        position: "right", // 文字位置
                        offset: [10, 0], // 偏移设置
                        formatter: "{b}", // 圆环显示文字
                        textStyle: {
                            fontWeight: "bold"
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: "circle",
                symbolSize: 15, //原7.5
                color: function (param) {
                    let level = param.value[3];
                    if (level === 1)
                        return "#C83F11";
                    if (level === 2)
                        return "#FF9500";
                    if (level === 3)
                        return "#3593FF";
                    if (level === 4)
                        return "#0DD567";
                },
                itemStyle: {
                    normal: {
                        show: false
                    }
                },
                data: item.map(function (dataItem) {
                    let name = dataItem[0].fromName; // 企业名称
                    return {
                        name: name,
                        value: dataItem[0].coord.concat([
                            dataItem[0].fromName, dataItem[0].level
                        ]),
                        visualMap: false
                    };
                })
            },
            // 流线 箭头 样式
            {
                type: "lines",
                zlevel: 2,
                // 箭头图标的样式、速度
                effect: {
                    show: true,
                    period: 5, // 箭头指向速度，值越小速度越快
                    trailLength: 0.1, // 特效尾迹长度[0,1]
                    symbol: "arrow", // 箭头图标
                    symbolSize: 5, // 图标大小
                    color: "#fff" // 箭头颜色
                },
                // 尾部 线的样式
                lineStyle: {
                    normal: {
                        width: 1, // 尾迹线条宽度
                        opacity: 0, // 尾迹线条透明度
                        curveness: 0.1, //尾迹线条曲直度
                        color:'#f00'
                    }
                },
                // data: convertData(item[1])
                data: item
            },
            // 流入点样式
            {
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: "fill", //波纹绘制方式 stroke, fill不动
                    scale: 0 //波纹圆环最大小
                },
                label: {
                    normal: {
                        show: true,
                        position: "right", //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: "{b}", //圆环显示文字
                        color: "#F8E71C" //攻击点文字颜色
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: "circle",
                
                itemStyle: {
                    normal: {
                        show: false,
                        //流入点图标颜色
                        color: "#F8E71C",
                        shadowBlur: 5,
                        shadowColor: "#F8E71C"
                    }
                },
                data: item.map(function (dataItem) {
                    return {
                        name: dataItem[1].toName,
                        value: dataItem[1].coord.concat([
                            dataItem[1].value
                        ]),
                        visualMap: false
                    };
                })
            }
        );
    });
    option.series = this.series;
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
        series: []
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
