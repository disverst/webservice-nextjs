import 'bootstrap/dist/css/bootstrap.min.css';
import {MainLayout} from "../components/MainLayout";
import {HeaderComponent} from "../components/header/HeaderComponent";
import {AgencyBannerArea} from "../components/agency_banner_area/AgencyBannerArea";
import {AgencyServiceArea} from "../components/agency_service_area/AgencyServiceArea";
import {AgencyAboutArea} from "../components/agency_about_area/AgencyAboutArea";

export default function Index({data}) {
    var header = data.data.web_elements.header;

    return(
        <MainLayout title={'Главная'}>
            <HeaderComponent header={header} />
            <AgencyBannerArea />
            <AgencyServiceArea />
            <AgencyAboutArea />
        </MainLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/webservice-response.txt')
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}
