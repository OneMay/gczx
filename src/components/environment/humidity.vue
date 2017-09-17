<template>
    <div id="humidity" :style="{width:'1200px',height:'400px'}"></div>
</template>

<script>
    import echarts from 'echarts'
    import AXIOS from './../../axios/axios'
    const Axios = new AXIOS();
const url = 'http://localhost:8088/getenvironment';
    export default {
        name:'humidity',
        data(){
            return {
                option : {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                        
                    },
                    legend: {
                        data:[],
                        tooltip: {
                            show: false
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            /*dataZoom: {
                                yAxisIndex: 'none'
                            },*/
                            //dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {}
                            //saveAsImage: {}
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    },
                    series: []
                },
                today:{
                    year:'',
                    month:'',
                    day:''
                }

            }
        },
        props:['getenvir'],
        watch: {
            getenvir: {
                //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
                handler(curVal, oldVal) {
                    
                     this.setData(curVal.year, curVal.month,curVal.day,curVal.num);
                    //this.setData('2017', '08','01',7);
                    //setTimeout(this.setDate(curVal.year, curVal.month),0);
                },
                deep: true
            }

        },
        methods:{
            setData(year,month,day,num){
                var n=num;
                this.option.xAxis.data=[];
                var hour = this.getenvir.hours;
                this.myecharts.showLoading();
                if(num==0){
                    // if(year!=this.today.year||month!=this.today.month||day!=this.today.day)
                    // {
                    //     hour=23
                    // }
                    // while(hour>=0){
                    //     this.option.xAxis.data.push(hour+':00');
                    //     hour--;
                    // }
                    this.option.xAxis.data=[];
                    var date=year+'-'+month+'-'+day;
                    this.getData(date,1);
                }
                if(num==7){
                    while(num>0){
                        day=day-1;
                        if(day<=0){
                            month=month-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if(month<=0){
                            month=12;
                            year=year-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if (day < 10) {
                            day=parseInt(day);
                            day = '0' + day;
                        }
                        if (month < 10) {
                            month=parseInt(month);
                            month = '0' + month;
                        }
                        this.option.xAxis.data.push((year+'-'+month+'-'+day));
                        num--;
                    }
                    this.option.xAxis.data=this.option.xAxis.data.reverse();
                    var date = this.option.xAxis.data;
                    this.getData(date,7);
                }
                if(num==30){
                    while(num>0){
                        day=day-1;
                        if(day<=0){
                            month=month-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if(month<=0){
                            month=12;
                            year=year-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if (day < 10) {
                            day=parseInt(day);
                            day = '0' + day;
                        }
                        if (month < 10) {
                            month=parseInt(month);
                            month = '0' + month;
                        }
                        this.option.xAxis.data.push((year+'-'+month+'-'+day));
                        num--;
                    }
                    this.option.xAxis.data=this.option.xAxis.data.reverse();
                    var date = this.option.xAxis.data;
                    this.getData(date,30);
                }
                if(n==0){
                    this.option.title.text=(year+'-'+month+'-'+day+'湿度变化');
                }else{
                    this.option.title.text='最近'+n+'天湿度变化';
                }
                this.myecharts.hideLoading();
                this.myecharts.setOption(this.option, true);  
            },
            drawGraph(id) { 
                var query = location.search.substring(1);
            // var queryStr=query.replace(/=/g,':');
                var values= query.split("&");
                var data={
                    baseNo:values[0],
                    companyNo:2,
                    traceCode:values[1]
                }
                this.$store.dispatch('change',data);
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                this.today.day=day;
                this.today.year=year;
                this.today.month=month;
                this.myecharts = echarts.init(document.getElementById(id));
                this.getenvir.year=year;
                this.getenvir.month=month;
                this.getenvir.day=day;
                this.setData(year,month,day,7);
            },
        getData(dates,n){
            this.myecharts.showLoading();
            var postData=this.$store.getters.getData;
             var date = new Date();
            var year=date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            var dateString = year + "-" + month + "-" + day;
            var timestamp;
            if(n==1){
                var time =[dates]
                if(dateString==time[0]){
                     timestamp = Date.parse(new Date())/1000;
                }else{
                    var str=time[0]+' 08:00';
                    str = str.replace(/-/g,'/');
                    var date = new Date(str);
                    var time = date.getTime();
                    timestamp=time/1000;
                }
                let params={
                     api:url+'/api/1.0/ll/enterprise/environment/getAllMeasureData',
                    param:{
                        "traceCode":postData.traceCode,
                        "itemName":"humidity",
                        "measureTime":timestamp,
                        "baseNo":postData.baseNo,
                        "companyNo":2 
                    }
                }
                Axios.post(params)
                .then(res=>{
                    //console.log(res.data);
                    var data;
                    if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                        data=res.data;
                    }else{
                        data=JSON.parse(res.data)
                    }
                    this.myecharts.showLoading();
                    //console.log(data.temparatureInfo[0].staticTemperatureInfo.datas)
                    if(data.contents.list.length>0){
                        var dataList= data.contents.list;
                        var datas=[];
                        var hourTime=[]
                        dataList.forEach(function(val,index){
                            var time =parseInt(val.measureTime)*1000; 
                            var measureTime=new Date(time);    
                            //console.log(formatDate(measureTime));
                           // console.log(val.measureItemData);
                            datas.push(val.measureItemData)
                            hourTime.push(formatDate(measureTime));
                        })
                         function formatDate(now)   {     
                            var   year=now.getFullYear();     
                            var   month=now.getMonth()+1;     
                            var   date=now.getDate();     
                            var   hour=now.getHours();     
                            var   minute=now.getMinutes();     
                            var   second=now.getSeconds();
                            if (month < 10) {
                                month = '0' + month;
                            }
                            if (date < 10) {
                                date = '0' + date;
                            }
                            hour=hour+':00';     
                            return   hour;     
                        }
                        this.option.xAxis.data=hourTime;
                        this.option.legend.data=['湿度'];
                        this.option.series=[];
                        this.option.series=[{
                            name:'湿度',
                            type:'line',
                            data:datas,
                            markPoint:{
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                             },
                            markLine: {
                                silent:false,
                                label:{
                                    emphasis:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值',}
                                 ],
                                 animation:true
                            }
                        }]
                        this.myecharts.hideLoading();
                         this.myecharts.setOption(this.option, true);
                    }else{
                        this.option.legend.data=[];
                        this.option.series=[];
                        this.myecharts.showLoading({
                            text : '暂无24小时湿度数据',
                            effect : 'bubble',
                            textStyle : {
                                fontSize : 30
                            }
                        });
                        //this.myecharts.hideLoading();
                         this.myecharts.setOption(this.option, true);
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            }
            if(n==7||n==30){
                var postData=this.$store.getters.getData;
                var timestamp = Date.parse(new Date())/1000;
                let params={
                    api:url+'/api/1.0/ll/enterprise/environment/getMeasureDataByDays',
                    param:{
                        "traceCode":postData.traceCode,
                        "itemName":"humidity",
                        "measureTime":timestamp,
                        "baseNo":postData.baseNo,
                        "companyNo":2 ,
                        "days":n
                    }
                }
                Axios.post(params)
                .then(res=>{
                    //console.log(res.data);
                    var data;
                    if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                        data=res.data;
                    }else{
                        data=JSON.parse(res.data)
                    }
                     this.myecharts.showLoading();
                    //console.log(data)
                    var dataList=data.contents.list;
                    var MaxDatas=[],MinDatas=[],averageDatas=[];
                    dataList.forEach(function(val,index) {
                        MaxDatas.push(val.maxData);
                        MinDatas.push(val.minData);
                        averageDatas.push(val.avgData);
                    });
                    
                    this.option.legend.data=['湿度最大值','湿度平均值','湿度最小值']
                    this.option.series=[ {
                            name:'湿度最大值',
                            type:'line',
                            data:MaxDatas,
                            markPoint:{
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                             },
                            markLine: {
                                silent:false,
                                label:{
                                    normal:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值',}
                                 ],
                                 animation:true
                            }
                        },
                        {
                            name:'湿度平均值',
                            type:'line',
                            data:averageDatas,
                             itemStyle:{
                                normal:{
                                    color:'#4bce56',
                                }
                            },
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                silent:false,
                                label:{
                                    normal:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值'}
                                 ]
                            }
                        },
                        {
                            name:'湿度最小值',
                            type:'line',
                            data:MinDatas,
                            itemStyle:{
                                normal:{
                                    color:'#57c4de'
                                }
                            },
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                legend:['平均值'],
                                silent:false,
                                label:{
                                    normal:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值'}
                                 ]
                            }
                        }]
                        this.myecharts.hideLoading();
                         this.myecharts.setOption(this.option, true);  
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
        },
        mounted() {  
            this.$nextTick(function() {  
               setTimeout( this.drawGraph('humidity'),2000);
            })  
        }
    }
</script>
<style>
span{
    margin-bottom: 0px !important;
}
</style>
