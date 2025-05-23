
import { About, Certificates, Hero, ProjectsAnalyst, ProjectsDevs } from "./layout"
import { Footer, FormContact, Navbar } from './components';

export const App = () => {
    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <ProjectsAnalyst />

            <ProjectsDevs />

            <Certificates />

            <FormContact />

            <Footer />
        </>
    )
}
