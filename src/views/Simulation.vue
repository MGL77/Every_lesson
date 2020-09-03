<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="仿真模考" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="24" color="#000" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#ed721c">
      <van-dropdown-item title="考试类型">
        <ul class="Uo">
          <li
            v-for="(item,index) in list"
            :key="index"
            :class="iNow == index ? 'active':''"
            @click="BT(index)"
          >{{ item.title }}</li>
        </ul>
      </van-dropdown-item>
      <van-dropdown-item title="考试状态">
        <ul class="Uo">
          <li
            v-for="(item,index) in listo"
            :key="index"
            :class="iNowt == index ? 'actives':''"
            @click="BTs(index)"
          >{{ item.title }}</li>
        </ul>
      </van-dropdown-item>
      <van-dropdown-item title="参考状态">
        <ul class="Uo">
          <li
            v-for="(item,index) in listf"
            :key="index"
            :class="iNowf == index ? 'activef':''"
            @click="BTf(index)"
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
        { id: 2, title: "模拟考试" },
        { id: 3, title: "正在考试" }
      ],
      listo: [
        { id: 1, title: "全部" },
        { id: 2, title: "未开始" },
        { id: 3, title: "进行中" },
        { id: 3, title: "已结束" }
      ],
      listf: [
        { id: 1, title: "全部" },
        { id: 2, title: "已做" },
        { id: 3, title: "未做" }
      ],
      iNow: 0,
      iNowt: 0,
      iNowf: 0
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
    },
    BTf(index) {
      this.iNowf = index;
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
  .activef {
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