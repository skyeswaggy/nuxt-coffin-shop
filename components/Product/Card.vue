<script setup>
import { useCounterStore } from "~/stores/counter";
const counter = useCounterStore();

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
</script>
<template>
  <div class="card">
    <span class="title">{{ name }}</span>
    <img class="card-image" :src="image" alt="" />
    <span class="price">Cena: {{ price }} ZŁ</span>

    <div class="card-hover">
      <NuxtLink
        :to="{ name: 'products-id', params: { id: id } }"
        class="card-description"
        >{{ description }}</NuxtLink
      >
      <button
        @click="
          () =>
            counter.addToCart({
              id: id,
              name: name,
              width: width,
              height: height,
              image: image,
              description: description,
              productType: productType,
              price: price,
            })
        "
        class="add-btn"
      >
        Dodaj do koszyka
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 220px;
  height: 250px;
  padding: 10px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 1px #01111170;
  overflow: hidden;

  &:hover .card-hover {
    display: flex;
  }
  .title {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
  }
  .card-image {
    height: 90px;
  }
  .price {
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
  }

  .card-hover {
    position: absolute;
    display: none;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: #000000e0;
    transition: 1s all;
    .card-description {
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      color: #fff;
    }
    .add-btn {
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
