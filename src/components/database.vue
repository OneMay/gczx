﻿<template>
    <div class='center'  :style="{height:height+'px'}">
        <div class="clearfix" :style="{width:'1203px'}">
            <div class="environment">
                <div class="charts">
                    <h2 class="tea-Data" v-text="placeName">环境数据</h2>
                    <ul class="nav nav-tabs" id="chartOne" role="tablist">
                        <li role="presentation">
                            <button class="btn" :class="classObj" @click="chartOne(1)">温度</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj2" @click="chartOne(2)">湿度</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj3" @click="chartOne(3)">降雨量</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj4" @click="chartOne(4)">土壤湿度</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj5" @click="chartOne(5)">风速风向</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj6" @click="chartOne(6)">PM2.5</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj7" @click="chartOne(7)">光照强度</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj8" @click="chartOne(8)">气压</button>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="Temperature">
                            <div class="form-horizontal horizon1">
                                <label class="control-label col-sm-2">查询时间</label>
                                <div class="col-sm-3">
                                    <!-- <input name="datel" type="date" value="2016-05-29"> -->
                                    <input type="date" name="datel" class="form-control" id="temperatureDom" :value="setDate" min="2015-04-01" :max="setDate">
                                </div>
                                <button type="button" class="btn btn-danger btn-xs horizon2"  @click="setItDay(0)">查询</button>
                            </div>
                            <div class="addbtn col-md-offset-9 horizon3">
                                <button type="button" class="btn btn-danger btn-xs" @click="setDay(0)">当天</button>
                                <button type="button" class="btn btn-danger btn-xs" @click="setDay(7)">最近7天</button>
                                <button type="button" class="btn btn-danger btn-xs" @click="setDay(30)">最近30天</button>
                            </div>
                         
                                <temperature v-if="show=='temperature'" key="temperature" :getenvir="envirDate"></temperature>
                                <humidity v-if="show=='humidity'" key="humidity" :getenvir="envirDate"></humidity>
                                <rain v-if="show=='rain'" key="rain" :getenvir="envirDate"></rain>
                                <soilMoisture v-if="show=='soilMoisture'" key="soilMoisture" :getenvir="envirDate"></soilMoisture>
                                <windspeed v-if="show=='windspeed'" key="windspeed" :getenvir="envirDate"></windspeed>
                                <PM v-if="show=='PM'" key="PM" :getenvir="envirDate"></PM>
                                <beam v-if="show=='beam'" key="beam" :getenvir="envirDate"></beam>
                                <pressure v-if="show=='pressure'" key="pressure" :getenvir="envirDate"></pressure>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './../../static/css/lib/bootstrap.css'
import temperature from './environment/temperature'
import humidity from './environment/humidity'
import rain from './environment/rain'
import soilMoisture from './environment/soilMoisture'
import windspeed from './environment/windspeed'
import PM from './environment/PM'
import beam from './environment/beam'
import pressure from './environment/pressure'
import echarts from 'echarts'
import 'echarts/map/js/china.js';


