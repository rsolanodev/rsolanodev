import { appWithTranslation } from 'next-i18next'

import "@/styles/fonts.css";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
)

export default appWithTranslation(App);
