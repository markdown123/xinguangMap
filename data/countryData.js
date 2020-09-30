var selectCity = document.querySelector('.selectCity')
var box = selectCity.querySelector('.box')
var ipt = selectCity.querySelector('input')
var group = selectCity.querySelector('.group')
var i = selectCity.querySelector('i')
var input_content = selectCity.querySelector('.input-content')
var flag = false;


// 初始状态，box隐藏
box.style.display = 'none'

// 请求数据
axios.defaults.baseURL = 'http://111.231.75.86:8000'
var continents = ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲']
// 每个国家确诊数
var countryCount = []
continents.forEach(item => {
    axios.get(`/api/countries/?continents=${item}`).then(function (res) {
        console.log(res.data);
        //    根据大洲，添加分组
        var span = document.createElement('span')
        span.innerHTML = `${res.data[0].continents}`
        group.appendChild(span)

        //    遍历响应的数组
        res.data.forEach(item1 => {
            var obj = {}
            obj['cName'] = item1.countryName
            obj['value'] = item1.confirmedCount
            var a = item1.confirmedCount
            // 数据所属的颜色
            var colorArr = ['#fff', '#FFF1D0', '#FFD0A3', '#FF8A74', '#F04B4A', '#C51623', '#841710']
            obj['itemStyle'] = {}
            if (a === 0) {
                obj['itemStyle']['color'] = colorArr[0]
            } else if (a >= 0 && a < 100) {
                obj['itemStyle']['color'] = colorArr[1]
            } else if (a >= 100 && a < 1000) {
                obj['itemStyle']['color'] = colorArr[2]
            } else if (a >= 1000 && a < 10000) {
                obj['itemStyle']['color'] = colorArr[3]
            } else if (a >= 10000 && a < 100000) {
                obj['itemStyle']['color'] = colorArr[4]
            } else if (a >= 100000 && a < 1000000) {
                obj['itemStyle']['color'] = colorArr[5]
            } else {
                obj['itemStyle']['color'] = colorArr[6]
            }
            // 加入国家的英文名称
            var b = item1.countryName
            for (let key in nameMap) {
                if (nameMap[key] === b) {
                    obj['name'] = key
                }
            }

            // 获取每个国家的确诊数据
            countryCount.push(obj)
            //    在大洲下，添加国家
            var li = document.createElement('li')
            li.innerHTML = `${item1.countryName}`
            span.appendChild(li)

            // 选择国家，下拉框隐藏，选中的值赋值给input框
            li.addEventListener('click', function () {
                box.style.display = 'none'
                ipt.value = li.innerHTML
            })
        })
    })
})