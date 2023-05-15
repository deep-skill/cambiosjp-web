<template>
    <div class="ctp-footer-area pt-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="ctp-footer-widget">
                        <div class="logo">
                            <router-link to="/currency-transfer">
                                <img src="../../assets/images/logo.png" alt="logo">
                            </router-link>
                        </div>
                        <ul class="social-links">
                            <span>Find us on social media</span>
                            <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="ctp-footer-widget">
                        <h3>Company</h3>

                        <ul class="links">
                            <li><router-link to="/about-us">About Us</router-link></li>
                            <li><router-link to="/features-2">Features</router-link></li>
                            <li><router-link to="/pricing">Our Pricing</router-link></li>
                            <li><router-link to="/blog-1">Latest News</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="ctp-footer-widget">
                        <h3>Support</h3>

                        <ul class="links">
                            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                            <li><router-link to="/terms-condition">Terms & Condition</router-link></li>
                            <li><router-link to="/contact-two">Contact Us</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="ctp-footer-widget">
                        <h3>Need help?</h3>
                        
                        <ul class="info">
                            <li>
                                <span>Location: </span>
                                27 Division St, New York, NY 10002, USA
                            </li>
                            <li>
                                <span>Email: </span>
                                <a href="mailto:vibion@gmail.com">vibion@gmail.com</a>
                            </li>
                            <li>
                                <span>Email: </span>
                                <a href="tel:321984754">+ (321) 984 754</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <p>© Luvion is proudly created by <a href="https://envytheme.com/" target="_blank"> EnvyTheme</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterThree'
}
</script>