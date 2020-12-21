import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>

                </Head>
                <body>
                    <Main />
                    <script src="../styles/js/main.js" />
                    <script src="../styles/js/jquery-3.2.1.min.js" />
                    <script src="../styles/js/bootstrap.min.js" />
                    <script src="../styles/js/propper.js" />
                    <script src="../styles/js/plugins.js" />
                    <script src="../styles/vendors/bootstrap-selector/js/bootstrap-select.min.js" />
                    <script src="../styles/vendors/wow/wow.min.js" />
                    <script src="../styles/vendors/sckroller/jquery.parallax-scroll.js" />
                    <script src="../styles/vendors/owl-carousel/owl.carousel.min.js" />
                    <script src="../styles/vendors/nice-select/jquery.nice-select.min.js" />
                    <script src="../styles/vendors/imagesloaded/imagesloaded.pkgd.min.js" />
                    <script src="../styles/vendors/isotope/isotope-min.js" />
                    <script src="../styles/vendors/magnify-pop/jquery.magnific-popup.min.js" />
                    <script src="../styles/vendors/scroll/jquery.mCustomScrollbar.concat.min.js" />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
