import store from '../store'
import axios from 'axios'

export function getPerson() {
    axios.get('https://randomuser.me/api/?inc=name,phone,email,picture,dob,nat&nat=us').then(resp => {
        store.dispatch({
            type: 'GET_PERSON',
            person: resp.data.results[0]
        })
    })
}

// export function addCarousel() {
//     store.dispatch({
//         type: 'CAROUSEL',
//         carousel: carousel
//     })
// }

// export function addSanctuary() {
//     store.dispatch({
//         type: 'SANCTUARY',
//         sanctuary: sanctuary
//     })
// }


