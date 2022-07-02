<template>
    <div id="pannel">
        <div class="pannel_box">
            <div class="pannel_box_img pannel_box_img1"></div>
            <div class="pannel_box_text">底图</div>
        </div>
        <div class="pannel_box">
            <div class="pannel_box_img pannel_box_img2"></div>
            <div class="pannel_box_text">图层</div>
        </div>
        <div class="pannel_box_line"></div>
        <div class="pannel_box" @click="PannelClick()">
            <div class="pannel_box_img pannel_box_img3"></div>
            <div class="pannel_box_text">工具</div>
            <div class="pannel_box_img_bottom"></div>
            <div class="pannel_box_click_content" v-if="isClicked">
                <div class="pannel_box_click_content_card">图上量算</div>
                <div class="pannel_box_click_content_card">地图导航</div>
                <div class="pannel_box_click_content_card">图上量算</div>
                <div class="pannel_box_click_content_card">地图导航</div>
                <div class="pannel_box_click_content_card">图上量算</div>
                <div class="pannel_box_click_content_card">地图导航</div>
                <div class="pannel_box_click_content_card">图上量算</div>
                <div class="pannel_box_click_content_card">地图导航</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    PannelClick() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style scoped>
#pannel {
  display: flex;
  position: absolute;
  right: 30px;
  top: 80px;
  width: 300px;
  display: flex;
  background-color: rgba(82, 81, 81, 0.9);
  height: 32px;
  border-radius: 10px;
}

.pannel_box {
  cursor: pointer;
  position: relative;
  width: 33%;
}

.pannel_box:nth-child(3) {
  padding-right: 20px;
}

.pannel_box_img {
  position: absolute;
  left: 10px;
  top: 8px;
  height: 18px;
  width: 18px;
  background-size: 100% 100%;
}

.pannel_box_text {
  position: absolute;
  left: 32px;
  top: 6px;
  text-align: center;
  color: white;
}

.pannel_box_img1 {
  background-image: url(/resource/images/comprehensive-situational.png);
}

.pannel_box_img2 {
  background-image: url(/resource/images/picture-layer.png);
}

.pannel_box_img3 {
  background-image: url(/resource/images/tool.png);
}

.pannel_box_img_bottom {
  position: absolute;
  left: 70px;
  top: 8px;
  height: 18px;
  width: 18px;
  background-image: url(/resource/images/bottom.png);
  background-size: 100% 100%;
}

.pannel_box_line {
  position: absolute;
  left: 90px;
  top: 10px;
  border-left: 1px solid white;
  border-right: 1px solid white;
  width: 90px;
  height: 15px;
}

.pannel_box_click_content {
  z-index: 99999;
  position: absolute;
  left: 0;
  top: 40px;
}

.pannel_box_click_content_card {
  color: white;
  line-height: 40px;
  background-color: rgb(87, 85, 85, 0.8);
  padding: 0 20px;
  font-size: 14px;
}

.pannel_box_click_content_card:hover {
  background-color: rgba(128, 124, 124, 0.6);
}
</style>
