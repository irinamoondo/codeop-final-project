<template>
  <div class="flex flex-col items-center justify-center p-6 gap gap-3">
    <div class="flex items-center gap gap-3 py-6">
      <img src="/shield.svg" alt="" id="logo"/>
      <h1 class="uppercase text-3xl font-extrabold tracking-tight">Brewdog</h1>
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
