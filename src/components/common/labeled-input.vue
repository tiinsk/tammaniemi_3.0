<template>
  <div class="labeled-input">
    <label class="label">{{label}}</label>
    <input class="input" :class="{disabled: disabled}" :value="value" @input="({target}) => $emit('input', target.value)" :disabled="disabled" :type="type"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  }
});
</script>

<style scoped lang="scss">
.labeled-input {
  .label {
    display: block;
    padding-bottom: $base-size/4;
  }
  .input {
    display: block;
    width: 100%;
    background: transparent !important;
    border: none;
    border-bottom: 1px solid $color-light-grey;

    padding: 0;
    margin-bottom: $base-size/2;

    line-height: $base-size;
    font-size: $font-size-default;
    color: #ababab;
    font-family: $font-body;

    &.disabled {
      color: #C9C9C9;
      border-bottom: none;
    }

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #CCCCCC;
    }
  }
}
</style>
