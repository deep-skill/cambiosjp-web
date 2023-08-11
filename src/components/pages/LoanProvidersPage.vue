<template>
    <div>
        <Navbar />
        <MainBanner />
        <Featured />
        <HowItWorks />
   <!-- <Services />
        <ServicesTwo />
        <ServicesThree />
        <ServicesFour /> -->
        <Comparisons class="bg-f6f4f8" />
   <!-- <FeaturesTwo />
        <Invoicing />
        <FunFacts />
        <Feedback />
        <ReadyToTalk />
        <Partner />
        <AppDownload />
        <Blog /> -->
        <AccountCreate />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import MainBanner from '../loan-providers/MainBanner'
import Featured from '../loan-providers/Featured'
import HowItWorks from '../loan-providers/HowItWorks'
import Services from '../loan-providers/Services'
import ServicesTwo from '../loan-providers/ServicesTwo'
import ServicesThree from '../loan-providers/ServicesThree'
import ServicesFour from '../loan-providers/ServicesFour'
import Comparisons from '../common/Comparisons'
import FeaturesTwo from '../loan-providers/FeaturesTwo'
import Invoicing from '../common/Invoicing'
import FunFacts from '../common/FunFacts'
import Feedback from '../common/Feedback'
import ReadyToTalk from '../common/ReadyToTalk'
import Partner from '../common/Partner'
import AppDownload from '../common/AppDownload'
import Blog from '../loan-providers/Blog'
import AccountCreate from '../common/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'LoanProvidersPage',
    components: {
        Navbar,
        MainBanner,
        Featured,
        HowItWorks,
        Services,
        ServicesTwo,
        ServicesThree,
        ServicesFour,
        Comparisons,
        FeaturesTwo,
        Invoicing,
        FunFacts,
        Feedback,
        ReadyToTalk,
        Partner,
        AppDownload,
        Blog,
        AccountCreate,
        Footer,
    }
}
</script>
