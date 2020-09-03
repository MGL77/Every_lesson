<template>
  <div class="jh_questionDetail">
    <!-- 答题卡 -->
    <div class="jh_dtkcont" v-if="dtkShow">
      <!-- 导航 -->
      <div class="jh_datika_nav">
        <img src="../assets/img/ooooo.png" alt @click="dtkUshow" />
        <div style="font-size:18px">答题卡</div>
        <p></p>
      </div>
      <!-- 导航结束 -->
      <!-- 页数 -->
      <div class="jh_page">
        <p>
          <span v-for="(value,index) in testTypeList" :key="index">{{value}}</span>
        </p>
        <p>
          <span>{{sum}}</span>
          <span>/{{questionList.length}}</span>
        </p>
      </div>
      <!-- 页数结束 -->
      <!-- 显示答题数量 -->
      <div class="jh_datika_cont">
        <ul>
          <li
            @click="questionToggle(index)"
            v-for="(value,index) in radioList"
            :key="index"
            :class="value==undefined?'':'noUndefinded'"
          >{{index+1}}</li>
        </ul>
      </div>
      <!-- 显示答题数量 -->

      <div class="jh_addquestion" @click="addquestion">交卷并查看结果</div>
    </div>
    <!-- 答题卡结束 -->

    <!-- 答题内容 -->
    <div class="jh_dt" v-else>
      <!-- 导航 -->
      <div class="jh_quesDetail_nav">
        <img src="../assets/img/ooooo.png" alt @click="goHome" />
        <div>
          <p>
            <img src="../assets/img/时钟.png" alt style="margin-right:5px;" v-show="this.number==0" />
            <span v-show="this.number==0">{{count}}</span>
          </p>

          <img src="../assets/img/答题卡.png" alt @click="showDatika" />
          <van-icon
            name="star"
            color="#fc5500"
            size="16px"
            @click="removecollect"
            v-if="isCollect"
          />
          <van-icon name="star-o" size="16px" @click="addcollect" v-else />
          <img src="../assets/img/改错题.png" alt @click="fkshow(1)" />
        </div>
      </div>
      <!-- 导航结束 -->
      <!-- 页数 -->
      <div class="jh_page">
        <p>
          <span v-for="(value,index) in testTypeList" :key="index">{{value}}</span>
        </p>
        <p>
          <span>{{page}}</span>
          <span>/{{questionList.length}}</span>
        </p>
      </div>
      <!-- 页数结束 -->
      <div class="jh_question_item">
        <div>
          <!-- 考试题 -->
          <div v-for="(value,index) in questionList" :key="index" class="jh_content">
            <div v-if="page==index+1">
              <div class="jh_top">
                <p>{{value.ques_type==1?'单选':'多选'}}</p>
                <p class="ju">{{page}}丶</p>
                <p v-html="value.ques_stem" class="jh_img"></p>
              </div>

              <ul class="jh_section">
                <li v-for="(val,info) in value.ques_option" :key="info">
                  <van-radio-group v-model="radio">
                    <van-radio :name="info*1+1" @click="radio=val.id">
                      <p class="ju">{{val.id}}丶</p>
                      <p v-html="val.content"></p>
                    </van-radio>
                  </van-radio-group>
                </li>
              </ul>
            </div>
          </div>
          <!-- 考试题结束 -->
          <!-- 切换 -->
          <div class="jh_downUp">
            <p @click="duToggle(0)">上一题</p>
            <p v-if="page==questionList.length&&number==0" @click="addDatika">答题卡</p>
            <p @click="duToggle(1)" v-else>下一题</p>
          </div>
          <!-- 切换结束 -->
        </div>
      </div>
    </div>
    <!-- 答题内容结束 -->

    <!-- 问题反馈 -->
    <div class="jh_questionFk" v-show="questionShow">
      <div class="jh_questionFk_nav">
        <img src="../assets/img/ooooo.png" alt @click="fkshow(2)" />
        <p style="font-size:18px">题目纠错反馈</p>
        <p></p>
      </div>
      <div>
        <p>纠结错误</p>
        <div>
          <van-radio-group v-model="question" direction="horizontal">
            <van-radio name="1">错别字</van-radio>
            <van-radio name="2">答案解析不匹配</van-radio>
            <van-radio name="3">解析错误</van-radio>
            <van-radio name="4">其他</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div>
        <textarea placeholder="请输入题目纠错信息，最多不超过500个字" v-model="questionFk"></textarea>
        <p @click="correction" class="tijiao">提交</p>
      </div>
    </div>
    <!-- 问题反馈结束 -->

    <!-- 解析 -->
    <div v-show="number==15" v-for="(value,index) in analysisList" :key="index">
      <div class="jh_jx" v-show="page==index+1">
        <div>
          <p>
            <span>正确答案:</span>
            <span v-for="(val,info) in value.right_answer" :key="info">{{val.id|abcd}}</span>
          </p>
          <p>
            <span>您的答案</span>
            <span v-for="(val,info) in value.user_answer" :key="info">{{val.id|abcd}}</span>
          </p>
        </div>
        <div>
          <p>考点</p>
          <p v-for="(value,index) in testTypeList" :key="index">{{value}}</p>
        </div>
        <div>
          <p>解析</p>
          <p>暂无解析</p>
        </div>
      </div>
    </div>

    <!-- 解析结束 -->
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
import {
  pointInfo,
  examPointQ,
  storeReport,
  collect,
  collectCancel,
  analysis,
  correction
} from "../../src/http/api";
export default {
  data() {
    return {
      questionShow: false,
      questionFk: "",
      question: "",
      radio: undefined,
      page: 1,
      radioList: [],
      isCollect: false, //是否收藏
      id: "", //id
      number: "", //
      type: "", //
      testTypeList: [],
      questionList: [],
      count: 0,
      timer: null,
      timeText: 0,
      dtkShow: false,
      sum: 0,
      report_id: "", // 考试结果,
      collectId: "", //收藏id
      report_id: "", //解析id
      analysisList: [] //解析列表
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.number = this.$route.query.number || "";
    this.report_id = this.$route.query.report_id || "";
    this.type = this.$route.query.type;

    this.counter();
  },
  mounted() {
    this.testType();
    this.geTexamPointQ();
    if (this.report_id != "") {
      this.analysis();
    }
  },
  watch: {},
  methods: {
    goHome() {
      if (this.number == 0) {
        Dialog.confirm({
          message: "确定退出？退出后未完成的\n将不会保存，是否确定？",
          width: "400px;"
        })
          .then(() => {
            this.$router.go(-1);
          })
          .catch(() => {});
      } else {
        this.$router.push("/assess");
      }
    },
    //   考试科目
    // 计时器
    counter() {
      let timer = setInterval(() => {
        //这里面做计时需要的操作
        this.count++;
      }, 1000);
      // timer()
    },
    testType() {
      let token = localStorage.getItem("token");
      return pointInfo(token, this.id).then(res => {
        this.testTypeList = res.data.data;
      });
    },
    //   考试题内容
    geTexamPointQ() {
      let token = localStorage.getItem("token");
      return examPointQ(token, this.id, this.number).then(res => {
        this.questionList = res.data.data;
        // console.log(this.questionList);
        this.collectTest();
      });
    },
    // ================ 待调试============================================================================================================
    // 上下页切换
    duToggle(page) {
      this.radioList.length = this.questionList.length;
      if (page == 1) {
        if (this.page > this.questionList.length) {
          this.$toast("已是最后 一页了");
          return false;
        }
        if (this.page <= this.questionList.length) {
          // console.log(this.page);
          if (this.radioList[this.page * 1 - 1] == undefined) {
            // console.log("等于");
            this.radioList[this.page * 1 - 1] = this.radio;
            this.radio = this.radioList[this.page];
            this.page++;
            this.collectTest();
          } else if (this.radioList[this.page - 1] != undefined) {
            // console.log("不等于");
            this.radio = this.radioList[this.page];
            // console.log(this.radio);
            this.page++;
            this.collectTest();
          }
          // console.log(this.radioList);
        }
      } else {
        if (this.page == 1) {
          this.$toast("已经是第一页了");
          return false;
        }
        this.page--;
        this.collectTest();
        // console.log(this.radioList);
        if (this.radioList[this.page - 1] != undefined) {
          this.radio = this.radioList[this.page - 1];
          this.radioList[this.page - 1] = this.radio;
        } else if (this.radioList[this.page - 1] == undefined) {
          this.radio = this.radioList[this.page - 1];

          this.radioList[this.page - 1] = this.radio;
        }
      }
    },
    // 上下页切换结束

    // ============待调试=================================================================================================================
    // 提交到答题卡
    addDatika() {
      this.radioList.length = this.questionList.length;
      this.radioList[this.page * 1 - 1] = this.radio;
      let sum = 0;
      this.radioList.forEach((value, index) => {
        if (value != undefined) {
          sum++;
        }
      });
      this.sum = sum;
      this.dtkShow = true;
    },
    // 答题显示卡
    showDatika() {
      this.radioList.length = this.questionList.length;
      this.dtkShow = true;
      let sum = 0;
      this.radioList.forEach((value, index) => {
        if (value != undefined) {
          sum++;
        }
      });
      this.sum = sum;
    },
    // 答题卡隐藏
    dtkUshow() {
      this.dtkShow = false;
    },
    // 答题卡切换
    questionToggle(index) {
      this.dtkShow = false;
      this.page = index + 1;
      this.radio = this.radioList[this.page - 1];
    },
    //提交答案
    addquestion() {
      console.log(this.radioList);

      let question = {};
      this.questionList.forEach((value, index) => {
        if (this.radioList[index] != undefined) {
          question[value.id] = {
            user_answer: [this.radioList[index]],
            report_type: 1
          };
        } else {
          question[value.id] = { user_answer: [], report_type: 1 };
        }
      });
      console.log(question);
      let token = localStorage.getItem("token");
      return storeReport(
        token,
        this.id,
        JSON.stringify(question),
        this.count
      ).then(res => {
        if (res.data.code == 200) {
          this.report_id = res.data.data.report_id;
          this.$router.push({
            path: "/result",
            query: {
              id: this.report_id,
              paper_id: this.id,
              type: "Point",
              number: this.number
            }
          });
        }
      });
    },
    // 提交答题卡结束

    // 检测收藏
    collectTest() {
      if (this.questionList[this.page - 1].collect_id == null) {
        this.isCollect = false;
      } else {
        this.isCollect = true;
      }
    },
    // 检测收藏

    // 习题收藏取消收藏
    addcollect() {
      let token = localStorage.getItem("token");
      return collect(token, this.questionList[this.page - 1].id).then(res => {
        if (res.data.code == 200) {
          console.log(res);
          this.geTexamPointQ();
        }
      });
    },
    removecollect() {
      let token = localStorage.getItem("token");
      return collectCancel(
        token,
        this.questionList[this.page - 1].collect_id
      ).then(res => {
        if (res.data.code == 200) {
          console.log(res);
          this.geTexamPointQ();
        }
      });
    },
    // 习题收藏取消收藏结束

    // 答题解析
    analysis() {
      let token = localStorage.getItem("token");
      return analysis(token, this.report_id).then(res => {
        console.log(res);
        this.analysisList = res.data.data;
      });
    },
    // 答案解析结束

    // 显示隐藏反馈卡
    fkshow(i) {
      if (i == 1) {
        this.questionShow = true;
      } else {
        this.questionShow = false;
      }
    },
    // 显示隐藏反馈卡结束
    // 问题反馈
    correction() {
      let token = localStorage.getItem("token");

      return correction(
        token,
        this.questionFk,
        this.questionList[this.page - 1].id,
        this.question
      ).then(res => {
        if (res.data.code == 200) {
          this.$toast("反馈成功");
          this.questionShow = false;
        }
      });
    }
    // 问题反馈结束
  }
};
</script>

<style  lang="scss" scoped>
.jh_questionDetail {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
.tijiao {
  font-size: 0.3rem;
}
// 导航
.jh_quesDetail_nav {
  font-size: 0.26rem;
  color: #8c8c8c;
  width: 100%;
  display: flex;
  align-items: center;
  height: 0.89rem;
  border-bottom: 1px solid #f0f2f5;
  padding: 0rem 0.4rem;
  box-sizing: border-box;
  justify-content: space-between;
  > div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      line-height: 0.3rem;
    }
  }
  > img:nth-of-type(1) {
    width: 0.2rem;
  }
  img {
    width: 0.3rem;
    height: 0.3rem;
  }
}
// 导航结束
// 页数
.jh_page {
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.01rem solid #f0f2f5;
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.3rem;
  box-sizing: border-box;
  align-items: center;
  color: #595959;
  font-size: 0.3rem;
  p:nth-of-type(2) {
    span:nth-of-type(1) {
      font-size: 0.4rem;
      color: #0097fa;
    }
  }
}
// 页数结束

