<script setup>
import { ref } from "vue";
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();
const summaryPrice = ref(0);

const getSummaryPrice = () => {
  counter.cartData.forEach((e) => {
    summaryPrice.value += counter.cartDict[e.id] * e.price;
  });
};

getSummaryPrice();
</script>

<template>
  <div class="summaryContainer">
    <span class="title">Podsumowanie</span>
    <table class="dataBox">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in counter.cartData" :key="index">
          <template v-if="counter.cartDict[item.id] > 0">
            <td>{{ item.name }}</td>
            <td>{{ counter.cartDict[item.id] }}</td>
            <td>
              {{ counter.cartDict[item.id] * item.price }}{{ item.currency }}
            </td>
          </template>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Razem:</th>
          <td>{{ counter.storeCounter.count }}</td>
          <td>{{ counter.storeCounter.price }}PLN</td>
        </tr>
      </tfoot>
    </table>
    <button>Przejdź do płatności</button>
  </div>
</template>

<style scoped lang="scss">
.summaryContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 400px;
  margin: auto;
  gap: 10px;
  padding: 10px;
  border: solid 1px rgb(194, 194, 194);
  border-radius: 6px;

  .title {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }

  .dataBox {
    padding: 10px;
    tr {
      th,
      td {
        font-size: 14px;
        padding: 5px 5px;
        text-align: left;
      }
    }
    tfoot {
      tr {
        td {
          font-weight: bold;
        }
      }
    }
  }

  button {
    padding: 8px;
    margin: 15px 0;
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
</style>
