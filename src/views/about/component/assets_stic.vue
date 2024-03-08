<template>
<!-- 资产统计 -->
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
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            };
        }
    }
}
</script>
<style scoped>
.leftContent{
    width:100%;
    height:100%;
}
</style>