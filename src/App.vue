<template>
  <main>
    <nav-bar />
    <suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <div class="card spinner">
          <n-spin size="large" />
        </div>
      </template>
    </suspense>
  </main>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
.card {
  height: 700px;
  background-color: rgb(27, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
