<template>
    <div class="payment-page">
        <h1 class="h3 mt-4">Wähle Deine Zahlungsart</h1>
        <b-row>
            <b-col :cols="4" v-for="provider in providers" :key="provider.name">
                <b-card>
                    <b-card-body class="p-0">
                        <a @click="selectProvider(provider.name)"><img :src="`/assets/payment/${provider.name}.png`"
                                :alt="provider.label" /></a>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { useOrderStore } from "@/stores/order"
import router from "../../router"
import { submitOrder } from "../../services/order-service"

export default {
    props: {
        offerId: {
            type: String
        }
    },
    setup() {
        const orderStore = useOrderStore()

        return {
            orderStore,
            providers: [
                { label: 'Postcard', name: 'postfinance-alternate2' },
                { label: 'Postfinance', name: 'postfinance' },
                { label: 'Twint', name: 'twint' },
                { label: 'Mastercard', name: 'mastercard' },
                { label: 'American-Express', name: 'american-express' },
                { label: 'Maestro', name: 'maestro' },
                { label: 'Visa', name: 'visa' },
                { label: 'Paypal', name: 'paypal-alternative2' },
                { label: 'Applepay', name: 'applepay' }
            ]
        }
    },
    methods: {
        selectProvider(providerName) {
            const currentOrder = this.orderStore.currentOrder
            currentOrder.payment = providerName

            // submitOrder(currentOrder)
            this.orderStore.removeCurrentOrder()

            router.push("/order/thankyou")
        }
    }
}
</script>

<style lang="scss">
.payment-page {
    .row {
        margin-left: -6px;
        margin-right: -6px;

        .col-4 {
            padding-left: 3px;
            padding-right: 3px;
            margin-bottom: 6px;
        }
    }

    .card {
        border-radius: 15px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>