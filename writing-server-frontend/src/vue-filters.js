import Vue from 'vue'




// Vue.filter('dateFormatYm', function (date) {
//   if (date) {
//     return moment(date).format('YYYY-MM');
//   }
//   return '';
// })
// Vue.filter('dateFormatMd', function (date) {
//   if (date) {
//     return moment(date).format('MM-DD');
//   }
//   return '';
// })
Vue.filter('dateFormatYmd', function (date) {
  if (date) {
    return moment(date).format('YYYY-MM-DD')
  }
  return '';
})
// Vue.filter('dateFormatYmdHS', function (date) {
//   if (date) {
//     return moment(date).format('YYYY-MM-DD')
//   }
//   return '';
// })
// Vue.filter('dateFormatYmdHm', function (date) {
//   if (date) {
//     var dateEnd = new Date(date);
//     var dateStart = new Date();
//     var strSeparator = "-"; //日期分隔符
//     var strDate1;
//     var strDate2;
//     var iDays;
//     var t1 = moment(dateEnd).format("YYYY-MM-DD");
//     var t2 = moment(dateStart).format("YYYY-MM-DD");
//     strDate1 = t1.split(strSeparator);
//     strDate2 = t2.split(strSeparator);
//     var strDateE = new Date(strDate1[0], strDate1[1] - 1, strDate1[2]);
//     var strDateS = new Date(strDate2[0], strDate2[1] - 1, strDate2[2]);
//     iDays = parseInt(Math.abs(strDateE - strDateS) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
//     if (iDays == 0) {
//       return '今天 ' + moment(date).format('HH:mm:ss')
//     } else if (iDays == 1) {
//       return '昨天 ' + moment(date).format('HH:mm:ss')
//     } else if (iDays == 2) {
//       return '前天 ' + moment(date).format('HH:mm:ss')
//     } else {
//       return moment(date).format('YYYY-MM-DD HH:mm:ss')
//     }
//   }
//   return '';
// })
Vue.filter('dateFormatYmdHms', function (date) {
  if (date) {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
})

// Vue.filter('dateFormatYmdWeek', function (date) {
//   if (date) {
//     // let weekdays={'Monday':'星期一','Tuesday':'星期二','Wednesday':'星期三','Thursday':'星期四','Friday':'星期五','Saturday':'星期六','Sunday':'星期天'}
//     // return moment(date).format('YYYY-MM-DD')+' '+weekdays[moment(date).format('dddd')];
//     return moment(date).format('YYYY-MM-DD dddd')
//   }
// })

// Vue.filter('dateFormatDateWeek', function (time) {
//   let date = new Date(time)
//   if (time) {
//     // let weekdays=new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
//     // let str = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 " + weekdays;
//     // return str;
//     return moment(time).format('YYYY年MM月DD日 dddd');
//   }
// })
