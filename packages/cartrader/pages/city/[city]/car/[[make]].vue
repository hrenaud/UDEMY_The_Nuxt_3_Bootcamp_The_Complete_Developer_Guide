<script setup>
const route = useRoute();
const cars = ref([]);
watchEffect(async () => {
  const { data } = await useFetchCars(route.params.city, {
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
    make: route.params.make,
  });
  cars.value = [...data.value];
});
</script>

<!-- [[make]] is optional -->
<!-- [make] is mandatory -->
<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <div v-else class="text-red-500">No Result</div>
  </div>
</template>
