<template>
  <h1>Local Component</h1>
  <h2> {{title}} </h2>
  <button @click="$emit('addclick', 1)">Add</button>
  
  <button @click="addTwo">Add Two</button>
<br>
<slot name="header"/>
<!-- <slot></slot> -->
<br>
<slot name="content"/>
  
</template>

<script>
export default {
  //props: ['title'],
  props: {
    title: String // Number, Object, Boolean, Array, Function
  },
  methods: {
    addTwo() {
      this.$emit('addclick',2)
    }
  }
};
</script>

<style scoped>
</style>