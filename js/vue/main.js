import { createApp, onMounted, onUnmounted, ref, reactive } from 'vue'
import Navbar from './navbar'

// My, neochotní, vedeni neznalými, děláme nemožné pro nevděčné. Tolik jsme toho dokázali, tak dlouho, 
// s tak málem, že jsme nyní kvalifikovaní dělat cokoli z ničeho.

const MainApp = {
    components: {
        Navbar
    },
    setup() {
        // const something = ref('home')

        return {
        }
    },
    template: /*html*/`
        <div class="container">
            <div class="row">
                <Navbar>
            </div>
            <div class="row">
            </div>
        </div>  
    `
}

createApp(MainApp).mount('#app')
