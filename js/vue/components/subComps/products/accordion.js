import { ref, reactive, computed } from 'vue'

export default {
    setup() {
        return {}
    },
    template: /*html*/`
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Webdesign
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body text-center bg-primary-subtle">
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