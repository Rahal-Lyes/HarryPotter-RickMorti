<template>
  <n-card>
    <template #cover>
      <img :src="img" />
    </template>
    <h2>{{ name }}</h2>
    <h3>{{ actor }}</h3>
    <slot></slot>
  </n-card>
</template>
<script setup>
import { defineProps } from "vue";

const { name, actor, img } = defineProps(["name", "actor", "img"]);
</script>

<style scoped>
.n-card {
  width: 280px;
  height: 320px;
  margin: 10px 20px;
  box-shadow: 1px 1px 1px black;
}
.n-card img {
  height: 250px;
}

p {
  font-size: 10px;
}

.jobs {
  display: flex;
  flex-wrap: wrap;
}
</style>
