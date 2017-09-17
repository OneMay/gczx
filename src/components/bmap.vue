<template>
    <div>
        <div id="echart" :style="{width:'100%',margin:'0 auto'}"></div>
        <div id="device-list">
            <ul class="box">
                <li class="card">
                    <div class="poi-wrapper">
                        <ul class="poilist"id="poilist" >
                           <!-- <div v-for="item in items">
                                <div v-html="item.dom"></div>
                           </div> -->
                            <li data-index="1"  class="search-item cater-item" v-for="item in items" :coordinate="item.baseName+':'+'['+item.latitudePosition+','+item.longitudePosition+']'" @click="toCoordinate(110.42038, 29.82622)">
                                <div class="cf mb_5">
                                    <div class="col-r">
                                        <div class="img-wrap">
                                            <a href="javascript:void(0)" data-index="1"  >
                                                <img src="http://webmap3.map.bdimg.com/maps/services/thumbnails?width=132&amp;height=104&amp;align=center,center&amp;quality=100&amp;src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fbainuo%2Fcrop%253D0%252C0%252C470%252C285%253Bw%253D470%253Bq%253D99%253Bc%253Dnuomi%252C95%252C95%2Fsign%3D3022ca49be99a9012f7a017620a5264b%2F023b5bb5c9ea15ce19c1f654b0003af33a87b2bb.jpg" style="width:71px;height:58px;"> </a>
                                        </div>
                                    </div>
                                    <div class="ml_30 mr_85">
                                        <div class="row">
                                            <span>
                                                <a href="javascript:void(0)" class="n-blue" data-index="1" v-text="item.baseName"></a>
                                            </span>
                                            <span class="n-grey addr" title="解放路257号">解放路257号</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <button type="button" class="btn  btn-xs" @click="setToGeo">返回</button>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js';
