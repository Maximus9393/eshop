import { createApp, onMounted, onUnmounted, ref, reactive, computed } from 'vue'

import Products from './components/products.js'
import AboutUs from './components/about-us.js'
import Home from './components/home.js'

const MainApp = {
    components: {
        Products,
        AboutUs,
        Home
    },
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

        const isLight = ref(false)

        const switchTheme = () => {
            if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
                document.documentElement.setAttribute('data-bs-theme','light')
                isLight.value = true
            }
            else {
                document.documentElement.setAttribute('data-bs-theme','dark')
                isLight.value = false
            }
        }

        return {
            activePage,
            navItems,
            isLight,
            switchTheme
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
                            @click="activePage = item.name"
                            :class="{ active: activePage === item.name, disabled: item.disabled }">
                            {{ item.label }}
                            </a>
                        </li>

                        <li class="nav-item">
                            <button class="btn btn-secondary btn-sm rounded-4 ms-1 mt-1"
                                @click="switchTheme">
                                <i v-if="isLight" class="bi bi-lightbulb"></i>
                                <i v-else class="bi bi-lightbulb-fill"></i>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="row mt-2">
                <div class="col" v-if="activePage === 'home'">
                    <Home />
                </div>
                
                <div class="col" v-else-if="activePage === 'about-us'">
                    <AboutUs />
                </div>
                
                <div class="col" v-else-if="activePage === 'products'">
                    <Products />
                </div>

                <div class="col text-center" v-else>
                    <span class="display-5"><i class="bi bi-bug"></i> Kámo jdu spát, funguje "Domů", "O nás" a "Produkty" <i class="bi bi-bug"></i></span>
                </div>
            </div>
        </div>  
    `
}

createApp(MainApp).mount('#app')
