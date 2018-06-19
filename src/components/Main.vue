<template>
  <div>

    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple cash">
          <p class="text-cash">账户余额<br>
            <span class="text-cash-span">{{dayData.numberOne}}</span>
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light cash">
          <p class="text-cash">5月支出<br>
            <span class="text-cash-span">{{dayData.numberTwo}}</span>
          </p>
        </div>
      </el-col>
    </el-row>

    <div class="con_flow">
      <img :src="imgRed" alt="" class="ll">
      <span class="ss">消费流水</span>
    </div>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <p class="date">{{dayData.daily}}</p>
        </div>
        <div class="conPlace">
          <div class="place qq">
            <div class="imgdiv"><img src="./../assets/u13.jpg" alt="" class="img"></div>
            <div class="pdiv">
            <p class="dir">{{dayData.dirOne}}</p>
            <p class="shopname">{{dayData.shopnameOne}}</p><br></div>
          </div>
          <div class="qq">
            <div class="imgdiv"><img src="./../assets/u13.jpg" alt=""  class="img"></div>
            <div class="pdiv">
            <p class="dir">{{dayData.dirOne}}</p>
            <p class="shopname">{{dayData.shopnameOne}}</p><br></div>
          </div>
          <div  class="qq">
            <div class="imgdiv"><img src="./../assets/u13.jpg" alt=""  class="img"></div>
            <div  class="pdiv">
            <p class="dir">{{dayData.dirOne}}</p>
            <p class="shopname">{{dayData.shopnameOne}}</p></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light right">
          <p class="pay">支出{{dayData.pay}}</p>
        </div>
        <div class="content">
          <p class="payDetail">{{dayData.txamtOne}}</p>
          <p class="payDetail">{{dayData.txamtOne}}</p>
          <p class="payDetail">{{dayData.txamtOne}}</p>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="viewAll">
          <p @click="goDetail" class="viewAll_a">查看全部 ></p>
        </div>
      </el-col>
    </el-row>

    <div class="pass">

    </div>

    <el-row type="flex" justify="center">
      <el-col :span="24">
        <div class="tabs">
          <el-tabs v-model="activeName" @tab-click="handleClick" class="tabsWidth">
            <el-tab-pane label="1月" name="first" style="width:100%;" class="eltab">
            </el-tab-pane>
            <el-tab-pane label="2月" name="second" style="width:100%;"  class="eltab">
            </el-tab-pane>
            <el-tab-pane label="3月" name="third" style="width:100%;" class="eltab">
            </el-tab-pane>
            <el-tab-pane label="4月" name="fourth" style="width:100%;" class="eltab">
            </el-tab-pane>
            <el-tab-pane label="5月" name="fourth" style="width:100%;" class="eltab">
            </el-tab-pane>
            <el-tab-pane label="6月" name="fourth" style="width:100%;" class="eltab">
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="9">
        <div id="pie"></div>
      </el-col>
      <el-col :span="15">
        <div class="">
          <div class="vertical">
            <div class="padding">
              <img :src="imgOne" alt="" class="icon ll" >
              <p class="middle">旭日苑
                <span class="middleInline">{{monthData.txamtOne}}</span>
              </p>
            </div>
            <div class="padding">
              <img :src="imgTwo" alt="" class="icon ll">
              <p class="middle">美广
                <span class="middleInline">{{monthData.txamtOne}}</span>
              </p>
            </div>
            <div class="padding">
              <img :src="imgThree" alt="" class="icon ll">
              <p class="middle">超市
                <span class="middleInline">{{monthData.txamtOne}}</span>
              </p>
            </div>
            <div class="padding">
              <img :src="imgFour" alt="" class="icon ll">
              <p class="middle">洗澡
                <span class="middleInline">{{monthData.txamtOne}}</span>
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <div id="demo" style="width: 100%; height: 300px; overflow: scorll"></div>
    </el-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import Red from './../assets/u107.png'
