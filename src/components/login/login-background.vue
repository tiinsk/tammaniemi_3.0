<template>
  <div class="login-background">
    <div class="overlay"></div>
    <div class="login-box" :style="{width, height}">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    height: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.login-background {
  background-image: url('../../assets/images/login.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;

    background: rgba(39, 54, 84, 0.2);
  }
  .login-box {
    max-height: 90%;
    max-width: 90%;
    background: inherit;
    position: relative;

    overflow: hidden;

    &:before{
      content: ' ';
      background: inherit;
      position: absolute;
      left: -25px;
      right: -25px;
      top: -25px;
      bottom: -25px;
      box-shadow: inset 0 0 0 3000px rgba(#071F3B,0.4);
      filter: blur(10px);
    }
  }
}
</style>
