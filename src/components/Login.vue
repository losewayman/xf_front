<template>
  <div>

    <div class="logo_pic">
      <img v-bind:src="imgUrl" class="img" alt="icon">
    </div>

    <div class="el-form">
      <el-form class="form-inline" :model="ruleForm" ref="ruleForm" :rules="rules">

        <el-form-item prop="password">

          <el-input type="password" name="password" v-model="ruleForm.cardpwd" placeholder="请输入你的一卡通密码" class="login-form-input"></el-input>

        </el-form-item>

        <el-form-item class="indentify-form" prop="indentify">
          <el-input type="text" class="identify" name="indentify" v-model="ruleForm.validate"></el-input>
          <img src="http://118.126.110.182:8002/static/img/chckcode.jpg" alt="验证码" class="indentifyPicture">
        </el-form-item>

        <el-form-item class="login-btn">
          <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
        </el-form-item>

      </el-form>

    </div>

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
      ruleForm: {
        cardpwd: '',
        validate: ''
      },
      rules: {
        cardpwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, message: '长度需大于1个字符', trigger: 'blur' }
        ],
        validate: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      } //表单数据验证
    }
  },
  methods: {
    //axios发送表单数据
    onSubmit(formName) {
      const self = this
      self.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem('cardpwd', self.ruleForm.cardpwd)
          localStorage.setItem('ms_user', JSON.stringify(self.ruleForm))

          console.log(JSON.stringify(self.ruleForm))

          self.$http
            .post(
              'http://api.komavideo.com/news/list',
              JSON.stringify(self.ruleForm)
            )
            .then(response => {
              console.log(response)
              if (response.data == 0) {
                console.log('密码错误')
                self.errorInfo = true
                self.errInfo = '密码错误'
              } else if (response.status == 200) {
                self.$router.push('/index')
              }
            })
            .then(error => {
              console.log(error)
            })
        } else {
          console.log('error submit')
          return false
        }
      })
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
.login-form-input .el-input__inner {
  display: block;
  margin: 0 auto;
  border: 0 none;
  background: url('./../assets/u19.png');
  background-repeat: no-repeat;
  background-position-x: 19px; /*图片显示的位置*/
  width: 80%;
  padding: 0 0 13px 100px;
  border-bottom: 1px solid #c0c4cc;
  border-radius: 0;
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
