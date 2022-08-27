<template>
    <div class="thankyou-page">
        <h1>Vielen Dank</h1>
        <p>Vielen Dank für Deine Bestellung. Dein Menü wird in Kürze von <span class="text-primary">Housi</span>
            zubereitet.</p>
        <p>Du kannst es in ca.</p>
        <div class="countdown-timer">{{ time }}</div>
        <p>in unserer <span class="text-primary">freshfood station</span> in Brig abholen.<br />En guete.</p>
    </div>
</template>

<script>
import moment from 'moment'
import { ref } from 'vue'

export default {
    props: {
    },
    setup() {
        const date = ref(moment(60 * 10 * 1000))

        return {
            date
        }
    },
    computed: {
        time() {
            return this.date.format('mm:ss');
        }
    },
    mounted() {
        setInterval(() => {
            this.date = moment(this.date.subtract(1, 'seconds'))
        }, 1000);
    }
}
</script>

<style lang="scss">
.thankyou-page {
    .countdown-timer {
        font-size: 5em;
        text-align: center;
        margin-bottom: 20px;
    }
}
</style>