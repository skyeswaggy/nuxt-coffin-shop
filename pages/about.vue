<script setup></script>
<template>
  <div class="wrapper">
    <div class="about">
      <span class="title">O nas</span>
      <div class="description">
        <span>
          CoffinShop jest hurtownią specjalizującą się w sprzedaży trumien oraz
          innych produktów funeralnych. Nasza historia zaczęła się w 2024
          roku.</span
        ><span>
          Do trumien dołączyliśmy inne produkty takie jak urny i krzyże
          procesyjne w celu uzupełnienia naszej oferty. CoffinShop bardzo szybko
          rozwinęło się z lokalnej firmy dostarczającej trumny i akcesoria
          funeralne okolicznym zakładom pogrzebowym, do hurtowni funeralnej z
          prawdziwego zdarzenia obsługującej obszar całej Polski. Dziś możemy
          pochwalić się ponad 1000 Klientów z całej Polski. </span
        ><span
          >Nasze produkty sprzedajemy obecnie również w wielu krajach Unii
          Europejskiej. Nasz dynamiczny rozwój zawdzięczamy perfekcyjnej
          organizacji pracy, nieustannie dostosowującej się, szerokiej gamie
          produktów oraz determinacji w sprostaniu potrzebom wszystkich naszych
          Klientów.
        </span>
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
