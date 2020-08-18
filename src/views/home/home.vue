 <style lang="less" scoped>
.px-rem(@name, @px) {
  @{name}: @px / 75 * 1rem;
}
// 元素外围
.w(@width) {
  .px-rem(width, @width);
}
.h(@height) {
  .px-rem(height, @height);
}
.w-h(@width,@height) {
  .px-rem(width, @width);
  .px-rem(height, @height);
}

.w100 {
  width: 100%;
}
.b-radius(@b-radius) {
  .px-rem(border-radius, @b-radius);
}
.border-w(@width) {
  .px-rem(border-width, @width);
}
.fz(@fz) {
  .px-rem(font-size, @fz);
}
.pl(@pl) {
  .px-rem(padding-left, @pl);
}
.pr(@pr) {
  .px-rem(padding-right, @pr);
}
.pt(@pt) {
  .px-rem(padding-top, @pt);
}
.pb(@pb) {
  .px-rem(padding-bottom, @pb);
}
.ml(@ml) {
  .px-rem(margin-left, @ml);
}
.mr(@mr) {
  .px-rem(margin-right, @mr);
}
.mt(@mt) {
  .px-rem(margin-top, @mt);
}
.mb(@mb) {
  .px-rem(margin-bottom, @mb);
}
.ml(@ml) {
  .px-rem(margin-left, @ml);
}
.mr(@mr) {
  .px-rem(margin-right, @mr);
}
.mt(@mt) {
  .px-rem(margin-top, @mt);
}
.mb(@mb) {
  .px-rem(margin-bottom, @mb);
}
.l-height(@l-height){.px-rem(line-height,@l-height)}
.top(@top){.px-rem(top,@top);}
.right(@right){.px-rem(right,@right);}
.bottom(@bottom){.px-rem(bottom,@bottom);}
.left(@left){.px-rem(left,@left);}
.flex{display:flex;}
  .flex-inline{display: inline-flex;}
  .flex-between {justify-content:space-between;}
  .flex-around {justify-content:space-around;}
  .flex-start{justify-content:flex-start;}
  .flex-end{justify-content:flex-end;}
  .item-center{align-items:center;}
  .item-end{align-items:flex-end;}
  .flex-center {justify-content:center;}
  .flex-wrap{flex-wrap: wrap;}
  .flex1 {flex:1;}
  .flexbetween { .flex; .flex-between;}
.ceping {
  text-align: center;
   width: 100%;
    height: 100vh;
    background: url('../../assets/image/com-bg.png') top center no-repeat;
    overflow: hidden;
    background-size: 100% 100%;
  & > div {
    position:absolute;
    text-align: center;
    width: 100%;
    height: 100vh;
    // background: url('../../assets/image/com-bg.png') top center no-repeat;
    overflow: hidden;
    // background-size: 100% 100%;
    top:0;
    overflow-y: hidden;
    overflow: hidden;
  }
}
// .index,
// .selected {
//   // button {
//   //   display: inline-block;
//   //   font-size: 30px;
//   //   outline: none;
//   //   background: transparent;
//   //   margin-top: 400px;
//   // }
// }
.ceping_name {
  a,
  label

  label {
    margin-top: 30px;
  }
}

