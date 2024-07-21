<!-- src/components/Sidebar.vue -->
<template>
  <div
    v-if="isOpen"
    :class="[
      'absolute md:relative top-0 left-0 h-full w-48 bg-secondary text-tertiary transition-transform transform',
      { '-translate-x-full': !isOpen },
    ]"
  >
    <div class="p-4">
      <h2 class="text-center font-bold">Menu</h2>
      <ul>
        <SideButton to="/home" text="Home" />
        <SideButton to="/" text="Sites" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useSidebarStore from "../stores/sidebarStore";
import SideButton from "./SideButton.vue";
const sidebarStore = useSidebarStore();

const isOpen = computed(() => {
  return sidebarStore.getIsOpen;
});
</script>
