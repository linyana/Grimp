<template>
    <Nav />
    <div id="feedback">
        <br />
        <div class="feedback_title">请填写您的使用体验和建议，我们会认真听取并及时反馈</div>
        <textarea
            name
            id="feedback_texterea1"
            cols="100"
            rows="8"
            placeholder="内容包括但不限于政治/淫秽色情/诈骗/赌博/侵权等"
        ></textarea>
        <div class="feedback_title">请留下您的信息，以便我们及时反馈和处理</div>
        <input type="text" placeholder="常用手机号码或邮箱(二选一)" />
        <br />
        <button>提交</button>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  components: { Nav },
};
</script>

<style scoped>
#feedback {
  width: 800px;
  margin: auto;
}

.feedback_title {
  color: rgb(117, 165, 219);
  font-size: 24px;
  margin: 20px 0;
}

textarea {
  line-height: 30px;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgb(172, 167, 169);
  border-radius: 10px;
  outline: none;
}

textarea::-webkit-input-placeholder {
  color: rgb(172, 167, 169);
}

textarea::-moz-placeholder {
  color: rgb(172, 167, 169);
}

textarea:-ms-input-placeholder {
  color: rgb(172, 167, 169);
}

textarea::-webkit-input-placeholder {
  color: rgb(172, 167, 169);
}

textarea::placeholder {
  color: rgb(172, 167, 169);
}

input {
  width: 400px;
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(172, 167, 169);
  margin: 10px 0;
  padding: 5px;
  font-size: 17px;
  color: rgb(172, 167, 169);
}

input::-webkit-input-placeholder {
  color: rgb(172, 167, 169);
}

input::-moz-placeholder {
  color: rgb(172, 167, 169);
}

input:-ms-input-placeholder {
  color: rgb(172, 167, 169);
}

input::-webkit-input-placeholder {
  color: rgb(172, 167, 169);
}

input::placeholder {
  color: rgb(172, 167, 169);
}

button {
  cursor: pointer;
  width: 150px;
  height: 40px;
  background-color: #5998dd;
  color: white;
  font-size: 20px;
  margin: 30px 0;
  outline: none;
  border: none;
  border-radius: 5px;
}
</style>