<template>
  <div class="Exercise_collection">
    <!-- 导航栏 -->
    <van-nav-bar title="习题收藏" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="24" color="#000" @click="searchs" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#ed6a0f">
      <van-dropdown-item title="题目类型" ref="item">
        <div class="Unlimited_type">
          <ul>
            <li>单选</li>
            <li>多选</li>
            <li>判断</li>
            <li>连线</li>
          </ul>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="bottoms">
      <img src="../assets/img/rr.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    Remove_wrong_questions() {
      alert("s");
    },
    searchs() {
      this.$router.push({ path: "/Search" });
    }
  }
};
</script>

<style lang="scss">
.Exercise_collection {
  .Unlimited_type {
    width: 100%;
    ul {
      li {
        font-size: 0.27rem;
        color: #515151;
        width: 100%;
        height: 1.04rem;
        line-height: 1.04rem;
        text-align: center;
        border-bottom: 0.01rem solid #f5f5f5;
      }
    }
  }
  .van-dropdown-menu {
    -webkit-user-select: none;
    user-select: none;
    .van-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 5.4rem;
    }
    .van-dropdown-menu__title::after {
      right: 264px;
    }
  }
  .bottoms {
    width: 7.5rem;
    height: 11rem;
    img {
      width: 3rem;
      height: 3rem;
      margin: 0.4rem auto;
    }
  }
}
</style>