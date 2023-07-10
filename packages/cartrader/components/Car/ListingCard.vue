<script setup>
defineProps({
  listing: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="flex rounded shadow overflow-hidden justify-between mb-4">
    <div class="flex">
      <img :src="listing.url" alt="" class="w-80 mr-3 h-44" />
      <div class="p-3">
        <h2 class="text-2xl">{{ listing.name }}</h2>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="flex p-3 gap-4">
      <NuxtLink
        :to="`/profile/listings/view/${listing.id}`"
        class="text-blue-400"
        >View</NuxtLink
      >
      <p class="text-red-400 cursor-pointer">Delete</p>
    </div>
  </div>
</template>
