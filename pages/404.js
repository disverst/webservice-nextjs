import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function ErrorPage () {
    return (
        <MainLayout title={'404'}>
            <section className="error_area">
                <img className="error_shap" src="img/breadcrumb/banner_bg.png" alt="" />
                    <div className="container flex">
                        <div className="error_contain text-center">
                            <div className="b_text">
                                <h1 className="f_p w_color f_700">404</h1>
                            </div>
                            <h2 className="f_p f_400 w_color f_size_40">page not found</h2>
                            <p className="w_color f_400">
                                We’re sorry, the page you have looked for does not exist in our database! Maybe <br /> go to our home page or try to use a search?</p>
                            <Link href={'/'}>
                                <a className="about_btn btn_hover mt_40">
                                    Go Back to home Page
                                </a>
                            </Link>
                        </div>
                    </div>
            </section>
        </MainLayout>
    )
}
