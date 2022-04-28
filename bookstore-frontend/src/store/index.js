import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // ตัวแปร = data ใน vue
    // ตัวอย่าง
    count: 2,
    user: null,
    select: 1,
    modalLoginActive: true
  },
  getters: { // computed ใน vue
  },
  mutations: { // ติดตามการเปลี่ยนแปลงของ state
    incrementMutate(state, value) { // state คือต้องการเปลี่ยน state ตัวไหนข้างบน , value คือค่าที่ส่งมา
      state.count += value
    },
    changeTypeSelectMutate(state, value) {
      state.select = value
    },
    modalLoginMutate(state) {
      state.modalLoginActive = !state.modalLoginActive
    }
  },
  actions: { // คือ function = methods ใน vue
    incrementAction(context, value) { // ใส่ context ทุกครั้ง, value คือค่าที่ส่งมา
      context.commit("incrementMutate", value) // commit คืออ้างถึง mutate ว่าเอาตัวไหน ในวงเล็บจะรับเป็นชื่อ mutate
    },
    changeTypeSelectAction(context, value) {
      context.commit("changeTypeSelectMutate", value)
    },
    modalLoginAction(context) {
      context.commit("modalLoginMutate");
    }
  },
  modules: {
  }
})
