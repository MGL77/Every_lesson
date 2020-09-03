import request from "./request";

//封装业务的各种接口


// 获取轮播图
export function getBanners() {
    return request({
        url: "/banner",
        method: "GET"
    });
}

//获取验证码
export function get_sms_code(data) {
    return request({
        url: "/smsCode",
        method: "POST",
        data
    });
}

//用户登录
export function login(data) {
    return request({
        url: "login",
        method: "POST",
        data
    });
}

//获取课程列表
export function lessonList(params) {
    return request({
        url: "courseBasis",
        method: "GET",
        params
    });
}

//获取课程列表
export function password(params) {
    return request({
        url: "password",
        method: "post",
        params
    });
}


// 用户信息
export function userInfo(data) {
    return request({
        url: "userInfo",
        method: "get",
        data
    });
}


// 关注
export function attention({
    id,
    token
}) {
    return request({
        url: `/teacher/collect/${id}?`,
        method: 'GET',
        headers: {
            Authorization: token
        }
    })
}


//获取视频token接口
export function getPlayToken({
    token,
    video_id,
    course_id
}) {
    console.log("jieko1", token, video_id, course_id)
    return request({
        url: `/getPlayToken/video_id=${video_id}/course_id=${course_id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            DeviceType: "H5",
            // DeviceID: "AD11D691-BECE-AE86-1ABB-F5ADCE883D9F",
            Authorization: token
        }
    });
}


// 获取视频列表
export function getvideolist(params) {
    // console.log(params)
    return request({
        url: `/myStudy/course/${params.id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            DeviceType: "H5",
            // DeviceID: "AD11D691-BECE-AE86-1ABB-F5ADCE883D9F",
            Authorization: `Bearer ${params.token}`
        }
    });
}


// 获取题库选择分类

export function wapClassify(token) {
    return request({
        url: `/wap/classify?`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            DeviceType: "H5",
            Authorization: `Bearer ${token}`
        }
    });
}

// 获取题库选择分类结束

// 获取子级分类
export function quesBank(token, id) {
    return request({
        url: `/wap/quesBank/${id}?`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            DeviceType: "H5",
            Authorization: `Bearer ${token}`
        }
    });
}

// 获取子级分类结束

// 获取练习内容
export function examPoint(token, classifyId, classify_id) {
    return request({
        url: `/examPoint/${classifyId}/${classify_id}?`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            DeviceType: "H5",
            Authorization: `Bearer ${token}`
        }
    });
}
// 获取练习内容结束

//   // 获取套卷分类
// export function examClassify(token) {
//     return request({
//       url: `exam/classify`,
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         DeviceType: "H5",
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }

//   // 获取套卷分类结束

//   // 获取套卷练习
//   export function packagePractice(token, done_status, classify_id, name) {
//     return request({
//       url: `/exam/packagePractice?page=1&limit=10&done_status=${done_status}&classify_id=${classify_id}&name=${name}&init=function(){this.done_status=0,this.classify_id=0}&`,
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         DeviceType: "H5",
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }
//   // 获取套卷练习结束


// 获取考试类型
export function pointInfo(token, id) {
    return request({
      url: `point/info/${id}?`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        DeviceType: "H5",
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  // 获取考试类型结束
  
  // 考试题
  export function examPointQ(token, id, number) {
    return request({
      url: `/examPoint/questions/${id}/${number}?`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        DeviceType: "H5",
        Authorization: `Bearer ${token}`
      }
    });
  }
  // 考试题结束
  
  // 交卷
  export function storeReport(token, paper_id, question, report_time_long) {
    return request({
      url: `/exam/point/storeReport`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        DeviceType: "H5",
        Authorization: `Bearer ${token}`
      },
      data: {
        paper_id,
        question,
        report_time_long
      }
    });
  }
  // 交卷 结束


  export function Collect(token, teacher_id) {
    return request({
      url: `/teacher/${teacher_id}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        DeviceType: "H5",
        Authorization: `Bearer ${token}`
      }
    });
  }

  // 习题取消收藏
export function collectCancel(token, collectId) {
    return request({
      url: `/collect/cancel/${collectId}/3`,
      method: "put",
      headers: {
        "Content-Type": "application/json",
        DeviceType: "H5",
        Authorization: `Bearer ${token}`
      }
    });
  }
  // 习题取消收藏结束
  
  // 答题解析
  export function analysis(token, id) {
    return request({
      url: `/examPoint/answer/analysis/${id}?`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        DeviceType: "H5",
        Authorization: `Bearer ${token}`
      }
    });
  }
  // 答题解析结束

  // 问题反馈
export function correction(token, error_msg, ques_id, type) {
    return request({
      url: `/myExam/correction`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        DeviceType: "H5",
        Authorization: `Bearer ${token}`
      },
      data: {
        error_msg,
        ques_id,
        type
      }
    });
  }
  // 问题反馈结束