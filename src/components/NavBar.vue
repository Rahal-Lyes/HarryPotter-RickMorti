<template>
  <header>
    <nav>
      <router-link active-class="active" :to="{ name: 'breakingBad' }"
        >Harry Potter</router-link
      >
      <router-link active-class="active" :to="{ name: 'rickmorti' }"
        >Rick Mortie</router-link
      >
    </nav>
  </header>
  <div class="hide"></div>
</template>
<style scoped>
.hide {
  height: 60px;
}
header {
  width: 100%;
  margin: 0 auto;
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f1f1f1;
  z-index: 10;
}

header nav {
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

header nav a {
  font-size: 20px;
  text-decoration: none;
  text-transform: capitalize;
  color: #0a61ae;
  font-weight: 700;
}
.active {
  color: #61dafb;
}
</style>
