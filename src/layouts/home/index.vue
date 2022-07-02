<template>
  <Layout :class="prefixCls">
    <LayoutHeader />
    <LayoutContent />
  </Layout>
</template>

<script lang="ts">
  import { Layout } from 'ant-design-vue';
  import { computed, defineComponent } from 'vue';

  import LayoutContent from './content/index.vue';
  import LayoutHeader from './header/index.vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutHeader,
      LayoutContent,
      Layout,
    },
    setup() {
      const { prefixCls } = useDesign('default-layout');
      const layoutClass = computed(() => {
        let cls: string[] = ['ant-layout'];
        return cls;
      });

      return {
        prefixCls,
        layoutClass,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @content-bg;
    flex-direction: column;
  }
</style>
