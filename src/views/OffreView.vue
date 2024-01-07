<script setup>

</script>

<template>
  <div id="search-bar">
    <q-input v-model="search" rounded outlined  label="Rechercher">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<style scoped lang="sass">

</style>