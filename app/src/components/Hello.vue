<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 调用组件 -->
    <!--<Counter num="10"></Counter>-->
    <Counter v-bind:num="num"></Counter>  <!-- 绑定动态变量 -->
    <p>parent:{{num}}</p>
  </div>
</template>

<script>
  //引用组件
import Counter from './Counter'
export default {
  name: 'hello',
  data () {
    return {
      num:10,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //调用组件
  components:{
      Counter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
