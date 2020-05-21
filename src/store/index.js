import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import request from '@/utils/request'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: {},
    isReg: {},
    data: [],
    addData: {},
    delData: {},
    upDatas: {},
    searData: [],
  },
  mutations: {
    'FETCH_LOGIN' (state, val) {
      state.isLogin = val
    },
    'FETCH_REG' (state, val) {
      state.isReg = val
    },
    'FETCH_HOME' (state, val) {
      state.data = val
    },
    'FETCH_ADD' (state, val) {
      state.addData = val
    },
    'FETCH_DEL' (state, val) {
      state.delData = val
    },
    'FETCH_UPD' (state, val) {
      state.upDatas = val
    },
    'FETCH_SEAR' (state, val) {
      state.searData = val
    }
  },
  actions: {
    'FETCH_LOGIN_ACTION' ({ commit }, val) {//登录
      request.post('http://api.baxiaobu.com/index.php/home/v1/login', qs.stringify(val))
        .then(res => {
          commit('FETCH_LOGIN', res.data)
        })
    },
    'FETCH_REG_ACTION' ({ commit }, val) {//注册
      request.post('http://api.baxiaobu.com/index.php/home/v1/register', qs.stringify(val))
        .then(res => {
          commit('FETCH_REG', res.data)
        })
    },
    'FETCH_HOME_ACTION' ({ commit }) {//默认渲染
      request.get('https://api.baxiaobu.com/index.php/home/v5/getuser')
        .then(res => {
          commit('FETCH_HOME', res.data.users)
        })
    },
    'FETCH_ADD_ACTION' ({ commit }, val) {//添加
      request.post('https://api.baxiaobu.com/index.php/home/v5/add', qs.stringify(val))
        .then(res => {
          commit('FETCH_ADD', res.data)
        })
    },
    'FETCH_DEL_ACTION' ({ commit }, val) {//删除
      request.post('https://api.baxiaobu.com/index.php/home/v5/deleteUser', qs.stringify(val))
        .then(res => {
          commit('FETCH_DEL', res.data)
        })
    },
    'FETCH_UPD_ACTION' ({ commit }, val) {//修改
      request.post('http://api.baxiaobu.com/index.php/home/v1/register', qs.stringify(val))
        .then(res => {
          commit('FETCH_UPD', res.data)
        })
    },
    'FETCH_SEAR_ACTION' ({ commit }, val) {//查询
      request.get('https://api.baxiaobu.com/index.php/home/v5/updateUser?keyword=' + val)
        .then(res => {
          commit('FETCH_SEAR', res.data)
          console.log(res);
        })
    },
  },
  modules: {
  }
})
