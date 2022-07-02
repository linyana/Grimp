<template>
    <a-result
        class="prefixCls"
        status="404"
        title="404"
        sub-title="Sorry, the page you visited does not exist."
    >
        <template #extra>
            <a-button type="primary">Back Home</a-button>
        </template>
    </a-result>
</template>

<script lang="ts"></script>

<style lang="less" scoped>
.prefixCls {
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 400px;
    max-height: 300px;
  }
}
</style>
