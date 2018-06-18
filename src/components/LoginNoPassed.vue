<template>
  <div>

    <div class="logo_pic">
      <img v-bind:src="imgUrl" class="img" alt="icon">
    </div>

    <div class="el-form">
      <el-form class="form-inline">

        <el-form-item :rules="[{ required: true, message: '验证码不能为空'}]" class="indentify-form">
          <el-input type="text" name="indentifyCode" class="identify" ref="input1" id="indentifyValue" v-model="indentifyCode" placeholder="请输入"></el-input>
          <img v-bind:src="imgIde" alt="验证码" class="indentifyPicture">
        </el-form-item>

        <el-form-item class="login-btn">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>

      </el-form>

    </div>
  <el-button type="primary" @click="Submit">点击</el-button>
    <div class="footer">
      <p>西安邮电大学信息中心 智邮普创工作室</p>
      <p>电话：88166083</p>
      <p>地址：西安邮电大学图书馆514室</p>
    </div>
  </div>
</template>

<script>
import imgOne from './../assets/u13.jpg'
import imgTwo from './../assets/u11.png'

export default {
  data() {
    return {
      imgUrl: imgOne,
      imgIde: imgTwo,
      passWord: '',
      indentifyCode: ''
    }
  },
  // created() {
  //   this.$http.get('/login').then(function(response) {})
  // },
  methods: {
    onSubmit() {
      this.$http
        .post('/api/check', {
          code: "indentifyCode"
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
          console.log("")
        })
    },
    Submit() {
      console.log(this.$refs.input1.value);
    }
  }
}
</script>

<style>
.indentify-form {
  margin-left: 85px;
  margin-top: 30px;
  margin-bottom: 50px;
}
.indentify-form .identify {
  width: 49%;
}
.indentifyPicture {
  vertical-align: middle;
  width: 25%;
  height: 40px;
  margin: 0;
  padding-left: 27px;
}
.logo_pic {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.img {
  width: 30%;
  height: 30%;
}
.el-form {
  padding-top: 35px;
}
.identify .el-input__inner {
  border-top: 1px solid black;
  border-radius: 0;
  width: 90%;
  vertical-align: middle;
}

.login-btn .el-button {
  display: block;
  margin: 0 auto;
  width: 80%;
  font-size: 20px;
}

.footer p {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: gray;
}
.footer {
  margin-top: 80px;
}
</style>
