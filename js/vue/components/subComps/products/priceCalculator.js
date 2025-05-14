import { ref, reactive, computed, watch } from 'vue'

export default {
    setup() {
        const hours = ref(0)
        const hourlyRate = 1000
        
        // Varianta č.1 - Computed
        const result = computed(() => {
            // Varianta č. 1 - Jednoduchá na pochopení
            // let resultCalc = 0
            
            // if (hours.value < 0) {
            //     hours.value = 0
            // } else {
            //     if (hours.value > 10) {
            //         hours.value = 10
            //     } else {
            //         hours.value = hours.value
            //     }
            // }

            // if (hours.value > 10) {
            //     hours.value = 10
            // }

            // resultCalc = hourlyRate * hours.value
            
            // if (resultCalc < 0) {
            //     resultCalc = 0
            // }

            // return resultCalc

            // Varianta č.2 - Sweatlord
            hours.value = hours.value < 0 ? 0 : hours.value > 10 ? 10 : hours.value
            return Math.max(hourlyRate * hours.value, 0)
        })


        // Varianta č.2 - Watch varianta
        // const result = ref(0)

        // watch(hours, async(newValue, oldValue) => {
            // // Varianta č. 1 - Jednoduchá na pochopení
            // let resultCalc = 0
            
            // if (hours.value < 0) {
            //     hours.value = 0
            // } else {
            //     if (hours.value > 10) {
            //         hours.value = 10
            //     } else {
            //         hours.value = hours.value
            //     }
            // }

            // if (hours.value > 10) {
            //     hours.value = 10
            // }

            // resultCalc = hourlyRate * hours.value
            
            // if (resultCalc < 0) {
            //     resultCalc = 0
            // }

            // return resultCalc

            // // Varianta č.2 - Sweatlord
            // hours.value = hours.value < 0 ? 0 : hours.value > 10 ? 10 : hours.value
            // return Math.max(hourlyRate * hours.value, 0)
        // })

        return {
            hours,
            hourlyRate,
            result
        }

    },
    template: /*html*/`
        <table class="table table-bordered table-sm w-50 mx-auto">
            <thead>
                <tr>
                    <th colspan="3" class="text-center">Cenová kalkulace</th>
                </tr>
                <tr>
                    <th>Hodinový sazba</th>
                    <th>Počet hodin práce</th>
                    <th>Celková cena</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ hourlyRate }} $</td>
                    <td>{{ hours }} h</td>
                    <td>{{ result }} $</td>
                </tr>
                <tr>
                    <td colspan="3" valign="middle">
                        <div class="d-flex justify-content-end">
                            <span class="text-muted ms-2">
                                Zadejte odhadovaný počet hodin práce:
                            </span>
                            <button class="btn btn-primary btn-sm ms-2"
                                @click="hours++">
                                <i class="bi bi-plus"></i>
                            </button>
                            <button class="btn btn-secondary btn-sm ms-2"
                                @click="hours--">
                                <i class="bi bi-dash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    `
}