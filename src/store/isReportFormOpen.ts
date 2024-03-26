import {ref} from "vue"

const isReportFormOpen = ref(false)
const resourceBeingReported = ref({
    name: '',
    url: ''
})

export { isReportFormOpen, resourceBeingReported }