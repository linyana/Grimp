<template>
    <HomeNav />
    <div id="area">
        <div class="area_card">
            <div class="area_card_left area_img img1"></div>
            <div class="area_card_right area_text">
                <h2>风景</h2>
                <p>
                    草原是地球生态系统的一种，分为热带草原、温带草原等多种类型，是地球上分布最广的植被类型。
                    草原的形成原因是土壤层薄或降水量少，草本植物受影响小，使植物无法广泛生长。
                    中国是世界上草原资源最丰富的国家之一，草原总面积将近4亿公顷，占全国土地总面积的40%，为现有耕地面积的3倍。
                </p>
            </div>
        </div>
        <div class="area_card">
            <div class="area_card_left area_text">
                <h2>风景</h2>
                <p>
                    草原是地球生态系统的一种，分为热带草原、温带草原等多种类型，是地球上分布最广的植被类型。
                    草原的形成原因是土壤层薄或降水量少，草本植物受影响小，使植物无法广泛生长。
                    中国是世界上草原资源最丰富的国家之一，草原总面积将近4亿公顷，占全国土地总面积的40%，为现有耕地面积的3倍。
                </p>
            </div>
            <div class="area_card_right area_img img2"></div>
        </div>
        <div class="area_card">
            <div class="area_card_left area_img img3"></div>
            <div class="area_card_right area_text">
                <h2>风景</h2>
                <p>
                    草原是地球生态系统的一种，分为热带草原、温带草原等多种类型，是地球上分布最广的植被类型。
                    草原的形成原因是土壤层薄或降水量少，草本植物受影响小，使植物无法广泛生长。
                    中国是世界上草原资源最丰富的国家之一，草原总面积将近4亿公顷，占全国土地总面积的40%，为现有耕地面积的3倍。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue';

export default {
  components: { HomeNav },
};
</script>

<style scoped>
#area {
  width: 100%;
}

.area_card {
  position: relative;
  width: 100%;
  height: 500px;
  margin: 20px 0;
}

.area_card_left {
  position: absolute;
  left: 0;
  height: 100%;
}

.area_card_right {
  position: absolute;
  right: 0;
  height: 100%;
}

h2 {
  width: 80%;
  margin: 20px 0;
  margin-left: 10%;
  font-weight: 700;
  font-size: 30px;
}

p {
  width: 80%;
  text-indent: 2em;
  margin-left: 10%;
  line-height: 30px;
}

.area_img {
  width: 60%;
}

.area_text {
  width: 40%;
}

.img1 {
  background-image: url(/resource/images/1.jpg);
  background-size: 100% 100%;
}

.img2 {
  background-image: url(/resource/images/2.jpg);
  background-size: 100% 100%;
}

.img3 {
  background-image: url(/resource/images/3.jpg);
  background-size: 100% 100%;
}
</style>