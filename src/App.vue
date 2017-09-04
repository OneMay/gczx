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
        <!-- <router-link :to="'/detail'">产品中心</router-link><router-view></router-view> -->
        <td>
            <a href="javascript:;" class="md-trigger btn btn-primary btn-sm" id="click" data-modal="modal-4">Show Me</a>
        </td>
        <div class="md-modal md-effect-4" id="modal-4">
            <div class="md-content">
                <detail v-model="productName" :choseName="productName"></detail>
                <button class="md-close btn-sm btn-primary">Close me!</button>
            </div>
        </div>
        <div class="md-overlay"></div>
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
                dataList.forEach(function(val,index){
                    var time =parseInt(val.measureTime)*1000; 
                    var measureTime=new Date(time);    
                    console.log(formatDate(measureTime));
                    console.log(val.measureItemData);
                })
            })
            .catch(err=>{
                console.log(err)
            })
        //     $.ajax({
        //     url:'api/1.0/ll/enterprise/environment/getAllMeasureData',
        //     type:'POST',
        //     contentType:'application/json',
        //     data:`{
        //       "traceCode":"9693256390009800000000010",
        //       "itemName":"Temperature",
        //       "measureTime":${timestamp},
        //       "baseNo":"BN001",
        //       "companyNo":2  
        //     }`,
        //     success:function(data){
        //         var db=JSON.parse(data)
        //         var dataList= db.contents.list;
        //         dataList.forEach(function(val,index){
        //             var time =parseInt(val.measureTime)*1000; 
        //             var measureTime=new Date(time);    
        //             console.log(formatDate(measureTime));
        //             console.log(val.measureItemData);
        //         })
        //       //console.log(db.contents.list);
        //     },
        //     err:function(err){
        //       console.log(err);
        //     }
        //   })
          
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
            function classReg(className) {
                return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
            }

            // classList support for class management
            // altho to be fair, the api sucks because it won't accept multiple classes at once
            var hasClass, addClass, removeClass;

            if ('classList' in document.documentElement) {
                hasClass = function (elem, c) {
                    return elem.classList.contains(c);
                };
                addClass = function (elem, c) {
                    elem.classList.add(c);
                };
                removeClass = function (elem, c) {
                    elem.classList.remove(c);
                };
            } else {
                hasClass = function (elem, c) {
                    return classReg(c).test(elem.className);
                };
                addClass = function (elem, c) {
                    if (!hasClass(elem, c)) {
                        elem.className = elem.className + ' ' + c;
                    }
                };
                removeClass = function (elem, c) {
                    elem.className = elem.className.replace(classReg(c), ' ');
                };
            }

            function toggleClass(elem, c) {
                var fn = hasClass(elem, c) ? removeClass : addClass;
                fn(elem, c);
            }

            var classie = {
                // full names
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                // short names
                has: hasClass,
                add: addClass,
                remove: removeClass,
                toggle: toggleClass
            };

            // transport
            if (typeof define === 'function' && define.amd) {
                // AMD
                define(classie);
            } else {
                // browser global
                window.classie = classie;
            }

            var ModalEffects = (function () {

                function init() {

                    var overlay = document.querySelector('.md-overlay');

                    [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
                        //alert(1111);
                        var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                            close = modal.querySelector('.md-close');

                        function removeModal(hasPerspective) {
                            classie.remove(modal, 'md-show');

                            if (hasPerspective) {
                                classie.remove(document.documentElement, 'md-perspective');
                            }
                        }

                        function removeModalHandler() {
                            removeModal(classie.has(el, 'md-setperspective'));
                        }

                        el.addEventListener('click', function (ev) {
                            // alert(ev);
                            // console.log(ev)
                            classie.add(modal, 'md-show');
                            overlay.removeEventListener('click', removeModalHandler);
                            overlay.addEventListener('click', removeModalHandler);

                            if (classie.has(el, 'md-setperspective')) {
                                setTimeout(function () {
                                    classie.add(document.documentElement, 'md-perspective');
                                }, 25);
                            }
                        });

                        close.addEventListener('click', function (ev) {
                            ev.stopPropagation();
                            removeModalHandler();
                        });

                    });

                }

                init();

            })();
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.start();
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
