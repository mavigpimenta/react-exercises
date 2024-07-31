import { Navbar } from "./components/Navbar"
import { PageContent } from "./components/PageContent"
import { Footer } from "./components/Footer" 
import { PageContentTwo } from "./components/PageContentTwo"

export const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <PageContentTwo></PageContentTwo>
            <Footer></Footer>
        </>
    )
}