// import  {confirmData,cureData,deadData} from './usaData.js'
var option_map = {
    tooltip: {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        formatter: function (params) {
            // params不是series中的数据
            var res = params.name
            var sData = option_map.series[0].data

            // 提示框中的数据
            for (let i = 0; i < sData.length; i++) {
                if (sData[i]['name'] === params.name) {
                    // params.color = sData[i].itemStyle['color']
                    var value = (sData[i]['value'] + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    res = sData[i]['cName'] + ':' + value + '<br />'
                }
            }
            return res
        }
    },
    // 图例
    dataRange: {
        x: 'left',
        y: 'bottom',
        splitList: [
            { start: 1000000 },
            { start: 100000, end: 999999 },
            { start: 10000, end: 99999 },
            { start: 1000, end: 9999 },
            { start: 100, end: 999, },
            { start: 1, end: 99, },
            { start: 0, end: 0 }
        ],
        color: ['#841710', '#C51623', '#F04B4A', '#FF8A74', '#FFD0A3', '#FFF1D0', '#fff'],
    },
    // color: ['#841710', '#C51623', '#F04B4A', '#FF8A74', '#FFD0A3', '#FFF1D0', '#fff'],
    toolbox: {
        show: true,
        //orient: 'vertical',
        left: 'left',
        top: 'top',
    },

    series: [{
        type: "map",
        name: "全球疫情数据",
        label: {
            "show": false,
            "position": "top",
            "margin": 8,
        },
        mapType: "world",
        //countryCount中的name要与地图原始数据中的name对应
        //比如： 地图原始数据中的name为china，则获取的数据中的name也为china
        data: countryCount,

        "zoom": 1,
        itemStyle: {
            'color': '#841710'
        },
        emphasis: {
            label: {
                // 选中地图区域，是否显示名称
                show: true,
            },
        },
    }]
}

option_left = {
    title: {
        text: '美国疫情发展趋势',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#E9EEF3',
            },
        },
    },
    // legend: {
    //     textStyle: {
    //         fontSize: 12,
    //     },

    // },
    toolbox: {
        show: true,

    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateArr,
        axisLabel: {
            textStyle: {
                fontSize: 12,
            }
        },
    },
    yAxis: {
        type: 'value',
        show: true,
        axisLabel: {
            formatter: '{value} ',
            textStyle: {
                fontSize: 9,
            }
        },
        min: 50000,
        max: 8000000,
        interval: 1000000,
    },
    series: [
        {
            name: '确诊人数',
            type: 'line',
            // 由于请求数据，为异步，所以此时无法获取请求数据
            data: confirmData,
            itemStyle: {
                normal: {
                    color: '#A31D13',
                    lineStyle: {
                        color: '#A31D13',
                    }
                }
            }
        },
        {
            name: '治愈人数',
            type: 'line',
            data: cureData,
            itemStyle: {
                normal: {
                    color: '#31AC76',
                    lineStyle: {
                        color: '#31AC76',
                    }
                }
            }

        },
        {
            name: '死亡人数',
            type: 'line',
            data: deadData,
            itemStyle: {
                normal: {
                    color: '#333333',
                    lineStyle: {
                        color: '#333333',
                    }
                }
            }
        }
    ]
};



