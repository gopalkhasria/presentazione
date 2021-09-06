<template>
  <transition name="fade">
    <div class="home">
      <img src="../assets/images/main.png" alt="main" height="100%">  
    </div>  
  </transition>
</template>

<style lang="scss" scoped>
.home{
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>