export default {
    name: 'database',
    data() {
        return {
            height: window.innerHeight,
            Url: './../../static/axios/dataImg.json',
            width: document.body.clientWidth - 18,
            setDate: '',
            teaDate:'',
            itemDate:{
                year:'',
                month:''
            },
            envirDate:{
                year:'',
                month:'',
                day:'',
                num:null,
                hours:''
            },
            classObj: {
                'btn-danger': false,
                'btn-success': true
            },
            classObj2: {
                'btn-danger': true,
                'btn-success': true
            },
            classObj3: {
                'btn-danger': true,
                'btn-success': true
            },
            classObj4: {
                'btn-danger': true,
                'btn-success': true
            },
            classObj5: {
                'btn-danger': true,
                'btn-success': true
            },
            classObj6: {
                'btn-danger': true,
                'btn-success': true
            },
            classObj7: {
                'btn-danger': true,
                'btn-success': true
            },
            classObj8: {
                'btn-danger': true,
                'btn-success': true
            },
            show: 'temperature',
            getDOM:null,
            placeName:""
        }
    },
    methods: {
        getTeaDate(){
            var getDom = document.getElementById('teaDom');
            var getDate = getDom.value;
            var reg = /(\d{4})-(.+)/g;
            var partDate = getDate.split(reg);
            this.itemDate.year=partDate[1];
            this.itemDate.month=partDate[2];
            //console.log(this.itemDate)
            //this.$emit('getItem',this.itemDate)
        },
        setItDay(num){
            var getDom = document.getElementById('temperatureDom').value;
            var reg = /(\d{4})-(.{2})-(.+)/g;
            var partDate = getDom.split(reg);
            this.envirDate.year=partDate[1];
            this.envirDate.month=partDate[2];
            this.envirDate.day=partDate[3];
            this.envirDate.num=num;
        },
        chartOne(index) {
            this.setDay(7);
            if (index == 1) {
                this.show = 'temperature';
                this.classObj['btn-danger'] = false;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
                this.classObj4['btn-danger'] = true;
                this.classObj5['btn-danger'] = true;
                this.classObj6['btn-danger'] = true;
                this.classObj7['btn-danger'] = true;
                this.classObj8['btn-danger'] = true;
            }
            if (index == 2) {
                this.show = 'humidity';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = false;
                this.classObj3['btn-danger'] = true;
                this.classObj4['btn-danger'] = true;
                this.classObj5['btn-danger'] = true;
                this.classObj6['btn-danger'] = true;
                this.classObj7['btn-danger'] = true;
                this.classObj8['btn-danger'] = true;
            }
            if (index == 3) {
                this.show = 'rain';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = false;
                this.classObj4['btn-danger'] = true;
                this.classObj5['btn-danger'] = true;
                this.classObj6['btn-danger'] = true;
                this.classObj7['btn-danger'] = true;
                this.classObj8['btn-danger'] = true;
            }
            if (index == 4) {
                this.show = 'soilMoisture';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
                this.classObj4['btn-danger'] = false;
                this.classObj5['btn-danger'] = true;
                this.classObj6['btn-danger'] = true;
                this.classObj7['btn-danger'] = true;
                this.classObj8['btn-danger'] = true;
            }
            if (index == 5) {
                this.show = 'windspeed';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
                this.classObj4['btn-danger'] = true;
                this.classObj5['btn-danger'] = false;
                this.classObj6['btn-danger'] = true;
                this.classObj7['btn-danger'] = true;
                this.classObj8['btn-danger'] = true;
            }
            if (index == 6) {
                this.show = 'PM';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
                this.classObj4['btn-danger'] = true;
                this.classObj5['btn-danger'] = true;
                this.classObj6['btn-danger'] = false;
                this.classObj7['btn-danger'] = true;
                this.classObj8['btn-danger'] = true;
            }
            if (index == 7) {
                this.show = 'beam';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
                this.classObj4['btn-danger'] = true;
                this.classObj5['btn-danger'] = true;
                this.classObj6['btn-danger'] = true;
                this.classObj7['btn-danger'] = false;
                this.classObj8['btn-danger'] = true;
            }
            if (index == 8) {
                this.show = 'pressure';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
                this.classObj4['btn-danger'] = true;
                this.classObj5['btn-danger'] = true;
                this.classObj6['btn-danger'] = true;
                this.classObj7['btn-danger'] = true;
                this.classObj8['btn-danger'] = false;
            }
        },
        setDay(num) {
            var date = new Date();
            var year=date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var teamonth=month-1;
            if (month < 10) {
                month = '0' + month;
            }
            if(teamonth==0){
                teamonth=12;
                year=year-1;
            }
            if (teamonth < 10) {
                teamonth = '0' + teamonth;
            }
            if (day < 10) {
                day = '0' + day;
            }
            var dateString = date.getFullYear() + "-" + month + "-" + day;
            var teaDay=date.getFullYear() + "-" + teamonth;
            var strTMonth=teamonth.toString();
            var strEMonth=month.toString();
            this.setDate = dateString;
            //this.teaDate=teaDay;
            //this.itemDate.year=year.toString();
           // this.itemDate.month=strTMonth;
            this.envirDate.year=year.toString();
            this.envirDate.month=strEMonth;
            this.envirDate.day=day.toString();
            this.envirDate.num=num;
            this.envirDate.hours=hour;
        },
        getDates() {
            //alert(window.location.hash);
            //console.log(this.$store.getters.getData);
            var that=this;
            $('body').removeClass('bodyJpg');
            function set(){
                var query = decodeURI(location.search.substring(1));
                // var queryStr=query.replace(/=/g,':');
                    var values= query.split("&");
                    var data={
                        baseNo:values[0],
                        companyNo:2,
                        baseName:values[1]
                    }
                    that.$store.dispatch('change',data);
                var positionData=that.$store.getters.getData;
        
                that.placeName=values[1]+'环境数据';
            }
            set();
            
            var date = new Date();
            var year=date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour=date.getHours();
            var teamonth=month-1;
            if (month < 10) {
                month = '0' + month;
            }
            if(teamonth==0){
                teamonth=12;
                year=year-1;
            }
            if (teamonth < 10) {
                teamonth = '0' + teamonth;
            }
            if (day < 10) {
                day = '0' + day;
            }
            var dateString = date.getFullYear() + "-" + month + "-" + day;
            var teaDay=date.getFullYear() + "-" + teamonth;
            var strTMonth=teamonth.toString();
            var strEMonth=month.toString();
            this.setDate = dateString;
            this.teaDate=teaDay;
            this.itemDate.year=year.toString();
            this.itemDate.month=strTMonth;
            this.envirDate.year=year.toString();
            this.envirDate.month=strEMonth;
            this.envirDate.day=day.toString();
            this.envirDate.num=7;
            this.envirDate.hours=hour;
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.getDates();
        })
    },
    components: {
        temperature,
        humidity,
        rain,
        soilMoisture,
        windspeed,
        PM,
        beam,
        pressure
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/** 可以设置不同的进入和离开动画 */
.center{
    display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:center;
  align-items:center;
}

/* 设置持续时间和动画函数 */

.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

.environment {
    clear: both;
}

.form-horizontal.horizon1 {
    margin-top: 0.8em;
    margin-left: 20em;
}

.horizon3 {
    margin-top: -1.5rem;
}

button.btn.btn-danger.btn-xs.horizon2 {
    margin-top: 5px;
}

.charts {
    border: 1px solid #ddd;
}

.environment {
    margin: 35px auto;
}
.tab-content {
    margin-top: 20px;
}
.tea-Data{
    text-align:center;
    border-bottom:1px solid #ddd;
    margin: 20px;
    padding:10px;
}
.clearfix{
    /* position: relative;
    left: 50%;
    margin-left: -601.5px;
    /*bottom: 30px;*/
}
</style>
