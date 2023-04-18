import { reactive } from 'vue'
import axios from "axios"
export const store = reactive ({
    loading: false,
    cards: null,
    archetype: [],
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0",
    yugiGeneratore(){
        axios
        .get(store.url)
        .then(resp => {
            store.cards = resp.data.data
            store.loading = true
        })
    },
    
})