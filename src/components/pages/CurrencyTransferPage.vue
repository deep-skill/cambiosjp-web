<template>
    <div>
        <NavbarStyleThree />
        <MainBanner />
        <div class="currency-transfer-provider-with-background-color">
            <PopularCountries />
            <MoneyTransfer />
            <WhyChoose />
            <Services />
            <KeyFeatures />
            <WorkingPeople />
            <Protecting />
            <DownloadApp />
            <Reviews />
            <Faq />
        </div>
        <FooterThree />
    </div>
</template>

<script>
import NavbarStyleThree from '../layout/NavbarStyleThree'
import MainBanner from '../currency-transfer/MainBanner'
import PopularCountries from '../currency-transfer/PopularCountries'
import MoneyTransfer from '../currency-transfer/MoneyTransfer'
import WhyChoose from '../currency-transfer/WhyChoose'
import Services from '../currency-transfer/Services'
import KeyFeatures from '../currency-transfer/KeyFeatures'
import WorkingPeople from '../currency-transfer/WorkingPeople'
import Protecting from '../currency-transfer/Protecting'
import DownloadApp from '../currency-transfer/DownloadApp'
import Reviews from '../currency-transfer/Reviews'
import Faq from '../currency-transfer/Faq'
import FooterThree from '../layout/FooterThree'

export default {
    name: 'CurrencyTransferPage',
    components: {
        NavbarStyleThree,
        MainBanner,
        PopularCountries,
        MoneyTransfer,
        WhyChoose,
        Services,
        KeyFeatures,
        WorkingPeople,
        Protecting,
        DownloadApp,
        Reviews,
        Faq,
        FooterThree,
    }
}
</script>
