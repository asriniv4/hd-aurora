<script setup>
import { ref } from 'vue';
import OrderDetail from '@/components/OrderDetail.vue';

const orders = ref([
  {
    id: 1,
    title: 'first',
    type: 'heart',
    orderedBy: 'Dr. No',
  },
  {
    id: 2,
    title: 'second',
    type: 'lung',
    orderedBy: 'Dr. Dolittle',
  },
])
</script>

<template>
  <div class="orders-list">
    <table>
      <thead>
        <tr>
          <td>Requestor</td>
          <td>Model Type</td>
          <td>Order Date</td>
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
