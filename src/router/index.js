import Vue from "vue";
import VueRouter from "vue-router";


// import Home from "../views/Home.vue";
import Boss from "../views/Boss.vue"
import one from "../views/one.vue"
import two from "../views/two.vue"
import three from "../views/three.vue"
import four from "../views/four.vue"
import Sign_in from "../views/Sign_in.vue"
import register from "../views/register.vue"
import Retrieve_password from "../views/Retrieve_password.vue"
import Information_page from "../views/Information_page.vue"
import My from "../views/My.vue"
import tutoring from "../views/tutoring.vue"
import set_password from "../views/set_password.vue"
import Personal_information from "../views/Personal_information.vue"
import Famous_teacher_lineup from "../views/Famous_teacher_lineup.vue"
import Course_details from "../views/Course_details.vue"
import H_calendar from "../views/H_calendar.vue"
import nickname from "../views/nickname.vue"
import gender from "../views/gender.vue"
import date_of_birth from "../views/date_of_birth.vue"
import City from "../views/City.vue"
import Subject from "../views/Subject.vue"
import age from "../views/age.vue"
import Search from "../views/Search.vue"
import sign_out from "../views/sign_out.vue"
import Featured_lesson_content from "../views/Featured_lesson_content.vue"
import Book_a_course from "../views/Book_a_course.vue"
import Course_order from "../views/Course_order.vue"
import Member_order from "../views/Member_order.vue"
import Schedule_order from "../views/Schedule_order.vue"
import my_discount_coupon from "../views/my_discount_coupon.vue"
import Followed_teacher from "../views/Followed_teacher.vue"
import my_collection from "../views/my_collection.vue"
import Wrong_exercise from "../views/Wrong_exercise.vue"
import notification from "../views/notification.vue"
import Practice from "../views/Practice.vue"
import Study_card from "../views/Study_card.vue"
import Study_card_exchange from "../views/Study_card_exchange.vue"
import Reluctance from "../views/Reluctance.vue"
import Study_tour from "../views/Study_tour.vue"
import Abandonment from "../views/Abandonment.vue"
import See_also_the_calendar from "../views/See_also_the_calendar.vue"
import Balance_details from "../views/Balance_details.vue"
import member from "../views/member.vue"
import Test_site_practice from "../views/Test_site_practice.vue"
import Simulation from "../views/Simulation.vue"
import assess from "../views/assess.vue"
import Exercise_collection from "../views/Exercise_collection.vue"
import mathematics from "../views/mathematics.vue"
import notice from "../views/notice.vue"
import system_notification from "../views/system_notification.vue"
import Appointment_notice from "../views/Appointment_notice.vue"
import Exam_notice from "../views/Exam_notice.vue"
import Order_notification from "../views/Order_notification.vue"
import order_details from "../views/order_details.vue"
import My_special_class from "../views/My_special_class.vue"
import questionDetail from "../views/questionDetail.vue"


Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/Boss/one"
    },
    // 登录
    {
      path: "/Sign_in",
      component: Sign_in
    },
    // 注册
    {
      path: "/register",
      component: register
    },
    // 找回密码
    {
      path: "/Retrieve_password",
      component: Retrieve_password
    },
    // 信息
    {
      path: "/Information_page",
      component: Information_page
    },
    // 一对一辅导
    {
      path: "/tutoring",
      component: tutoring
    },
    // 设置密码
    {
      path: "/set_password",
      component: set_password
    },
    // 个人信息填写
    {
      path: "/Personal_information",
      component: Personal_information
    },
    // 名师阵容详情
    {
      path: "/Famous_teacher_lineup",
      component: Famous_teacher_lineup
    },
    // 首页课程详情
    {
      path: "/Course_details",
      component: Course_details
    },
    // 日历
    {
      path: "/H_calendar",
      component: H_calendar
    },
    // 设置昵称
    {
      path: "/nickname",
      component: nickname
    },
    // 设置性别
    {
      path: "/gender",
      component: gender
    },
    // 设置出生日期
    {
      path: "/date_of_birth",
      component: date_of_birth
    },
    // 设置所在城市
    {
      path: "/City",
      component: City
    },
    // 设置学科
    {
      path: "/Subject",
      component: Subject
    },
    // 设置年纪
    {
      path: "/age",
      component: age
    },
    // 搜索
    {
      path: "/Search",
      component: Search
    },
    // 退出登录
    {
      path: "/sign_out",
      component: sign_out
    },
    // 特色课内容详情
    {
      path: "/Featured_lesson_content",
      component: Featured_lesson_content
    },
    // 预约课程
    {
      path: "/Book_a_course",
      component: Book_a_course
    },
    // 课程订单
    {
      path: "/Course_order",
      component: Course_order
    },
    // 会员订单
    {
      path: "/Member_order",
      component: Member_order
    },
    // 约课订单
    {
      path: "/Schedule_order",
      component: Schedule_order
    },
    // 优惠券
    {
      path: "/my_discount_coupon",
      component: my_discount_coupon
    },
    // 关注的老师
    {
      path: "/Followed_teacher",
      component: Followed_teacher
    },
    // 我的收藏
    {
      path: "/my_collection",
      component: my_collection
    },
    // 错题练习
    {
      path: "/Wrong_exercise",
      component: Wrong_exercise
    },
    // 消息通知
    {
      path: "/notification",
      component: notification
    },
    // 套卷练习
    {
      path: "/Practice",
      component: Practice
    },
    // 学习卡
    {
      path: "/Study_card",
      component: Study_card
    },
    // 学习卡兑换
    {
      path: "/Study_card_exchange",
      component: Study_card_exchange
    },
    // 意见反馈
    {
      path: "/Reluctance",
      component: Reluctance
    },
    // 学习视频
    {
      path: "/Study_tour",
      component: Study_tour
    },
    // 播放视频
    {
      path: "/Abandonment",
      component: Abandonment
    },
    // 视频页日历
    {
      path: "/See_also_the_calendar",
      component: See_also_the_calendar
    },
    // 余额明细
    {
      path: "/Balance_details",
      component: Balance_details
    },
    // 会员
    {
      path: "/member",
      component: member
    },
    // 考点练习
    {
      path: "/Test_site_practice",
      component: Test_site_practice
    },
    // 仿真练习
    {
      path: "/Simulation",
      component: Simulation
    },
    // 测评记录
    {
      path: "/assess",
      component: assess
    },
    // 习题收藏
    {
      path: "/Exercise_collection",
      component: Exercise_collection
    },
    // 数学
    {
      path: "/mathematics",
      component: mathematics
    },
    // 课程通知
    {
      path: "/notice",
      component: notice
    },
    // 系统通知
    {
      path: "/system_notification",
      component: system_notification
    },
    // 约课通知
    {
      path: "/Appointment_notice",
      component: Appointment_notice
    },
    // 考试通知
    {
      path: "/Exam_notice",
      component: Exam_notice
    },
    // 订单通知
    {
      path: "/Order_notification",
      component: Order_notification
    },
    // 订单详情
    {
      path: "/order_details",
      component: order_details
    },
    // 我的特色课
    {
      path: "/My_special_class",
      component: My_special_class
    },
    // 练习
    {
      path: "/questionDetail",
      component: questionDetail
    },
    // tabbar页面 
    {
      path: "/Boss",
      component: Boss,
      children: [{
          path: "one",
          component: one
        },
        {
          path: "two",
          component: two
        },
        {
          path: "three",
          component: three
        },
        {
          path: "four",
          component: four
        },
        {
          path: "My",
          component: My
        },
        // {
        //   path: "five",
        //   component: five
        // }
      ]
    }
  ]
})