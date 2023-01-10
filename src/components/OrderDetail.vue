<script setup>
defineProps({
  order: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <tr class="order-detail">
    <td>{{  order.title }}</td>
    <td>{{ order.type }}</td>
    <td>{{ order.orderedBy }}</td>
  </tr>
</template>

<style scoped>
.order-detail {
  font-weight: lighter;
}

.order-detail:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>