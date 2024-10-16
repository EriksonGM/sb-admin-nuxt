<script setup lang="ts">
import PageHeader from "~/components/layout/PageHeader.vue";

import { useThemeStore } from '~/stores/themeStore';
const theme = useThemeStore();

const route = useRoute()
</script>

<template>
  <PageHeader title="Inicio" icon="ri-home-3-line"/>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>


</template>
