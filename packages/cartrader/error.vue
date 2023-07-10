<script setup>
const error = useError();
const clickHandler = () => {
  clearError({
    redirect: '/',
  });
};
</script>
<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <Button @click="clickHandler" class="mt-7">Go Back</Button>
  </div>
</template>
