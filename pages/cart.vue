<script setup>
import { useCounterStore } from "~/stores/counter";
const counter = useCounterStore();
</script>
<template>
  <div class="wrapper">
    <div class="cart" v-if="counter.storeCounter.count > 0">
      <div class="items">
        <CartItem
          v-for="(item, index) in counter.cartData"
          :id="item.id"
          :name="item.name"
          :width="item.width"
          :height="item.height"
          :image="item.image"
          :price="item.price"
          :key="index"
        />
      </div>
      <div class="summary">
        <CartSummary />
      </div>
    </div>
    <div v-else class="cart-empty">
      <h3>Twój koszyk jest pusty..</h3>
      <NuxtLink to="/products" class="btn">Sprawdź nasze produkty!</NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .cart {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 80px;
    margin: 50px;
    .items {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-grow: 2;
      gap: 30px;
      margin-bottom: 20px;
      padding: 20px 30px;
      border: solid 1px rgb(194, 194, 194);
      border-radius: 6px;
    }
  }
  .cart-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 150px;
    font-size: 20px;
    .btn {
      padding: 8px;
      margin-bottom: 15px;
      background-color: #d138bf;
      color: #fff;
      border: none;
      border-radius: 5px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background-color: #99298c;
      }
    }
  }
}
</style>
