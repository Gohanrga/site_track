<template>
  <div class="flex justify-center items-center pl-4">
    <img
      class="w-16 h-14 object-cover rounded-full"
      :src="props.image"
      alt="Image"
    />
  </div>
  <div class="w-full p-4">
    <div>
      <h2 class="text-sm text-tertiary font-semibold mb-2">
        {{ props.title }}
      </h2>
      <p class="text-xs text-zinc mb-2">
        {{ props.address }}
      </p>
      <p class="text-xs text-zinc">{{ props.contact }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});
</script>
