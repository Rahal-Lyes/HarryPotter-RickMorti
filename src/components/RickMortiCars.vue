<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Card from "./Card.vue";
import { gsap } from "gsap";
const currentIndex = ref(0);
const data = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    data.value = response.data.results;
    console.log(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
});
const next = () => {
  if (currentIndex.value + 6 < data.value.length) {
    currentIndex.value += 6;
  }
};

const preview = () => {
  if (currentIndex.value - 6 >= 0) {
    currentIndex.value -= 6;
  }
};

const beforeEnter = (element) => {
  gsap.set(element, { opacity: 0, y: -100 });
};

const enter = (element) => {
  gsap.to(element, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: element.dataset.index * 0.3,
  });
};
</script>

<template>
  <div>
    <div class="container">
      <div class="cards">
        <div class="cards" v-if="data">
          <transition-group @before-enter="beforeEnter" @enter="enter" appear>
            <card
              v-for="(item, index) in data.slice(
                currentIndex,
                currentIndex + 6
              )"
              :key="item.id"
              :name="item.name"
              :actor="item.actor"
              :img="item.image"
              :data-index="index"
            >
              <h3>{{ item.species }}</h3>
            </card>
          </transition-group>
        </div>
        <div class="cars spinner" v-else>
          <template>
            <n-space>
              <n-spin size="large" />
            </n-space>
          </template>
        </div>
      </div>

      <div class="button-container">
        <button @click="preview">&lt;</button>
        <button @click="next">&gt;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(27, 26, 26);
  padding: 30px;
  min-height: 700px;
}
.cards {
  max-width: 1000px;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.cards h3 {
  font-weight: bold;
}
.cards p {
  font-size: 10px;
}
.jobs {
  display: flex;
  flex-wrap: wrap;
}
.button-container {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.button-container button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 0 5px;
  cursor: pointer;
}
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
