<template>
  <div class="flex">
    <img :src="logoSrc" class="w-6 h-6 mr-2" alt="icon" />
    <div>
      <p
        class="text-sm text-tertiary font-semibold mb-2"
        v-if="props.description"
      >
        {{ props.description }}
      </p>
      <p class="text-xs text-zinc mb-2" v-if="props.subDescription">
        {{ props.subDescription }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  subDescription: {
    type: String,
    default: "",
  },
});

const logos = import.meta.glob("@/assets/*.svg", { eager: true });

const logoSrc = computed(() => {
  return logos[`/src/assets/${props.logo}.svg`].default;
});
</script>
