<template>
    <div>
        <NavbarStyleThree />
        <PageTitle />
        <div class="currency-transfer-provider-with-background-color">
            <Services />
            <Currency />
            |<SendMoneyOnline />
            <Protecting />
            <ReceiveMoney />
            <Countries />
        </div>
        <FooterThree />
    </div>
</template>

<script>
import NavbarStyleThree from '../layout/NavbarStyleThree'
import PageTitle from '../personal/PageTitle'
import Services from '../personal/Services'
import Currency from '../personal/Currency'
import SendMoneyOnline from '../personal/SendMoneyOnline'
import Protecting from '../personal/Protecting'
import ReceiveMoney from '../personal/ReceiveMoney'
import Countries from '../personal/Countries'
import FooterThree from '../layout/FooterThree'

export default {
    name: 'PersonalPage',
    components: {
        NavbarStyleThree,
        PageTitle,
        Services,
        Currency,
        SendMoneyOnline,
        Protecting,
        ReceiveMoney,
        Countries,
        FooterThree,
    }
}
</script>
