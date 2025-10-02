<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <!-- Contenedor principal con el color de fondo y fuente base -->
    <n-global-style />

    <div class="app">
      <leader-board />
    </div>
  </n-config-provider>
</template>
<script setup lang="ts">
import { themeOverrides } from './themeOverrides'
import LeaderBoard from './views/LeaderBoard.vue'
</script>
<style scoped>
.app {
  font-family: fontFamily;
  width: 100%;
  height: 100vh;
}
</style>