import './../../static/js/lib/bmap.js'
import AXIOS from './../axios/axios'
const Axios = new AXIOS()
export default {
    name: 'bmap',
    data() {

        return {
            //height: window.screen.availHeight + 'px',
            msg:{
                show:''
            },
            items:[],
            placeList:[],
            data: [
                { name: '桃园基地', value: 194 },
                { name: '桃园基地', value: 229 },
                { name: '武汉', value: 273 },
                { name: '桃园基地', value: 279 },
                {name:'百鸟村茶园',value:220}
            ],
            geoCoordMap: {
               
                '桃园基地': [115.480656, 35.23375],
                '桃园基地': [117.27, 31.86],
                '武汉': [114.31, 30.52],
                '桃园基地': [125.03, 46.58],
                '百鸟村茶园':[110.42038, 29.82622]
            },
            // BJData: [
            //     [{ name: '北京' }, { name: '上海', value: 95 }],
            //     [{ name: '北京' }, { name: '广州', value: 90 }],
            //     [{ name: '北京' }, { name: '大连', value: 80 }],
            //     [{ name: '北京' }, { name: '南宁', value: 70 }],
            //     [{ name: '北京' }, { name: '南昌', value: 60 }],
            //     [{ name: '北京' }, { name: '拉萨', value: 50 }],
            //     [{ name: '北京' }, { name: '长春', value: 40 }],
            //     [{ name: '北京' }, { name: '包头', value: 30 }],
            //     [{ name: '北京' }, { name: '重庆', value: 20 }],
            //     [{ name: '北京' }, { name: '常州', value: 10 }]
            // ],
            planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            option: {
                backgroundColor: '#404a59',
                title: {
                    text: '环境设备数据',
                 
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                tooltip: {
                    trigger: 'item',
                    position: 'right'
                },
                bmap: {
                    center: [110.42038, 29.82622],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                     }
                },
                series: [
                ]
            }
        }

    },
    methods: {
        convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        },
        drawGraph(id) {
            // 绘图方法  
           // document.getElementById(id).style.height = this.height;
            this.chart = echarts.init(document.getElementById(id))
            this.chart.on("click", this.chartClick);
            // 皮肤添加同一般使用方式 
            var that = this;
            this.chart.showLoading();
            this.option.series = [//{
                //             name: 'pm2.5',
                //             type: 'scatter',
                //             coordinateSystem: 'bmap',
                //             data: this.convertData(that.data),
                //             symbolSize: function (val) {
                //                 return val[2] / 10;
                //             },
                //             label: {
                //                 normal: {
                //                     formatter: '{b}',
                //                     position: 'right',
                //                     show: false
                //                 },
                //                 emphasis: {
                //                     show: true
                //                 }
                //             },
                //             itemStyle: {
                //                 normal: {
                //                     color: '#ddb926'
                //                 }
                //             }
                //         },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: this.convertData(that.data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6)),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'emphasis',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }]
            //if (this.option && typeof this.option === "object") {
            this.chart.hideLoading();
            this.chart.setOption(this.option, true);
            //}
            var bmap = this.chart.getModel().getComponent('bmap').getBMap();
            bmap.addControl(new BMap.MapTypeControl());
            // bmap.mapType=BMAP_SATELLITE_MAP;
            bmap.setMinZoom(5);
            //bmap.setMapType(BMAP_NORMAL_MAP);
            //bmap.mapType=BMAP_SATELLITE_MAP;
            bmap.setMapType(BMAP_HYBRID_MAP)
            bmap.addEventListener("dblclick",function(e){  
                //alert(e.point.lng+","+e.point.lat);// 单击地图获取坐标点；
                var zoom = bmap.getZoom()+1; 
                bmap.reset(); 
                //bmap.panTo(new BMap.Point(e.point.lng,e.point.lat));// map.panTo方法，把点击的点设置为地图中心点  
                 bmap.centerAndZoom(new BMap.Point(e.point.lng,e.point.lat),zoom)
            });
            this.toCoordinate(110.42038, 29.82622); 
        },
        toCoordinate(longitude,latitude){
            var bmap = this.chart.getModel().getComponent('bmap').getBMap();
            bmap.addControl(new BMap.MapTypeControl());
            bmap.reset();
            //bmap.setCenter(new BMap.Point(longitude,latitude));
            bmap.centerAndZoom(new BMap.Point(longitude,latitude),15)
        },
        chartClick(param){
             var data={}
                   var paramName=param.name.toString();

                   if(paramName=="百鸟村茶园"){
                       data.baseNo='BN001';
                       data.companyNo=2;
                       data.traceCode='9693256390009800000000010'

                   }

                   if(paramName=="桃园基地"){
                       data.baseNo='TY001';
                       data.companyNo=2;
                       data.traceCode='969704861327040000000001X'
                   }

                   //this.$store.dispatch('change',data)
                   //console.log(this.$store.getters.getData);
                  window.open('http://localhost:8088/environment?'+data.baseNo+'&'+data.traceCode);
        },
        setToGeo(){
             this.msg.show='geo';
            //alert(param.name)
            this.$emit('tellToBmap',this.msg); 
        },
        getPosition(){
             var that=this;
            let params={
                api:'http://localhost:8088/getPosition/api/1.0/ll/enterprise/environment/getModule',
                param:{
                }
            }
            Axios.post(params)
            .then(res=>{
                var data;
                if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                    data=res.data;
                }else{
                    data=JSON.parse(res.data)
                }
                var dataList= data.contents.list;
                dataList.forEach(function(val,index){
                    that.placeList.push({
                       baseName:val.baseName,
                       baseNo:val.baseNo,
                       companyNo:2,
                       latitudePosition:val.latitudePosition,
                       longitudePosition:val.longitudePosition
                    })
                    that.items.push({
                        baseName:val.baseName,
                        latitudePosition:val.latitudePosition,
                        longitudePosition:val.longitudePosition
                    })
                            
                })
              
                //alert( that.placeList)
                //console.log(that.placeList)
                
            })
            .catch(err=>{
                console.log(err)
                that.drawGraph('echarts');
            })
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.drawGraph('echart');
            this.getPosition();
        })
    },
    components: {
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#echart {
    margin-top: 0px !important;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
}

#device-list {
    position: absolute;
    top: 20px;
    left: 10px;
    z-index: 100;
}

.box {
    width: 368px;
    position: relative;
}

.box .card {
    pointer-events: auto;
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px;
    background: #fff;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, .15);
    overflow: auto;
    overflow-x: hidden;
    position: relative;
    border-radius: 2px;
    -webkit-transition: max-height .5s;
    transition: max-height .5s;
}

.poilist {
    padding: 5px 0 0;
}
.search-item {
    padding: 6px 0;
}
.search-item:hover {
    background-color: #f6f6f6;
    cursor: pointer;
}
.mb_5 {
    margin-bottom: 5px!important;
}
.cf {
    zoom: 1;
}
.search-item .col-l {
    float: left;
}

.poilist a {
    color: #3385ff;
}
.poilist a:hover{
    color: #3385ff !important;
}
 .card a {
    text-decoration: none;
}
.search-item .col-r {
    float: right;
    width: 75px;
    margin-right: 10px;
    text-align: right;
}
.search-item .img-wrap {
    position: relative;
}
.mr_85 {
    margin-right: 85px;
}
.ml_30 {
    margin-left: 30px!important;
}
.search-item .row, .search-item .select-row, .search-item .content-des {
    padding: 5px 0;
    line-height: 1.2;
}
 .addr {
     margin-top:5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.n-grey {
    display: block;
    color: #666!important;
}
</style>