// 题
.jh_question_item {
  width: 100%;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  box-sizing: border-box;
  .jh_content {
    width: 100%;
    .jh_top {
      position: relative;
      font-size: 0.28rem;

      > p:nth-of-type(2) {
        position: absolute;
        top: 0rem;
        left: 1rem;
      }
      > p:nth-of-type(1) {
        position: absolute;
        width: 0.85rem;
        height: 0.4rem;
        background: #0097fa;
        text-align: center;
        font-size: 0.24rem;
        line-height: 0.4rem;
        border-radius: 0.2rem 0 0.2rem 0;
        color: #fff;
        margin-right: 0.1rem;
      }
      > p:nth-of-type(3) {
        text-indent: 1.5rem;
      }
    }

    .jh_section {
      li {
        width: 100%;
      }
    }
  }
}
.jh_section /deep/.van-radio {
  display: flex;
  padding: 0.3rem 0rem;
  box-sizing: border-box;
  height: 100%;
  font-size: 0.28rem;
}
.jh_section /deep/ .van-radio__label {
  display: flex;
  align-items: center;
}
// 题结束
.jh_downUp {
  margin: 0.5rem 0rem;
  display: flex;
  justify-content: space-between;
  p {
    width: 1.8rem;
    height: 0.7rem;
    border-radius: 0.1rem;
    border: 0.01rem solid #d9d9d9;
    text-align: center;
    line-height: 0.7rem;
    color: #595959;
    font-size: 0.26rem;
  }
}

