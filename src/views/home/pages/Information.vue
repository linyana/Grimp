<template>
    <Nav />
    <div id="information">
        <br />
        <div class="line">
            <div class="left">网商银行将暂停支付宝提现 支付宝: 其他银行服务不变</div>
            <div class="right">2022.4.20</div>
        </div>
        <div class="line">
            <div class="left">网商银行将暂停支付宝提现 支付宝: 其他银行服务不变</div>
            <div class="right">2022.4.20</div>
        </div>
        <div class="line">
            <div class="left">网商银行将暂停支付宝提现 支付宝: 其他银行服务不变</div>
            <div class="right">2022.4.20</div>
        </div>
        <div class="line">
            <div class="left">网商银行将暂停支付宝提现 支付宝: 其他银行服务不变</div>
            <div class="right">2022.4.20</div>
        </div>
        <div class="line">
            <div class="left">网商银行将暂停支付宝提现 支付宝: 其他银行服务不变</div>
            <div class="right">2022.4.20</div>
        </div>
        <div class="line">
            <div class="left">网商银行将暂停支付宝提现 支付宝: 其他银行服务不变</div>
            <div class="right">2022.4.20</div>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
    components: {Nav}
};
</script>

<style scoped>
#information {
  width: 800px;
  margin: auto;
}

.line {
  cursor: pointer;
  position: relative;
  width: 800px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: rgb(78, 75, 75);
  padding: 5px;
}

.line:hover {
  color: white;
  background-color: rgb(201, 201, 201);
}

.left {
  position: absolute;
  left: 0;
  width: 680px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 5px;
}

.right {
  position: absolute;
  right: 0;
  width: 100px;
}
</style>