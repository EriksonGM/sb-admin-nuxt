<script setup lang="ts">
import { useThemeStore } from '~/stores/themeStore';
const theme = useThemeStore();
</script>

<template>
  <button class="btn" id="sidebarToggle" @click="theme.toggleDark">
    <i v-if="theme.isDark" class="ri-sun-line"></i>
    <i v-else class="ri-moon-line"></i>
  </button>
</template>

<style scoped>

</style>