<template>
  <li
    class="transition duration-300 ease-in-out hover:bg-primary hover:bg-opacity-80 hover:text-white rounded-md"
  >
    <router-link :to="props.to" class="block p-2">{{ props.text }}</router-link>
  </li>
</template>
<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
