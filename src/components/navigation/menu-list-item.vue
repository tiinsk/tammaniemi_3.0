<template>
  <router-link
    class="menu-list-item"
    :to="toLink"
    active-class="active"
    exact
  >
    <div class="title">{{ title }}</div>
    <div class="count-box">{{ count }}</div>
  </router-link>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    count: {
      type: Number,
      default: 0
    },
    toLink: {
      type: Object,
      required: true
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.menu-list-item {
  padding: $base-size/2 $base-size;

  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;

  line-height: $base-size;
  color: white;
  text-decoration: none;
  text-shadow: 1px 0 20px #00000021;

  .icon {
    position: absolute;
    left: 0;
    display: none;
  }

  .count-box {
    width: 30px;
    padding: 3px 0;
    margin-left: $base-size/2;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px/50%;

    background: rgba(white, 0.35);

    font-size: $font-size-xsmall;
    color: white;
    line-height: $base-size/2;
  }

  &.active {
    .title {
      border-bottom: 1px solid white;
      margin-bottom: -1px;
    }
    .icon {
      display: block;
    }
  }
}
</style>
