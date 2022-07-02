<template>
    <transition name="show" appear>
        <div id="show" v-show="isShow">
            <button @click="isShow = !isShow">点击</button>
            <div class="demo"></div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style scoped>
#show {
    position: absolute;
    right: 50px;
    top: 140px;
    display: inline-block;
    padding: 30px;
    width: auto;
    height: auto;
    border-radius: 3px;
    border: 1px solid #0a8dfc;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
    background-color: rgb(0, 0, 0, 0.3);
}

.show-enter,
.show-leave-to {
    transform: translateX(200px);
    opacity: 0;
}

.show-enter-active,
.show-leave-active {
    transition: all 0.5s;
}

.show-enter-to,
.show-leave {
    transform: translateX(0);
    opacity: 1;
}

.demo {
    width: 200px;
    height: 300px;
}
</style>