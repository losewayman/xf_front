<template>
    <div>
        <el-row>
            <el-row>
                <el-col :span="18">
                    <div class="grid-content">
                        <div class="move date">
                            <p>2018年6月18日</p>
                            <p>星期六</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                        <div class="dirFont">
                            <span>
                                <i class="el-icon-date dircolor"></i>
                                <span class="dir dircolor span">{{totalCost.total}}</span>
                            </span>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <el-row v-for="item in items">
                <el-col :span="19">
                    <div class="move dir ">
                        <p class="placeShop">{{ item.dir }}</p>
                        <p class="shopName">{{item.shopname}}</p>
                    </div>

                </el-col>
                <el-col :span="5">
                    <div class="dircolor deatilCost">
                        <i class="el-icon-date"></i>
                        {{item.txamt}}
                    </div>
                </el-col>
            </el-row>

            <el-row style="border-top: 1px solid #80808082;">

                <el-col :span="18">
                    <div class="grid-content">
                        <div class="move date">
                            <p>2018年6月19日</p>
                            <p>星期六</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                        <div class="dirFont">
                            <span>
                                <i class="el-icon-date dircolor"></i>
                                <span class="dir dircolor span">{{totalCost.total}}</span>
                            </span>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <el-row v-for="item in items">
                <el-col :span="19">
                    <div class="move dir ">
                        <p class="placeShop">{{ item.dir }}</p>
                        <p class="shopName">{{item.shopname}}</p>
                    </div>

                </el-col>
                <el-col :span="5">
                    <div class="dircolor deatilCost">
                        <i class="el-icon-date"></i>
                        {{item.txamt}}
                    </div>
                </el-col>
            </el-row>

            <el-row style="border-top: 1px solid #80808082;">

                <el-col :span="18">
                    <div class="grid-content">
                        <div class="move date">
                            <p>2018年6月20日</p>
                            <p>星期六</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                        <div class="dirFont">
                            <span>
                                <i class="el-icon-date dircolor"></i>
                                <span class="dir dircolor span">{{totalCost.total}}</span>
                            </span>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <el-row v-for="item in items">
                <el-col :span="19">
                    <div class="move dir">
                        <p class="placeShop">{{ item.dir }}</p>
                        <p class="shopName">{{item.shopname}}</p>
                    </div>

                </el-col>
                <el-col :span="5">
                    <div class="dircolor deatilCost">
                        <p class="">
                            <i class="el-icon-date"></i>
                            {{item.txamt}}
                        </p>
                    </div>
                </el-col>
            </el-row>
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
.bel-col {
  border-top: 1px solid #80808082;
}
.date {
  color: gray;
  font-size: 10px;
  padding-top: 5px;
}
.deatilCost {
  margin: 15px 0;
  font-size: 15px;
}
.top {
  margin: 2px 0;
}
.dirFont {
  position: absolute;
  bottom: 0;
  font-size: 12px;
  right: 31px;
}
.span {
  display: inline-block;
}
.dircolor {
  color: #e66b45;
}
.placeShop {
  font-size: 14px;
}
.shopName {
  font-size: 12px;
  color: gray;
}
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
.dir {
  margin: 10px 0 5px;
}
.grid-content {
  background-color: #ebeef56e;
  min-height: 42px;
}
</style>

