// 记录日期数组
const dateArr = []
const confirmData = []
const cureData = []
const deadData = []

async function getUsaData() {
    const { data: res } = await axios.get(`/api/countries/USA/daily/`)
    console.log(res);
    // 美国近十日的疫情数据
    var usaData = res.slice(239)
    console.log(usaData);

    usaData.forEach(item => {
        confirmData.push(item.confirmedCount)
        cureData.push(item.curedCount)
        deadData.push(item.deadCount)
        // 获取日期
        var m = item.dateId.toString().substr(4, 2)
        m = m.substr(0, 1) === '0' ? m.substr(1) : m
        var d = item.dateId.toString().substr(6)
        d = d.substr(0, 1) === '0' ? d.substr(1) : d
        var str = `${m}-${d}`
        dateArr.push(str)
    })
}


getUsaData()

// export {confirmData,cureData,deadData}