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
					    <input type="text" class="form-control" autocomplete="off" v-model="sendedValue">

					    <div class="amount-currency-select">
						<select v-model="selectedSendedMoney" @change="changeSendedMoney()">
						    <option>USD</option>
						    <option>PEN</option>
						</select>
					    </div>
					</div>
				    </div>

				    <div class="currency-info">
					<div class="bar"></div>
					<span>Compra: <strong>{{sellExchangeRate}}</strong></span>
					<span>Venta: <strong>{{buyExchangeRate}}</strong></span>
				    </div>

				    <div class="form-group">
					<label>Recibes</label>
					<div class="money-transfer-field">
					    <input type="text" class="form-control" autocomplete="off" v-model="receivedValue">

					    <div class="amount-currency-select">
						<select v-model="selectedReceivedMoney" @change="changeReceivedMoney()">
						    <option>PEN</option>
						    <option>USD</option>
						</select>
					    </div>
					</div>
				    </div>

				    <div class="money-transfer-info">
					<span>Ahorras versus los bancos <strong>{{saved}} USD</strong></span>
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
	    let bankSellExchangeRate = 2.952;
	    let bankBuyExchangeRate = 4.071;
	    return {
		sellExchangeRate: 3.052,
		buyExchangeRate: 4.061,
	        saved: 100,
		sendedValue: 1000,
		receivedValue: 3052,
		selectedSendedMoney: "USD",
		selectedReceivedMoney: "PEN"
	    }
	},
	methods: {
	    round(number) {
	        return Math.round(number * 100) / 100;
	    },
	    changeSendedMoney() {
		if (this.selectedSendedMoney === "USD") {
		    this.selectedReceivedMoney = "PEN";
		    this.receivedValue = this.sendedValue * this.sellExchangeRate;
	            this.saved = this.round(this.receivedValue / this.bankSellExchangeRate - this.receivedValue / this.sellExchangeRate);
	        }
		else {
		    this.selectedReceivedMoney = "USD";
		    this.receivedValue = this.round(this.sendedValue / this.buyExchangeRate);
	            this.saved = this.round(this.sendedValue / this.buyExchangeRate - this.sendedValue / this.bankBuyExchangeRate);
	        }
	    },
	    changeReceivedMoney() {
		if (this.selectedReceivedMoney === "USD") {
		    this.selectedSendedMoney = "PEN";
		    this.sendedValue = this.receivedValue * this.buyExchangeRate;
	            this.saved = this.round(this.sendedValue / this.buyExchangeRate - this.sendedValue / this.bankBuyExchangeRate);
		}
		else {
		    this.selectedSendedMoney = "USD";
		    this.sendedValue = this.round(this.receivedValue / this.sellExchangeRate);
	            this.saved = this.round(this.receivedValue / this.bankSellExchangeRate - this.receivedValue / this.sellExchangeRate);
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
	        this.saved = this.round((rates.sellExchangeRate - rates.bankSellExchangeRate) * 1000),
		this.receivedValue = rates.sellExchangeRate * 1000;
		this.bankSellExchangeRate = rates.bankSellExchangeRate;
		this.bankBuyExchangeRate = rates.bankBuyExchangeRate;
	    }
	},
    	mounted() {
	    this.getExchangeRates();
    	}
    }
</script>
