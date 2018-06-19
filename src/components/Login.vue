<template>
<div>

    <div class="logo_pic">
        <img
            v-bind:src="imgUrl"
            class="img"
            alt="icon"
        >
    </div>

    <div class="el-form">
        <el-form
            class="form-inline"
            :model="ruleForm"
            ref="ruleForm"
            :rules="rules"
        >

            <el-form-item
                prop="password"
                v-if="isPass"
            >

                <el-input
                    type="password"
                    name="password"
                    v-model="ruleForm.cardpwd"
                    placeholder="请输入你的一卡通密码"
                    class="login-form-input"
                ></el-input>

                    </el-form-item>

                    <el-form-item
                        class="indentify-form"
                        prop="indentify"
                    >
                        <el-input
                            type="text"
                            class="identify"
                            name="indentifyCode"
                            v-model="ruleForm.validate"
                        ></el-input>
                            <img
                                :src="checkImg"
                                alt="验证码"
                                class="indentifyPicture"
                            >
                                </el-form-item>

                                <el-form-item class="login-btn">
                                    <el-button
                                        type="primary"
                                        :loading="submitLoading"
                                        @click="onSubmit('ruleForm')"
                                    >登录</el-button>
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
export default {
    data() {
        return {
            checkImg: 'http://118.126.110.182:8002/static/img/chckcode.jpg',
            imgUrl: 'http://118.126.110.182:8002/static/dist/src/assets/u13.jpg',
            ruleForm: {
                cardpwd: '',
                validate: ''
            },
            rules: {
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'change'
                }, ],
                indentify: [{
                    len: 4,
                    message: '长度需等于4个字符',
                    trigger: 'change',
                    required: true
                }]
            },
            submitLoading: false,
        }
    },
    created() {
        // 验证是否需要一卡通密码
        var isParams = document.cookie.split(';')[0].split('=')[1];
        console.log(isParams);
        if (true) {
            this.isPass = true;
        } else {
            this.isPass = false;
        }
    },
    methods: {
        onSubmit() {
            // 表单验证
            // this.$refs['ruleForm'].validate((valid) => {
            //     if (valid) {
                    let _this = this;
                    _this.submitLoading = true;
                    _this.$http({
                      url: 'http://118.126.110.182:8002/api/check',
                      method: 'get',
                      headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      // data: {
                      //   checkcode: _this.ruleForm.validate,
                      // },
                      params: {
                        cardpwd: _this.ruleForm.cardpwd,
                        checkcode: _this.ruleForm.validate,
                      },
                    }).then(function (res) {
                        console.log('前端', res.data)
                        if (res.status === 0) {
                            _this.$router.push('/index')
                        } else {
                            _this.$message.error('登陆失败, 密码错误');
                            // 强制刷新 1为刷新页面 2为刷新图片
                            // window.location.replace("http://118.126.110.182:8002")
                            // _this.checkImg = 'http://118.126.110.182:8002/static/img/chckcode.jpg?' + new Date().valueOf();
                        }
                        _this.submitLoading = false;
                    })
                    .catch(function (error) {
                        console.log(error)
                        _this.submitLoading = false;
                    })
            //     }
            // });
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
    background-position-x: 19px;
    /*图片显示的位置*/
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
