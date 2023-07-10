<script setup>
const classes = `w-fit py-1 px-4`;
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const go = () => {
  if (user.value) {
    return navigateTo('/profile/listings');
  }
  navigateTo('/login');
};
const logout = async () => {
  user.value = null;
  // await $fetch(`/api/_supabase/session`, {
  //   method: 'POST',
  //   body: { event: 'SIGNED_OUT', session: null },
  // });
  const { error } = supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
  navigateTo('/');
};
</script>
<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div class="flex gap-4">
      <Button v-if="!user" @click="go" :class="classes">Login</Button>
      <Button v-if="user" @click="go" :class="classes">Profile</Button>
      <Button v-if="user" @click="logout" :class="classes">Logout</Button>
    </div>
  </header>
</template>
