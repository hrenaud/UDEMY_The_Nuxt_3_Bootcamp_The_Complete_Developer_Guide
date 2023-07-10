<script setup>
const props = defineProps(['class']);
</script>
<template>
  <button class="bg-blue-400 w-full rounded text-white p-1 + ${props.class}">
    <slot />
  </button>
</template>
