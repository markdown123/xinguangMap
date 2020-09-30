 // 渲染全球疫情数据面板
 var dataTable = document.querySelector('.dataTable')
 var items = dataTable.querySelectorAll('span')
 var ii = dataTable.querySelectorAll('i')

 axios.get(`/api/statistics/latest`).then(res => {
     var count = res.data.globalStatistics
     console.log(count);
     var arr = [count.confirmedCount,
     count.confirmedIncr, count.currentConfirmedCount,
     count.currentConfirmedIncr, count.deadCount, count.deadIncr,
     count.curedIncr, count.curedIncr]

     for (let i = 0; i < items.length; i++) {
         // 渲染数据
         items[i].innerHTML = Math.abs(arr[i])
         if ((arr[2 * i + 1] - 0) < 0) {
             ii[i].innerHTML = '-'
         }
     }
     console.log(ii);
 })