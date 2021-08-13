<template>
    <transition name="slide">
        <div class="slide">
        <div class="title">
            <span id="title"></span>
            <p class="blink" id="title-blink">|</p>
        </div>
        <div class="subtitle">
            <span id="subtitle"></span>
            <span id="adjective"></span>
            <p class="blink" id="subtitle-blink">|</p>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    name:"Slide1",
    data(){
        return{
            i: 0,
            title: 'Golang',
            subtitle: 'perchè ',
            adjective: ['amarlo', 'odiarlo'],
            speed: 150,
            timer: {},
        }
    },
    async mounted(){
        document.getElementById("title").innerHTML = "";
        document.getElementById("subtitle").innerHTML = "";
        document.getElementById('adjective').innerHTML = "";
        document.getElementById("title-blink").style.opacity = 1;
        document.getElementById("subtitle-blink").style.opacity = 0;
        await this.sleep(this.speed*4)
        for (let i = 0; i < this.title.length; i++){
            document.getElementById("title").innerHTML += this.title.charAt(i);
            await this.sleep(this.speed);
        }
        await this.sleep(this.speed+this.speed)
        document.getElementById("title-blink").style.opacity = 0;
        document.getElementById("subtitle-blink").style.opacity = 1;
        await this.sleep(this.speed)
        for (let i = 0; i < this.subtitle.length; i++){
            document.getElementById("subtitle").innerHTML += this.subtitle.charAt(i);
            await this.sleep(this.speed);
        }
        this.writeSubtitle();
    },
    methods:{
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        writeSubtitle(){
            let word = this.adjective[this.i].split("");
            this.loopTyping(word);
        },
        deleteSubtitle() {
            let word = this.adjective[this.i].split("");
            this.loopDeleting(word);
        },
        loopTyping(word){
            if (word.length > 0) {
                document.getElementById('adjective').innerHTML += word.shift();
            } else {
                this.sleep(1500).then(()=> {
                    this.deleteSubtitle();
                });
                return false;
            }
            this.sleep(this.speed).then(()=> {
                this.loopTyping(word)
            });
        },
        loopDeleting(word){
            if (word.length > 0) {
                word.pop();
                document.getElementById('adjective').innerHTML = word.join("");
            } else {
                if (this.adjective.length > (this.i + 1)) {
                    this.i++;
                } else {
                    this.i = 0;
                }
                this.sleep(this.speed).then(()=> {
                    this.writeSubtitle();
                });
                return false;
            }
            this.sleep(this.speed).then(()=> {
                this.loopDeleting(word)
            });
            //setTimeout(this.loopDeleting(word), 150);
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 100px;
    display: flex;
}

.subtitle{
    font-size: 50px;
    display: flex;
}

#subtitle{ margin-right: 0.5rem; }
#subtitle-blink { opacity: 0; }

.blink {
    animation: blink 0.5s infinite;
}
@keyframes blink{
    to { opacity: .0; }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>