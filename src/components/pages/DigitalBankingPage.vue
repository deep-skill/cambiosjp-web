<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Information />
        <Services />
        <ServicesTwo />
        <ServicesThree />
        <Invoicing />
        <FunFacts />
        <Feedback />
        <ReadyToTalk />
        <Partner />
        <AppDownload />
        <AccountCreate />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layout/NavbarStyleTwo'
import MainBanner from '../digital-banking/MainBanner'
import Information from '../digital-banking/Information'
import Services from '../common/Services'
import ServicesTwo from '../common/ServicesTwo' 
import ServicesThree from '../common/ServicesThree' 
import Invoicing from '../common/Invoicing'
import FunFacts from '../common/FunFacts'
import Feedback from '../common/Feedback'
import ReadyToTalk from '../common/ReadyToTalk'
import Partner from '../common/Partner'
import AppDownload from '../common/AppDownload'
import AccountCreate from '../common/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'DigitalBankingPage',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Information,
        Services,
        ServicesTwo,
        ServicesThree,
        Invoicing,
        FunFacts,
        Feedback,
        ReadyToTalk,
        Partner,
        AppDownload,
        AccountCreate,
        Footer,
    }
}
</script>