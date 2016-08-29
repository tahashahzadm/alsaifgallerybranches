function initWindowScrollEvent(){window.addEventListener("scroll",function(){scrollUpBtn.btnShowFunction(),mainContent.bringBackNormalColor()})}function scrollTiming(a){window.scrollY*(a/(document.body.scrollHeight-document.body.clientHeight))}function changeHeader(a){window.location.href=a}var currentYPos=null,locationData={nearestBranch:null,userCoordinates:null,showNearBranch:function(){var a=document.querySelector('[data-coordinates="'+this.nearestBranch[2]+'"]');alert(a.children[0].innerHTML)},getHandler:function(){var a=document.querySelector(".nearestBranchHandler");a.addEventListener("click",function(){locationData.getUserPosition()})},coordinates:[],getUserPosition:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.successCallBack,this.errorCallBack,{enableHighAccuracy:!0})},errorCallBack:function(){alert("Sorry, no position available.")},successCallBack:function(a){locationData.calculateNearestBranch(a,locationData.coordinates)},calculateNearestBranch:function(a,b){this.userCoordinates=a;var e,f,g,h,i,k,c=this.userCoordinates.coords.latitude,d=this.userCoordinates.coords.longitude;b.forEach(function(a,b,j){e=a[0],f=a[1],g=e-c,h=f-d,i=Math.sqrt(g*g)+h*h,0==b?k=[i,b,e+","+f]:i<k[0]&&(k=[i,b,e+","+f])}),this.nearestBranch=k,locationData.showNearBranch()}},mainContent={jsonData:contentData,childSelected:null,container:document.querySelector(".content_container"),fadeColor:function(){this.container.classList.add("inside_opacity_half")},bringBackNormalColor:function(){(window.scrollY>currentYPos||window.scrollY<currentYPos)&&null!=currentYPos&&(this.container.classList.remove("inside_opacity_half"),this.toggleNormalColorChild(),currentYPos=null,childSelected=null)},toggleNormalColorChild:function(a){this.childSelected.classList.toggle("opacity_full")}};mainContent.viewableContent=function(a){var b="";for(var c in a){var d="";for(var e in a[c]){var f='<div class="city_branch_title" ><h3 class="branch_title all_zero ">'+a[c][e].arabicName+"</h3></div>",g="";for(var h in a[c][e].branches){var i="فرع "+a[c][e].branches[h].cityName,j=a[c][e].branches[h].add,k="0"+a[c][e].branches[h].phone,l=a[c][e].branches[h].lat,m=a[c][e].branches[h].long;g+='<div class="city_branch_container" data-coordinates="'+l+","+m+'"><h3 class="branch_content_name all_zero font_weight_300">'+i+'</h3><h3 class="branch_content_add all_zero font_weight_300">'+j+'</h3><h3 class="branch_content_phone all_zero font_weight_300 "><a class="brach_content_call_link" href="tel:'+k+'" dir="ltr">'+k+"</a></h3></div>",locationData.coordinates.push([l,m])}f+='<div class="city_branch_container_wrapper ">'+g+"</div>";var o='<div class="city_branch_outer_container" id="'+e+'">'+f+"</div>";d+=o}b+=d}return b};var cityNavigate={areaBtn:[].slice.call(document.querySelectorAll(".area_list")[0].children),currentCityList:null,cityListContainer:document.querySelector(".city_list"),cityList:[],activeAreaBtn:null,areaBtnClickEv:function(a){this.areaBtn.forEach(a)},areaBtnClickFunc:function(a,b,c){a.addEventListener("click",function(){cityNavigate.toggleAreaListAtiveBtn(a),cityNavigate.createCityList({btnElement:a,btnIndex:b}),cityNavigate.currentCityList=[].slice.call(cityNavigate.cityListContainer.children),cityNavigate.cityListBtnClick(cityNavigate.cityListBtnClickFunc)})},cityListBtnClick:function(a){this.currentCityList.forEach(a)},cityListBtnClickFunc:function(a,b,c){a.addEventListener("click",function(){cityNavigate.branchSelect({ele:a,index:b})})},branchSelect:function(a){cityNavigate.showCityBranch(a),mainContent.fadeColor(),mainContent.toggleNormalColorChild()},showCityBranch:function(a){var b;b=a.hash?a.hash:"#"+a.ele.dataset.city,changeHeader(b),ele=document.querySelector(b),mainContent.childSelected=ele,currentYPos=window.scrollY},createCityList:function(a){if(null==this.cityList[a.btnIndex]){var b="",c=a.btnElement.dataset.area,d=mainContent.jsonData[c];for(var e in d)b+='<li class="area_name" data-city="'+e+'">'+d[e].arabicName+"</li>";this.cityList[a.btnIndex]=b}this.cityListContainer.innerHTML=this.cityList[a.btnIndex]},toggleAreaListAtiveBtn:function(a){a.parentElement.classList.remove("area_list_normal_color"),null!=this.activeAreaBtn&&this.activeAreaBtn.classList.toggle("active_area_btn"),a.classList.toggle("active_area_btn"),this.activeAreaBtn=a}},scrollUpBtn={affectHeight:document.querySelector("#wrapper").clientHeight,btnEle:document.querySelector(".go_up_btn_container"),btnState:!1,btnShowFunction:function(){window.scrollY>=this.affectHeight&&0==this.btnState?(this.btnEle.classList.remove("display_none"),this.btnState=!0):window.scrollY<this.affectHeight&&1==this.btnState&&(this.btnEle.classList.add("display_none"),this.btnState=!1)}};window.onload=function(){""!=location.hash&&cityNavigate.branchSelect({hash:location.hash})},$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},scrollTiming(500)),!1}})}),function(){mainContent.container.insertAdjacentHTML("beforeend",mainContent.viewableContent(mainContent.jsonData)),initWindowScrollEvent(),cityNavigate.areaBtnClickEv(cityNavigate.areaBtnClickFunc),locationData.getHandler()}(),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-83247063-1","auto"),ga("send","pageview");
