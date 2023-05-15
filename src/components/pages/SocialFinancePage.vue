<template>
    <div>
        <NavbarStyleTwo class="bg-white" />
        <MainBanner />
        <Partner />
        <AboutUs />
        <Flexibility />
        <FunFacts />
        <Security />
        <AwesomeFeatures />
        <Testimonials />
        <Blog />
        <Subscribe />
        <FooterTwo />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layout/NavbarStyleTwo'
import MainBanner from '../social-finance/MainBanner'
import Partner from '../social-finance/Partner'
import AboutUs from '../social-finance/AboutUs'
import Flexibility from '../social-finance/Flexibility'
import FunFacts from '../social-finance/FunFacts'
import Security from '../social-finance/Security'
import AwesomeFeatures from '../social-finance/AwesomeFeatures'
import Testimonials from '../social-finance/Testimonials'
import Blog from '../social-finance/Blog'
import Subscribe from '../social-finance/Subscribe'
import FooterTwo from '../layout/FooterTwo'

export default {
    name: 'SocialFinancePage',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Partner,
        AboutUs,
        Flexibility,
        FunFacts,
        Security,
        AwesomeFeatures,
        Testimonials,
        Blog,
        Subscribe,
        FooterTwo,
    }
}
</script>
