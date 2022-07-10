<template>
    <HomeNav />
    <div id="information">
        <div class="input">
            <input type="text" v-model="input" />
        </div>
        <div class="content">
            <div class="line">
                <div
                    class="card"
                    v-for="item in filInformation"
                    :key="item.id"
                    @click="showInformation(item.id,item.title,item.date,item.content)"
                >
                    <div class="card_title">{{item.title}}</div>
                    <div class="card_text">{{item.content}}</div>
                </div>
            </div>
        </div>
        <div class="cover_box" v-show="show">
            <div class="box">
                <div class="exit" @click="this.show = false;"></div>
                <div class="box_title">{{this.coverBox.title}}</div>
                <div class="box_date">{{this.coverBox.date}}</div>
                <div class="box_content">{{this.coverBox.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue';

export default {
  components: { HomeNav },
  data() {
    return {
      information: [
        {
          id: 1,
          title: '新闻6',
          date: '2022.7.10',
          content:
            '9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。',
        },
        {
          id: 2,
          title: '新闻1',
          date: '2022.7.10',
          content: '9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。',
        },
        {
          id: 3,
          title: '新闻2',
          date: '2022.7.10',
          content: '9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。',
        },
        {
          id: 4,
          title: '新闻3',
          date: '2022.7.10',
          content: '9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。',
        },
        {
          id: 5,
          title: '新闻4',
          date: '2022.7.10',
          content: '9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。',
        },
        {
          id: 6,
          title: '新闻5',
          date: '2022.7.10',
          content: '9日，国家统计局发布了6月份以及上半年全国居民消费价格指数CPI和工业生产者出厂价格指数PPI，数据显示，我国重要民生商品供应充足，居民消费价格运行总体平稳。',
        },
      ],
      input: '',
      filInformation: [],
      coverBox: { id: '', title: '', date: '', content: '' },
      show: false,
    };
  },
  computed: {
    filInformation() {
      return this.information.filter((i) => {
        if (i.title.indexOf(this.input) !== -1) {
          return i.title.indexOf(this.input) !== -1;
        }
        if (i.content.indexOf(this.input) !== -1) {
          return i.content.indexOf(this.input) !== -1;
        }
      });
    },
  },
  methods: {
    showInformation(id, title, date, content) {
      this.coverBox.id = id;
      this.coverBox.title = title;
      this.coverBox.date = date;
      this.coverBox.content = content;
      this.show = true;
    },
  },
};
</script>

<style scoped>
#information {
  width: 1200px;
  margin: auto;
}

.input {
  margin-top: 20px;
  position: relative;
  width: 100%;
  height: 120px;
}

input {
  position: absolute;
  left: calc(50% - 300px);
  top: 42px;
  width: 600px;
  height: 40px;
  border: 2px solid rgb(119, 158, 209, 0.6);
  border-radius: 12px;
  text-indent: 20px;
  color: rgb(15, 73, 150);
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.2);
}

input:focus {
  outline: none;
}

.line {
  margin: 30px 0;
  height: 240px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  cursor: pointer;
  width: 500px;
  height: 210px;
  margin: 30px;
  box-shadow: 0 0 20px rgb(114, 100, 100, 0.3);
  border-radius: 20px;
  flex-shrink: 0;
}

.card:hover {
  box-shadow: 0 0 20px rgb(114, 100, 100, 0.5);
}

.card_title {
  overflow: hidden;
  font-size: 25px;
  margin: 20px;
  margin-bottom: 0;
  padding-bottom: 20px;
  color: rgb(114, 111, 111);
  border-bottom: 2px solid rgb(189, 186, 186);
}

.card_text {
  text-indent: 2em;
  padding: 20px;
  width: 100%;
  height: 110px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

/* 遮盖层 */

.cover_box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.box {
  position: absolute;
  top: 10%;
  left: calc(50% - 600px);
  width: 1200px;
  height: 80%;
  background-color: #fff;
  border-radius: 20px;
  overflow: scroll;
}

.box_title {
  margin: 50px;
  margin-bottom: 0;
  font-size: 40px;
  text-align: center;
  font-weight: 700;
}

.box_date {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  margin: 10px 200px;
  padding-bottom: 70px;
  border-bottom: 2px solid rgb(114, 111, 111);
}

.box_content {
  padding: 100px;
  padding-top: 20px;
  text-indent: 2em;
  line-height: 35px;
  font-size: 18px;
  overflow: scroll;
  height: 500px;
}

.exit {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  background-image: url(/resource/images/exit.png);
  background-size: 100% 100%;
}
</style>