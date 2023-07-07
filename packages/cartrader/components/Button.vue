<script setup>
const props = defineProps(['class', 'label']);
</script>
<template>
  <button class="bg-blue-400 w-full rounded text-white p-1 + ${props.class}">
    {{ props.label }}
  </button>
</template>
