<template>
    <div class="map">
       <div id="mecharts" :style="{width:'1000px',height:'800px',margin:'20px auto'}">
       
    </div> 
     <button class="md-close btn-sm btn-primary" @click="returnClick">返回</button>
     <span class="md-close btn-sm btn-primary" id="map1" @click="chooseMapColor(1)">主题1</span>
     <span class="md-close btn-sm btn-primary" id="map2" @click="chooseMapColor(2)">主题2</span>
    </div>
    
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/province/anhui.js'
import 'echarts/map/js/province/aomen.js'
import 'echarts/map/js/province/beijing.js'
import 'echarts/map/js/province/chongqing.js'
import 'echarts/map/js/province/fujian.js'
import 'echarts/map/js/province/gansu.js'
import 'echarts/map/js/province/guangdong.js'
import 'echarts/map/js/province/guangxi.js'
import 'echarts/map/js/province/guizhou.js'
import 'echarts/map/js/province/hainan.js'
import 'echarts/map/js/province/hebei.js'
import 'echarts/map/js/province/heilongjiang.js'
import 'echarts/map/js/province/henan.js'
import 'echarts/map/js/province/hubei.js'
import 'echarts/map/js/province/hunan.js'
import 'echarts/map/js/province/jiangsu.js'
import 'echarts/map/js/province/jiangxi.js'
import 'echarts/map/js/province/jilin.js'
import 'echarts/map/js/province/liaoning.js'
import 'echarts/map/js/province/neimenggu.js'
import 'echarts/map/js/province/ningxia.js'
import 'echarts/map/js/province/qinghai.js'
import 'echarts/map/js/province/shandong.js'
import 'echarts/map/js/province/shanghai.js'
import 'echarts/map/js/province/shanxi.js'
import 'echarts/map/js/province/shanxi1.js'
import 'echarts/map/js/province/sichuan.js'
import 'echarts/map/js/province/taiwan.js'
import 'echarts/map/js/province/tianjin.js'
import 'echarts/map/js/province/xianggang.js'
import 'echarts/map/js/province/xinjiang.js'
import 'echarts/map/js/province/xizang.js'
import 'echarts/map/js/province/yunnan.js'
import 'echarts/map/js/province/zhejiang.js'
import 'echarts/map/js/china.js'
import 'echarts/map/js/china-contour.js'
import './../../static/js/page/index.js'
import AXIOS from './../axios/axios'
const Axios = new AXIOS();
export default {
    name: 'geo',
    data() {
        return {
            getName:'',
            msg:{
                show:'',
                name:'',
                arr:[],
                from:'',
                mapColor:null
            },
            geoCoordMap: {

            },
            name: [],
            mapName:[],
            provinceList: ["河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "北京", "天津", "上海", "重庆", "香港", "澳门", "台湾",],
            cityList: ["恩施土家族苗族自治州", "恩施市", "鹤峰县"],
            option: {
                title: {
                    text: '全国分布图',
                    left: 'left',
                    textStyle:{
                        color:'#fff'
                    }
                },
                tooltip: {
                    show:false,
                    trigger: 'item',
                    formatter: '基地数：4'
                },
                visualMap: {
                    min: 0,
                    max: 1500,
                    show: false,
                    left: 'left',
                    top: 'bottom',
                    text: ['High', 'Low'],
                    //seriesIndex: [0],
                    calculable: true
                },
                geo: {
                    map: 'china',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '16px'
                            }
                        }
                    },
                    roam: true,
                    width: '100%',
                    height:'100%',
                    itemStyle: {
                        normal: {
                             areaColor:'rgba(0,0,0,0.3)',
                            color: 'red',
                            "borderColor": "#fff",
                            "borderWidth": 0.5
                        },
                        emphasis: {
                            areaColor: 'rgba(143,188,143,0.8)'
                        }
                    },
                    regions: [],
                },
                series: [{
                    name: '',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'fill',
                        scale: 8
                    },
                    symbol: 'circle',
                    symbolSize: 10,
                    hoverAnimation: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            textStyle: {
                                color: 'aqua'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color:'red',
                            borderWidth: 10,
                            borderColor: 'red'
                        },
                        emphasis: {
                            color: '#da750d'
                        }
                    },
                    data: [{
                        name: '湖北',
                        value: [112.199266,31.035516]
                    },{
                        name: '辽宁',
                        value: [123.184876,41.281140]
                    }]
                }]
            },
            myChart: '',
            count: 1,
            num:1,
            placeList:[],
            echartData:[],
            mapColor:1,
            placeListArr:[]
        }
    },
    props:['setName'],
    methods: {
        randomValue() {
            return Math.round(Math.random() * 255);
        },
        //为每个省市虚构数据
        setData() {
        },
        chartClick(param) {
            this.myChart.setOption(this.option, true);
            
            //this.myChart.showLoading();
            var count;
            var that=this;
            //alert(++this.count);
             
            //防止地图继续下钻，若需要继续下钻可以注释掉，敲黑板，此处是同一个元素，不是冒泡，
            // 
            /*if (this.count >= 3) {
                if (this.cityList.indexOf(param.name) == -1) {
                    return
                }
            }*/
             var paramName=[];
            this.echartData.forEach((val,index)=>{
                paramName.push(val.name)
            })
            if (param.name== '南海诸岛') {
                    return ;
                }
            //alert(param.name);
            if (this.option.geo.map&&this.option.geo.map!=param.name&&paramName.indexOf(param.name)<0) {
                ++this.count;
                //alert(this.count);
                
                this.name.push(this.option.geo.map);
                
            }
            count=this.count+1;
            if (count >4) {
                //alert(count);
                if (paramName.indexOf(param.name)>=0) {
                     this.getName=param.name;
                   // this.$emit('tellToNamel',this.getName);
                   // $('#click')[0].click();
                   var data={}
                   var paramName=param.name.toString();

                   var num=this.placeListArr.indexOf(paramName);
                   if(num>=0){
                     data.baseNo= this.placeList[num].baseNo;
                     data.companyNo=2;
                    data.baseName=this.placeList[num].baseName
                   }

                   //this.$store.dispatch('change',data)
                   //console.log(this.$store.getters.getData);
                  window.open('http://localhost:8088/environment?'+data.baseNo+'&'+data.baseName);
                    return
                }
                if(count>=5){
                    this.num++;
                    if(this.num>2&&paramName.indexOf(param.name)<0){
                        this.msg.show='bmap';
                        this.msg.name=param.name;
                        this.msg.arr=this.name;
                        this.msg.from='geo';
                        this.msg.mapColor=this.mapColor;
                        //alert(param.name)
                       this.$emit('tellToGeo',this.msg); 
                    }
                }
            }
            else{
                this.num=1;
                this.getMapName(param.name);
                
            }
            this.myChart.showLoading();
            this.option.title.text = param.name + "分布图"
            this.option.geo.map = param.name;
            this.option.geo.width = '80%';
            this.option.geo.height = '90%';
            //this.getMapName(param.name);
            
            if (param.name == '湖北') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '恩施土家族苗族自治州',
                        value: [109.4521, 29.7824]
                    },{
                        name:'武汉市',
                        value:[114.3021,30.6023]
                    }]
                })
                //that.option.tooltip.formatter='基地数：4';
            }
            if (param.name == '辽宁') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '丹东市',
                        value: [124.2300, 40.0702]
                    }]
                })
                //that.option.tooltip.formatter='基地数：4';
            }
            if (param.name == '恩施土家族苗族自治州') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '鹤峰县',
                        value: [110.1721, 29.84]
                    },{
                        name:'咸丰县',
                        value:[109.1500,29.6802]
                    }]
                })
                //that.option.tooltip.formatter='基地数：3';
            }
            if (param.name == '鹤峰县') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: that.echartData[0].name,
                        value: [110.1721, 29.84]
                    }, {
                        name: that.echartData[1].name,
                        value: [110.3721, 29.94]
                    },
                    {
                        name: that.echartData[2].name,
                        value: [110.3021, 30.04]
                    }]
                })
                //that.option.tooltip.formatter='{b}: {c}';
            }
            if (param.name == '武汉市') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '洪山区',
                        value: [114.396632, 30.495684]
                    }]
                })
                //that.option.tooltip.formatter='基地数：3';
            }
            
            if (param.name == '丹东市') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '宽甸满族自治县',
                        value: [124.7803, 40.7303]
                    }]
                })
                //that.option.tooltip.formatter='基地数：4';
            }
            this.myChart.hideLoading();
            // this.option.series[0].data.push({tooltip:{formatter:'{b}'}})
            this.myChart.setOption(this.option, true);
        },
        returnClick() {
            this.myChart.showLoading();
            var n=this.count;
            this.count--;
            this.num=1;
            var that=this;
            //alert(5);
            //alert(this.name.length);
            if (this.name.length > 0 ) {
                var i = this.name.length - 1;
                var path = this.name[i];
                this.option.title.text = path + "分布图"
                this.option.geo.map = path;
                this.option.geo.width = '80%';
                this.option.geo.height = '90%';
                this.name.length--;
                this.getMapName(path);
            }
            if (this.name.length <= 0) {
                this.name.length = 0;
                this.count = 1;
                this.option.title.text = "全国分布图"
                this.option.geo.map = 'china';
                this.option.geo.width = '100%';
                this.option.geo.height = '100%';
                this.getMapName('china')
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '湖北',
                        value: [112.199266,31.035516]
                    },
                    {
                        name: '辽宁',
                        value: [123.184876,41.281140]
                    }]
                })
                //that.option.tooltip.formatter='基地数：4';
            }
            if (this.option.geo.map == '湖北') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '恩施土家族苗族自治州',
                        value: [109.4521, 29.7824]
                    },{
                        name:'武汉市',
                        value:[114.3021,30.6023]
                    }]
                })
                //that.option.tooltip.formatter='基地数：3';
            }
            if (this.option.geo.map == '辽宁') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '丹东市',
                        value: [124.2300, 40.0702]
                    }]
                })
                //that.option.tooltip.formatter='基地数：4';
            }

            if (this.option.geo.map == '恩施土家族苗族自治州') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '鹤峰县',
                        value: [110.1721, 29.84]
                    },{
                        name:'咸丰县',
                        value:[109.1500,29.6802]
                    }]
                })
                //that.option.tooltip.formatter='基地数：2';
            }
            if (this.option.geo.map == '鹤峰县') {
               Object.assign(this.option.series[0], {
                    data: [{
                        name: that.echartData[0].name,
                        value: [110.1721, 29.84]
                    }, {
                        name: that.echartData[1].name,
                        value: [110.3721, 29.94]
                    },
                    {
                        name: that.echartData[2].name,
                        value: [110.3021, 30.04]
                    }]
                })
                //that.option.tooltip.formatter='{b}:{c}';
            }
            if (this.option.geo.map == '武汉市') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '洪山区',
                        value: [114.396632, 30.495684]
                    }]
                })
            }

            if (this.option.geo.map == '丹东市') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '宽甸满族自治县',
                        value: [124.7803, 40.7303]
                    }]
                })
                //that.option.tooltip.formatter='基地数：4';
            }

            this.myChart.hideLoading();
            this.myChart.setOption(this.option);
        },
        getMapName(name) {
           this.mapName=[];
           var that = this;
           var mapNameObj=echarts.getMap(name).geoJson.features;
           mapNameObj.forEach(function(val,index){
               that.mapName.push(val.properties.name)
           })
           this.setMapColor(this.mapColor); 
        },
        setMapColor(num){
            this.option.geo.regions=[];
            var that = this;
            if(num==1){
                this.option.geo.itemStyle.normal.areaColor='rgba(0,0,0,0.3)';
                this.mapName.forEach(function(val,index){
                //console.log(val)
                if(val=="湖北"||val=="恩施土家族苗族自治州"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(218,165,32,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })  
                }
                else if(val=="重庆"||val=="武汉市"||val=="洪山区"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(128,128,0,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="湖南"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(240,230,140,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="贵州" ||val=='丹东市'||val=='宽甸满族自治县'){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,250,205,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="辽宁"||val=="鹤峰县"||val=="咸丰县"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(189,183,107,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else{
                    that.option.geo.regions.push({
                        name:val,
                        itemStyle: {
                            normal: {
                               // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                areaColor:'rgba(0,0,0,0.3)',
                                color: 'red',
                                "borderColor": "#fff",
                                "borderWidth": 0.5
                            }
                        }
                    })
                }
            })
            }else{
                this.option.geo.itemStyle.normal.areaColor='rgba(3,169,244,0.8)';
                this.mapName.forEach(function(val,index){
                //console.log(val)
                if(val=="湖北"||val=="恩施土家族苗族自治州"){
                    
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(243,66,53,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })  
                }
                else if(val=="重庆"||val=="武汉市"||val=="洪山区"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,152,0,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="湖南"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,235,59,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="贵州" ||val=='丹东市'||val=='宽甸满族自治县'){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,193,7,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="辽宁"||val=="鹤峰县"||val=="咸丰县"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,87,34,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else{
                    that.option.geo.regions.push({
                        name:val,
                        itemStyle: {
                            normal: {
                               // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                areaColor:'rgba(3,169,244,0.8)',
                                color: 'red',
                                "borderColor": "#fff",
                                "borderWidth": 0.5
                            }
                        }
                    })
                }
            })
            }
        },
        drawGraph(id) {
            var that = this;
            this.placeList.forEach(function(val,index){
                that.echartData.push({
                    name:val.baseName,
                    value:[val.latitudePosition,val.longitudePosition]
                })
            })
            this.myChart = echarts.init(document.getElementById(id));
            this.myChart.showLoading();
            
            //this.myChart.setOption(this.option);
            this.myChart.on("dblclick", this.chartClick);
            var node = document.getElementById('returnGeo');
            var node2 = document.getElementById('echarts');
            var that = this;
        //     node.removeEventListener("dblclick",function(){
        //     //that.returnClick();
        // })
        //     node2.addEventListener("dblclick", function () {
        //         that.returnClick();
        //     });

            if(this.setName.name){
                this.mapColor=this.setName.mapColor;     
                this.getMapName(this.setName.name);
                this.count=4;
                this.name=this.setName.map;
                this.option.geo.map = this.setName.name;
                 this.chartClick(this.setName) 
                this.setName.name='';
                
            }else{
                this.getMapName('china');
                this.myChart.hideLoading();
                this.myChart.setOption(this.option);
            }
            
            

        },
        getPosition(){
             var that=this;
             $('body').removeClass('bodyJpg');
             $('body').addClass('bodyJpg');
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
                    that.placeListArr.push(val.baseName);
                })
                //alert( that.placeList)
                if(document.getElementById('mecharts')){
                    that.drawGraph('mecharts');
                }
                //console.log(that.placeList)
            })
            .catch(err=>{
                console.log(err)
                that.drawGraph('mecharts');
            })
        },
        chooseMapColor(num){
            this.mapColor=num;
            this.myChart.showLoading();
            this.getMapName(this.option.geo.map);
            this.myChart.hideLoading();
            this.myChart.setOption(this.option, true);
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.getPosition();
        })
    }

}
</script>
<style scoped>
.map{
    position: relative;
}
button.md-close.btn-sm.btn-primary {
    position: absolute;
    top: 0%;
    right: 50%;
    /* margin: auto; */
    /* display: inline; */
    /* text-align: center; */
}
#map1{
 position: fixed;
    top: 50px;
    left: 20px;
    cursor: pointer;
}
#map2{
 position: fixed;
    top: 50px;
    left: 75px;
    cursor: pointer;
}
</style>
