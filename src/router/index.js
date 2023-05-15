import { createWebHistory, createRouter } from "vue-router";

// All Pages
import BankingPaymentPage from "../components/pages/BankingPaymentPage";
import LoanProvidersPage from "../components/pages/LoanProvidersPage";
import DigitalBankingPage from "../components/pages/DigitalBankingPage";
import FinancialServicesPage from "../components/pages/FinancialServicesPage";
import BankersEntrepreneursPage from "../components/pages/BankersEntrepreneursPage";
import SocialFinancePage from "../components/pages/SocialFinancePage";
import CurrencyTransferPage from "../components/pages/CurrencyTransferPage";
import AboutUsPage from "../components/pages/AboutUsPage";
import AboutTwoPage from "../components/pages/AboutTwoPage";
import HowItWorksPage from "../components/pages/HowItWorksPage";
import FeaturesOne from "../components/pages/FeaturesOne";
import FeaturesTwo from "../components/pages/FeaturesTwo";
import Team from "../components/pages/Team";
import Pricing from "../components/pages/Pricing";
import PersonalPage from "../components/pages/PersonalPage";
import BusinessPage from "../components/pages/BusinessPage";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Error from "../components/pages/Error";
import Faq from "../components/pages/Faq";
import BlogOne from "../components/pages/BlogOne";
import BlogTwo from "../components/pages/BlogTwo";
import BlogThree from "../components/pages/BlogThree";
import Contact from "../components/pages/Contact";
import ContacTwoPage from "../components/pages/ContacTwoPage";
import PrivacyPolicy from "../components/pages/PrivacyPolicy";
import TermsCondition from "../components/pages/TermsCondition";

const routes = [
  { path: "/", component: BankingPaymentPage },
  { path: "/loan-providers", component: LoanProvidersPage },
  { path: "/digital-banking", component: DigitalBankingPage },
  { path: "/financial-services", component: FinancialServicesPage },
  { path: "/bankers-entrepreneurs", component: BankersEntrepreneursPage },
  { path: "/social-finance", component: SocialFinancePage },
  { path: "/currency-transfer", component: CurrencyTransferPage },
  { path: "/about-us", component: AboutUsPage },
  { path: "/about-two", component: AboutTwoPage },
  { path: "/how-it-works", component: HowItWorksPage },
  { path: "/features-1", component: FeaturesOne },
  { path: "/features-2", component: FeaturesTwo },
  { path: "/team", component: Team },
  { path: "/pricing", component: Pricing },
  { path: "/personal", component: PersonalPage },
  { path: "/business", component: BusinessPage },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/error", component: Error },
  { path: "/faq", component: Faq },
  { path: "/blog-1", component: BlogOne },
  { path: "/blog-2", component: BlogTwo },
  { path: "/blog-details", component: BlogThree },
  { path: "/contact", component: Contact },
  { path: "/contact-two", component: ContacTwoPage },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/terms-condition", component: TermsCondition },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
