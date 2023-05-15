<template>
    <div>
        <NavbarStyleThree />
        <PageTitle />
        <div class="currency-transfer-provider-with-background-color">
            <Contact />
        </div>
        <FooterThree />
    </div>
</template>

<script>
import NavbarStyleThree from '../layout/NavbarStyleThree'
import PageTitle from '../contac-two/PageTitle'
import Contact from '../contac-two/Contact'
import FooterThree from '../layout/FooterThree'

export default {
    name: 'ContacTwoPage',
    components: {
        NavbarStyleThree,
        PageTitle,
        Contact,
        FooterThree,
    }
}
</script>
