import { reactive } from 'vue'
export const store = reactive ({
    loading: false,
    cards: null,
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=600&offset=0",
})