<script async setup>
import { ref } from "vue";
import axios from "axios";

const data = ref([]);

const getProductsData = async () => {
  try {
    await axios.get("http://localhost:8000/products").then((response) => {
      if (response.statusText == "OK") {
        data.value = response.data;
      }
    });
  } catch {
    throw createError();
  }
};
await getProductsData();
</script>
<template>
  <div class="wrapper">
    <div class="title">Produkty:</div>
    <div class="products">
      <ProductCard
        v-for="(item, index) in data"
        :id="item.id"
        :name="item.name"
        :width="item.width"
        :height="item.height"
        :image="item.image"
        :description="item.description"
        :product-type="item.productType"
        :price="item.price"
        :key="index"
      />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  gap: 10px;
  .products {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
  }
}
</style>
