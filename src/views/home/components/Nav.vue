<template>
    <div id="nav">
        <div class="nav_title">草原资源智能化管理平台</div>
        <div class="menu">
            <router-link to="./map">
                <div class="menu_box">
                    <span class="menu_box_img_span menu_box_img_span1"></span>
                    <span class="menu_box_text_span">首页</span>
                </div>
            </router-link>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span2"></span>
                <span class="menu_box_text_span">信息展示</span>
                <div class="menu_hover">
                    <div class="menu_hover_title">
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                    </div>
                    <div class="menu_hover_content">
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span3"></span>
                <span class="menu_box_text_span">三维模型</span>
                <div class="menu_hover">
                    <div class="menu_hover_title">
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                    </div>
                    <div class="menu_hover_content">
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span4"></span>
                <span class="menu_box_text_span">数据分析</span>
                <div class="menu_hover">
                    <div class="menu_hover_title">
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                    </div>
                    <div class="menu_hover_content">
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span5"></span>
                <span class="menu_box_text_span">综合态势</span>
                <div class="menu_hover">
                    <div class="menu_hover_title">
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                        <div class="menu_hover_title_box">
                            <span class="menu_box_img_span menu_box_img_span2"></span>
                            <span class="menu_hover_text_span">信息展示</span>
                        </div>
                    </div>
                    <div class="menu_hover_content">
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                        <div class="menu_hover_content_line">
                            <div>信息演示</div>
                            <div>信息演示</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="user"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  width: 100%;
  height: 60px;
  background-color: #1c2531;
  color: white;
}

.nav_title {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  margin-left: 80px;
  font-size: 20px;
  color: white;
}

.menu {
  cursor: pointer;
  position: absolute;
  left: 380px;
  top: 0;
  display: flex;
  width: 1000px;
  height: 60px;
  line-height: 60px;
}

a {
  text-decoration: none;
  color: white;
}

.menu_box {
  position: relative;
  padding: 0 10px;
}

.menu_box:hover {
  z-index: 99999999;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 2px solid white;
}

span.menu_box_img_span {
  display: inline-block;
  vertical-align: middle;
  width: 17px;
  height: 17px;
  margin-right: 8px;
}

span.menu_box_img_span1 {
  background-image: url(/resource/images/home.png);
  background-size: 100% 100%;
}

span.menu_box_img_span2 {
  background-image: url(/resource/images/information-display.png);
  background-size: 100% 100%;
}

span.menu_box_img_span3 {
  background-image: url(/resource/images/3Dmodel.png);
  background-size: 100% 100%;
}

span.menu_box_img_span4 {
  background-image: url(/resource/images/data-analysis.png);
  background-size: 100% 100%;
}

span.menu_box_img_span5 {
  background-image: url(/resource/images/comprehensive-situational.png);
  background-size: 100% 100%;
}

span.menu_box_text_span {
  vertical-align: middle;
}

.user {
  position: absolute;
  left: calc(50% + 700px);
  top: 10px;
  width: 40px;
  height: 40px;
  background-image: url(../../../public/resource/images/user.png);
  background-size: 100% 100%;
}

.menu_hover {
  position: absolute;
  top: 60px;
  left: 0;
  display: none;
}

.menu_hover_title {
  display: flex;
  background-color: #1c2531;
}

.menu_hover_title_box {
  padding: 0 10px;
  margin: 0 10px;
  font-size: 14px;
  line-height: 50px;
  height: 50px;
  border-bottom: 2px dashed white;
  background-color: #1c2531;
  min-width: 100px;
}

.menu_box:hover .menu_hover {
  display: block;
}

.menu_hover_content {
  display: flex;
  width: auto;
  background-color: #1c2531;
}

.menu_hover_content_line {
  background-color: #1c2531;
  margin: 0 10px;
  font-size: 14px;
  line-height: 40px;
  min-width: 110px;
  text-indent: 1em;
}

.menu_hover_content_line > div:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>