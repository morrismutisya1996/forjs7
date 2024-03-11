<template>
    <div id="echarts" ref="wordMap" _echarts_instance_="ec_1709447161562"
        style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"></div>
</template>
<script>
import * as geoJson from '@/assets/js/word.js'
export default {
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
                        fromName: "加拿大",
                        id:'oneline_start',
                        level: 1
                    },
                    {
                        coord: [147.756712,67.946144],
                        toName: "俄罗斯",
                        id:'online_end',
                        value: 1
                    }
                ],
                [
                    {
                        //企业
                        coord: [121.4648, 31.2891],
                        fromName: "中国",
                        id:'towline_start',
                        level: 1
                    },
                    {
                        coord: [-52.479467,-17.78616],
                        toName: "美国",
                        fromName:'企业2',
                        id:'towline_end',
                        value: 1
                    }
                ]
            ]]
        }
    },
    mounted(){
        this.myChart = this.$echarts.init(this.$refs['wordMap']);
        this.$echarts.registerMap('world', geoJson.default);
        let option = this.init()
        let colors=["#C83F11","#FF9500","#3593FF","#0DD567"];
        // this.myChart.on('click', function (params) {
        //     // 控制台打印数据的名称
        //     console.log(params);
        // });
        this.linesData.forEach((item,index) => {
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
                            position: "bottom", // 文字位置
                            offset: [0, 10], // 偏移设置
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
                        symbolSize: 10, // 图标大小
                        color: colors[index] // 箭头颜色
                    },
                    // 尾部 线的样式
                    lineStyle: {
                        type:'dashed',
                        // normal: {
                        //     width: 3, // 尾迹线条宽度
                        //     opacity: 0.5, // 尾迹线条透明度
                        //     curveness: 0.2, //尾迹线条曲直度
                        //     color:colors[index]
                        // }
                        opacity: 0.5,
                        width: 3,
                        curveness: 0.2
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
                        normal: { //asmw
                            show: true,
                            position: "bottom", //显示位置
                            offset: [5, 0], //偏移设置
                            formatter: "{b}", //圆环显示文字
                            color: "#F8E71C", //攻击点文字颜色
                            textStyle: {
                                fontWeight: "bold"
                            }
                        },
                        emphasis: {
                            show: false,
                            
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
                        color:'rgba(0,0,0,0)',
                        
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0,0)', // 100% 处的颜色
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
            tooltip: {
                trigger: 'item',
                triggerOn :'click',
                formatter: function (params) {
                    console.log(params.seriesType,'=======params')
                    var res = "";
                    res += "<div class='nodeInfo'>"
                    res += "<table style=\"list-style:none;width:250px;font-size:12px;font-weight:bold;margin-top:3px;table-layout:fixed;\">\n";
                    res += "<thead ><tr>";
                    res += "<a><font color=#00D5EE>近24小时攻防统计</font></a>";
                    res += "</tr><thead>\n";
                    res += "<tbody style=\"height:20px;\">";
                    res += "<tr style=\"border-bottom:1px solid #00D5EE;\"><th style=\"text-align:center;color:#00D5EE;\">威胁类型</th>"
                        + "<th style=\"text-align:center;color:#00D5EE;\">受攻击次数</th>"
                        + "<th style=\"text-align:center;color:#00D5EE;\">防御次数</th>"
                        + "<th style=\"text-align:center;color:#00D5EE;\">成功率</th></tr>";
                    res += "<tr><td style=\"text-align:left;\">高危</td><td style=\"text-align:center;\">"
                        + "100</td><td style=\"text-align:center;\">"
                        + "99</td><td style=\"text-align:center;\">"
                        + "99%</td></tr>";
                    res += "<tr><td style=\"text-align:left;\">中危</td><td style=\"text-align:center;\">"
                        + "100</td><td style=\"text-align:center;\">"
                        + "100</td><td style=\"text-align:center;\">"
                        + "100%</td></tr>";
                    res += "<tr><td style=\"text-align:left;\">低危</td><td style=\"text-align:center;\">"
                        + "100</td><td style=\"text-align:center;\">"
                        + "98</td><td style=\"text-align:center;\">"
                        + "98%</td></tr>";
                    res += "<tr><td style=\"text-align:left;\">可疑</td><td style=\"text-align:center;\">"
                        + "100</td><td style=\"text-align:center;\">"
                        + "100</td><td style=\"text-align:center;\">"
                        + "100%</td></tr>";
                    res += "</tbody>";
                    res += "</table>\n";
                    res += "</div>";
                    return res;
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
                roam: false,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
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
#echarts {
  width: 100%;
  height:100%;
}
</style>