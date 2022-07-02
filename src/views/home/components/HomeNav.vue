<template>
    <div class="nav">
        <div class="logo"></div>
        <ul>
            <li>
                <a href="./index">主页</a>
            </li>
            <li>
                <a href="./map">地图</a>
            </li>
            <li>
                <a href="./dataquery">数据展示</a>
            </li>
            <li>
                <a href="./area">地域风光</a>
            </li>
            <li>
                <a href="./information">信息发布</a>
            </li>
            <li>
                <a href="./feedback">反馈</a>
            </li>
        </ul>
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
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

ul li {
  cursor: pointer;
  text-align: center;
  min-width: 100px;
  padding: 0 30px;
  list-style: none;
  transition: all 0.3s;
}

ul li:hover {
  background-color: rgb(238, 238, 238);
}

ul li a {
  text-decoration: none;
  color: rgb(65, 63, 63);
  text-shadow: 0 0 10px rgba(43, 42, 42, 0.3);
}
</style>