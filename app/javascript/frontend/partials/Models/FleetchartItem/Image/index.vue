<template>
  <img
    v-if="model.fleetchartImage"
    :src="model.fleetchartImage"
    :style="{
      height: `${model.length * lengthMultiplicator}px`,
    }"
    :alt="model.name"
    class="fleetchart-item-image"
  />
  <span v-else>
    <i class="fal fa-question-circle" />
    <p>{{ model.name }}</p>
  </span>
</template>

<script>
export default {
  name: 'FleetchartItem',

  props: {
    model: {
      type: Object,
      required: true,
    },

    scale: {
      type: Number,
      required: true,
    },
  },

  computed: {
    lengthMultiplicator() {
      return (this.scale / 100) * 4
    },
  },
}
</script>
