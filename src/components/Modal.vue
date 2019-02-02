<template>
  <div :class="open ? 'modal open' : 'modal'">
    <div class="modal-content">
      <slot></slot>
    </div>
    <div @click="handleClose" class="modal-back"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    open: Boolean,
    handleClose: Function
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  padding: 25px;
  z-index: 100;
  
  &.open {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  &-content {
    display: flex;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;

    & > * {
      width: 100%;
      max-width: 75vw;
      height: 100%;
      max-height: 75vh;
    }
  }

  &-back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: rgba(0,0,0,0.8);
    z-index: 100;
  }
}
</style>