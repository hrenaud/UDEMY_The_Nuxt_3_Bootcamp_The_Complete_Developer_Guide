<script setup>
definePageMeta({
  layout: 'custom',
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const login = () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) {
    console.error(error);
  }
};
</script>
<template>
  <div class="mt-10 text-center">
    {{ user }}
    <h1 class="text-5xl font-bold mb-7">Log in</h1>
    <div>
      <Button class="w-40" @click="login">Login with Google</Button>
    </div>
  </div>
</template>
