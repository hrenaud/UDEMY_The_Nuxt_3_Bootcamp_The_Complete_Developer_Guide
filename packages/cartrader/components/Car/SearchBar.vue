<script setup>
const city = ref('');
const cityError = ref(false);
const searchHandler = () => {
  if (!city.value) {
    cityError.value = true;
    return;
  }
  navigateTo(`/city/${city.value}/car?minPrice=0&maxPrice=1000000`);
};
</script>
<template>
  <div
    :class="cityError ? 'border-red-400 border-2' : ''"
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      v-model="city"
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
    />
    <Button class="bg-sky-500 px-10 text-white" @click="searchHandler">
      Search
    </Button>
  </div>
</template>
