<template>
    <div class="slide">
        <div class="title">
            <span>Linguaggio  di programmazione</span>
        </div>
        <div class="property .flip-2-hor-top-1">
            <div>
                <img src="../assets/images/open-source.svg" alt="simple">
                <span>OPEN SOURCE</span>
            </div>
            <div>
                <img src="../assets/images/reliable.svg" alt="simple">
                <span>COMPATTO</span>
            </div>
            <div>
                <img src="../assets/images/simple.svg" alt="affidabile">
                <span>COMPRENSIBILE</span>
            </div>
            <div>
                <img src="../assets/images/efficent.svg" alt="efficent">
                <span>VELOCE</span>
            </div>
        </div>
        <transition name="fade">
            <div class="history" v-if="history">
                <history :increment="increment" v-if="state == '1'" :close="close"/>
                <companies :decrement="decrement" v-if="state == '2'" :close="close"/>
            </div>
        </transition>
        <div class="question" @click="history = !history" v-if="!history">
            <img src="../assets/images/question.svg" alt="question" width="50px">
        </div>
    </div>
</template>

<script>
import Companies from '../components/Companies.vue';
import History from '../components/History.vue'
export default {
  components: { History, Companies },
    name:"Slide2",
    data(){
        return{
            history: false,
            state: 1,
        }
    },
    methods:{
        increment(){
            this.state++;
        },
        decrement(){
            this.state--;
        },
        close(){
            this.history = this.history = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 2.5rem;
}

.property{
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 60%;
    font-size: 2rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            max-width: 180px;
            min-height: 180px;
        }
    }
}

.question{
    position: absolute;
    top: 0;
    left: 0%;
    margin-top: 20px;
    margin-inline-start: 95%;
    background-color: transparent !important;
}

.history{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(31,32,41,.75);
}
fade-enter-active, .fade-leave-active {
  transition: opacity cubic-bezier(0.165, 0.84, 0.44, 1)s;
}
</style>