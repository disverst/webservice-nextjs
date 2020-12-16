import {MainLayout} from "../components/MainLayout";
import {HeaderComponent} from "../components/header/HeaderComponent";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default function Index({ data: serverData  }) {
    const [data, setData] = useState(serverData)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:3000/webservice-response.txt/${router.query.id}`);
            const data = await response.json()
            setData(data)
        }
        if (!serverData) {
            load()
        }
    }, [])
    if (!data)
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    return (
        <MainLayout title={'Главная'}>
            <div className="body_wrapper">
                <HeaderComponent />
            </div>
        </MainLayout>
    )
}

Index.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return {data: null}
    }
    const response = await fetch(`http://localhost:3000/webservice-response.txt/${query.id}`);
    const data = await response.json()

    return {
        data
    }
}


