<script setup>
defineProps({
  id: {
    type: Number,
    default: () => 0,
  },
  name: {
    type: String,
    default: () => "",
  },
  description: {
    type: String,
    default: () => "",
  },
  width: {
    type: Number,
    default: () => 0,
  },
  height: {
    type: Number,
    default: () => 0,
  },
  image: {
    type: String,
    default: () => "",
  },
  price: {
    type: Number,
    default: () => 0,
  },
  productType: {
    type: String,
    default: () => "",
  },
});
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();
</script>
<template>
  <div class="card">
    <img class="card-image" :src="image" alt="" />
    <div class="card-text">
      <span class="title">{{ name }}</span>
      <span>Cena: {{ price * counter.cartDict[id] }} ZŁ</span>
      <div class="count">
        <button @click="counter.deleteFromCart(this)" class="btn-val">-</button>
        {{ counter.cartDict[id] }}
        <button @click="counter.addToCart(this, false)" class="btn-val">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  width: 450px;
  .card-image {
    height: 90px;
  }
  .card-text {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    flex-direction: column;
    gap: 10px;

    .title {
      text-align: right;
      font-size: 16px;
    }

    .count {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 16px;

      .btn-val {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        padding: 5px;
        font-size: 16px;
        border-radius: 2px;
        border: none;
        background-color: #d138bf;
        color: #fff;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          background-color: #99298c;
        }
      }
    }
  }
}
</style>
