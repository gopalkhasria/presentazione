<template>
    <div class="arrow arrow--left" @click="dec">
        <span style="margin-top: 5px;">Prev</span>
    </div>
</template>

<script>
export default {
  props:["dec"]
}
</script>

<style lang="scss">
.arrow {
  $size: 20px;
  $width: 4px;
  
  color: black;
  cursor: pointer;
  display: block;
  align-items: flex-start;
  text-transform: uppercase;
  position: relative;
  transition: transform 0.3s;
    
  span {
    display: block;
    width: 3em;
    opacity: 0;
    transition: opacity 0.3s 0s;
    padding: 0 0.5em;
  }
  
  &:hover span {
    opacity: 1;
    transition: opacity 0.3s 0.1s;
  }
  
  &:before {
    content: '';
    display: block;
    border: solid black;
    border-width: $width $width 0 0;
    position: absolute;
    top: 4px;
    width: $size;
    height: $size;
  }
  
  &.arrow--left:before {
    transform: rotate(-135deg);
    right: 0;
    transition: right 0.3s 0.2s;
  }
  &.arrow--left:hover:before {
    right: 100%;
    transition: right 0.3s;
  }
    
  &.arrow--right {
    text-align: right;
  }
  &.arrow--right:before {
    left: 0;
    transform: rotate(45deg);
    transition: left 0.3s 0.2s;
  }
  &.arrow--right:hover:before {
    left: 100%;
    transition: left 0.3s;
  }
  
  &:hover {
    transform: none;
  }
}
</style>