.offer {
  width: 100%;
  height: 100vh;
 img {height: 100vh;}
  position: absolute;
  z-index: 999;
}
.index {

  .index1 {
    .w(706);
    display: inline-block;
    .mt(139);
  }
  .index2 {
    .w(570);
     display: inline-block;
     .mt(20);
  }
  .index3 {
    .w(750);
    .mt(35);
  }
  .indexBtn {
    .w-h(287,80);
    margin:0 auto;
    border:0.02666666666666667rem #fff solid;
    .b-radius(10);
     position: fixed;
    left:50%;
    .ml(-143.5);
    .bottom(57);
    .fz(37);
    color: #333;background: #fff;
  }
  .indexBtn:hover {
    background:#3a3fff;
    color: #fff;
  }
}
.selected {
 background: url('http://m.bj.wdzxx.com/ceping/selected3.png') top center no-repeat!important;
background-size: cover!important;
 .selected1 {
   .w(591);
   .mt(145);
   .mb(34);
 }
 .selected2 {
   width: 10rem;
 }
 .selected_btn {
   .w(720);
   margin:0 auto;
   button {
       .w-h(287,80); .fz(37);
       color: #3a3fff;
       background: #fff;  .b-radius(10);
         border:0.02666666666666667rem #fff solid;
         font-weight: 400;
   }

   button:hover {
     background: #3a3fff;
     color: #fff; border:0.02666666666666667rem #fff solid;
   }
 }
}
 .ceping_name {

    .ceping_name1 {
      margin:0 auto;
      .mt(160);
      .w(582);
    }
    .nicheng {
      color: #fff;
      .fz(40);
      .pt(60);
    }
    label {
      .w(540);
      margin:0 auto;
      display: block;
      .mt(80);
      .h(76);
      background: #fff;
     .b-radius(10);
     text-align: left;
      input {
        background: transparent;
        border:none;
        .pl(42);
        .w(500);
        .fz(28);
      .h(76);
      }
      ::-webkit-input-placeholder {
          color: #c6c6c6;
      }
    }
    .nameBtn {
      .w-h(204,65);
      background: #c6c6c6;
      .fz(28);
      color: #fff; .b-radius(10);
      border:none;
      .mt(80);
      transition:all .4s;
&.active{
  background: #3a3fff;
}
    }
 }
 .goHome {
   z-index:999;
    .w(60);
   img {
     .w(60);
   }
   position: absolute;
   .top(-35);
   .left(15);
 }
 .tips {
  width: auto!important;
  height: auto!important;
  left: 50%;
  .ml(-130);
  padding: 0.2rem;
  background: rgba(0, 0, 0, 0.6)!important;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  .mt(-20);
  .fz(24);
top: 52%!important;
    position: fixed!important;
    letter-spacing: .01rem;
    z-index: 999;
}
.comStyle > div:first-child {
.mt(286);
h2 {
  .fz(40);
  color: #fff;
  .pb(90);
}
button {
  .h(80);
  background: #fff;
  .b-radius(10);
  margin:0 auto;
  .mb(30);
  display: block;
  border:none;
  .fz(30);
  color: #ccc;
  .w(338);
  &:hover {
  background: #3a3fff;
  color: #fff;
  }
}
}
.two_topic,.eight_topic {
  h2 {
    .l-height(70)
  }
}
.three_topic {
  button {
   .w(710)!important;
  }
  h2 {
    .l-height(80)

  }
}
.four_topic {
  div:first-child {
    .mt(200)
  }
}
.seven_topic {
    div:first-child {
    .mt(190);
     button {
   .w(400)!important;
  }
  }
}
.eight_topic {
    div:first-child {
     button {
   .w(670)!important;
  }
  }
}
.nine_topic {
    div:first-child {
     button {
   .w(720)!important;
     .fz(30);
  }
  }
}
.haibao {

  .btn {
 position:absolute;.bottom(50);

    .w(598);
    left: 50%;
 margin:0 auto;
    .ml(-299);
    .flexbetween;
    button {
      .w-h(238,60);
      background: #fff;
      border:none;
      .b-radius(10);
      color: #2a2a2a;
      .fz(30);

    }
  }
  .goHome {
    .top(15);
  }
}
.offer_style {
  position: absolute;
      width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
/deep/.guonei_offer {

   position:absolute;
}
  // .left(109);
 /deep/ h3,/deep/ p {
    color: #535353;
    .fz(29.8);
    text-align: left;
  }
  /deep/ h3 + p {
    text-indent: .8rem;
    .pt(20);
  }
  /deep/p {
    width: 7.1rem;
    .l-height(52);
  }
  /deep/p:first-child {
    text-indent: .5rem;
  }
  /deep/.sc,/deep/.ti{
    text-align: right!important;
  }
  /deep/.sc {
    .pt(15);
  }
  /deep/.guowai_offer {
position: absolute;
.top(320);
text-align: center;
span{color: #000;}
p {text-align: left!important;text-indent:0;.l-height(40);.fz(24)!important;.w(560);.ml(-10);}
}
}
.showHaibaoImg,.haibao_cont,.offer_style + div {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
 button {
     transition: all .4s;
   }
  .offerBg {
    // height: 100vh;
    width: 100%;
  }
  .imgss {
    height: 100vh;
  }
  .return {
    width: 0.8rem;
    display: block;
    position: absolute;
    left:.2rem;
    top:.2rem;

    img {
     width: 0.8rem;
    display: block;
    }
  }
  .animate__fadeInLeft {
    -webkit-animation-name: fadeInLeft!important;
    animation-name: fadeInLeft!important;
}
 
</style>
<template>
  <div class="ceping">
    <!-- 初始模块 -->
    <div
      ref="INDEX"
      v-if="show.INDEX"
      class="index animate__animated"
      :class="{animate__fadeOutLeft: indexHide}"
    >
    <img class="index1 animate__animated animate__bounce" src="../../assets/image/index1.png">
    <img class="index2 animate__animated animate__fadeInLeft" src="../../assets/image/index2.png">
    <img class="index3 animate__animated animate__bounceInUp" src="../../assets/image/index3.png">
    <button class="indexBtn animate__animated animate__bounceInUp" @click="indexBtn($event)">进入测试</button>
    </div>
    <!-- 测试选择学校模块-->
    <div
      ref="selected"
      v-if="show.selected"
      class="selected animate__animated animate__fadeInRight"
      :class="{animate__fadeOutLeft: selectedHide}"
    >
     <img src="../../assets/image/selected1.png" class="selected1 animate__animated animate__bounceInDown">
     <img src="../../assets/image/selected2.png" class="selected2 animate__animated animate__bounceInUp">
      <p class="selected_btn flex flexbetween">
        <button @click="guonei_school" class="animate__animated animate__fadeInLeft">国内大学</button>
        <button @click="haiwai_school" class="animate__animated animate__fadeInRight">海外名校</button>
      </p>
    </div>
    <!--测试姓名-->
    <div
      ref="cepingName"
      v-if="show.cepingName"
      class="ceping_name animate__animated animate__fadeInRight"
      :class="{animate__fadeOutLeft: cepingNameHide,animate__fadeInLeft: cepingNameShow}"
    >
       <a @click="reloadPage" class="goHome"><img src="../../assets/image/goHome.png"></a>
     <img class="ceping_name1 animate__animated animate__bounceInDown" src="../../assets/image/cepingname1.png">
     <p class="nicheng animate__animated animate__bounceInUp"></p>
      <div class="animate__animated animate__bounceInUp">
        <label for="姓名">
          <input v-model="personMsg.name" type="text" :placeholder="personMsg.nameTip" />
        </label>
        <button @click="nameBtn" class="nameBtn" :class="{active:isActive}">开始测试</button>
      </div>
    </div>

    <!-- 第一题 -->
    <div ref="oneTopic"
         v-show="show.oneTopic"
         class="one_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: oneTopicHide,
           animate__fadeOutRight: oneTopicHide1,
           animate__fadeInLeft: oneTopicShow
           }"
         >
      <div v-for="(one,index) in ones" :key="one.id">
        <h2>{{ one.tit }}</h2>
        <div>
          <button v-for="(oneX,index) in one.oneXs" :key="oneX.id" @click="oneNext">{{ oneX.tit }}</button>
        </div>
      </div>
        <i class="return animate__animated animate__fadeIn"
         @click="oneTopicHide1 = true;
         show.cepingname = true;
         cepingNameShow = true;
         show.oneTopic =false"><img src="../../assets/image/return.png"></i>
    </div>
    <!-- 第二题 -->
    <div ref="twoTopic" v-if="show.twoTopic"
        class="two_topic animate__animated animate__fadeInRight comStyle"
        :class="{
          animate__fadeOutLeft: twoTopicHide,
          animate__fadeOutRight: twoTopicHide1,
          animate__fadeInLeft: twoTopicShow
          }">

      <div v-for="(two,index) in twos" :key="two.id">
        <h2>{{ two.tit }}</h2>
        <div>
          <button
            v-for="(twoX,index1) in two.twoXs"
            :key="twoX.id"
            @click="twoNext(index1)"
          >{{ twoX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn"
        @click="twoTopicHide1 = true;
        show.oneTopic = true;
        oneTopicShow = true;
        show.twoTopic = false"><img src="../../assets/image/return.png"></i>

    </div>
    <!-- 第三题 -->
    <div ref="threeTopic" v-if="show.threeTopic"
         class="three_topic animate__animated animate__fadeInRight comStyle"
        :class="{
          animate__fadeOutLeft: threeTopicHide,
           animate__fadeOutRight: threeTopicHide1,
          animate__fadeInLeft: threeTopicShow
          }">

      <div v-for="(three,index) in threes" :key="three.id">
        <h2>{{ three.tit }}</h2>
        <div>
          <button
            v-for="(threeX,index1) in three.threeXs"
            :key="threeX.id"
            @click="threeNext(index1)"
          >{{ threeX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       twoTopicShow = true;
       show.threeTopic = false;
       show.twoTopic = true;
       threeTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
    <!-- 第四题 -->
    <div ref="fourTopic" v-if="show.fourTopic"
         class="four_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: fourTopicHide,
          animate__fadeOutRight: fourTopicHide1,
          animate__fadeInLeft: fourTopicShow
           
           }">
      <div v-for="(four,index) in fours" :key="four.id">
        <h2>{{ four.tit }}</h2>
        <div>
          <button
            v-for="(fourX,index1) in four.fourXs"
            :key="fourX.id"
            @click="fourNext(index1)"
          >{{ fourX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       threeTopicShow = true;
       show.fourTopic = false;
       show.threeTopic = true;
       fourTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
   
    <!-- 第五题 -->
    <div ref="fiveTopic" v-if="show.fiveTopic"
         class="five_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: fiveTopicHide,
           animate__fadeOutRight: fiveTopicHide1,
           animate__fadeInLeft: fiveTopicShow
           }">
      <div v-for="(five,index) in fives" :key="five.id">
        <h2>{{ five.tit }}</h2>
        <div>
          <button
            v-for="(fiveX,index1) in five.fiveXs"
            :key="fiveX.id"
            @click="fiveNext(index1)"
          >{{ fiveX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       fourTopicShow = true;
       show.fiveTopic = false;
       show.fourTopic = true;
       fiveTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
    <!-- 第六题 -->
    <div ref="sixTopic" v-if="show.sixTopic"
         class="six_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: sixTopicHide,
           animate__fadeOutRight: sixTopicHide1,
           animate__fadeInLeft: sixTopicShow
           }">
      <div v-for="(six,index) in sixs" :key="six.id">
        <h2>{{ six.tit }}</h2>
        <div>
          <button
            v-for="(sixX,index1) in six.sixXs"
            :key="sixX.id"
            @click="sixNext(index1)"
          >{{ sixX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       fiveTopicShow = true;
       show.sixTopic = false;
       show.fiveTopic = true;
       sixTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
    <!-- 第七题 -->
    <div ref="sevenTopic" v-if="show.sevenTopic"
         class="seven_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: sevenTopicHide,
           animate__fadeOutRight: sevenTopicHide1,
           animate__fadeInLeft: sevenTopicShow
           }">
      <div v-for="(seven,index) in sevens" :key="seven.id">
        <h2>{{ seven.tit }}</h2>
        <div>
          <button
            v-for="(sevenX,index1) in seven.sevenXs"
            :key="sevenX.id"
            @click="sevenNext(index1)"
          >{{ sevenX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       sixTopicShow = true;
       show.sevenTopic = false;
       show.sixTopic = true;
       sevenTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
    <!-- 第八题 -->
    <div ref="eightTopic" v-if="show.eightTopic"
         class="eight_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: eightTopicHide,
            animate__fadeOutRight:eightTopicHide1,
            animate__fadeInLeft:eightTopicShow
           }">
      <div v-for="(eight,index) in eights" :key="eight.id">
        <h2>{{ eight.tit }}</h2>
        <div>
          <button
            v-for="(eightX,index1) in eight.eightXs"
            :key="eightX.id"
            @click="eightNext(index1)"
          >{{ eightX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       sevenTopicShow = true;
       show.eightTopic = false;
       show.sevenTopic = true;
       eightTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
    <!-- 第九题 -->
    <div ref="nineTopic" v-if="show.nineTopic"
         class="nine_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: nineTopicHide,
           animate__fadeOutRight :nineTopicHide1,
           animate__fadeInLeft: nineTopicShow
           }">
      <div v-for="(nine,index) in nines" :key="nine.id">
        <h2>{{ nine.tit }}</h2>
        <div>
          <button
            v-for="(nineX,index1) in nine.nineXs"
            :key="nineX.id"
            @click="nineNext(index1)"
          >{{ nineX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       eightTopicShow = true;
       show.nineTopic = false;
       show.eightTopic = true;
       nineTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
    <!-- 第十题 -->
    <div ref="tenTopic" v-if="show.tenTopic"
         class="ten_topic animate__animated animate__fadeInRight comStyle"
         :class="{
           animate__fadeOutLeft: tenTopicHide,
           animate__fadeOutRight: tenTopicHide1,
           animate__fadeInLeft: tenTopicShow
           }">
      <div v-for="(ten,index) in tens" :key="ten.id">
        <h2>{{ ten.tit }}</h2>
        <div>
          <button
            v-for="(tenX,index1) in ten.tenXs"
            :key="tenX.id"
            @click.prevent="tenNext(index1)"
          >{{ tenX.tit }}</button>
        </div>
      </div>
       <i class="return animate__animated animate__fadeIn" @click="
       nineTopicShow = true;
       show.tenTopic = false;
       show.nineTopic = true;
       tenTopicHide1 = true"><img src="../../assets/image/return.png"></i>
    </div>
    <div ref="offer" v-show="show.offer" class="offer"><img width="100%" src="../../assets/image/offer_ing.gif"></div>
    <div ref="haibao" class="haibao" id="haibao" style="height:auto;opacity:0;z-index:-1">
      <a @click="reloadPage" class="goHome" v-show="lastGohome"><img src="../../assets/image/goHome.png"></a>

        <div id="haibaoCont" class="haibao_cont" style="height:auto!important">
          <div v-html="haibao_guonei" class="offer_style"></div>
          <div><img :src="offerBg" class="offerBg imgss" width="100%"></div>
        </div>

      <div id="showHaibaoImg" class="showHaibaoImg" style="position:absolute;top:0;">
        <img :src="imgss" width="100%" height="100%">
      </div>
     <div class="btn" v-show="saveImgBtn">
        <button @click="reloadPage">再测一次</button>
        <button @click="tipShowHanlder('长按图片保存分享')">保存海报</button>
         <!-- <button @click="bc">保存海报</button> -->

     </div>
      <!-- <button @click="tipShowHanlder('长按图片保存分享')">分享</button> -->
    </div>
    <!-- 提示 -->
    <div class="tips" v-show="tipShow">{{ tipTxt }}</div>
  </div>
</template>
<script>
import animate from "animate.css"
// import Mock from '@/mock/index'
// import domtoimage from "dom-to-image"
// import { getList } from "@/api/ceping"
import html2canvas from 'html2canvas'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      saveImgBtn: true,
      lastGohome: true,
      imgss:'',
  // 切换模块动画左滑动效
        indexHide: false,
        selectedHide:false,
        cepingNameHide: false,
        oneTopicHide: false, //一题
        twoTopicHide: false,
        threeTopicHide: false,
        fourTopicHide: false,
        fiveTopicHide: false,
        sixTopicHide: false,
        sevenTopicHide: false,
        eightTopicHide: false,
        nineTopicHide: false,
        tenTopicHide: false, //十题

// 返回上一页面动画
        cepingNameShow: false,
        cepingNameHide1:true,
        oneTopicShow:false,
        oneTopicHide1:false,
        twoTopicShow:false,
        twoTopicHide1:false,
        threeTopicShow:false,
        threeTopicHide1:false,
        fourTopicShow:false,
        fourTopicHide1:false,
        fiveTopicShow:false,
        fiveTopicHide1:false,
        sixTopicShow:false,
        sixTopicHide1:false,
        sevenTopicShow:false,
        sevenTopicHide1:false,
        eightTopicShow:false,
        eightTopicHide1:false,
        nineTopicShow:false,
        nineTopicHide1:false,
        tenTopicShow:false,
        tenTopicHide1:false,

 // 选项标记
      publicParams: {
        selectedSchool: 0, //默认为选择国内大学0，海外名校为1
        nameREg: /^[\u4E00-\u9FA5]{1,6}$/,
        nameREg1: /^[a-z]*$/i //英文名正则
      },
      isActive:false,
      personMsg: {
        name: "",
        nameTip: "请输入你的中文姓名"
      },
      tipShow: false,
      tipTxt: "请输入正确格式的中文姓名", //表单提示
      imgUrl: '../../assets/image/',

 // 全部模块-显示或隐藏
      show: {
        INDEX: true,
        selected: false,
        cepingName: false,
        oneTopic: false, //一题
        twoTopic: false,
        threeTopic: false,
        fourTopic: false,
        fiveTopic: false,
        sixTopic: false,
        sevenTopic: false,
        eightTopic: false,
        nineTopic: false,
        tenTopic: false, //十题
        offer: false,
        haibao: true
      },
      //  题目模块
      timuModule: ['ones','twos','threes','fours','fives','sixs','sevens','eights','nines','tens'],
      // 题目内容
      // |__
            //  第一题
      ones: [
        {
          tit: "你的性格属于哪种类型？",
          oneXs: [
            {
              tit: "内向"
            },
            {
              tit: "外向"
            },
            {
              tit: "中性"
            }
          ]
        }
      ],
      //  第二题
      twos: [
        {
          tit: "毕业旅行，你希望的目的地人文环境？",
          twoXs: [
            {
              tit: "粗犷大气",
              des: "meiguo"
            },
            {
              tit: "自然优雅",
              des: "yingguo"
            },
            {
              tit: "科技新潮",
              des: "jianada"
            },
            {
              tit: "滨海风情",
              des: "aozhou"
            }
          ],
          // 国外标识
          guowaiMark: ""
        }
      ],
      //  第三题
      threes: [
        {
          tit: "班级组织毕业旅行，通常我最可能负责？",
          threeXs: [
            {
              tit: "策划旅游行程和景点，接洽旅行社或酒店"
            },
            {
              tit: "研究当地特色美食，订好每天吃什么"
            },
            {
              tit: "收集费用"
            }
          ]
        }
      ],

      //  第四题
      fours: [
        {
          tit: "你的兴趣爱好是什么？",
          fourXs: [
            {
              tit: "听歌唱歌"
            },
            {
              tit: "上网、打游戏"
            },
            {
              tit: "画画"
            },
            {
              tit: "看小说"
            },
            {
              tit: "运动"
            },
            {
              tit: "其他"
            }
          ]
        }
      ],
      //  第五题
      fives: [
        {
          tit: "在班级活动中你扮演的角色是？",
          fiveXs: [
            {
              tit: "决策者"
            },
            {
              tit: "策划者"
            },
            {
              tit: "多向沟通者"
            },
            {
              tit: "执行者"
            }
          ]
        }
      ],
      //  第六题
      sixs: [
        {
          tit: "在家休息，你会看哪部剧",
          sixXs: [
            {
              tit: "老友记"
            },
            {
              tit: "生活大爆炸"
            },
            {
              tit: "唐顿庄园  "
            },
            {
              tit: "绝命毒师"
            },
            {
              tit: "权力的游戏"
            }
          ]
        }
      ],
      //  第七题
      sevens: [
        {
          tit: "您在选择学校时所考虑的主要因素是什么",
          sevenXs: [
            {
              tit: "气候条件"
            },
            {
              tit: "较高的学术水平"
            },
            {
              tit: "风俗习惯"
            },
            {
              tit: "优越的基础教学设施"
            },
            {
              tit: "历史和文化"
            },
            {
              tit: "生活费用"
            },
            {
              tit: "其他"
            }
          ]
        }
      ],
      //  第八题
      eights: [
        {
          tit: "我小时候经常把家里闹钟拆开，想看个究竟",
          eightXs: [
            {
              tit: "是，还能原封不动装回去"
            },
            {
              tit: "是，然而复原之后总会剩下几个零件"
            },
            {
              tit: "否，没想过"
            }
          ]
        }
      ],
      //  第九题
      nines: [
        {
          tit: "玩狼人杀的时候我的通常状态是？",
          nineXs: [
            {
              tit: "处于主导地位的老司机，经常死于话多/太会玩"
            },
            {
              tit: "慢热型，发挥时好时坏，自己做坏人时会有点紧张"
            },
            {
              tit: "深藏功与名的幕后黑手，一脸单纯，却总能赢到最后"
            }
          ]
        }
      ],
      // 第十题

      tens: [
        {
          tit: "外出游玩，你会去哪？",
          tenXs: [
            {
              tit: "科技馆",
              zy: "理工类",
              zy1: "Science and Engineering",
              school: "清华大学",
              school0: "MIT", //美国-麻省理工
              school1: "Oxford", //英国-牛津
              school2: "UofT", //加拿大-多伦多
              school3: "USYD", //澳大利亚-悉尼
              // oferr图片国内
              school0_bg: require('../../assets/image/school0_bg.png'),
              // oferr图片国外
              school0_0_bg: require('../../assets/image/school0_bg_MIT.png'),
              school1_0_bg: require('../../assets/image/school0_bg_niujin.png'),
              school2_0_bg: require('../../assets/image/school0_bg_duolunduo.png'),
              school3_0_bg: require('../../assets/image/school0_bg_xini.png')

            },
            {
              tit: "游乐场",
              zy: "管理类",
              zy1: "Management",
              school: "交通大学",
              school0: "Harvard", //美国-哈弗
              school1: "Cambridge", //英国-剑桥
              school2: "uOttawa", //加拿大-渥太华
              school3: "USYD", //澳大利亚-悉尼
              school1_bg: require('../../assets/image/school1_bg.png'),

              school0_0_bg: require('../../assets/image/school0_bg_hafu.png'),
              school1_0_bg: require('../../assets/image/school0_bg_jianqiao.png'),
              school2_0_bg: require('../../assets/image/school0_bg_wotaihua.png'),
              school3_0_bg: require('../../assets/image/school0_bg_xini.png')
            },
            {
              tit: "电影院",
              zy: "艺术类",
              zy1: "Arts",
              school: "复旦大学",
              school0: "Berklee", //美国-伯克利音乐
              school1: "UAL", //英国-伦敦艺术
              school2: "UofT", //加拿大-多伦多
              school3: "UNSW", //澳大利亚-新南威尔士
              school2_bg: require('../../assets/image/school2_bg.png'),

              school0_0_bg: require('../../assets/image/school0_bg_bokeli.png'),
              school1_0_bg: require('../../assets/image/school0_bg_lundongArt.png'),
              school2_0_bg: require('../../assets/image/school0_bg_duolunduo.png'),
              school3_0_bg: require('../../assets/image/school0_bg_xinnan.png')
            },
            {
              tit: "图书馆",
              zy: "文化类",
              zy1: "Culture",
              school: "北京大学",
              school0: "Yale", //美国-耶鲁
              school1: "Oxford", //英国-牛津
              school2: "UofT", //加拿大-多伦多
              school3: "UNSW", //澳大利亚-新南威尔士
              school3_bg: require('../../assets/image/school3_bg.png'),

              school0_0_bg: require('../../assets/image/school0_bg_yelu.png'),
              school1_0_bg: require('../../assets/image/school0_bg_niujin.png'),
              school2_0_bg: require('../../assets/image/school0_bg_duolunduo.png'),
              school3_0_bg: require('../../assets/image/school0_bg_xinnan.png')
            }
          ]
        }
      ],
      // 生成的offer信息
      offerMsg: {
        name: '',
        school: '',
        zy: ''
      },
      //国内(外)offer
      haibao_guonei: ``,
      offerBg: ''
    };
  },
  watch: {
    'personMsg.name': {
      handler(val) {
        let _this = this
        function publicRegs(reg, x, y) {
        reg.exec(x) && _this.personMsg.name.length > y
          ? (_this.isActive = true)
          : (_this.isActive = false)
      }

      if (_this.publicParams.selectedSchool == 0) {
        publicRegs(
          _this.publicParams.nameREg,
          val,
          1
        )
      } else {
        publicRegs(
           _this.publicParams.nameREg1,
           val,
           2
        )
      }
      }
    }
  },
  methods: {
    tipShowHanlder(m) {
      this.tipTxt = m;
      this.tipShow = true
      setTimeout(() => {
        this.tipShow = false
      }, 1500);
    },
    //  =========================模块切换集合=====================
    indexBtn() {
      //初始模块
      this.show.selected = true
      // this.show.INDEX = false
      this.indexHide = true
    },
    // 测试选择学校模块
    //--国内
    guonei_school() {
      // this.show.selected = false
      this.selectedHide = true
      this.show.cepingName = true
      this.publicParams.selectedSchool = 0
      this.personMsg.name = ""
      this.personMsg.nameTip = '请输入你的中文姓名'
    },
    //--国外
    haiwai_school() {
      this.selectedHide = true
      this.show.cepingName = true
      this.publicParams.selectedSchool = 1
      this.personMsg.name = ""
      this.personMsg.nameTip = '请输入你的英文名字'
    },
    nameBtn() {
      //开始测试
      let _this = this;
      function publicRegs(reg, x, y, m) {
        reg.exec(x) && _this.personMsg.name.length > y
          ? ((_this.cepingNameHide = true), (_this.show.oneTopic = true))
          : _this.tipShowHanlder(m)
      }

      if (_this.publicParams.selectedSchool == 0) {
        publicRegs(
          _this.publicParams.nameREg,
          _this.personMsg.name,
          1,
          _this.tipTxt,
          "请输入正确格式的中文姓名"
        )
        _this.personMsg.nameTip = '请输入你的中文姓名'
      } else {
        publicRegs(
          _this.publicParams.nameREg1,
          _this.personMsg.name,
          2,
          "请输入你的英文名字"
        )
        _this.personMsg.nameTip = '请输入你的英文名字'
      }
      this.oneTopicHide1 = false
      this.cepingNameShow = false
    },

    goINDEX() {
      this.show.INDEX = true
      this.selectedHide = false
      this.show.cepingName = false

    },
    // 第一题
    oneNext() {
      this.oneTopicHide = true
      this.show.twoTopic = true
      this.oneTopicShow = false
      this.twoTopicHide1 = false

    },
    // 第二题
    twoNext(index1) {
      this.twoTopicHide = true
      if (this.publicParams.selectedSchool == 1) {
        this.twos[0].guowaiMark = this.twos[0].twoXs[index1].des
      }
      this.show.threeTopic = true
      this.twoTopicShow = false
      this.threeTopicHide1 = false
      console.log(this.twos[0].guowaiMark)
    },
    // 第三题
    threeNext() {
      this.threeTopicHide = true
      this.show.fourTopic = true
      this.threeTopicShow = false
      this.fourTopicHide1 = false
    },
    // 第四题
    fourNext() {
      this.fourTopicHide = true
      this.show.fiveTopic = true
       this.fourTopicShow = false
      this.fiveTopicHide1 = false
      
    },
    // 第五题
    fiveNext() {
      this.fiveTopicHide = true
      this.show.sixTopic = true
       this.fiveTopicShow = false
      this.sixTopicHide1 = false
    },
    // 第六题
    sixNext() {
      this.sixTopicHide = true
      this.show.sevenTopic = true
       this.sixTopicShow = false
      this.sevenTopicHide1 = false
    },
    // 第七题
    sevenNext() {
      this.sevenTopicHide = true
      this.show.eightTopic = true
      this.sevenTopicShow = false
      this.eightTopicHide1 = false
    },
    // 第八题
    eightNext() {
      this.eightTopicHide = true
      this.show.nineTopic = true
       this.eightTopicShow = false
      this.nineTopicHide1 = false
    },
    // 第九题
    nineNext() {
      this.nineTopicHide = true
      this.show.tenTopic = true
       this.nineTopicShow = false
      this.tenTopicHide1 = false
    },
    // 第十题e
    tenNext(index1) {
      let _this = this
      let guowaiMark = this.twos[0].guowaiMark
      let tenXsMsg = this.tens[0].tenXs
      this.offerMsg.name = this.personMsg.name //获取英文姓名
      // 国内学校信息生成项
      {
        this.offerMsg.school = tenXsMsg[index1].school
        this.offerMsg.zy = tenXsMsg[index1].zy
         this.offerBg = tenXsMsg[index1]['school' + index1 + '_bg']
      }

      // 国外学校信息生成项
      {
        this.twos[0].twoXs.map((x, x_index) => {
          schoolHandler(x.des, x_index);
        });
        function schoolHandler(schoolName, x_index) {
          if (guowaiMark == schoolName) {
            //获取学校及专业
            switch (index1) {
              case index1:
                (_this.offerMsg.school = tenXsMsg[index1]['school' + x_index]),
                  (_this.offerMsg.zy = tenXsMsg[index1]['zy1']),
                  (_this.offerBg = tenXsMsg[index1]['school' + x_index + '_0_bg'])
                   break
            }
          }
        }
      }
      console.log(_this.offerMsg)
      // 获取系统日期
    function getNowFormatDate () {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let strDate = date.getDate()
        if (month >= 1 && month <= 9) {
            month = "0" + month
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate
        }
        let currentdate = year + '年' + month + '月' + strDate + '日'
        if (_this.publicParams.selectedSchool == 1) {
           currentdate = strDate + '.' + month + '.' + year
        }
        return currentdate
    }

      //  填入海报信息
      this.show.haibao = true
      setTimeout(() => {
        if (_this.publicParams.selectedSchool == 0) {
          this.haibao_guonei = `
      <div class="guonei_offer"> <h3>${this.offerMsg.name}&nbsp;同学 :</h3>
       <p>录取你入我校&nbsp;${this.offerMsg.zy}&nbsp;专业学习，请凭本通知书来校报道，具体时间、地点见《新生入学须知》。</p>
        <p class="sc">${this.offerMsg.school}</p>
        <p class="ti">${getNowFormatDate()}</p></div>
     `
         } else {
           this.haibao_guonei = `
           <div class="guowai_offer">
            <p>
            Dear <span>${this.offerMsg.name}</span><br>
            Congratulations! <br>
            We are delighted to offer you admission to<br>
            <span>${this.offerMsg.school}</span>.This offer of admission reflects<br>
            our extremely high opinion of your past<br>
            accomplishments and your future promise as a<br>
            scholar.<br>
            Below you will find your admission offer details.
            Major: <span>${this.offerMsg.zy}</span><br>
            Academic Year: <span>${getNowFormatDate()}</span><br>
            Degree: <span>Master</span><br>
            We hope you will accept our offer of admission and
            become a part of the community of scholars at<br>
            <span>${this.offerMsg.school}</span>.<br>
            Cordially yours，<br>
            Dean of the Graduate School</p>
     </div>
     `
        }
      }, 1200)

      this.show.tenTopic = false
      this.show.offer = true
       new Promise(function (resolve,reject) {
        if(_this.show.offer) {
          resolve()
           haibao.style = "opacity:1;z-index:1"
        }
      }).then((res) => {
          setTimeout(() => {
            _this.createHaibao()
      }, 3000)
      }).then(() => {  //解决低版本安卓不能及时显示
         setTimeout(() => {
        _this.show.offer = false
    // haibaoCont.style.display="none"
      }, 4000)

      })

    },
    createHaibao() { //生成海报
    let _this = this
      let node = document.getElementById("haibaoCont")
      let showHaibaoImg = document.getElementById("showHaibaoImg")
      	html2canvas(node).then((canvas) => {
				var imgsrc = canvas.toDataURL("image/png")
          // showHaibaoImg.innerHTML = '<img class="show" style="width: 100%;height: auto;" src="' + imgsrc + '" />';
          _this.imgss = imgsrc
			})
      setTimeout(() => {
        // haibaoCont.style.opacity = "0"
      }, 400)
    },
    reloadPage() {//再次测试（重置页面）
      location.reload()
    }
  },
  mounted() {
    let _this = this
    this.$nextTick(function () {
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false)
    // document.getElementById('showHaibaoImg').addEventListener('touchend', function (e) {
    //   _this.saveImgBtn = false
    //   _this.lastGohome = false
    //  setTimeout(() => { //解决ios xs 显示海报异常
    //   _this.saveImgBtn = true
    //   _this.lastGohome = true
    //  },1900)
    //  }, false)
    })
  }
}
</script>
