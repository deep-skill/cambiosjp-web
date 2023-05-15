<template>
    <div>
        <NavbarStyleThree />
        <PageTitle />
        <div class="currency-transfer-provider-with-background-color">
            <BusinessCurrency />
            <MoneyTransfer />
            <KeyFeatures />
            <Protecting />
            <SendMoneyOnline />
            <Faq />
        </div>
        <FooterThree />
    </div>
</template>

<script>
import NavbarStyleThree from '../layout/NavbarStyleThree'
import PageTitle from '../business/PageTitle'
import BusinessCurrency from '../business/BusinessCurrency'
import MoneyTransfer from '../business/MoneyTransfer'
import KeyFeatures from '../business/KeyFeatures'
import Protecting from '../business/Protecting'
import SendMoneyOnline from '../business/SendMoneyOnline'
import Faq from '../business/Faq'
import FooterThree from '../layout/FooterThree'

export default {
    name: 'BusinessPage',
    components: {
        NavbarStyleThree,
        PageTitle,
        BusinessCurrency,
        MoneyTransfer,
        KeyFeatures,
        Protecting,
        SendMoneyOnline,
        Faq,
        FooterThree,
    }
}
</script>
