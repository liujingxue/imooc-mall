<template>
  <div>
    <button @click="increment">+</button>
    <button v-on:click="decrement">-</button>
    <p><span>{{num}}</span></p>
  </div>
</template>
<style>
</style>
<script>
  export default {
      props: ["num"],           //接收父组件传递过来的参数
      data(){
          return {
              num:0
          }
      },
      methods:{
          increment(){
            this.num++;
          },
          decrement(){
            this.num--;
          }
      }
  }
</script>
