import axios from 'axios'

const state = { 
    preferiti: []
};

const getters = { 
    wishList: state => state.preferiti
};

const actions = { 
    async fetchPreferiti({commit}){
      const response = await axios.get("http://localhost:3000/preferiti");
      commit("setPreferiti", response.data);
    },
    async addPreferiti({commit}, preferito){
      const response = await axios.post("http://localhost:3000/preferiti", preferito);
      commit("addNewPreferiti", response.data)
    },
    async deletePreferiti({commit}, id){
      await axios.delete(`http://localhost:3000/preferiti/${id}`);
      commit("removePreferiti", id)
    }
};

const mutations = { 
    setPreferiti: (state, preferiti) => (
        state.preferiti = preferiti
    ),
    addNewPreferiti: (state, preferito) => state.preferiti.push(preferito),
    removePreferiti: (state, id) => (        
        state.preferiti.filter(preferito => preferito.id !== id),
        state.preferiti.splice(preferito => preferito.id, 1)        
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}