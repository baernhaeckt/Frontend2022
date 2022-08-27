<template>
    <div :class="['animated', { 'animation-start': animateEntrance, 'click-animate': animateOnClick, 'animation-finish': animationFinished }]"
        @click="clickAnimate">
        <slot />
    </div>
</template>

<script>
import { ref, toRefs } from 'vue'

export default {
    props: {
        delay: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const { delay } = toRefs(props)

        const animateEntrance = ref(false)
        const animateOnClick = ref(false)
        const animationFinished = ref(false)

        return {
            delay,
            animateEntrance,
            animateOnClick,
            animationFinished
        }
    },
    mounted() {

        if (this.delay > 0) {
            setTimeout(() => {
                this.animateEntrance = true

                setTimeout(() => {
                    this.animateEntrance = false
                    this.animationFinished = true
                }, 500)
            }, this.delay)
        } else {
            this.animateEntrance = true

            setTimeout(() => {
                this.animateEntrance = false
                this.animationFinished = true
            }, 500)
        }
    },
    methods: {
        clickAnimate() {
            this.animateOnClick = true
            setTimeout(() => {
                this.animateOnClick = false
            }, 500)
        }
    }
}
</script>

<style lang="scss">
.animated {
    -webkit-perspective: 1000;

    >* {
        opacity: 0;
        transform: translateZ(-1400px);
    }

    &.animation-finish {
        >* {
            opacity: 1;
            transform: translateZ(0);
        }
    }

    &.animation-start {
        >* {
            animation: slide-in-fwd-center 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
        }
    }

    &.click-animate {
        >* {
            animation: click-animation 0.25s ease-in-out both;
        }
    }
}

@keyframes slide-in-fwd-center {
    0% {
        transform: translateZ(-1400px);
        opacity: 0;
    }

    100% {
        transform: translateZ(0);
        opacity: 1;
    }
}

@keyframes click-animation {
    0% {
        transform: translateZ(0);
    }

    50% {
        transform: translateZ(-700px);
    }

    100% {
        transform: translateZ(0);
    }
}
</style>