<template>
    <div class="nutrition-score">
        <span class="small">{{ label }}</span>
        <div class="progress" style="height:4px;">
            <div class="progress-bar" role="progressbar"
                :style="{ width: `${barConfiguration.value}%`, 'background-color': barConfiguration.color }">
            </div>
        </div>
        <div class="optimum-bar" :style="{ 'left': `${barConfiguration.optimum}%` }"></div>
    </div>
</template>

<script>
import { toRefs } from "vue";

export default {
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        maximum: {
            type: Number,
            required: true
        },
        optimum: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const { label, value, maximum, optimum } = toRefs(props)

        return {
            label,
            value,
            maximum,
            optimum
        }
    },
    computed: {
        barConfiguration() {
            var multiplicator = 100.0 / this.maximum
            var result = {
                label: this.label,
                value: this.value * multiplicator,
                optimum: this.optimum * multiplicator,
                color: this.calculateBarColor(this.optimum, this.value)
            }

            console.log(result);
            return result;
        }
    },
    methods: {
        calculateBarColor(optimumValue, currentValue) {
            if (currentValue < optimumValue) {
                return "#7fca31"
            } else if (currentValue > optimumValue) {
                return "#dc3545"
            } else {
                return "#ffc107"
            }
        }
    }
}
</script>

<style lang="scss">
.nutrition-score {
    position: relative;

    .optimum-bar {
        position: absolute;
        width: 3px;
        height: 8px;
        bottom: -2px;
        z-index: 10000;

        background-color: red;
    }
}
</style>