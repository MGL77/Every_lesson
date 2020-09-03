<template>
  <div class="Practice">
    <!-- 导航栏 -->
    <van-nav-bar title="套卷练习" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="24" color="#000" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#ed6a0f">
      <van-dropdown-item title="卷套分类" ref="item">
        <!-- 侧边导航开始 -->
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="全部" />
          <van-sidebar-item title="中考真题" />
          <van-sidebar-item title="化学" />
          <van-sidebar-item title="英语" />
        </van-sidebar>
        <!-- 侧边导航结束 -->
      </van-dropdown-item>
      <van-dropdown-item title="套卷状态" ref="item">
        <div class="Coiling_status">
          <ul>
            <li>全部</li>
            <li>已做</li>
            <li>未做</li>
          </ul>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.Practice {
  .Coiling_status {
    width: 100%;
    ul {
      li {
        width: 100%;
        line-height: 0.89rem;
        text-align: center;
        height: 0.89rem;
        border-bottom: 0.02rem solid #f5f5f5;
        font-size: 0.26rem;
      }
    }
  }
}
</style>