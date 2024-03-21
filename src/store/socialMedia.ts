import {reactive} from "vue"

const socialMediaLinks = reactive({
    data: null,
    error: null
})

function fetchSocialMediaLinks() {
    // if there is no data in the state, which means data hasn't been fetched from the API yet, fetch the data and store it in the state
    if ((!socialMediaLinks.data) && (!socialMediaLinks.error)) {
        fetch("https://palestinelove.org/api/v1/social-media").then(response => {
            response.json().then(data => {
                socialMediaLinks.data = data
            })
        }).catch(e => {
            socialMediaLinks.error = e.message
        })
    }

    return socialMediaLinks
}

export default fetchSocialMediaLinks