<template>
    <Nav />
    <div id="login">
        <div class="login_box">
            <div class="login_title">
                <span @click="changeLogin()">登录</span>
                <span @click="changeLogon()">注册</span>
            </div>
            <div class="login_content_container">
                <div class="login_content login_content1" :style="loginStyle">
                    <br />
                    <div class="line">
                        <input type="text" placeholder="账户" class="login_input" />
                    </div>

                    <div class="line">
                        <input type="text" placeholder="密码" class="login_input" />
                    </div>
                    <div class="line">
                        <input type="checkbox" /> 记住我
                    </div>
                    <div class="line">
                        <button>登录</button>
                    </div>
                </div>
                <div class="login_content login_content2" :style="logonStyle">
                    <br />
                    <div class="line">
                        <input type="text" placeholder="账户" class="login_input" />
                    </div>

                    <div class="line">
                        <input type="text" placeholder="密码" class="login_input" />
                    </div>
                    <div class="line">&nbsp;</div>
                    <div class="line">
                        <button>登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: { Nav },
  data() {
    return {
      isLogin: true,
      loginStyle: 'left: 0;',
      logonStyle: 'left: 350px;',
    };
  },
  methods: {
    changeLogin() {
      this.isLogin = true;
      this.loginStyle = 'left: 0;';
      this.logonStyle = 'left: 350px;';
    },
    changeLogon() {
      this.isLogin = false;
      this.loginStyle = 'left: -350px;';
      this.logonStyle = 'left: 0;';
    },
  },
};
</script>

<style scoped>
#login {
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
}

.login_box {
  position: absolute;
  left: calc(50% + 200px);
  top: 100px;
  width: 350px;
  height: 390px;
  border: 1px solid black;
  box-shadow: 0 0 7px rgb(0, 0, 0, 0.2);
}

.login_title {
  display: flex;
  height: 60px;
  border-bottom: 1px solid black;
  box-shadow: 0 0 7px rgb(0, 0, 0, 0.2);
}

.login_title span {
  cursor: pointer;
  text-align: center;
  width: 50%;
  font-size: 20px;
  line-height: 60px;
}

.login_title span:hover {
  background-color: rgb(233, 231, 231);
}

.login_title span:nth-child(1) {
  border-right: 1px solid black;
}

.line {
  width: 80%;
  margin: 25px auto;
  font-size: 15px;
}

input.login_input {
  width: 100%;
  height: 40px;
  text-indent: 2em;
  font-size: 15px;
}

.line button {
  cursor: pointer;
  width: 100%;
  height: 40px;
  background-color: #5998dd;
  color: white;
  border: none;
  font-size: 20px;
}

.login_content_container {
  position: relative;
  width: 350px;
  height: 300px;
  overflow: hidden;
}

.login_content {
  width: 350px;
  transition: all 0.8s ease-in;
}

.login_content1 {
  position: absolute;
  left: 0;
  top: 0;
}

.login_content2 {
  position: absolute;
  left: 350px;
  top: 0;
}
</style>