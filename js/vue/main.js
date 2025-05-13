import { createApp, onMounted, onUnmounted, ref, reactive } from 'vue'

const MainApp = {
    components: {},
    setup() {
        const activePage = ref('home')

        const navItems = [
            { name: 'home', label: 'Domů' },
            { name: 'about-us', label: 'O nás' },
            { name: 'products', label: 'Produkty' },
            { name: 'inspiration', label: 'Inspirace' },
            { name: 'contact', label: 'Kontakt' },
            { name: 'reviews', label: 'Recenze', disabled: true },
        ]

        return {
            activePage,
            navItems
        }
    },
    template: /*html*/`
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <i class="bi bi-pc-display-horizontal"></i> - Míra Kouduje
                </a>
                <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item" v-for="item in navItems" :key="item.name">
                            <a class="nav-link"
                            href="#"
                            @click.prevent="activePage = item.name"
                            :class="{ active: activePage === item.name, disabled: item.disabled }">
                            {{ item.label }}
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="display-4 fw-bold">Vítejte na mém webu</h1>
                    <p class="lead">Tady najdete projekty, nápady a věci, které mě baví kódovat.</p>
                    <a href="#" class="btn btn-primary btn-lg mt-3">Zjistit víc</a>
                </div>
            </div>
            <div class="row">

            </div>
        </div>  
    `
}

createApp(MainApp).mount('#app')
