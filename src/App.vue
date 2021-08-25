<template>
  <vue-page-transition name="fade-in-left">
    <router-view />
  </vue-page-transition>  
</template>

<script>
export default {
  data(){
    return{
      slide: 0,
    }
  },
  mounted() {
    var route = this.$router.currentRoute.path;
    this.slide = route.substring(1);
    window.addEventListener("keydown", e => {
      if(e.key === "ArrowRight"){
        this.slide++;
        this.$router.push("/" + this.slide);
      }
      if(e.key === "ArrowLeft"){
        this.slide--;
        if(this.slide < 0) {this.slide = 0; return}
        this.$router.push("/" + this.slide);
      }
    });
  },
  computed:{
    getName(){
      return this.animations[this.slide];
    }
  }
}
</script>

<style>
*{
  user-select: none;
}
.slide{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
}
</style>