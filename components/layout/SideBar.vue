<script lang="ts" setup>

interface SubMenuItem {
  title: string;
  url: string;
}

interface MenuItem {
  key: string;
  title: string;
  icon: string;
  url?: string;
  items?: SubMenuItem[];
}

const menus = ref<MenuItem[]>([
  {
    key: 'home', title: 'Inicio', icon: 'ri-home-3-line', url: '/'
  },
  {
    key: 'security', title: 'Segurança', icon: 'ri-lock-password-line', items: [
      {title: 'Utilizadores', url: '/users'},
      {title: 'Roles', url: '/roles'}
    ]
  },
  {
    key: 'security', title: 'Segurança', icon: 'ri-lock-password-line', items: [
      {title: 'Utilizadores', url: '/users'},
      {title: 'Roles', url: '/roles'}
    ]
  },
]);
</script>

<template>
  <div id="layoutSidenav_nav">
    <nav id="sidenavAccordion" class="sb-sidenav accordion sb-sidenav-light">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <template v-for="m in menus">
            <template v-if="m.items">
              <a :data-bs-target="`#${m.key}`" aria-controls="collapseLayouts" aria-expanded="false"
                 class="nav-link collapsed"
                 data-bs-toggle="collapse" href="#">
                <div class="sb-nav-link-icon">
                  <i :class="m.icon"></i>
                </div>
                {{ m.title }}
                <div class="sb-sidenav-collapse-arrow">
                  <i class="ri-arrow-down-s-line"></i>
                </div>
              </a>
              <div :id="m.key" :data-bs-parent="`#${m.key}`" aria-labelledby="headingOne" class="collapse">
                <nav class="sb-sidenav-menu-nested nav">
                  <NuxtLink v-for="s in m.items" :to="s.url" class="nav-link">{{ s.title }}</NuxtLink>
                </nav>
              </div>
            </template>
            <template v-else>
              <NuxtLink :to="m.url" class="nav-link">
                <div class="sb-nav-link-icon">
                  <i :class="m.icon"></i>
                </div>
                {{ m.title }}
              </NuxtLink>
            </template>
          </template>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Erikson Melgarejo
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>