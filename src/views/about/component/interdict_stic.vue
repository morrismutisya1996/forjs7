<template>
<!-- 实时阻断统计 -->
    <div class="leftContent" ref="leftSide"></div>
</template>
<script>
export default {
    data(){
        return {
            option:null
        }
    },
    mounted(){
        this.leftChart = this.$echarts.init(this.$refs['leftSide']);
        this.init()
    },
    methods:{
        init(){
            let option = this.creatOption()
            this.leftChart.setOption(option)
        },
        creatOption(){
            return {
                title: {
                    text: 'World Population'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
                },
                series: [
                    {
                    name: '2011',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                    name: '2012',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]
            };
        }
    }
}
</script>
<style scoped>
.leftContent{
    width:300px;
    height: 300px;
}
</style>