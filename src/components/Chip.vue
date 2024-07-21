<template>
  <button
    class="bg-blue_green px-2 py-1 rounded-lg text-white text-sm flex items-center justify-between"
    @click="props.close"
  >
    <span>{{ props.text }}</span>
    <img src="@/assets/close.svg" class="w-4 h-4" />
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "text",
  },
  close: {
    type: Function,
    default: () => ({}),
  },
});
</script>
