<template>
  <div class="toggle-button-wrapper">
    <input class="checkbox" type="checkbox" :id="name" :checked="value" @input="toggle">
    <div class="toggle-container" @click="toggle">
      <div class="toggle-button" :class="{selected: value}">
        <i class="material-icons" v-if="value">check</i>
      </div>
    </div>
    <label class="label" :for="name" @click="toggle">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }
  }
};
</script>

<style lang="scss">
.toggle-button-wrapper {
  display: flex;
  align-items: center;

  color: white;

  margin: 0;

  .checkbox {
    position: absolute;
    top: -100vh;
    left: -100vw;
  }
  .toggle-container {
    flex-shrink: 0;
    width: $base-size * 2;
    height: $base-size;
    border-radius: #{$base-size/2}/ 50%;

    background: #ffffff78;
    margin-right: $base-size/2;
    padding: 2px;

    cursor: pointer;

    .toggle-button {
      width: $base-size - 4px;
      height: $base-size - 4px;
      border-radius: 50%;
      background: #d0d0d0;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      left: 0;
      transition: left 0.2s ease-in;

      .material-icons {
        color: $color-tasks;
        font-size: $font-size-large;
        font-weight: $font-weight-semibold;
      }

      &.selected {
        left: $base-size;
        background: white;
      }
    }
  }

  .label {
    font-size: $font-size-medium;
  }
}
</style>
