<template>
    <div>
        <div class="ctp-send-money-online-area ptb-100">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 col-md-12">
                        <div class="ctp-send-money-online-content">
                            <h1>There are only a few steps you can take to send money online</h1>
                            <ul class="ctp-list">
                                <li> 
                                    <img src="../../assets/images/currency-transfer-provider/circle-check.svg" alt="image"> 
                                    Move money on-the-go
                                </li>
                                <li>
                                    <img src="../../assets/images/currency-transfer-provider/circle-check.svg" alt="image"> 
                                    Currency wallets
                                </li>
                                <li>
                                    <img src="../../assets/images/currency-transfer-provider/circle-check.svg" alt="image"> 
                                    Set rate alerts
                                </li>
                            </ul>
                            <div class="video-view">
                                <a 
                                    href="javascript:void(0)" 
                                    v-on:click="isPopupMethod(isPopup)"
                                    class="video-btn"
                                >
                                    <i class="fas fa-play"></i> 
                                    <span>See how it works</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12">
                        <form class="ctp-send-money-online-form">
                            <div class="form-header">
                                <span>Exchange Rate</span>
                                <h3>1 GBP = 1.29356 USD</h3>
                            </div>
                            <div class="form-content">
                                <div class="form-group">
                                    <label>Delivery Method</label>
                                    <select>
                                        <option>Bank Transfer</option>
                                        <option>Send Money</option>
                                        <option>Interest Money</option>
                                        <option>Invest Money</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>You Transfer</label>
                                    <input type="text" class="form-control" autocomplete="off" value="100">
                                    <div class="amount-currency-select">
                                        <select>
                                            <option>GBP</option>
                                            <option>USD</option>
                                            <option>EUR</option>
                                            <option>BRL</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group zero">
                                    <label>Recipient Gets</label>
                                    <input type="text" class="form-control" autocomplete="off" value="129.35">
                                    <div class="amount-currency-select">
                                        <select>
                                            <option>USD</option>
                                            <option>GBP</option>
                                            <option>EUR</option>
                                            <option>BRL</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="info">
                                    <p><span>Delivery Time:</span> 1 Working Days</p>
                                </div>
                                <button type="submit" class="btn btn-primary">Send Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <div class="popup-overlay-close-line"></div>
                        <div class="popup-overlay-close-line"></div>
                    </div>
                    <div class="play-video">
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SendMoneyOnline',
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>