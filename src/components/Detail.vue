<template>
<div>
    <el-collapse v-model="activeNames" @change="handleChange" >
        <el-collapse-item :title="key.key" :name="key.key" v-for="key in detailKey" :key="key.key">
            <el-card shadow="hover" v-for="item in detailDic[key.key]" :key="item.txdate" >
             <div slot="header" class="clearfix">
                <span>{{item.txdate}}</span>
                <el-tag style="float: right">{{item.txamt}}</el-tag>
            </div>
            <div class="text item">
                {{item.shopname}}
            </div>
        </el-card>
        </el-collapse-item>
    </el-collapse>
</div>
</template>



<script>
let dayjs = require('dayjs');

const picDic = {
    dirx: './../assets/dirx.png',
    dird: './../assets/dird.png',
    dirm: './../assets/dirm.png',
    dirs: './../assets/dirs.png',
    dirq: './../assets/dirq.png',
};

export default {
    data() {
        return {
            activeNames: ['1'],
            detailData: [],
            cost: '',
            detailDic: {},
            detailKey: 　[],
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
                    // 数据整理 按照日期对数据进行分类
                    let orderBydate = {};
                    let orderByKey = [];
                    for (let item of res.data.data) {
                        let theDay = dayjs(item.txdate).format('YYYY-MM-DD');
                        if (theDay in orderBydate) {
                            orderBydate[theDay].push(item);
                        } else {
                            orderByKey.push({
                                key: theDay
                            });
                            orderBydate[theDay] = [item];
                        }
                    }
                    console.log(orderByKey);
                    _this.detailDic = orderBydate;
                    _this.detailKey = orderByKey;
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
