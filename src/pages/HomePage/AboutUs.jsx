import SectionTitle from "../../components/SectionTitle";


const AboutUs = () => {
    return (
        <div>
            <SectionTitle title={"introduction"} subtitle={"Discover, Share, and Elevate the Best in Tech "} />

            <div className="grid grid-cols-1 gap-4 my-4">
                
            <div className="rounded-lg p-5 md:w-2/3 mx-auto border-b-4 border-[#e0deda] shadow-lg hover:shadow-xl bg-[#fcfbf9] hover:bg-white">
                <p className="font-semibold text-gray-600">Welcome to <span className="text-xl font-bold"><span className="text-[#8f9182]">Product</span>Hunt</span>, the ultimate platform for discovering and sharing the latest tech products, web apps, AI tools, software, games, and mobile apps. Whether you're an innovator launching your next big idea or a tech enthusiast looking for the best new tools, we’ve got you covered. With our range of products for every need, our platform ensures there’s something for everyone.</p>
                <hr className="mt-4 w-1/2 mx-auto" />
            </div>
            <div className="rounded-lg p-5 md:w-2/3 mx-auto border-b-4 border-[#e0deda] shadow-lg hover:shadow-xl bg-[#fcfbf9] hover:bg-white">
                <p className="font-semibold text-gray-600">Our platform is built for creators and users alike, providing a space where new products are introduced, shared, and celebrated by a vibrant community. From cutting-edge software and applications to the newest mobile games and AI-powered tools, <span className="text-xl font-bold"><span className="text-[#8f9182]">Product</span>Hunt</span> ensures you stay ahead of the curve and discover products that push the boundaries of innovation.</p>
                <hr className="mt-4 w-1/2 mx-auto" />
            </div>
            <div className="rounded-lg p-5 md:w-2/3 mx-auto border-b-4 border-[#e0deda] shadow-lg hover:shadow-xl bg-[#fcfbf9] hover:bg-white">
                <p className="font-semibold text-gray-600">Here, help shape the future of tech by supporting creators who are revolutionizing the way we live and work. [Your Website Name] is more than just a marketplace; it's a community where ideas, inspiration, and collaboration thrive. Join us and be a part of the movement that’s defining tomorrow's technology today.</p>
                <hr className="mt-4 w-1/2 mx-auto" />
            </div>

            </div>

        </div>
    );
};

export default AboutUs;