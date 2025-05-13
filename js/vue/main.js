import { createApp, onMounted, onUnmounted, ref, reactive } from 'vue'

// My, neochotní, vedeni neznalými, děláme nemožné pro nevděčné. Tolik jsme toho dokázali, tak dlouho, 
// s tak málem, že jsme nyní kvalifikovaní dělat cokoli z ničeho.

const MainApp = {
    components: {
    },
    setup() {
        const activeTab = ref('home')

        return {
        }
    },
    template: /*html*/`
        <H1>Hello</H1>
    `
}

createApp(MainApp).mount('#app')
