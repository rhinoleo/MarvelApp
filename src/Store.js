import axios from 'axios';

export const Store = {

    datas: {
        characters: []
    },

    load() {
        axios.get('http://localhost:3000/').then((res) => {
            this.datas.characters = res.data.data.results
        });
    },

    oneCharacter(id) {
        return axios.get('http://localhost:3000/character/' + id).then((res) => {
            return res.data.data.results[0];
        });
    }
}