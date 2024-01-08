<script setup>

</script>

<template>
  <section class="row justify-center">
    <q-card class="container col-5 q-px-lg text-center text-white">
      <h4>Connection</h4>
      <q-input v-model="text" :dense="dense">
        <template v-slot:append>
          <q-avatar>
            <img src="public/picture/logo-mail.png">
          </q-avatar>
        </template>
      </q-input>
      <q-input v-model="text" :dense="dense">
        <template v-slot:append>
          <q-avatar>
            <img src="public/picture/lock-image.png">
          </q-avatar>
        </template>
      </q-input>
    </q-card>
  </section>
</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  min-height: 300px

</style>