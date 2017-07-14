<template>
  <div>
    这是商品列表页面
    <span>{{ $route.params.goodsId }}</span><br/>
    <span>{{ $route.params.name }}</span>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
    <router-link to="/cart">跳转到购物车页面</router-link><br/>
    <router-link v-bind:to="{name: 'cart',params:{cartId:123}}">跳转到购物车页面</router-link><br/>
  </div>
</template>
<style>

</style>
<script>
  export default {
    data(){
      return{
        msg: 'hello vue'
      }
    },
    methods:{
      //定义函数
      jump(){
        //this.$router.push("/cart");
        //this.$router.push({path: '/cart'});
        //传入参数
        //this.$router.push({path:'/cart?goodsId=123'});
        //倒退2步
        this.$router.go(-2);
      }
    }
  }
</script>
