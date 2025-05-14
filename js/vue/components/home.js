import { ref, reactive, computed } from 'vue'

export default {
    setup() {
        const imageIndex = ref(0)

        const imagesSrcs = [
            { src: './img/stul.jpg' },
            { src: './img/lampa.jpg' },
            { src: './img/zidle.jpg' },
            { src: './img/architektura.jpg' },
        ]

        const imageSrc = computed(() => {
            imageIndex.value = Math.min(imageIndex.value, imagesSrcs.length - 1)

            // Úkol, -> Když dojedu nakonec, chci jet odkonce zpátky na začátek.
            // když dojedu na začátek chci znovu jet nakonec.

            return imagesSrcs[imageIndex.value]
        })

        return {
            imageIndex,
            imageSrc
        }
    },
    template: /*html*/`
        <!--
            <div class="row">
                <div class="col">
                    <div class="display-5">Tvoříme weby, které mluví za vás</div>
                    <p>Tady najdete projekty, nápady a věci, které mě baví kódovat.</p>
                    <div class="d-flex justify-content-start">
                        <a href="#" class="btn btn-primary btn-sm">Zjistit víc</a>
                    </div>
                </div>
            </div>
        -->

        <div class="row mt-3">
            <div class="col-8">
                <div class="display-6">Co dělám? Všechno, a nic...</div>
                <div class="text-muted fst-italic text-end">A teď se světe div!</div>
                <div class="fw-light mt-2 mb-2">
                    Specializujeme se na návrh, vývoj a optimalizaci webových stránek a aplikací. 
                    Naše nabídka je navržena tak, aby odpovídala potřebám jednotlivců, startupů i firem.
                </div>
            </div>
            <div class="col">
                <img :src="imageSrc.src"
                    @click="imageIndex++" 
                    class="rounded" 
                    width="256">
            </div>
        </div>
    `
}