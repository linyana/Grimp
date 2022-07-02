<template>
    <div id="search">
        <input type="text" id="search_input" placeholder="搜索" />
        <button id="search_span">
            <img src="/resource/images/search.png" alt="图片加载失败" />
        </button>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#search {
  position: absolute;
  left: 20px;
  top: 80px;
  width: 340px;
}

input#search_input {
  width: 280px;
  height: 40px;
  text-indent: 0.6em;
  font-size: 20px;
  outline: none;
  border: 2px solid #0a8dfc;
  background-color: rgba(23, 65, 105, 0.5);
  color: #dfe1e1;
}

input#search_input:focus {
  outline: none;
  border: 2px solid #0a8dfc;
}

button#search_span {
  cursor: pointer;
  vertical-align: top;
  display: inline-block;
  width: 50px;
  height: 40px;
  text-align: center;
  border: none;
  background-color: #0a8dfc;
}

button#search_span img {
  margin-left: 10px;
  width: 30px;
  height: 30px;
}
</style>