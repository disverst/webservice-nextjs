
import {MainLayout} from "../components/MainLayout";
import {HeaderComponent} from "../components/header/HeaderComponent";
import {AgencyBannerArea} from "../components/agency_banner_area/AgencyBannerArea";



export default function Index({data}) {
    var header = data.data.web_elements.header;

    return(
        <MainLayout title={'Главная'}>
            <HeaderComponent header={header} />
            <AgencyBannerArea />
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
