<template>
  <div class="Wrong_exercise">
    <!-- 导航栏 -->
    <van-nav-bar title="错题记录" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="24" color="#000" @click="searchs" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#ed6a0f">
      <div class="cuo">
        <img src="../assets/img/错题巩固.png" alt /> 巩固全部错题
      </div>
      <div class="yi" @click="chu">
        <img src="../assets/img/移除.png" alt /> 移除错题
      </div>
      <van-dropdown-item title="类型不限" ref="item">
        <div class="Unlimited_type">
          <ul>
            <li>全部</li>
            <li>套卷练习</li>
            <li>考点专练</li>
            <li>仿真模考</li>
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
    },
    chu() {
      function beforeClose(action, done) {
        if (action === "confirm") {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }
      this.$dialog.confirm({
        message: "是否做对题目后自动移除该错题",
        beforeClose
      });
    }
  }
};
</script>

<style lang="scss">
.Wrong_exercise {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    .van-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-left: 0.3rem;
      margin-right: 0.1rem;
    }
    .cuo,
    .yi {
      width: 2.1rem;
      height: 0.8rem;
      font-size: 0.28rem;
      color: #939393;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-left: 0.3rem;
      img {
        width: 0.25rem;
        height: 0.29rem;
      }
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