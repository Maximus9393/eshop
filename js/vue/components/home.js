import { ref, reactive, computed } from 'vue'

export default {
    setup() {
        const imageIndex = ref(0)
        const direction = ref(1)

        const imagesSrcs = [
            { src: './img/stul.jpg' },
            { src: './img/lampa.jpg' },
            { src: './img/zidle.jpg' },
            { src: './img/architektura.jpg' },
        ]

        const imageSrc = computed(() => {
            return imagesSrcs[imageIndex.value] ?? { src: ''}
        })

        const nextImage = () => {
        const next = imageIndex.value + direction.value

            if (next >= imagesSrcs.length) {
                 direction.value = -1
                 imageIndex.value = imagesSrcs.length - 2
        }   else if (next < 0) {
                direction.value = 1
                imageIndex.value = 1
  }         else {
                imageIndex.value = next
  }
        

            
        }

        return {
            imageIndex,
            direction,
            imagesSrcs,
            imageSrc,
            nextImage
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
                    @click="nextImage" 
                    class="rounded" 
                    width="256">
            </div>
        </div>
    `
}