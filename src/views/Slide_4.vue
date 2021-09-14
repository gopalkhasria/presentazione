<template>
  <div>
    <div class="wrapper">
      <section v-if="showBtn" @click="showBtn = false">
        <a href="#" class="testing" data-text="BUY TICKETS"
          >Cosa non mi piace di go</a
        >
      </section>
      <div class="cards" v-else>
        <ArrowRight :dec="decrement"/>
            <transition leave-active-class="" name="rotateDownRight">
              <Young v-if="canShow(1)" />
            </transition>
            <transition leave-active-class="" name="lightSpeed">
              <Binaries v-if="canShow(2)" />
            </transition>
            <transition leave-active-class="" name="fadeLeft">
              <Generics v-if="canShow(3)" />
            </transition>
        <ArrowLeft :inc="increment"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "@/components/ArrowRight.vue"
import ArrowLeft from "@/components/ArrowLeft.vue"
import Young from "@/components/slide4/Young.vue"
import Binaries from "@/components/slide4/Binaries.vue"
import Generics from "@/components/slide4/Generics.vue"
export default {
  name: "Slide4",
  components:{
    ArrowRight, ArrowLeft, Young, Binaries, Generics,
  },
  data(){
      return{
          showBtn: true,
          counter: 1,
      }
  },
  methods:{
    canShow(count){
      var res = false
      this.counter == count ? res = true : res = false;
      return res;
    },
    increment(){ if(this.counter < 3){ this.counter++;} },
    decrement(){ if(this.counter > 1){ this.counter--;} }
  }
};
</script>

<style lang="scss" scoped>

.wrapper{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-content: center;
}

section{
    display: flex;
    align-items: center;
}

a {
  display: block;
  color: white;
  text-decoration: none;
}

.testing {
  display: block;
  position: relative;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 30px;
  font-size: 0.75em;
  letter-spacing: 0.35em;
  text-align: center;
  text-transform: uppercase;
  background-color: #000;
  border: 1px solid black;
  transition: all 0.2s ease;
  margin: 0 auto;

  &:before,
  &:after {
    content: "BUY TICKETS";
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px 0;
    width: 100%;
    -webkit-clip: rect(0px, 0px, 0px, 0px);
    clip: rect(0px, 0px, 0px, 0px);
    background: green;
    color: #000;
  }

  &:before {
    left: -3px;
    top: -2px;
    text-shadow: 2px 0 #fff;
    box-shadow: 2px 0 #fff;
  }

  &:after {
    left: 2px;
    bottom: -2px;
    text-shadow: -1px 0 #fff;
    box-shadow: -1px 0 #fff;
  }

  &:hover {
    background: white;
    color: black;
  }

  &:hover:before {
    animation: glitch-test 1.5s infinite linear alternate-reverse;
  }

  &:hover:after {
    animation: glitch-test 2s infinite linear alternate;
  }
}

@keyframes glitch-test {
  0% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  5.88235% {
    clip: rect(0px, 600px, 0px, 0px);
  }
  11.76471% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  17.64706% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  23.52941% {
    clip: rect(100px, 600px, 100px, 0px);
  }
  29.41176% {
    clip: rect(0px, 600px, 600px, 0px);
  }
  35.29412% {
    clip: rect(100px, 600px, 0px, 0px);
  }
  41.17647% {
    clip: rect(0px, 600px, 600px, 0px);
  }
  47.05882% {
    clip: rect(100px, 600px, 0px, 0px);
  }
  52.94118% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  58.82353% {
    clip: rect(100px, 450px, 100px, 0px);
  }
  64.70588% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  70.58824% {
    clip: rect(100px, 450px, 100px, 0px);
  }
  76.47059% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  82.35294% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  88.23529% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  94.11765% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  100% {
    clip: rect(0px, 450px, 0px, 0px);
  }
}

.cards{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

</style>
