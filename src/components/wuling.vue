<template>
    <div class="map">
       <div id="echarts" :style="{width:'1200px',height:'1000px',margin:'20px auto'}">
       
    </div> 
     <button class="md-close btn-sm btn-primary" @click="returnClick">返回</button>
     <span class="md-close btn-sm btn-primary" id="map1" @click="chooseMapColor(1)">主题1</span>
     <span class="md-close btn-sm btn-primary" id="map2" @click="chooseMapColor(2)">主题2</span>
     <div class="color">
         <span>湖北<span class="hubeicolor"></span></span><br>
        <span>重庆<span class="chongqingcolor"></span></span><br>
        <span>贵州<span class="guizhoucolor"></span></span><br>
        <span>湖南<span class="hunancolor"></span></span>
     </div>
    </div>
    
</template>

<script>
// import echarts from 'echarts'
// import './../../static/map/wulingshan/wulingshan.js'
// import './../../static/js/page/index.js'
import AXIOS from './../axios/axios'
const Axios = new AXIOS();
export default {
    name: 'wuling',
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
            cityList: ["恩施土家族苗族自治州", "恩施市", "鹤峰县"],
            hubei:['秭归县','长阳土家族自治县','五峰土家族自治县','利川市','恩施市','建始县','巴东县','宣恩县','来凤县','咸丰县','鹤峰县'],
            hunan:['北塔区','双清区','大祥区','龙山县','永顺县','保靖县','古丈县','花垣县','吉首市','泸溪县','凤凰县','沅陵县','鹤城区','中方县','辰溪县','溆浦县','会同县','麻阳苗族自治县','新晃侗族自治县','靖州苗族侗族自治县','芷江侗族自治县','通道侗族自治县','洪江市','武陵源区','慈利县','桑植县','永定区','新邵县','邵阳县','隆回县','洞口县','绥宁县','新宁县','城步苗族自治县','武冈市','石门县','安化县','新化县','涟源市','冷水江市'],
            chongqing:['酉阳土家族苗族自治县','黔江区','酉阳土家族自治县','秀山土家族苗族自治县','彭水苗族土家族自治县','武隆县','石柱土家族自治县','丰都县'],
            option: {
                title: {
                    text: '武陵山地区分布图',
                    left: 'left',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item'
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
                    map: '武陵山',
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
                    // width: '100%',
                    // height:'100%',
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#da750d'
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
                        name: '鹤峰县',
                        value: [110.1721, 29.84]
                    },{
                        name:'咸丰县',
                        value:[109.1500,29.6802]
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
        setData() {
        },
        chartClick(param) {
            this.myChart.setOption(this.option, true);
            var count;
            var that=this;
            var paramName=[];
            this.echartData.forEach((val,index)=>{
                paramName.push(val.name)
            })
            if (this.option.geo.map&&this.option.geo.map!=param.name&&paramName.indexOf(param.name)<0) {
                ++this.count;              
                this.name.push(this.option.geo.map);
                
            }
            count=this.count+1;
            if (count >2) {
                if (paramName.indexOf(param.name)>=0) {
                    this.getName=param.name;
                   var data={}
                   var paramName=param.name.toString();

                   var num=this.placeListArr.indexOf(paramName);
                   if(num>=0){
                     data.baseNo= this.placeList[num].baseNo;
                     data.companyNo=2;
                    data.baseName=this.placeList[num].baseName
                   }
                  window.open('/environment?'+data.baseNo+'&'+data.baseName);
                    return
                }
                if(count>=2){
                    this.num++;
                    if(this.num>2&&paramName.indexOf(param.name)<0){
                        this.msg.show='bmap';
                        this.msg.name=param.name;
                        this.msg.arr=this.name;
                        this.msg.from='wuling';
                        this.msg.mapColor=this.mapColor;
                        //alert(param.name)
                       this.$emit('tellToGeol',this.msg); 
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
            var NoteData=[];
            this.placeList.forEach(function(val,index){
                if(param.name==val.Note){
                    NoteData.push({
                        name:val.baseName,
                        value:[val.longitudePosition,val.latitudePosition]
                    })
                }
            })
             if(this.count>1){
                Object.assign(this.option.series[0], {
                    data: NoteData
                })
            }else{
                Object.assign(this.option.series[0], {
                    data: []
                })
            }
            this.myChart.hideLoading();
            // this.option.series[0].data.push({tooltip:{formatter:'{b}'}})
            this.myChart.setOption(this.option, true);
        },
        returnClick() {
            var that=this;
            this.myChart.showLoading();
            var n=this.count;
            this.count--;
            this.num=1;
            if (this.name.length > 0 ) {
                var i = this.name.length - 1;
                var path = this.name[i];
                this.option.title.text = path + "分布图"
                this.option.geo.map = path;
                this.name.length--;
                this.getMapName(path);
            }
            if (this.name.length <= 0) {
                this.name.length = 0;
                this.count = 1;
                this.option.title.text = "武陵山地区分布图"
                this.option.geo.map = '武陵山';
                this.getMapName('武陵山')
            
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '鹤峰县',
                        value: [110.1721, 29.84]
                    },{
                        name:'咸丰县',
                        value:[109.1500,29.6802]
                    }]
                })
            }
            var NoteData=[];
            this.placeList.forEach(function(val,index){
                if(that.option.geo.map==val.Note){
                    NoteData.push({
                        name:val.baseName,
                        value:[val.longitudePosition,val.latitudePosition]
                    })
                }
            })
            if(this.count>1){
                Object.assign(this.option.series[0], {
                    data: NoteData
                })
            }

            this.myChart.hideLoading();
            this.myChart.setOption(this.option);
        },
        getMapName(name) {
           this.mapName=[];
           var that = this;
           var mapNameObj=echarts.getMap(name).geoJson.features;
           mapNameObj.forEach(function(val,index){
               if(that.count>=1){
                    var head= document.getElementsByTagName('head')[0]; 
                    var script= document.createElement('script'); 
                    script.type= 'text/javascript'; 
                    script.src= `/static/map/js/${val.properties.name}.js`; 
                    head.appendChild(script); 
                }
               that.mapName.push(val.properties.name)
           })
           this.setMapColor(this.mapColor); 
        },
        setMapColor(num){
            this.option.geo.regions=[];
            var that = this;
            if(num==1){
                $('.hubeicolor')[0].style.backgroundColor='rgba(240,66,53,0.6)';
                $('.chongqingcolor')[0].style.backgroundColor='rgba(128,128,0,0.8)';
                $('.guizhoucolor')[0].style.backgroundColor='rgba(0,156,0,0.3)';
                $('.hunancolor')[0].style.backgroundColor='rgba(218,165,32,0.8)';
                this.option.geo.itemStyle.normal.areaColor='rgba(0,0,0,0.3)';
                this.mapName.forEach(function(val,index){
                    if(that.hubei.indexOf(val)>=0){
                        that.option.geo.regions.push({
                            name:val,
                            itemStyle: {
                                normal: {
                                // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                    areaColor:'rgba(240,66,53,0.6)',
                                    color: 'red',
                                    "borderColor": "#fff",
                                    "borderWidth": 0.5
                                }
                            }
                        })
                    }
                   else if(that.chongqing.indexOf(val)>=0){
                        that.option.geo.regions.push({
                            name:val,
                            itemStyle: {
                                normal: {
                                // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                    areaColor:'rgba(128,128,0,0.8)',
                                    color: 'red',
                                    "borderColor": "#fff",
                                    "borderWidth": 0.5
                                }
                            }
                        })
                    }
                    else if(that.hunan.indexOf(val)>=0){
                        that.option.geo.regions.push({
                            name:val,
                            itemStyle: {
                                normal: {
                                // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                    areaColor:'rgba(218,165,32,0.8)',
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
                                    areaColor:'rgba(0,156,0,0.3)',
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
                $('.hubeicolor')[0].style.backgroundColor='rgba(10, 115, 91, 0.8)';
                $('.chongqingcolor')[0].style.backgroundColor='rgba(128,128,0,0.8)';
                $('.guizhoucolor')[0].style.backgroundColor='rgba(3,169,244,0.8)';
                $('.hunancolor')[0].style.backgroundColor='rgba(23, 236, 217, 0.8)';
                this.mapName.forEach(function(val,index){
                    if(that.hubei.indexOf(val)>=0){
                        that.option.geo.regions.push({
                            name:val,
                            itemStyle: {
                                normal: {
                                // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                    areaColor:'rgba(10, 115, 91, 0.8)',
                                    color: 'red',
                                    "borderColor": "#fff",
                                    "borderWidth": 0.5
                                }
                            }
                        })
                    }
                   else if(that.chongqing.indexOf(val)>=0){
                        that.option.geo.regions.push({
                            name:val,
                            itemStyle: {
                                normal: {
                                // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                    areaColor:'rgba(128,128,0,0.8)',
                                    color: 'red',
                                    "borderColor": "#fff",
                                    "borderWidth": 0.5
                                }
                            }
                        })
                    }
                    else if(that.hunan.indexOf(val)>=0){
                        that.option.geo.regions.push({
                            name:val,
                            itemStyle: {
                                normal: {
                                // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                    areaColor:'rgba(23, 236, 217, 0.8)',
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
            this.myChart = echarts.init(document.getElementById('echarts'));
            this.myChart.showLoading();
            
            this.myChart.on("dblclick", this.chartClick);
            var node = document.getElementById('returnGeo');
            var node2 = document.getElementById('echarts');
            var that = this;

            if(this.setName.name){
                this.mapColor=this.setName.mapColor;     
                this.getMapName(this.setName.name);
                this.count=2;
                this.name=this.setName.map;
                this.option.geo.map = this.setName.name;
                 this.chartClick(this.setName)
                 this.setName.name='';     
            }else{
                this.getMapName('武陵山');
                //this.option.geo.map == '安徽'
                this.myChart.hideLoading();
                this.myChart.setOption(this.option);
            }
            
            

        },
         getPosition(){
             var that=this;
             $('body').removeClass('bodyJpg');
             $('body').addClass('bodyJpg');
            let params={
                api:'getPosition/api/1.0/ll/enterprise/environment/getModule',
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
                        Note:val.Note,
                       baseName:val.baseName,
                       baseNo:val.baseNo,
                       companyNo:2,
                       latitudePosition:val.latitudePosition,
                       longitudePosition:val.longitudePosition
                    })
                    that.placeListArr.push(val.baseName);
                })
                //alert( that.placeList)
                that.drawGraph('echarts');
                //console.log(that.placeList)
            })
            .catch(err=>{
                console.log(err)
                that.drawGraph('echarts');
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
.color {
    position: fixed;
    top: 110px;
    left: 25%;
}
.hubeicolor{
    display:inline-block ;
    width:20px;
    height:10px;
    margin-left: 5px;
    background-color: rgba(240,66,53,0.6)
}
.hunancolor{
    display:inline-block ;
    width:20px;
    height:10px;
    margin-left: 5px;
    background-color: rgba(218,165,32,0.8)
}
.chongqingcolor{
    display:inline-block ;
    width:20px;
    height:10px;
    margin-left: 5px;
    background-color: rgba(128,128,0,0.8)
}
.guizhoucolor{
    display:inline-block ;
    width:20px;
    height:10px;
    margin-left: 5px;
    background-color: rgba(0,156,0,0.3)
}
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
