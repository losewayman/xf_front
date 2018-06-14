<template>
<div>
    <p>登录后主页</p>
    <div id="demo" style="width: 600px; height: 400px"></div>
</div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    data() {
        return {
        }
    },
    mounted() {
        echarts.init(document.getElementById('demo')).setOption({
            series: {
                type: 'pie',
                data: [{
                        name: 'A',
                        value: 1212
                    },
                    {
                        name: 'B',
                        value: 2323
                    },
                    {
                        name: 'C',
                        value: 1919
                    }
                ]
            }
        });
    },
    
  methods: {
  }
}
</script>

<style scoped>

</style>

