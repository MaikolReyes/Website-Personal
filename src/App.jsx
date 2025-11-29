
import { About, Certificates, Hero, ProjectsAnalyst, ProjectsDevs } from "./layout"
import { Footer, FormContact, Navbar } from './components';
import { ServicesCarousel } from "./layout/Services";

export const App = () => {
    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <ServicesCarousel />

            <ProjectsDevs />

            <ProjectsAnalyst />

            <Certificates />

            <FormContact />

            <Footer />
        </>
    )
}
