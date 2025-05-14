import { ref, reactive, computed } from 'vue'

export default {
    setup() {
        const hours = ref(1)
        const hourlyRate = 1000
        
        const result = computed(() => {
            return hourlyRate * hours.value
        })

        return {
            hours,
            hourlyRate,
            result
        }
    },
    template: /*html*/`
        <div class="display-5">Tvoříme weby, které mluví za vás</div>
        <p class="mt-1">Tady najdete projekty, nápady a věci, které mě baví kódovat.</p>
        <a href="#" class="btn btn-primary mt-2">Zjistit víc</a>
    `
}