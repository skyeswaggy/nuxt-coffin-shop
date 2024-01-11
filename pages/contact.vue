<script setup></script>
<template>
  <div class="wrapper">
    <div class="about">
      <span class="title">Kontakt</span>
      <div class="description">
        <span>tel.: +48 123 123 123</span>
        <span>E-mail: kontakt@coffinshop.pl </span>
        <span>Adres: Aleja Grunwaldzka 238A, 80-266 Gdańsk</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .about {
    margin-top: 150px;
    width: 80%;
    padding: 20px;

    .description {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 2px 4px 10px 1px #01111170;
    }
  }
}
</style>
