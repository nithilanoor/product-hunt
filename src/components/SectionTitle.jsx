

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-serif md:text-5xl font-bold text-[#e0deda]">
                {title}
            </h2>
            <p className="text-lg uppercase text-[#3A3F00]">
                --{subtitle}--
            </p>
        </div>
    );
};

export default SectionTitle;