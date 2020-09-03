<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="测评记录" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="24" color="#000" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#ed721c">
      <van-dropdown-item title="类型不限">
        <ul class="Uo">
          <li
            v-for="(item,index) in list"
            :key="index"
            :class="iNow == index ? 'active':''"
            @click="BT(index)"
          >{{ item.title }}</li>
        </ul>
      </van-dropdown-item>
      <van-dropdown-item title="时间">
        <ul class="Uo">
          <li
            v-for="(item,index) in listo"
            :key="index"
            :class="iNowt == index ? 'actives':''"
            @click="BTs(index)"
          >{{ item.title }}</li>
        </ul>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="bottoms">
      <img src="../assets/img/rr.png" alt />
      <p>请稍后，模考正在赶来的路上啦</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: "全部" },
        { id: 2, title: "套卷练习" },
        { id: 3, title: "仿真模考" },
        { id: 3, title: "考点专练" },
      ],
      listo: [
        { id: 1, title: "全部" },
        { id: 2, title: "今天" },
        { id: 3, title: "7天" },
      ],
      iNow: 0,
      iNowt: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    BT(index) {
      this.iNow = index;
    },
    BTs(index) {
      this.iNowt = index;
    }
  }
};
</script>

<style lang="scss">
.Uo {
  li {
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: rgb(58, 58, 58);
    border-bottom: 0.01rem solid #f5f5f5;
    font-size: 0.26rem;
  }
  .active {
    color: #ed721c;
  }
  .actives {
    color: #ed721c;
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
  p {
    font-size: 0.2rem;
    color: #ccc;
    text-align: center;
  }
}
</style>