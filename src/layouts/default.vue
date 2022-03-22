<template>
  <the-navbar />
  <div class="h-full min-h-screen">
    <base-suspense>
      <router-view />
    </base-suspense>
  </div>
  <the-footer />
  <the-tabbar />
</template>
