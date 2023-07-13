<template>
    <div class="main-banner-section">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="banner-content">
                                <h1>Cambia soles y dólares online.</h1>
                                <p>El mejor tipo de cambio del Perú. <br/> Más rápido, más seguro, más justo.</p>
                                <a href="https://forms.gle/no9u9SFdKFLmoHJo7" class="btn btn-primary">
                                    Regístrate
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="money-transfer-form">
                                <form>
                    <div class="form-group">
                    <label>Envías</label>
                    <div class="money-transfer-field">
                        <input type="number" class="form-control" autocomplete="off" v-model="sentValue">

                        <div class="amount-currency-select">
                        <select v-model="selectedSentMoney" @change="changeSentMoney()">
                            <option>Soles</option>
                            <option>Dólares</option>
                        </select>
                        </div>
                    </div>
                    </div>

                    <div class="currency-info">
                    <div class="bar"></div>
                    <span>Compra: <strong>{{buyExchangeRate}}</strong></span>
                    <span>Venta: <strong>{{sellExchangeRate}}</strong></span>
                    </div>

                    <div class="form-group">
                    <label>Recibes</label>
                    <div class="money-transfer-field">
                        <input type="number" class="form-control" autocomplete="off" v-model="receivedValue">

                        <div class="amount-currency-select">
                        <select v-model="selectedReceivedMoney" @change="changeReceivedMoney()">
                            <option>Soles</option>
                            <option>Dólares</option>
                        </select>
                        </div>
                    </div>
                    </div>

                    <div class="money-transfer-info">
                    <span>Ahorras versus los bancos <strong>S/ {{saved}}</strong></span>
                    </div>

                    <button v-on:click="sendOperation()" type="button" class="btn btn-primary">Cambia</button>

                                    <div class="terms-info">
                                        <p>Estoy de acuerdo con los  <router-link to="/terms-condition">Términos y condiciones</router-link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainBanner',
        data () {
            let bankBuyExchangeRate = 2.952;
            let bankSellExchangeRate = 4.152;
            return {
                sellExchangeRate: 4.052,
                buyExchangeRate: 3.052,
                saved: 100,
                sentValue: 1000,
                receivedValue: 3052,
                selectedSentMoney: "Dólares",
                selectedReceivedMoney: "Soles"
            }
        },
        methods: {
            round(number) {
                return Math.round(number * 100) / 100;
            },
            changeSentMoney() {
                if (this.selectedSentMoney === "Dólares") {
                    this.selectedReceivedMoney = "Soles";
                    this.receivedValue = this.round(this.sentValue * this.buyExchangeRate);
                    this.saved = this.round(this.receivedValue - this.sentValue * this.bankBuyExchangeRate);
                }
                else {
                    this.selectedReceivedMoney = "Dólares";
                    this.receivedValue = this.round(this.sentValue / this.sellExchangeRate);
                    this.saved = this.round(this.receivedValue - this.sentValue / this.bankSellExchangeRate);
                }
            },
            changeReceivedMoney() {
                if (this.selectedReceivedMoney === "Dólares") {
                    this.selectedSentMoney = "Soles";
                    this.sentValue = this.receivedValue * this.sellExchangeRate;
                    this.saved = this.round(this.receivedValue - this.sentValue / this.bankSellExchangeRate);
                }
                else {
                    this.selectedSentMoney = "Dólares";
                    this.sentValue = this.round(this.receivedValue / this.buyExchangeRate);
                    this.saved = this.round(this.receivedValue - this.sentValue * this.bankBuyExchangeRate);
                }
            },
            sendOperation() {
                window.open('https://wa.me/51993863137?text=Hola CambiosJP, deseo realizar una operación.');
            },
            async getExchangeRates() {
                const response = await fetch('https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-784d1d9e-feff-4aab-ad43-fc8df342e1e3/cambiosjp/get_exchange_rate');
                const rates = await response.json();
                this.sellExchangeRate = rates.sellExchangeRate,
                this.buyExchangeRate = rates.buyExchangeRate,
                this.saved = this.round((rates.buyExchangeRate - rates.bankBuyExchangeRate) * 1000),
                this.receivedValue = rates.buyExchangeRate * 1000;
                this.bankSellExchangeRate = rates.bankSellExchangeRate;
                this.bankBuyExchangeRate = rates.bankBuyExchangeRate;
            }
        },
        mounted() {
            this.getExchangeRates();
        }
    }
</script>
