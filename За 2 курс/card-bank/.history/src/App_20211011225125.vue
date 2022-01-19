<template>
    <div>
    <bank-editor
    v-model="myBankName"
    :rate.sync="rate"
    />
    Name:{{myBankName}}
    rate:{{rate}}
  </div>
</template>

<script>
import Card-bank from "@"

export default {
  name: 'App',
  components: {
    Card-bank
  },
   data() {
     return {
       myBankName:"saa",
       rate:20
     }
   },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
