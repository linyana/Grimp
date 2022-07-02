<template>
    <div class="nav">
        <div class="logo"></div>
        <ul>
            <li>
                <a href>主页</a>
            </li>
            <li>
                <a href>地图展示</a>
            </li>
            <li>
                <a href>管理</a>
            </li>
            <li>
                <a href>注册</a>
            </li>
        </ul>
    </div>
    <div class="banner">
        <img src="../../../../public/resource/images/home1.jpg" alt class="banner" />
        <div class="title">Grimp</div>
        <div class="title2">草原资源智能化管理平台</div>
        <div class="title_button">点击查看</div>
    </div>
    <div class="content">
        <div class="card">
            <div class="card_left">
                <div class="card_title">我们的故事</div>
                <div class="card_text">
                    <p>我们致力于草原的管理，实现新疆草地管理信息化、数字化、自动化、智能化。</p>
                    <p>我们将建立“服务器+数据库+移动终端”模式的系统平台，实现“自治区-地、州-县-乡-村”多级草地数据采集、汇总，满足不同层级管理与查询需求</p>
                </div>
            </div>
            <div class="card_right card_img"></div>
        </div>
        <div class="title_line">
            <div class="line"></div>
            <div class="title_line_text">我们的成就</div>
            <div class="line"></div>
        </div>
        <div class="home_box">
            <div class="box">
                <div class="box_img box_img1"></div>
                <div class="box_title">智能化</div>
                <div class="box_text">草地业务智能化</div>
            </div>
            <div class="box">
                <div class="box_img box_img2"></div>
                <div class="box_title">数字化</div>
                <div class="box_text">野外采集数字化</div>
            </div>
            <div class="box">
                <div class="box_img box_img3"></div>
                <div class="box_title">信息化</div>
                <div class="box_text">草地资源管理信息化</div>
            </div>
            <div class="box">
                <div class="box_img box_img4"></div>
                <div class="box_title">自动化</div>
                <div class="box_text">人机交互自动化</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  position: relative;
  height: 80px;
  font-size: 30px;
  line-height: 80px;
}

.logo {
  position: absolute;
  left: 120px;
  width: 80px;
  height: 80px;
  background-image: url(../../../../public/resource/images/logo.png);
  background-size: 100% 100%;
}

ul {
  position: absolute;
  left: calc(50% - 500px);
  top: 0;
  width: 700px;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

ul li {
  cursor: pointer;
  text-align: center;
  width: 150px;
  list-style: none;
  transition: all 0.3s;
}

ul li:hover {
  background-color: rgb(223, 223, 223);
  transform: scale(1.1)
}

ul li a {
  text-decoration: none;
  color: black;
  text-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
}

img.banner {
  width: 100%;
}

.banner {
  position: relative;
}

.title {
  position: absolute;
  left: calc(50%);
  top: 200px;
  font-size: 70px;
  color: rgb(68, 67, 67);
  font-weight: 700;
  text-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
}

.title2 {
  position: absolute;
  left: calc(50% - 170px);
  top: 320px;
  font-size: 50px;
  color: rgb(68, 67, 67);
  font-weight: 700;
  text-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
}

.title_button {
  cursor: pointer;
  position: absolute;
  left: calc(50% + 50px);
  top: 450px;
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  background-color: rgb(90, 121, 224);
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
  text-shadow: 0 0 5px rgb(255, 255, 255, 0.3);
}

.content {
  width: 1200px;
  margin: auto;
}

.card:first-child {
  margin-top: 100px;
}

.card {
  display: flex;
  width: 100%;
  height: 300px;
}

.card > div {
  width: 50%;
}

.card_title {
  text-align: center;
  line-height: 80px;
  font-size: 40px;
}

.card_text {
  overflow: hidden;
}

.card_text p {
  text-indent: 2em;
  line-height: 35px;
  font-size: 20px;
  padding: 10px 20px;
}

.card_img {
  background-image: url(../../../../public/resource/images/home2.jpg);
  background-size: 100% 100%;
}

.title_line {
  width: 420px;
  height: 50px;
  margin: 100px auto;
  display: flex;
}

.title_line_text {
  font-size: 40px;
  padding: 0 30px;
}

.line {
  width: 80px;
  height: 6px;
  margin-top: 22px;
  background-color: rgb(90, 121, 224);
}

.home_box {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.box {
  width: 260px;
  height: 300px;
}

.box_img {
  margin: auto;
  width: 60px;
  height: 60px;
  background-size: 100% 100%;
}

.box_img1 {
  background-image: url(../../../../public/resource/images/home6.png);
}

.box_img2 {
  background-image: url(../../../../public/resource/images/home4.png);
}

.box_img3 {
  background-image: url(../../../../public/resource/images/home5.png);
}

.box_img4 {
  background-image: url(../../../../public/resource/images/home3.png);
}

.box_title {
  text-align: center;
  font-size: 25px;
  line-height: 80px;
}

.box_text {
  text-align: center;
  padding: 0 20px;
}
</style>