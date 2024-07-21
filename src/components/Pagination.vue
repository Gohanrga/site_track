<template>
  <div class="flex justify-center gap-2">
    <button
      class="bg-blue_green text-white px-4 py-2 rounded-md"
      :class="{ 'opacity-50': props.page === 1 }"
      @click="props.previousPage"
      :disabled="props.page === 1"
    >
      Previous
    </button>
    <button
      class="bg-blue_green text-white px-4 py-2 rounded-md"
      :class="{ 'opacity-50': !props.hasNext }"
      @click="props.nextPage"
      :disabled="!props.hasNext"
    >
      Next
    </button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  previousPage: {
    type: Function,
    required: true,
  },
  nextPage: {
    type: Function,
    required: true,
  },
  page: {
    type: Number,
    default: 1,
  },
  hasNext: {
    type: Boolean,
  },
});
</script>
