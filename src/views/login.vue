<template>
  <background width="375px" height="450px">
    <div slot="content" class="login-content">
      <div class="title">Tammaniemi</div>
      <div class="form">
        <div class="input-wrapper">
          <icon class="icon" color="white" :opacity="0.8" type="person"/>
          <input class="input" placeholder="Email"/>
        </div>
        <div class="input-wrapper">
          <icon class="icon" color="white" :opacity="0.8" type="lock"/>
          <input class="input" type="password" placeholder="Password"/>
        </div>
        <button class="button">Login</button>
      </div>
      <div class="password-forget">Did you forget password?</div>
    </div>
  </background>
</template>

<script>
import Icon from '../components/common/icon.vue';
import Background from '../components/login/login-background.vue';

export default {
  components: {
    Icon,
    Background
  }
};
</script>

<style scoped lang="scss">
.login-content {
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 45px;
    color: white;
    text-transform: uppercase;
    font-weight: 100;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 0 $base-size $base-size $base-size;

    .input-wrapper {
      position: relative;
      .icon {
        position: absolute;
        top: 12px;
        left: 5px;
      }
      .input {
        background-color: transparent !important;
        border: none;
        border-bottom: 1px solid rgba(white, 0.4);

        padding: 0 50px;
        margin-bottom: $base-size;
        width: 100%;

        line-height: 50px;
        font-size: $font-size-default;
        color: rgba(white, 0.8);

        &:focus {
          outline: none;
        }
        &::placeholder {
          color: rgba(white, 0.4);
        }
      }
    }

    .button {
      background: $color-orange;
      padding: $base-size/2;
      margin-top: $base-size;

      font-size: $font-size-xlarge;
      text-transform: uppercase;
      color: white;
      font-weight: $font-weight-light;

      border: none;
      border-radius: 20px/50%;
      &:hover {
        background: darken($color-orange, 5%);
      }
    }
  }
  .password-forget {
    position: relative;
    cursor: pointer;
    padding: $base-size/2;

    text-align: right;
    color: rgba(white, 0.2);
    font-size: $font-size-small;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
