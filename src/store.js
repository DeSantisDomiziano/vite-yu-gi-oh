import { reactive } from 'vue'
import axios from "axios"
export const store = reactive ({
    loading: false,
    cards: [],
    archetypes: null,
    archetype: '',
    api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0",
    yugiGeneratore(url){
        axios
        .get(url)
        .then(resp => {
            store.cards = resp.data.data
            store.loading = true
        })
    },
    
})