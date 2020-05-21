<template>
  <div>
    账号:<input v-model="users.username" type="text"><br/>
    密码:<input v-model="users.pwd" type="password"><br/>
    <button @click="clk">登录</button>
    <router-link to="/reg">去注册</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import './styles.less'
export default {
 data () {
   return {
     users: {
       username: '',
       pwd: '',
     }
   }
 },
 methods: {
   clk () {
    this.$store.dispatch('FETCH_LOGIN_ACTION', this.users)
   }
 },
 watch: {
   isLogin (isLogin) {
     if(Number(isLogin.status) === 200){
      alert(isLogin.message)
      this.$router.push('/home')
     }else{
       alert(isLogin.message)
     }
   }
 },
 computed: {
   ...mapState(['isLogin'])
 }
}
</script>