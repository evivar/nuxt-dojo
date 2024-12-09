<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea fuga, perferendis
      explicabo iusto odit repellendus asperiores voluptate maxime accusamus!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea fuga, perferendis
      explicabo iusto odit repellendus asperiores voluptate maxime accusamus!
    </p>
    <div>
      {{ data }}
    </div>
    <div>{{ config }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/EUR");

const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
