<template>
  <background width="700px" height="740px">
    <div slot="content" class="register-content">
      <div class="title">Tammaniemi</div>
      <div class="subtitle">Register new user</div>
      <div class="form">
        <div class="form-group">
          <div class="group-title">
            <icon class="icon" type="person" color="black" size="25px"/>
            <span>Personal information</span>
          </div>
          <labeled-input :disabled="true" label="Email" v-model="email"/>
          <labeled-input label="First name" v-model="firstName"/>
          <labeled-input label="Last Name" v-model="lastName"/>
        </div>
        <div class="form-group" :style="{'padding-bottom': '50px'}">
          <div class="group-title">
            <icon class="icon" type="lock" color="black" size="25px"/>
            <span>Password</span>
          </div>
          <labeled-input type="password" label="Password" v-model="password"/>
          <labeled-input type="password" label="Confirm password" v-model="confirmPassword"/>
        </div>
        <button class="button">Register</button>
      </div>
    </div>
  </background>
</template>

<script>
import Icon from '../components/common/icon.vue';
import Background from '../components/login/login-background.vue';
import LabeledInput from '../components/common/labeled-input.vue';

export default {
  components: {
    Icon,
    Background,
    LabeledInput
  },
  data() {
    return {
      email: 'test@test.test',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    };
  }
};
</script>

<style scoped lang="scss">
.register-content {
  position: relative;
  height: 100%;
  padding: $base-size 70px;

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
  .subtitle {
    text-align: center;
    color: rgba(white, 0.6);
    font-weight: $font-weight-light;
    margin-bottom: 12px;
  }

  .form {
    position: relative;
    .form-group {
      background: white;
      padding: $base-size;
      margin-bottom: $base-size;

      border-radius: 2px;
      box-shadow: 0 1px 2px rgba(#667788, 0.4);

      .group-title {
        display: flex;
        align-items: center;
        padding-bottom: $base-size;
        font-size: $font-size-large;

        .icon {
          margin-right: 12px;
        }
      }
    }

    .button {
      background: $color-orange;
      padding: 12px;

      font-size: $font-size-xlarge;
      text-transform: uppercase;
      color: white;
      font-weight: $font-weight-light;

      border: none;

      position: absolute;
      right: -30px;
      bottom: -30px;

      &:hover {
        background: darken($color-orange, 5%);
      }
    }
  }
}
</style>
