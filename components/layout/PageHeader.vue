<script setup lang="ts">

const props = defineProps({
  title: String,
  icon: String,
});
</script>

<template>
  <h2 class="mt-3 mb-3">
    <i :class="icon" class="me-2"/>{{title}}</h2>
<!--  <ol class="breadcrumb mb-4">
    <li class="breadcrumb-item">
      <NuxtLink to="/" class="nav-link">
        <i class="ri-home-3-line me-2"></i> Inicio
      </NuxtLink>
    </li>
    <li class="breadcrumb-item">
      <NuxtLink to="/" class="nav-link">
        <i class="ri-home-3-line me-2"></i> Inicio
      </NuxtLink>
    </li>
    <li class="breadcrumb-item">
      <NuxtLink to="/" class="nav-link">
        <i class="ri-home-3-line me-2"></i> Inicio
      </NuxtLink>
    </li>
  </ol>-->
</template>

<style scoped>

</style>