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
        <div class="display-5">Kdo jsem?</div>
        <p class="mt-1">Jsem Miroslav Svoboda, a nebojím se sám za sebe, proto na této stránce nenajdete žádný text, psaný stylem
        "my zařídíme", "my uděláme", "my jsme gigantická firma", ale pouze "já". Věřím v B2B přístup k zákazníkovi a věřím že moji
        zákazníci ocení můj osobní přístup k jejich problémům, tak aby vždy věděli že jsou pro mě prioritou..</p>
        <a href="#" class="btn btn-primary mt-2 disabled">Zjistit víc</a>
    `
}