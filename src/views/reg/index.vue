<template>
  <div>
    账号:<input v-model="users.username" type="text"><br/>
    密码:<input v-model="users.pwd" type="password"><br/>
    <button @click="clk">注册</button>
    <router-link to="/login">去登录</router-link>
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
    this.$store.dispatch('FETCH_REG_ACTION', this.users)
   }
 },
 watch: {
   isReg (isReg) {
     if(Number(isReg.status) === 200){
      alert(isReg.info)
      this.$router.push('/login')
     }else{
       alert(isReg.info)
     }
   }
 },
 computed: {
   ...mapState(['isReg'])
 }
}
</script>