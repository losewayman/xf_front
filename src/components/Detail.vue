<template>
<div>
    <el-row>
        <el-row>
            <el-col :span="18">
                <div class="grid-content">
                    <div class="move date">
                        <p>z暂无</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="dirFont">
                        <span>
                                <i class="el-icon-date dircolor"></i>
                                <span class="dir dircolor span">{{cost}}</span>
                        </span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row v-for="item in detailData" :key="item.txdate" style="border-bottom: 1px solid #80808082;">
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
    </el-row>
        
</div>
</template>


<script>
export default {
    data() {
        return {
            detailData:'',
            cost:'',
        }
    },
    mounted() {
        let _this = this
        _this.$http({
                url: "http://118.126.110.182:8002/api/getOneMonthData",
                method: "get",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            })
            .then(function (res) {
                if (res.data.status === 0) {
                    _this.detailData = res.data.data;
                    _this.cost = res.data.cost;
                } else {
                    _this.$message.error("获取失败");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
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
