<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import OrderDetail from '@/components/OrderDetail.vue';

const orders = ref(null);

const GET_ORDERS_URL = 'https://aurora.ismorebetter.com/.netlify/functions/get-orders';

onMounted(() => {
  axios.get(GET_ORDERS_URL)
    .then((response) => {
      orders.value = response.data;
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="orders-list">
    <table>
      <thead>
        <tr>
          <td>Requestor</td>
          <td>Model Type</td>
          <td>Status</td>
        </tr>
        <OrderDetail v-for="order in orders" :key="order.id" :order="order" />
      </thead>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
