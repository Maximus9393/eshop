import { ref, reactive, computed } from 'vue'

import Accordion from './subComps/products/accordion.js'
import PriceCalculator from './subComps/products/priceCalculator.js'

export default {
    components: {
        Accordion,
        PriceCalculator
    },
    setup() {
        return {}
    },
    template: /*html*/ ` 
        <div class="display-5">Jaké produkty Vám mohu nabídnout?</div>

        <p class="mt-1">Specializujeme se na návrh, vývoj a optimalizaci webových stránek a aplikací. Naše nabídka je navržena tak, aby odpovídala potřebám jednotlivců, startupů i firem.</p>

        <PriceCalculator />
        <Accordion />
    `
}