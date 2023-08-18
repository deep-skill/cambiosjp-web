<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="vibion-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/cambiosjp-logo.png" alt="image">
                        <img src="../../assets/images/black-cambiosjp-logo.png" alt="image">
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
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">
                                    Inicio
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    ¿Cómo funciona?
                                </a>
                                <!--<router-link to="/about-us" class="nav-link">
                                    ¿Cómo funciona?
                                </router-link>-->
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Nosotros
                                </a>
                                <!--<router-link to="/about-us" class="nav-link">
                                    Nosotros
                                </router-link>-->
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Ayuda <i class="fas fa-chevron-down"></i>
                                </a>

                                <ul class="dropdown-menu">
                                <!--<li class="nav-item">
                                        <router-link to="/faq" class="nav-link">
                                            Preguntas frecuentes
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/error" class="nav-link">
                                            Error Page
                                        </router-link>
                                    </li>-->
                                    <li class="nav-item">
                                        <router-link to="/terms-condition" class="nav-link">
                                            Términos y condiciones
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/privacy-policy" class="nav-link">
                                            Políticas de privacidad
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <!--<li class="nav-item">
                                <a href="#" class="nav-link">
                                    Blog <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/blog-1" class="nav-link">
                                            Blog Grid
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/blog-2" class="nav-link">
                                            Blog Right Sidebar
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/blog-details" class="nav-link">
                                            Blog Details
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">
                                    Contacto
                                </router-link>
                            </li>-->
                        </ul>
                    </div>
                    <div class="others-options">
			<a href="https://forms.gle/no9u9SFdKFLmoHJo7" class="login-btn">
		    	    <i class="flaticon-user"></i> Regístrate
			</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
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
