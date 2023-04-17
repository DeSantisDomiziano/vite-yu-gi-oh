import { reactive } from 'vue'
export const store = reactive ({
    loading: true,
    cards: null,
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0",
})