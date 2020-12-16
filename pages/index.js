import {MainLayout} from "../components/MainLayout";
import {HeaderComponent} from "../components/header/HeaderComponent";

export default function Index(data) {
    const webElements = data.data.data.web_elements;
    console.log(webElements)
    return (
        <MainLayout title={'Главная'}>
            <div className="body_wrapper">
                <HeaderComponent />
            </div>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/webservice-response.txt`);
    const data = await res.json()
    return {
        props: {data},
    }
}

