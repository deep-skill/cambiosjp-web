<template>
    <div>
        <NavbarStyleThree />
        <PageTitle />
        <div class="currency-transfer-provider-with-background-color">
            <MoneyTransfer />
            <Protec />
            <SendMoneyOnline />
            <Reviews />
        </div>
        <FooterThree />
    </div>
</template>

<script>
import NavbarStyleThree from '../layout/NavbarStyleThree'
import PageTitle from '../how-it-works/PageTitle'
import MoneyTransfer from '../how-it-works/MoneyTransfer'
import Protec from '../how-it-works/Protec'
import SendMoneyOnline from '../how-it-works/SendMoneyOnline'
import Reviews from '../how-it-works/Reviews'
import FooterThree from '../layout/FooterThree'

export default {
    name: 'HowItWorksPage',
    components: {
        NavbarStyleThree,
        PageTitle,
        MoneyTransfer,
        Protec,
        SendMoneyOnline,
        Reviews,
        FooterThree,
    }
}
</script>
