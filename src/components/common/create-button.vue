<template>
  <router-link
    class="create-button"
    :style="backgroundStyle"
    :to="{}"
  >
    <i class="material-icons">note_add</i>
    <span>Luo uusi</span>
  </router-link>
</template>

<script>
import { gradient } from '../../utils/gradient';

export default {
  components: {},
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundStyle() {
      return gradient(this.type, 'to right');
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.create-button {
  width: fit-content;

  text-decoration: none;
  font-size: $font-size-default;
  color: white;
  line-height: $base-size/2;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px/50%;
  background: rgba($color-semi-light-grey, 0.5);

  padding: $base-size/3 $base-size $base-size/3 round(2 * $base-size/3);
  margin-right: $base-size/2;

  .material-icons {
    font-size: $font-size-default;
    padding-right: round($base-size/2);
  }
}
</style>
