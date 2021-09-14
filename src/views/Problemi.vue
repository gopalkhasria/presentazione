<template>
    <div class="slide">
        <div class="title" v-if="showTitle == 0 || showTitle == 2 || showTitle == 3">
            <span @click="hideShow(2)">Aggiunta di features ai linguaggi già esistenti</span>
            <transition name="slideRight" leave-active-class="slideLeft">
                <div style="margin-top: 2rem;" v-if="showTitle == 2" key="1">
                    <ul>
                        <li>Inserimento di nuove caratteristiche in linguaggi già funzionanti.</li>
                        <li>Un modo molto veloce ed economico.</li>
                    </ul>
                </div>
            </transition>
            <transition name="slideRight" leave-active-class="slideLeft">
                <span style="width: 100%; text-align: center" key="2" v-if="showTitle == 2"> Problema: esplosione delle features </span>
            </transition>
            <transition name="slideRight" leave-active-class="slideLeft">
                <div style="margin-top: 2rem; text-align: center;" v-if="showTitle == 2">
                        <span>Java</span>
                        <ul>
                            <li>Java SE 8 Update 121 (17-01-2017): 3 feature, 5 cambiamenti</li>
                            <li>Java SE 8 Update 141 (18-07-2017): altre feature, 3 cambiamenti</li>
                        </ul>
                </div>
            </transition>
            </div>
        <div class="title" v-if="showTitle == 0 || showTitle == 4" style="margin-top: 2rem;">
            <span @click=" hideShow(4) ">Costruzione di nuovi linguaggi (1990-2005)</span>
            <transition name="slideRight" leave-active-class="slideLeft">
                <div v-if="showTitle == 4" style="margin-top: 2rem; text-align: center; margin-bottom: 1.5rem;">
                    <span>linguaggi più moderni (lua, ruby, javascript ..) </span>
                    <div></div>
                    <span>molti buoni ma sono difficilmente scalabili e compilatori lenti ..</span>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name:"Problemi",
    data(){
        return{
            showTitle: 0,
        }
    },
    methods:{
        hideShow(number){
            if(this.showTitle == number){
                this.showTitle = 0;
            }else{
                this.showTitle = number;
            }
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