<script async setup>
import { ref } from "vue";
import axios from "axios";
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();
const route = useRoute();
const data = ref({});

const getProductData = async () => {
  try {
    await axios
      .get(`http://localhost:8000/products?id=${route.params.id}`)
      .then((response) => {
        if (response.statusText == "OK") {
          data.value = response.data[0];
        } else {
        }
      });
  } catch {
    throw createError();
    return;
  }
};
await getProductData();
</script>
<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-image">
        <img :src="data.image" :alt="data.image" />
      </div>
      <div class="card-content">
        <div class="card-title">{{ data.name }}</div>
        <div class="card-desc">
          <p class="header">Opis produktu:</p>
          <p>{{ data.description }}</p>
        </div>
        <div class="card-params">
          <span class="header">Parametry:</span>
          <span class="param">Wysokość: {{ data.height }}</span>
          <span class="param">Szerokość: {{ data.width }}</span>
          <span class="param">Cena: {{ data.price }}</span>
        </div>
        <div class="card-btn">
          <button
            @click="
              () => {
                this.$router.go(-1);
              }
            "
            class="btn btn-back"
          >
            Wróć
          </button>
          <button
            @click="
              () =>
                counter.addToCart({
                  id: data.id,
                  name: data.name,
                  width: data.width,
                  height: data.height,
                  image: data.image,
                  description: data.description,
                  productType: data.productType,
                  price: data.price,
                })
            "
            class="btn add-btn"
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  margin-top: 150px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    flex-direction: row;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 2px 4px 10px 1px #01111170;
    overflow: hidden;
    .card-image {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 150px;
    }

    .card-content {
      display: flex;
      align-items: left;
      justify-content: space-around;
      flex-direction: column;
      min-width: 400px;
      gap: 20px;

      .card-title {
        font-size: 22px;
        text-transform: uppercase;
        font-weight: bold;
      }
      .header {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .card-params,
      .card-desc {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }
      .card-btn {
        display: flex;
        justify-content: flex-end;
        gap: 5px;

        .btn {
          padding: 8px;
          border: none;
          border-radius: 5px;
          text-transform: uppercase;
          font-size: 14px;
          cursor: pointer;
          font-weight: bold;
          color: #fff;
          &.add-btn {
            width: 200px;
            background-color: #d138bf;

            &:hover {
              background-color: #d138bf;
            }
          }
          &.btn-back {
            background-color: #919191;
          }
        }
      }
    }
  }
}
</style>
