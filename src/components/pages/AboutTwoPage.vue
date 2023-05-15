<template>
    <div>
        <NavbarStyleThree />
        <PageTitle />
        <div class="currency-transfer-provider-with-background-color">
            <About />
            <Funfacts />
            <WhyChoose />
            <Countries />
            <Team />
            <DownloadApp />
            <Investors />
        </div>
        <FooterThree />
    </div>
</template>

<script>
import NavbarStyleThree from '../layout/NavbarStyleThree'
import PageTitle from '../about-two/PageTitle'
import About from '../about-two/About'
import Funfacts from '../about-two/Funfacts'
import WhyChoose from '../about-two/WhyChoose'
import Countries from '../about-two/Countries'
import Team from '../about-two/Team'
import DownloadApp from '../about-two/DownloadApp'
import Investors from '../about-two/Investors'
import FooterThree from '../layout/FooterThree'

export default {
    name: 'CurrencyTransferPage',
    components: {
        NavbarStyleThree,
        PageTitle,
        About,
        Funfacts,
        WhyChoose,
        Countries,
        Team,
        DownloadApp,
        Investors,
        FooterThree,
    }
}
</script>
