<template>
  <div class="card text-center flex flex-col justify-between">
    <img :src="product.image" alt="" class="thumb" />
    <div>
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <nuxt-link :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