import NewData from './../mock//NewData.js'
import WeekData from './../mock//WeekData.js'
import MonthData from './../mock//MonthData.js'
import picOne from './../assets/u106.png'
import picTwo from './../assets/u109.png'
import picThree from './../assets/u143.png'
import picFour from './../assets/u108.png'

export default {
  data() {
    return {
      imgOne: picOne,
      imgTwo: picTwo,
      imgThree: picThree,
      imgFour: picFour,
      imgRed: Red,
      activeName: 'first',
      dayData: {
        numberOne: '',
        numberTwo: '',
        pay: '',
        payOne: '',
        payTwo: '',
        payThree: '',
        daily: '',
        dirOne: '',
        dirTwo: '',
        dirThree: '',
        shopnameOne: '',
        shopnameTwo: '',
        shopnameThree: '',
        txamtOne: '',
        txamtTwo: '',
        txamtThree: ''
      },
      weekData: {},
      monthData: {
        xu: '',
        mei: '',
        market: '',
        bath: '',
        dong: '',
        cost: '',
        txamtOne: '',
        txamtTwo: '',
        txamtThree: '',
        txamtFour: ''
      },
      getPieOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color:['#48cda6','#968ade','#fd87ab','#FF69B4'],//,'#ffdf33'
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [],
            // center: ['10%', '10%']
          }
        ]
      },
      getBarOption: {
         title: {//标题组件
                text: '吃货统计',
                top:'5px',
                left:'8px',//标题的位置 默认是left，其余还有center、right属性
                textStyle: {    
                color: "#696969",    
                fontSize: 14,   
                }
            },
        tooltip: {},
        xAxis: [{
          data: ['香锅', '冒菜', '土豆片夹馍', '方便面', '快餐'],
          axisTick: {
            inside: true,
            show: false
          },
          axisLabel:{
            formatter:function(val){
                return val.split("").join("\n");
            }
          }
        }],
         grid: { // 控制图的大小，调整下面这些值就可以，
             x: 40,
             x2: 10,
             y2: 80,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
         },
        yAxis: {
          allowDecimals: Boolean,
          ceiling: 160,
          max: 160,
          name:'（金额/元）',
          min: 0,
          splitNumber: 10 //改变坐标轴的分割段数
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [],
            barWidth: 40,
            itemStyle: {
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                  let colorList = [
                    'rgb(205,38,38)',
                    'rgb(106,90,205)',
                    'rgb(64,224,208)',
                    'rgb(235,142,85)',
                    'rgb(176,224,230)'
                  ]
                  return colorList[params.dataIndex]
                }
              },
              barGap: '20%',
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },

  mounted() {
    // echarts.init(document.getElementById('demo')).setOption({})

    this.drawLinePie() //扇形图
    this.drawLineBar() //柱状图

    this.$http
      .post('http://NewData.cn')
      .then(res => {
        console.log(res)
        // console.log(res.data.msg)
        // console.log(this)
        this.dayData.numberOne = res.data.data[0].balance
        this.dayData.numberTwo = res.data.cost
        this.dayData.pay = res.data.cost
        this.dayData.dirOne = res.data.data[0].dir
        this.dayData.daily = res.data.data[0].txdate
        this.dayData.shopnameOne = res.data.data[0].shopname
        this.dayData.txamtOne = res.data.data[0].txamt
      })
      .catch(function(error) {
        console.log(error)
      })

    this.$http
      .post('http://WeekData.cn')
      .then(res => {
        // console.log(res)
      })
      .catch(function(error) {
        console.log(error)
      })

    // this.$http
    //   .post('http://MonthData.cn')
    //   .then(res => {
    //     console.log(res)
    //     this.monthData.dong = res.data.data[0].dir
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
  },

  methods: {
    // 路由跳转详情页
    goDetail() {
      this.$router.push('/detail')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },

    //异步axios请求数据，完成扇形统计图
    drawLinePie() {
      this.linePie = echarts.init(document.getElementById('pie'))
      this.linePie.setOption(this.getPieOption)
      this.$http
        .post('http://MonthData.cn')
        .then(res => {
          console.log("yes");
          console.log(res.data.dirlist[0])
          this.monthData.txamtOne = res.data.data[0].txamt
          console.log("2",res.data.dirlist[0])
          this.linePie.setOption({
             title: {//标题组件
                text: '支出分类',
                top:'10px',
                left:'8px',//标题的位置 默认是left，其余还有center、right属性
                textStyle: {    
                color: "#696969",    
                fontSize: 14,   
                }
            },
            graphic: {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text: res.data.cost + '\r\n总支出',
                textAlign: 'center',
                fill: '#000',
                width: 30,
                height: 30
              },
              textStyle: {
                fontSize: 15,
                color: '#39CCCC'
              }
            },
            tooltip:{
              position:['50%','50%'],
            },
            series: [
              {
                radius:['45%','60%'] ,
                data: [
                  { value: res.data.dirlist[0].dirx, name: '旭日苑' },
                  { value: res.data.dirlist[0].dirm, name: '美广' },
                  { value: res.data.dirlist[0].dirs, name: '超市' },
                  { value: res.data.dirlist[0].dirq, name: '澡堂' }
                ]
              }
            ]
          })
        })
        .catch(function(error) {
          console.log("no");
          console.log(error)
        })
    },
    // axios异步请求数据，加载柱状图
    drawLineBar() {
      this.lineBar = echarts.init(document.getElementById('demo'))
      this.lineBar.setOption(this.getBarOption)
      this.$http
        .post('http://MonthData.cn')
        .then(res => {
          console.log(res.data.data.shopname)
          this.lineBar.setOption({
            xAxis: {
              data: ['香锅', '冒菜', '土豆片夹馍', '方便面', '快餐']
            },
            series: {
              data: [120, 100, 150, 80, 70]
            }
          })
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.payDetail {
  padding: 5px 0;
}
.padding {
  padding: 5px 0;
}
.vertical {
  margin-top: 30px;
}
.middleInline {
  display: inline;
  /* vertical-align: middle; 居中对齐， */
  position: absolute;
  right: 30px;
  
}
.icon {
  vertical-align: middle; /* 居中对齐， */
  margin-left: 40px;
}
.middle {
  vertical-align: middle; /* 居中对齐， */
  display: inline-block;
  margin-left: 10px;
  width:60%;
  font-size: 14px;
}

.tabsWidth {
  font-size: 13px;
  height: 33px;
}
#pie {
  width: 200px;
  height: 200px;
}
.qq{
  overflow: auto;
}
.img{
  width:40px;
  height: 40px;
}
.imgdiv{
  width:40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  margin-right: 15px;
  overflow: hidden;
  margin-top:4px;
}
.pdiv{
  float: left;
  padding-top:8px;
  height: 50px;
  box-sizing: border-box;
}
.ll{
  display:inline-block;
  width:5px;
  height: 5px;
  border-radius: 50%;
}
.viewAll {
  text-align: center;
}
.viewAll_a {
  text-decoration: none;
  color: #908d8d;
  cursor: pointer;
}
.tabs {
  display: flex;
  justify-content: center;
  width:100%;
  /* width: 100% */
}
.pass {
  background-color: 		#DCDCDC;
  height: 15px;
  margin-top: 5px;
}
.pay {
  padding: 5px 20px;
  text-align: end;
  font-size: 14px;
  background-color:	#DCDCDC;
}
.payDetail{
  padding:0px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding-left: 80px;
}

.date {
  padding: 5px 20px;
  font-size: 14px;
  background-color:#DCDCDC;
}
.conPlace {
  margin-left: 20px;
}
.shopname {
  color: gray;
  font-size: 12px;
}
.dir {
  font-size: 14px;
}
.con_flow {
  margin: 10px 0 10px 25px;
}
.text-cash-span {
  font-size: 22px;
}
.text-cash {
  text-align: center;
  vertical-align: middle;
}
#demo {
  display: flex;
  justify-content: center;
}
.bg-purple {
  background: #E0FFFF;
}
.bg-purple-light {
  background: #E0FFFF;
}
.grid-content {
  border-radius: 4px;
  min-height: 25px;
}
</style>

