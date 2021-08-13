<template>
  <transition name="fade">
    <div class="home"></div>  
  </transition>
</template>

<style lang="scss" scoped>
.home{
  height: 100vh;
  background-color: black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>
