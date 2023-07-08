<template>
    <div>
        <footer class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <div class="logo">
                                <router-link to="/"><img src="../../assets/images/black-cambiosjp-logo.png" alt="logo"></router-link>
                                <p>Casa digital de compra y venta de dólares.<br/>
                                   Tipo de cambio justo, operaciones rápidas y seguras.<br/>
                                   Nº Reg SBS: 00555-2020</p>
                            </div>

                            <ul class="social-links">
                                <li><a href="https://www.facebook.com/people/Cambios-JP/100092508623341/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/cambiosjp.ds/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/cambiosjp/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://wa.me/51993863137?text=Hola CambiosJP, deseo realizar una operación."><i class="fab fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget pl-5">
                            <h3>Empresa</h3>

                            <ul class="list">
                                <li><router-link to="/">Nosotros</router-link></li>
                                <li><router-link to="/">¿cómo funciona?</router-link></li>
                                <li><router-link to="/">Blog</router-link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <h3>Soporte</h3>

                            <ul class="list">
                                <li><router-link to="/faq">Preguntas frecuentes</router-link></li>
                                <li><router-link to="/privacy-policy">Políticas de privacidad</router-link></li>
                                <li><router-link to="/terms-condition">Términos y condiciones</router-link></li>
                                <li><router-link to="/contact">Contáctanos</router-link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <h3>Dirección</h3>

                            <ul class="footer-contact-info">
                                <li><span>Ubicación:</span> Av. Velasco Astete 3339, Santiago de Surco, Lima, Perú</li>
                                <li><span>Correo electrónico:</span> <a href="mailto:contacto@cambiosjp.com">contacto@cambiosjp.com</a></li>
                                <li><span>Celular:</span> <a href="tel:+51993863137">+ (51) 993 863 137</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="copyright-area">
                    <p>&copy; {{currentYear}} Deep Skill Software Factory. Todos los derechos reservados <a href="https://deepskill.space/" target="_blank">www.deepskill.space</a></p>
                </div>
            </div>

            <div class="map-image"><img src="../../assets/images/map.png" alt="map"></div>
        </footer>
        <!-- End Footer Area -->
        
       
   <!-- <div 
            @click="scrollToTop()" 
            :class="['back-to-top-btn', {'go-top': isTop}]"
        >
            <i class="fas fa-arrow-up"></i>
        </div> -->

        <a class="appWhatapp" target="_blank" href="https://wa.me/51993863137?text=Hola CambiosJP, deseo realizar una operación.">   <!--WhatsApp button-->
            <img src="../../assets/images/whatsapp.svg" alt="Whatapp"> </a>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data (){
        return {
            isTop: false,
            currentYear: new Date().getFullYear(),
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>
