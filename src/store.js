import { reactive } from 'vue'
import axios from "axios"

export const store = reactive ({
    loading: true,
    yugiGeneratore(){
        axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(resp => {
            console.log(resp.data);
        })
    }
})