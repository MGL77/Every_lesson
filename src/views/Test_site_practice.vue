<template>
  <div class="jh_point">
    <!-- 第一个 -->
    <div v-if="!isShow" class="jh_point_cont">
      <div>
        <!-- 导航 -->
        <div class="jh_quesCollect_nav">
          <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"></van-nav-bar>
        </div>
        <!-- 导航结束 -->

        <div class="jh_check">
          <div @click="checkisShow">
            <img src="../assets/img/题库 (1).png" alt />
            <p style="font-size:14px">题库选择</p>
          </div>
          <img src="../assets/img/设 置.png" alt @click="setShow" />
        </div>

        <div class="jh_content">
          <ul>
            <router-link
              :to="{path:'/questionDetail',query:{id:value.id,number:0,type:'Point'}}"
              tag="li"
              v-for="(value,index) in pointList"
              :key="index"
            >
              <div>
                <img src="../assets/img/yuan.png" alt />
              </div>
              <div>
                <div>
                  <div>{{value.name}}</div>
                  <div>{{value.finished_amount}}/{{value.question_amount}}</div>
                </div>

                <div>
                  <van-progress
                    :percentage="(value.finished_amount/value.question_amount)*100"
                    pivot-text
                    stroke-width="4px"
                    color="#eb6100"
                  />
                </div>
              </div>
              <div>
                <img src="../assets/img/jian.png" alt />
              </div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <!-- 第一个结束 -->

    <!-- 第二个 -->
    <div v-else class="jh_search_cont">
      <!-- 导航 -->
      <div class="jh_quesCollect_nav">
        <van-nav-bar title="题库选择" left-arrow @click-left="onClickLeft"></van-nav-bar>
      </div>
      <!-- 导航结束 -->
      <!-- 搜索 -->
      <div class="jh_search">
        <input type="text" placeholder="请输入题库名称关键词" v-model="keyWords" />
        <img src="../assets/img/搜索--1.png" alt @click="goSearch" />
      </div>
      <!-- 搜索结束 -->
      <!-- 选择器 -->
      <div class="jh_select_container">
        <div class="jh_left">
          <ul>
            <li
              v-for="(value,index) in classifyList"
              :key="index"
              :class="leftIndex==index?'active':''"
              @click="leftToggle({index:index,id:value.id})"
            >{{value.name}}</li>
          </ul>
        </div>
        <div class="jh_right">
          <ul>
            <li v-for="(value,index) in rightList" :key="index">
              <p>{{value.name}}</p>
              <ul>
                <li
                  v-for="(val,info) in value.bank"
                  :key="info"
                  :class="classify_id==val.id?'liActive':'null'"
                  @click="rightToggle({id:val.id,title:val.name})"
                >{{val.name}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- 选择器结束 -->
    </div>
    <!-- 第二个结束 -->

    <!-- 设置 -->
    <div>
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" :closeable="true">
        <div class="jh_set">
          <div style="font-size:20px">考点专练设置</div>
          <div>
            <p>设置考点专练出题数量</p>
            <div>
              <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">随机15道</van-radio>
                <van-radio name="2">按顺序做题</van-radio>
              </van-radio-group>
            </div>
          </div>
          <div @click="sure" style="font-size:14px;margin-top:30px">确定</div>
        </div>
      </van-popup>
    </div>
    <!-- 设置结束 -->
  </div>
</template>

<script>
import { wapClassify, quesBank, examPoint } from "../../src/http/api";

export default {
  data() {
    return {
      radio: "",
      show: false, //弹出层开关
      keyWords: "", //搜索关键字
      pointList: [], //练习数据列表
      title: localStorage.getItem("title") || "",
      isShow: false, //开关
      classifyList: [], //左侧分类列表
      classifyId: localStorage.getItem("classifyId") || "",
      leftIndex: 0, //左侧idnex
      rightList: [], //右侧分类列表
      classify_id: localStorage.getItem("classify_id") || "" //右侧保存的id
    };
  },
  created() {
    if (
      this.$route.query.classifyId == undefined &&
      this.$route.query.classify_id == undefined
    ) {
      this.classifyId = localStorage.getItem("classifyId");
      this.classify_id = localStorage.getItem("classify_id");
    } else {
      this.classifyId = this.$route.query.classifyId;
      this.classify_id = this.$route.query.classify_id;
    }
  },
  mounted() {
    this.getData();
    this.wapClassify();
    // this.quesBank()
  },

  methods: {
    sure() {
      this.show = false;
    },
    setShow() {
      this.show = true;
    },
    //   返回
    onClickLeft() {
      this.$router.go(-1);
    },
    //切换
    checkisShow() {
      this.isShow = true;
    },
    // 获取分类列表
    wapClassify() {
      let token = localStorage.getItem("token");
      return wapClassify(token).then(res => {
        this.classifyList = res.data.data;
      });
    },

    // 获取子级分类
    quesBank() {
      let token = localStorage.getItem("token");
      return quesBank(token, this.classifyId).then(res => {
        this.rightList = res.data.data;
      });
    },
    // 获取子级分类

    // 左侧选择
    leftToggle({ index, id }) {
      this.leftIndex = index;
      this.classifyId = id;
      localStorage.setItem("classifyId", this.classifyId);
      this.quesBank();
    },
    // 右侧
    rightToggle({ id, title }) {
      let token = localStorage.getItem("token");
      this.classify_id = id;
      this.title = title;
      localStorage.setItem("classify_id", this.classify_id);
      localStorage.setItem("title", this.title);
      return examPoint(token, this.classifyId, this.classify_id).then(res => {
        this.pointList = res.data.data;
        console.log(this.pointList);
        this.isShow = false;
      });
    },
    // 获取数据
    getData() {
      let token = localStorage.getItem("token");
      localStorage.setItem("classify_id", this.classify_id);
      return examPoint(token, this.classifyId, this.classify_id).then(res => {
        this.pointList = res.data.data;
      });
    },

    // 搜索
    goSearch() {
      this.$router.push({
        // name: "pointSearch",
        // params: { keyWords: this.keyWords }
        path: "/search"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.jh_point {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}

// 导航
.jh_quesCollect_nav /deep/.van-nav-bar,
.van-hairline--bottom {
  height: 0.87rem;
  border-bottom: 0.03rem solid #f6f6f6;
}
.jh_quesCollect_nav /deep/ .van-nav-bar__title,
.van-ellipsis {
  font-size: 0.36rem;
  color: #656464;
}
.jh_quesCollect_nav /deep/.van-icon,
van-icon-search {
  color: #656464;
  font-size: 0.36rem;
}
// 导航结束

// 内容区域
.jh_point_cont {
  height: 100%;
  display: flex;
  flex-direction: column;
  .jh_content {
    flex: 1;
    ul {
      padding: 0.3rem;
      box-sizing: border-box;
      li {
        display: flex;
        border-radius: 0.1rem;
        margin-bottom: 0.3rem;
        justify-content: space-between;
        border: 0.01rem solid #d9d9d9;
        padding: 0.3rem 0.2rem;
        box-sizing: border-box;
        align-items: center;
        img {
          width: 0.25rem;
          height: 0.25rem;
        }
        > div:nth-of-type(3) {
          img {
            width: 0.2rem;
          }
        }
        > div:nth-of-type(2) {
          padding: 0rem 0.8rem 0rem 0.3rem;
          flex: 1;
          > div:nth-of-type(1) {
            margin-bottom: 0.1rem;
            display: flex;
            align-items: center;
            font-size: 0.28rem;
            justify-content: space-between;
            color: #8c8c8c;
            div:nth-of-type(2) {
              margin-right: 0.6rem;
            }
          }
        }
      }
    }
  }
}
// 内容区域结束

// 题库选择区域
.jh_check {
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.25rem;
  box-sizing: border-box;
  height: 1.05rem;
  align-items: center;
  border-top: 0.25rem solid #f0f2f5;
  background: #fff;
  div {
    display: flex;
    height: 1.05rem;
    align-items: center;
    img {
      margin-right: 0.1rem;
    }
  }

  img {
    width: 0.3rem;
    height: 0.3rem;
  }
}
// 题库选择区域结束

// 搜索区域
.jh_search {
  width: 100%;
  height: 1.3rem;
  border-bottom: 0.01rem solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;

  input {
    width: 6.9rem;
    height: 0.9rem;
    border-radius: 0.5rem;
    border: none;
    background: #f0f2f5;
    text-indent: 0.3rem;
    color: #b7b7b7;
    font-size: 0.26rem;
  }

  img {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    right: 0.5rem;
    top: 0.4rem;
  }
  ::placeholder {
    color: #b7b7b7;
    font-size: 0.26rem;
  }
}
// 搜索区域结束
.jh_search_cont {
  height: 100%;
  display: flex;
  flex-direction: column;
}
// 选择器区域
.jh_select_container {
  width: 100%;
  flex: 1;
  display: flex;
  .jh_left {
    width: 30%;
    height: 100%;
    background: #fafafa;
    ul {
      .active {
        background: #fff;
      }
      li {
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: 0.3rem;
        color: #8d8d8d;
      }
    }
  }
  .jh_right {
    width: 70%;
    height: 100%;
    > ul {
      padding-left: 0.3rem;
      box-sizing: border-box;
      > li {
        > p {
          font-size: 0.26rem;
          line-height: 1rem;
          color: #595959;
        }
        > ul {
          li,
          .liActive {
            color: #eb6100;
            background: rgba(235, 97, 0, 0.1);
          }
          li {
            width: 2.4rem;
            min-height: 0.55rem;
            background: #f5f5f5;
            color: #646464;
            border-radius: 0.04rem;
            font-size: 0.32rem;
            text-align: center;
            padding: 0.05rem 0.1rem;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
// 选择器结束

// 弹出层
.jh_point /deep/.van-popup--bottom {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.jh_point /deep/.van-popup__close-icon--top-right {
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.3rem;
}
.jh_point/deep/.van-radio {
  display: flex;
  padding: 0.3rem 0rem;
  box-sizing: border-box;
  height: 100%;
  font-size: 0.34rem;
}
.jh_point /deep/ .van-radio__label {
  display: flex;
  align-items: center;
}
.jh_set {
  position: relative;
  width: 100%;
  height: 100%;
  > div:nth-of-type(1) {
    line-height: 1rem;
    text-align: center;
    border-bottom: 0.01rem solid #d9d9d9;
  }
  > div:nth-of-type(2) {
    padding-left: 0.3rem;
    box-sizing: border-box;
    line-height: 1rem;
    p {
      font-size: 0.2rem;
      color: #595959;
    }
  }
  > div:nth-of-type(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1rem;
    color: #fff;
    background-color: #eb6100;
    text-align: center;
    line-height: 1rem;
  }
}
// 弹出层结束
</style>
