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

  {key: 'home', title: 'Inicio', icon: 'ri-home-3-line', url: '/'},
  {
    key: 'security', title: 'Segurança', icon: 'ri-lock-password-line', items: [
      {title: 'Utilizadores', url: '/users'},
      {title: 'Roles', url: '/roles'},
    ]
  }
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
                {{ m.title }} - Ola
              </NuxtLink>
            </template>
          </template>
          <div class="sb-sidenav-menu-heading">Core</div>
          <NuxtLink class="nav-link active" to="/">
            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
            Dashboard
          </NuxtLink>
          <div class="sb-sidenav-menu-heading">Interface</div>
          <a aria-controls="collapseLayouts" aria-expanded="false" class="nav-link collapsed"
             data-bs-target="#collapseLayouts"
             data-bs-toggle="collapse" href="#">
            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
            Layouts
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
          </a>
          <div id="collapseLayouts" aria-labelledby="headingOne" class="collapse" data-bs-parent="#sidenavAccordion">
            <nav class="sb-sidenav-menu-nested nav">
              <a class="nav-link" href="layout-static.html">Static Navigation</a>
              <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
            </nav>
          </div>
          <a aria-controls="collapsePages" aria-expanded="false" class="nav-link collapsed"
             data-bs-target="#collapsePages"
             data-bs-toggle="collapse" href="#">
            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
            Pages
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
          </a>
          <div id="collapsePages" aria-labelledby="headingTwo" class="collapse" data-bs-parent="#sidenavAccordion">
            <nav id="sidenavAccordionPages" class="sb-sidenav-menu-nested nav accordion">
              <a aria-controls="pagesCollapseAuth" aria-expanded="false" class="nav-link collapsed"
                 data-bs-target="#pagesCollapseAuth"
                 data-bs-toggle="collapse" href="#">
                Authentication
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div id="pagesCollapseAuth" aria-labelledby="headingOne" class="collapse"
                   data-bs-parent="#sidenavAccordionPages">
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="login.html">Login</a>
                  <a class="nav-link" href="register.html">Register</a>
                  <a class="nav-link" href="password.html">Forgot Password</a>
                </nav>
              </div>
              <a aria-controls="pagesCollapseError" aria-expanded="false" class="nav-link collapsed"
                 data-bs-target="#pagesCollapseError"
                 data-bs-toggle="collapse" href="#">
                Error
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div id="pagesCollapseError" aria-labelledby="headingOne" class="collapse"
                   data-bs-parent="#sidenavAccordionPages">
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="401.html">401 Page</a>
                  <a class="nav-link" href="404.html">404 Page</a>
                  <a class="nav-link" href="500.html">500 Page</a>
                </nav>
              </div>
            </nav>
          </div>
          <div class="sb-sidenav-menu-heading">Addons</div>
          <a class="nav-link" href="charts.html">
            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
            Charts
          </a>
          <a class="nav-link" href="tables.html">
            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
            Tables
          </a>
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