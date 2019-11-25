<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <button @click="toTest">to test</button> 
    <router-link to="/app1/test">App1's test</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    toTest(){
      this.$router.push('/app/test');
    }
  }
}
</script>
