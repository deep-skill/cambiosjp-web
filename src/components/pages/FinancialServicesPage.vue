<template>
    <div>
        <Navbar />
        <MainBanner />
        <Partner />
        <Experience />
        <Support />
        <Business />
        <Testimonials />
        <SuccessStory />
        <Global />
        <Payment />
        <GetStarted />
        <Footer /> 
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import MainBanner from '../financial-services/MainBanner'
import Partner from '../financial-services/Partner'
import Experience from '../financial-services/Experience'
import Support from '../financial-services/Support'
import Business from '../financial-services/Business'
import Testimonials from '../financial-services/Testimonials'
import SuccessStory from '../financial-services/SuccessStory'
import Global from '../financial-services/Global'
import Payment from '../financial-services/Payment'
import GetStarted from '../financial-services/GetStarted'
import Footer from '../layout/Footer'

export default {
    name: 'FinancialServicesPage',
    components: {
        Navbar,
        MainBanner,
        Partner,
        Experience,
        Support,
        Business,
        Testimonials,
        SuccessStory,
        Global,
        Payment,
        GetStarted,
        Footer,
    }
}
</script>