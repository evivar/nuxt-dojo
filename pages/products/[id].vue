<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
    </Head>
    <product-detail :product="product" />
  </div>
</template>

<script setup>
const router = useRoute();
const uri = "https://fakestoreapi.com/products/";

definePageMeta({
  layout: "products",
});

const { data: product } = await useFetch(`${uri}${router.params.id}`);
if (!product.value) {
  throw createError({ statusCode: 404, message: "Product doesn't exists", fatal: true });
}
</script>

<style lang="scss" scoped></style>
