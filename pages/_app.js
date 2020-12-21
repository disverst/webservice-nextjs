import '../styles/css/bootstrap.min.css'
import '../styles/vendors/bootstrap-selector/css/bootstrap-select.min.css'
// import '../styles/vendors/themify-icon/themify-icons.css'
import '../styles/vendors/elagent/style.css'
// import '../styles/vendors/flaticon/flaticon.css'
import '../styles/vendors/animation/animate.css'
// import '../styles/vendors/owl-carousel/assets/owl.carousel.min.css'
import '../styles/vendors/magnify-pop/magnific-popup.css'
import '../styles/vendors/nice-select/nice-select.css'
// import '../styles/vendors/scroll/jquery.mCustomScrollbar.min.css'
import '../styles/scss/style.scss'
import '../styles/css/responsive.css'


export default function MyApp ({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
