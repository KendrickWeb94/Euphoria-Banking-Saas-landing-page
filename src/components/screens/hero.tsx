import { HeroContent } from "../ui/hero-content"
import { NavBar } from "../ui/navbar"

export const Hero = () => {
    return (
        <section className="w-full min-h-screen hero-section bg-cover mb-28 bg-center bg-no-repeat">
            <div className="container-wrapper space-y-20">
                <NavBar />
                <HeroContent />
            </div>
        </section>
    )
}