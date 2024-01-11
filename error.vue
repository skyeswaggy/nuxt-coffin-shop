<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="wrapper">
    <span class="title">Coś poszło nie tak..</span>
    <img src="/images/warning.png" alt="Znak ostrzeżenia" />
    <button @click="handleError" class="btn">
      Kliknij aby wrócić na stronę główną
    </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background-color: #969696;
  gap: 30px;

  .title {
    font-size: 30px;
    font-weight: bold;
  }
  img {
    width: 250px;
  }
  .btn {
    padding: 8px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
  }
}
</style>
