<template>
    <div :class="['navbar-area currency-transfer-provider-navbar', {'is-sticky': isSticky}]">
        <div class="vibion-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/currency-transfer">
                        <img src="../../assets/images/logo.png" alt="logo">
                        <img src="../../assets/images/black-logo.png" alt="logo">
                    </router-link>
                    
                    <div 
                        class="navbar-toggler"
                        @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state"
                    >
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="#" class="nav-link">Home <i class="fas fa-chevron-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link">
                                            Banking & Payment Processing
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/loan-providers" class="nav-link">
                                            Loan Providers
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/digital-banking" class="nav-link">
                                            Digital Banking
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/financial-services" class="nav-link">
                                            Financial Service Provider
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/bankers-entrepreneurs" class="nav-link">
                                            Bankers & Entrepreneurs
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/social-finance" class="nav-link">
                                            Social Finance Agency
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/currency-transfer" class="nav-link">
                                            Currency Transfer Provider
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><router-link to="/about-two" class="nav-link">About Us</router-link></li>

                            <li class="nav-item"><router-link to="/personal" class="nav-link">Personal</router-link></li>
                            <li class="nav-item"><router-link to="/business" class="nav-link">Business</router-link></li>

                            <li class="nav-item"><router-link to="/how-it-works" class="nav-link">How It Works</router-link></li>

                            <li class="nav-item"><router-link to="/contact-two" class="nav-link">Contact Us</router-link></li>
                        </ul>
                    </div>

                    <div class="others-options d-flex align-items-center">
                        <div class="options-item">
                            <router-link to="/login" class="login-btn">Log in</router-link>
                        </div>
                        <div class="options-item">
                            <router-link to="/sign-up" class="btn btn-primary">Register</router-link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarStyleThree',
    data(){
        return {
            isSticky: false,
            active: false,
            button_active_state: false
        }
    },

    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    }
}
</script>