
import { Navbar, Footer, FormContact } from './components'
import { About, Certificates, Hero, Projects, Services, Skills } from "./layout"

export const App = () => {
    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Projects />

            {/* <Services /> */}

            <Certificates />

            <FormContact />

            <Footer />
        </>
    )
}
