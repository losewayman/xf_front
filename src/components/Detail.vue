<template>
    <div>
        <el-row>

            <el-col :span="20">
                <div class="grid-content bg-purple">
                    <div class="move">
                        <p></p>
                        <p>星期六</p>
                        <p>2018-8-8</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">
                    <div class="">
                        <br>
                        <p>{{totalCost.total}}</p>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row v-for="item in items">
            <el-col :span="20">
                <div>
                   
                    {{ item.dir }}

                </div>

            </el-col>
            <el-col :span="2">
                <div class="">
                    <i class="el-icon-date"></i>
                    {{item.txamt}}

                    <!-- <div style="margin-top:6px">
                        <p>{{totalCost.One}}</p>
                    </div>
                    <div class="moneyNum">
                        <p>{{totalCost.Two}}</p>
                    </div>
                    <div class="moneyNum">
                        <p>{{totalCost.Three}}</p>
                    </div>
                    <div class="moneyNum">
                        <p>{{totalCost.Four}}</p>
                    </div>
                    <div class="moneyNum">
                        <p>{{totalCost.Five}}</p>
                    </div> -->
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
      totalCost: {
        total: '303.5',
        One: '69',
        Two: '14',
        Three: '22',
        Four: '16',
        Five: '32'
      },
      items: []
    }
  },
  methods() {},

  mounted() {
    let that = this
    this.$http.post('http://MonthData.cn').then(function(res) {
      // console.log(that);
      console.log(res)
      that.items = res.data.data
    })
  }
}
</script>

<style scoped>
.fontSize {
  font-size: 7px;
  color: gray;
}
.move {
  padding-left: 80px;
}
.moneyNum {
  margin-top: 40px;
}
.placeName {
  margin-top: 22px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

