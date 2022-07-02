<template>
    <div class="nav">
        <div class="logo"></div>
        <ul>
            <li>
                <a href="index">主页</a>
            </li>
            <li>
                <a href="#">地图展示</a>
            </li>
            <li>
                <a href="#">管理</a>
            </li>
            <li>
                <a href="../login">注册</a>
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
  transform: scale(1.1);
}

ul li a {
  text-decoration: none;
  color: rgb(65, 63, 63);
  text-shadow: 0 0 10px rgba(43, 42, 42, 0.3);
}

</style>