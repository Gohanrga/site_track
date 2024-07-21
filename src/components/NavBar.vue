<template>
  <nav class="bg-primary p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Botón de sándwich -->
      <div class="flex items-center">
        <button class="side-button" @click="toogleSideBar">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <!-- Título -->
        <span class="text-white text-lg ml-4">Client Sites</span>
      </div>
      <!-- Logo de sesión -->
      <div>
        <button
          class="text-primary focus:outline-none bg-white px-4 py-2 rounded-full"
        >
          R
        </button>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import Menu from "./Menu.vue";
import useSidebarStore from "../stores/sidebarStore";
const sidebarStore = useSidebarStore();

const toogleSideBar = () => {
  sidebarStore.toggle();
};
</script>
<style scoped>
.side-button {
  @apply text-white focus:outline-none p-2 rounded-full hover:bg-white hover:opacity-40 hover:text-primary transition duration-300 ease-in-out;
}
</style>
