<template>
  <div class="four">
    <div class="topBook">练习</div>

    <!-- icon -->
    <div class="icons">
      <div class="icons_child">
        <ul>
          <li @click="Test_site_practice">
            <div class="ic">
              <img src="../assets/img/笔.png" alt />
            </div>
            <p>考点练习</p>
          </li>
          <li @click="GO_Practice">
            <div class="ic">
              <img src="../assets/img/shu.png" alt />
            </div>
            <p>套卷练习</p>
          </li>
          <li @click="Simulation">
            <div class="ic">
              <img src="../assets/img/shu (1).png" alt />
            </div>
            <p>仿真练习</p>
          </li>
          <li @click="Wrong_exercise">
            <div class="ic">
              <img src="../assets/img/笔 (1).png" alt />
            </div>
            <p>错题练习</p>
          </li>
          <li @click="assess">
            <div class="ic">
              <img src="../assets/img/jilu.png" alt />
            </div>
            <p>测评记录</p>
          </li>
          <li @click="Exercise_collection">
            <div class="ic">
              <img src="../assets/img/心.png" alt />
            </div>
            <p>习题收藏</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 近期模考 -->
    <div class="simulation">
      <b>近期模考</b>
      <div class="order">
        <p>默认排序</p>
        <span>时间</span>
      </div>
      <img src="../assets/img/empty@2x.a2fa524d.png" alt />
      <p class="p">暂无模考安排,尽请期待</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 错题练习
    Wrong_exercise() {
      this.$router.push({ path: "/Wrong_exercise" });
    },
    // 套卷练习
    GO_Practice() {
      this.$router.push({ path: "/Practice" });
    },
    // 考点练习
    Test_site_practice() {
      this.$router.push({ path: "/Test_site_practice" });
    },
    Simulation() {
      this.$router.push({ path: "/Simulation" });
    },
    assess() {
      this.$router.push({ path: "/assess" });
    },
    Exercise_collection() {
      this.$router.push({ path: "/Exercise_collection" });
    }
  }
};
</script>

<style lang="scss">
.topBook {
  width: 100%;
  height: 0.92rem;
  text-align: center;
  line-height: 0.92rem;
  font-size: 0.32rem;
  color: #646464;
}
.icons {
  width: 100%;
  height: 3.75rem;
  background-color: #f0f2f5;
  padding-top: 0.2rem;
  .icons_child {
    width: 7.07rem;
    height: 3.51rem;
    background-color: #ffff;
    border-radius: 0.14rem;
    margin: 0 auto;
    ul {
      width: 7.07rem;
      height: 3.51rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li {
        width: 1.76rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .ic {
          width: 0.9rem;
          height: 0.9rem;
          border-radius: 50%;
          border: 0.05rem solid #f9f8f9;
          img {
            width: 0.36rem;
            height: 0.32rem;
            margin: 0.27rem auto;
          }
        }
        p {
          width: 1.76rem;
          font-size: 0.2rem;
          color: #7c7c7c;
          text-align: center;
        }
      }
    }
  }
}
.simulation {
  width: 92%;
  height: 4.15rem;
  background-color: #fff;
  padding: 0.3rem;
  b {
    font-size: 0.3rem;
    display: block;
    color: #8e8e8e;
    margin-bottom: 0.2rem;
  }
  .order {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    justify-content: space-between;
    p {
      font-size: 0.28rem;
      color: #ed721c;
    }
    span {
      font-size: 0.24rem;
      color: #929292;
    }
  }
  img {
    width: 1.78rem;
    height: 2.38rem;
    margin: 0 auto;
  }
  .p {
    font-size: 0.24rem;
    color: #9f9f9f;
    text-align: center;
    margin-top: 0.3rem;
  }
}
</style>