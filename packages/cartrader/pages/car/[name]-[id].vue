<script setup>
const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: 'custom',
});

const car = computed(() => {
  return cars.find((car) => car.id === parseInt(route.params.id));
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID of ${route.params.id} not found`,
  });
}
</script>
<template>
  <div>
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