// 答题卡
.jh_dtkcont {
  width: 100%;
  height: 100%;
  position: relative;
  .jh_addquestion {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 0.28rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background-color: #eb6100;
    color: #fff;
  }
  .jh_datika_nav {
    display: flex;
    justify-content: space-between;
    padding: 0rem 0.3rem;
    box-sizing: border-box;
    height: 0.9rem;
    border-bottom: 0.01rem solid #f0f2f5;
    align-items: center;
    img {
      width: 0.22rem;
      height: 0.35rem;
    }
  }
  .jh_datika_cont {
    ul {
      padding-top: 0.3rem;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      .noUndefinded {
        background-color: #0097fa;
        border: 0.01rem solid #0097fa;
        color: #fff;
      }

      li {
        margin: 0rem 0.25rem 0.3rem 0.25rem;
        width: 0.9rem;
        height: 0.9rem;
        border: 0.01rem solid #eaeaea;
        border-radius: 50%;
        text-align: center;
        line-height: 0.9rem;
        font-size: 0.28rem;
      }
    }
  }
}
// 答题卡结束
// 解析
.jh_jx {
  border-top: 0.05rem solid #f0f2f5;
  width: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #666;
  div {
    display: flex;
    height: 1rem;
    align-items: center;
  }
  div:nth-of-type(1) {
    justify-content: space-between;
    p {
      span {
        margin-right: 0.15rem;
      }
      span:nth-of-type(2) {
        color: #22bfa7;
      }
    }
  }
  div:nth-of-type(2) {
    p:nth-of-type(2) {
      background: linear-gradient(30deg, #0097fa, #0096f9);
      border-radius: 0.2rem;
      padding: 0.05rem 0.1rem;
      font-size: 0.25rem;
      color: #fff;
      margin-left: 0.1rem;
    }
  }
  div:nth-of-type(3) {
    p:nth-of-type(2) {
      font-size: 0.25rem;
      margin-left: 0.1rem;
    }
  }
}
// 解析结束

// 问题反馈
.jh_questionFk {
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999999999999999999999999999999999999999999999999999999999999999;
  .jh_questionFk_nav {
    display: flex;
    height: 0.9rem;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 0.3rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #f0f2f5;
    img {
      width: 0.2rem;
    }
  }
  > div:nth-of-type(2) {
    padding: 0.3rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    color: #595959;
    border-bottom: 0.2rem solid #f0f2f5;
  }
  > div:nth-of-type(3) {
    padding: 0.3rem;
    box-sizing: border-box;
    textarea {
      width: 100%;
      height: 4rem;
      border: 0.01rem solid #d9d9d9;
      border-radius: 0.15rem;
      font-size: 0.3rem;
      padding: 0.3rem;
      box-sizing: border-box;
      margin-bottom: 2.6rem;
    }
    p {
      width: 100%;
      height: 0.9rem;
      text-align: center;
      line-height: 0.9rem;
      border: 0.01rem solid #0097fa;
      color: #0097fa;
    }
  }
}

.jh_questionFk /deep/.van-radio {
  display: flex;
  padding: 0.3rem 0rem;
  box-sizing: border-box;
  height: 100%;
}
.jh_questionFk /deep/ .van-radio__label {
  padding: 0rem;
  display: flex;
  align-items: center;
  line-height: 0.3rem;
}
.jh_questionFk /deep/.van-radio--horizontal {
  margin-right: 0.5rem;
}
.ju {
  font-size: 0.28rem;
}
// 问题反馈结束
</style>
