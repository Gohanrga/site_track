<template>
  <div class="h-screen flex flex-col">
    <NavBar />
    <div class="flex flex-grow overflow-hidden relative">
      <Sidebar />
      <div class="p-2 w-full overflow-y-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import NavBar from "../components/NavBar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
