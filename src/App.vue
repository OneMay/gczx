<template>
    <div id="app">
        <div id="nav">
            <button class="md-close btn-sm btn-primary" @click="choseNav(1)">中国地图</button>
            <button class="md-close btn-sm btn-primary" @click="choseNav(2)">武陵山片区地图</button>
        </div>
        <div id="returnGeo">
            <geo v-on:tellToName="getProductName" v-on:tellToGeo="getToGeo" v-if="show=='geo'" :setName="name"></geo>
            <bmap  v-on:tellToBmap="getToBmap" v-if="show=='bmap'"></bmap>
            <wuling v-if="show=='wuling'" v-on:tellToNamel="getProductName" v-on:tellToGeol="getToGeo" :setName="name"></wuling>
        </div>

<router-view></router-view>
    </div>
</template>

<script>
import geo from './components/geo'
import detail from './components/the-product'
import bmap from './components/bmap'
import wuling from './components/wuling'
import './../static/css/lib/bootstrap.css'
import './../static/css/lib/component.css'
//import './../../static/js/lib/modalEffects.js'
import AXIOS from './axios/axios'
const Axios = new AXIOS();
export default {
    name: 'app',
    data() {
        return {
            width: '100%',
            productName:'',
            show:'geo',
            name:{
                name:'',
                map:[],
                from:''
            },
            toName:{
                name:'',
                map:[],
                from:''
            }
        }
    },
    methods: {
        choseNav(num){
            if(num==1){
                this.show='geo';
            }else{
                this.show='wuling'
            }
        },
        getProductName(msg){
            this.productName=msg;
            //console.log( this.productName);
        },
        getToGeo(msg){
            //alert(msg);
            //console.log(msg)
            this.show=msg.show;
            this.toName.name=msg.name;
             this.toName.map=msg.arr;
             this.toName.from=msg.from;
        },
        getToBmap(msg){
            //alert(msg);
            this.name.name=this.toName.name;
             this.name.map=this.toName.map;
             this.name.from=this.toName.from;
            this.toName.name='';
            this.toName.map=[];
            this.toName.from='';
            if(this.name.from=='geo'){
                this.show='geo';
            }else{
                this.show='wuling';
            }
            
        },
        start() {
        function getEnviromentData(){
            var timestamp = Date.parse(new Date())/1000;
            let params={
                api:'http://localhost:8088/api/1.0/ll/enterprise/environment/getAllMeasureData',
                param:{
                    "traceCode":"9693256390009800000000010",
                    "itemName":"Temperature",
                    "measureTime":timestamp,
                    "baseNo":"BN001",
                    "companyNo":2 
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
                console.log(res.data)
                // dataList.forEach(function(val,index){
                //     var time =parseInt(val.measureTime)*1000; 
                //     var measureTime=new Date(time);    
                //     console.log(formatDate(measureTime));
                //     console.log(val.measureItemData);
                // })
            })
            .catch(err=>{
                console.log(err)
            })    
        }
        getEnviromentData();
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
            return   year+"-"+month+"-"+date+"   "+hour;     
        }
        //setInterval(getEnviromentData,5000);
        },
        getPosition(){
            if(window.location.pathname=="/environment"){
                this.show='environment';
                document.getElementById('nav').style.display="none";
            }
           this.start();
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.getPosition();
        })
    },
    components: {
        geo,
        detail,
        bmap,
        wuling
    }

}
</script>

<style>
.canvas {
    height: 300px;
}
#nav{
    position:fixed;
    top:0;
    left: 50%;
    right:-50%;
}
#returnGeo{
    margin-top:75px;
}
#click {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
</style>
