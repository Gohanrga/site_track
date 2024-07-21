<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-primary text-2xl font-bold mb-2">Sites</h2>
    <Search :fetchSites="fetchSites" />
    <ul>
      <li v-for="site of sites" :key="site.id">
        <SiteCard
          class="mb-2"
          :id="site.id"
          :title="site.title"
          :contact="site.contacts"
          :address="site.address"
          :client="site.client"
        />
      </li>
    </ul>
    <Pagination
      :previousPage="prevPage"
      :nextPage="nextPage"
      :page="siteStore.getPage"
      :hasNext="hasNext"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import useSiteStore from "../stores/siteStore";
import SiteCard from "../components/SiteCard.vue";
import Pagination from "../components/Pagination.vue";
import Search from "../components/Search.vue";

const siteStore = useSiteStore();

//hooks
onMounted(async () => {
  await siteStore.fetchSites();
});

const sites = computed(() => {
  return siteStore.getStoreSites;
});

const hasNext = computed(() => {
  return siteStore.getLimit === sites.value.length;
});

//methods
const nextPage = async () => {
  await siteStore.fetchSites(
    siteStore.getPage + 1,
    siteStore.getLimit,
    siteStore.getFilters
  );
};

const prevPage = async () => {
  if (siteStore.getPage > 1) {
    await siteStore.fetchSites(
      siteStore.getPage - 1,
      siteStore.getLimit,
      siteStore.getFilters
    );
  }
};

const fetchSites = async (key: string, query: string) => {
  let filter = {
    [key]: query,
  };
  if (!query) {
    filter = {};
  }
  await siteStore.fetchSites(1, siteStore.getLimit, filter);
};
</script>
