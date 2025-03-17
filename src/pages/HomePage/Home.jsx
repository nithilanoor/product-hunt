import SectionTitle from "../../components/SectionTitle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Contact from "./Contact";
import FeaturedProducts from "./FeaturedProducts";
import JoinUs from "./JoinUs";
import Mission from "./Mission";
import Trending from "./Trending";


const Home = () => {
    return (
        <div>

            {/* Banner */}
            <section className="mt-10 pt-8">
                <Banner></Banner>
            </section>
            <div className="w-11/12 mx-auto">

                {/* About Us */}
                <section className="my-12">
                    <AboutUs></AboutUs>
                </section>

                {/* Featured Products */}
                <section className="my-12">
                    <FeaturedProducts></FeaturedProducts>
                </section>

                {/* Trending Products */}
                <section className="my-12">
                    <Trending></Trending>
                </section>

                {/* Mission */}
                <section className="my-12">
                    <Mission></Mission>
                </section>

            </div>

            {/* Join Us */}
            <section className="my-12">
                <JoinUs></JoinUs>
            </section>

            {/* Contact */}
            <section className="mt-12">
                <Contact />
            </section>

        </div>
    );
};

export default Home;