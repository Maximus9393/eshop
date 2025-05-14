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
        <div class="display-5">Jaké produkty Vám mohu nabídnout?</div>

        <p class="mt-1">Specializujeme se na návrh, vývoj a optimalizaci webových stránek a aplikací. Naše nabídka je navržena tak, aby odpovídala potřebám jednotlivců, startupů i firem.</p>

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

        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Webdesign
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body text-center">
                    <div class="row">
                        <div class="col">
                        Vytváříme esteticky čisté a uživatelsky přívětivé weby, které odrážejí vaši značku. Návrh designu je plně responzivní a připravený pro moderní zařízení.
                        </div>
                        <div class="col">
                            <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg" class="rounded" width="256">
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    E-shopy na míru
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body text-center">
                    <div class="row">
                        <div class="col">
                            Navrhujeme a stavíme e-shopy na platformách jako je WooCommerce, Shopify nebo jako řešení na míru. S důrazem na rychlost, bezpečnost a UX.
                        </div>
                        <div class="col">
                            <img src="https://cdn.pixabay.com/photo/2019/11/22/20/59/black-friday-4645768_960_720.jpg" class="rounded" width="256">
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    UX / UI Design
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body text-center">
                    <div class="row">
                        <div class="col">
                        Navrhujeme strukturu, logiku a vzhled vašich digitálních produktů tak, aby byly snadno použitelné, funkční a přirozené pro uživatele.
                        </div>
                        <div class="col">
                            <img src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" width="256">
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    `
}