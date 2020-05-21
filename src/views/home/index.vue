<template>
  <div>
    <div v-if="isAdd">
      <p>name: <input type="text" v-model="user.name"></p>
      <p>age: <input type="text" v-model="user.age"></p>
      <p>msg: <input type="text" v-model="user.msg"></p>
      <button @click="add">确定添加</button>
      <button @click="isAdd=false">取消添加</button>
    </div>
    <div v-if="isUpdata">
      <p>name: <input type="text" v-model="user.name"></p>
      <p>age: <input type="text" v-model="user.age"></p>
      <p>msg: <input type="text" v-model="user.msg"></p>
      <button @click="upData">确定修改</button>
      <button @click="isUpdata=false">取消修改</button>
    </div>
    <button @click="isAdd=true">添加</button>
    <input type="text" v-model="search" @keyup="onChange">
    <table border="1">
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>age</td>
          <td>msg</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i of data" :key="i.id">
          <td>{{i.id}}</td>
          <td>{{i.name}}</td>
          <td>{{i.age}}</td>
          <td>{{i.msg}}</td>
          <td>
            <button @click="upd(i,i.id)">修改</button>
            <button @click="del(i.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import './styles.less'
export default {
  mounted () {
    this.$store.dispatch('FETCH_HOME_ACTION')
  },
  data () {
    return {
      cid: 0,
      isAdd: false,
      isUpdata: false,
      search: '',
      user: {
        name: '',
        age: '',
        msg: '',
      },
    }
  },
  methods: {
    onChange () {
     this.$store.dispatch('FETCH_SEAR_ACTION', this.search)
    },
    upd (data, id) {
      this.isUpdata = true
      this.cid = id
      this.user.name = data.name
      this.user.age = data.age
      this.user.msg = data.msg
    },
    upData () {
      this.isUpdata = false
      this.$store.dispatch('FETCH_UPD_ACTION', {id: this.cid, ...this.user})
      this.user.name = ''
      this.user.age = ''
      this.user.msg = ''
    },
    add () {    
      this.isAdd = false
      this.$store.dispatch('FETCH_ADD_ACTION', this.user)
      this.user.name = ''
      this.user.age = ''
      this.user.msg = ''    
    },
    del (id) {
       this.$store.dispatch('FETCH_DEL_ACTION', {id})
    }
  },
  watch: {
    addData ({status, info}) {
      if (Number(status) === 200) {
        alert(info)
        window.location.reload()
      }else{
        alert(info)
      }
    },
    delData ({status, info}) {
      if (Number(status) === 200) {
        alert(info)
        window.location.reload()
      }else{
        alert(info)
      }
    },
    upDatas ({status, message}) {
      if (Number(status) === 200) {
        alert(message)
        window.location.reload()
      }else{
        alert(message)
      }
    },
  },
  computed: {
   ...mapState(['data', 'addData', 'delData', 'upDatas', 'searData'])
 }
}
</script>
