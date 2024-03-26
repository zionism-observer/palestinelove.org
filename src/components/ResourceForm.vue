<template>
    <div>
        <div class="heading">
            <div>
                <div class="heading-header">
                    <div>
                        <h1>{{ isNew ? "Contribute" : "Report" }}</h1>
                        <RouterLink v-if="!noPopup" to="/policy">
                            <span>Learn more</span>
                            <ArrowRight style="height: 8.4px" />
                        </RouterLink>
                    </div>
                    <button v-if="!noPopup" @click="isReportFormOpen = !isReportFormOpen"><XMark /></button>
                </div>
                <div class="policies">
                    <div>
                        <h2>We do not allow:</h2>
                        <ul>
                            <li>Hate speech or symbols</li>
                            <li>Misinformation</li>
                            <li>Spam</li>
                            <li>Threats of violence</li>
                        </ul>
                    </div>
                    <div v-if="!isNew">
                        <h2>We don't remove resources based on:</h2>
                        <ul>
                            <li>Antizionism</li>
                            <li>Policy disagreement</li>
                            <li>Criticism of governments/officials</li>
                            <li>Respectful discourse</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-if="noPopup" class="side-links">
                <RouterLink v-if="isNew" to="/report">
                    <span>Report resource</span>
                    <Flag />
                </RouterLink>
                <RouterLink v-else to="/contribute">
                    <span>Contribute resource +</span>
                </RouterLink>
                <RouterLink to="/policy">
                    <span>Learn more</span>
                    <ArrowRight style="height: 8.4px" />
                </RouterLink>
            </div>
        </div>
        <form method="POST">
            <div v-if="!isNew">
                <label for="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div>
                <label for="name">{{ isNew ? "Name" : "Resource name" }}</label>
                <input type="text" id="name" name="name" placeholder="Name or handle" :value="resourceBeingReported.name || ''" required />
                <div class="note">
                    <InformIcon />
                    <span>For social media account, use handle</span>
                </div>
            </div>

            <div>
                <label for="url">URL</label>
                <input type="url" id="url" name="url" placeholder="https://..." :value="resourceBeingReported.url || ''" required />
                <div class="note">
                    <InformIcon />
                    <span>We only publish Palestine related resources</span>
                </div>
            </div>
            <div v-if="isNew">
                <label for="type">Resource type</label>
                <select id="type" name="type" required>
                    <option value="">Select Resource Type...</option>
                    <option value="social-media">Social Media Account</option>
                    <option value="website">Website</option>
                </select>
            </div>
            <div v-if="!isNew">
                <label for="reason">Reason for reporting</label>
                <select id="reason" name="reason" required>
                    <option value="">Select reason for reporting...</option>
                    <option value="social-media">I just don't like it</option>
                    <option value="website">Hate speech or symbols</option>
                    <option value="website">False information</option>
                    <option value="website">Spam</option>
                    <option value="website">Other</option>
                </select>
            </div>
            <div>
                <label for="description">Description</label>
                <textarea rows="4" id="description" name="description" :placeholder="isNew ? 'Tell people about the resource' : 'Tell us more about why you’re reporting this resource'" required></textarea>
                <div class="note">
                    <InformIcon />
                    <span>Be descriptive and kind, but not verbose (1-2 sentences)</span>
                </div>
            </div>
            <div v-if="isNew">
                <label for="comments">Comments</label>
                <textarea rows="4" id="comments" name="comments" placeholder="Additional documentation, message to us, etc."></textarea>
            </div>
            <button type="submit">
                <span>Submit</span>
                <ArrowRight />
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import ArrowRight from "@/components/icons/ArrowRight.vue"
import InformIcon from "@/components/icons/InformIcon.vue"
import Flag from "@/components/icons/Flag.vue"
import XMark from "@/components/icons/XMark.vue"
import {isReportFormOpen, resourceBeingReported} from "@/store/isReportFormOpen"

defineProps<{
    isNew: boolean
    noPopup?: boolean
}>()
</script>

<style scoped>
.heading {

}

.heading-header {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
}

h1 {
    font-size: 24px;
    margin-bottom: 4px;
}

.heading-header a {
    align-items: center;
    column-gap: 4px; /* original: 2px */
    flex-direction: row;
}

.heading-header a span {
    color: var(--color-gray-2);
    font-size: 12px; /* original: 10px */
}

.heading-header a svg {
    fill: var(--color-gray-2);
}

.heading-header button {
    height: fit-content;
    width: fit-content;
}

.heading-header button svg {
    stroke: var(--color-black);
    width: 12px;
}

.policies {
    column-gap: 32px;
    flex-direction: row;
}

h2 {
    font-size: 12px; /* original: 10px */
    margin-bottom: 8px;
}

li {
    font-size: 12px; /* original: 10px */
}

.side-links {
    align-items: end;
    display: none;
    row-gap: 12px; /* original: 24px */
}

.side-links > a {
    align-items: center;
    column-gap: 4px;
    flex-direction: row;
    width: fit-content;
}

.side-links > a span {
    color: var(--color-gray-2);
    font-size: 14px;
}

.side-links > a:nth-of-type(2) {
    /* original-column-gap: 2px */
}

.side-links > a:nth-of-type(2) span {
    font-size: 12px; /* original: 10px */
}

.side-links > a:nth-of-type(2) svg {
    fill: var(--color-gray-2);
}

form {
    border-top: 1px solid var(--color-black);
    margin-top: 24px;
    padding-top: 24px;
    row-gap: 16px;
}

label {
    color: #454C52;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
}

input,
textarea,
select {
    border-radius: 8px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(110, 110, 118, 0.16);
    padding: 10px 14px;
}

input::placeholder,
textarea::placeholder {
    color: #9EA5AD;
}

textarea {
    resize: vertical;
}

.note {
    align-items: center;
    column-gap: 8px;
    flex-direction: row;
    margin-top: 8px;
}

.note span {
    color: var(--color-gray-2);
    font-size: 14px;
}

button[type="submit"] {
    align-items: center;
    background-color: var(--color-white); /* original: not present */
    border-radius: 8px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(110, 110, 118, 0.16);
    column-gap: 10px;
    flex-direction: row;
    padding: 14px 22px;
    width: fit-content;
}

button[type="submit"] span {
    /* original color: #CED2D6 */
    font-weight: 600;
}

button[type="submit"] svg {
    fill: var(--color-black); /* original: #CED2D6 */
    width: 15px;
}

@media (min-width: 768px) {
    .heading {
        flex-direction: row;
        justify-content: space-between;
    }

    .side-links {
        display: flex;
    }
}
</style>