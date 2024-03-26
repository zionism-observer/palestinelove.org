import {reactive} from "vue"

const websites = reactive ({
    data: null,
    error: null
})

function fetchWebsites() {
    // if there is no data in the state, which means data hasn't been fetched from the API yet, fetch the data and store it in the state
    if ((!websites.data) && (!websites.error)) {
        fetch("https://palestinelove.org/api/v1/websites").then(response => {
            response.json().then(data => {
                websites.data = data
            })
        }).catch(e => {
            websites.error = e.message
        })
    }

    return websites
}

export default fetchWebsites