import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Trending from "./Trending";


const Home = () => {
    return (
        <div>

            {/* Banner */}
            <section>
                <Banner></Banner>
            </section>

            {/* Featured Products */}
            <section className="my-12">
                <FeaturedProducts></FeaturedProducts>
            </section>

            {/* Trending Products */}
            <section className="my-12">
                <Trending></Trending>
            </section>

            {/* Extra*/}
            <section className="my-12">
                Extra Section
            </section>

        </div>
    );
};

export default Home;