const Footer = () => {
    return (
        // Changed gradient to blue-to-white as requested
        <footer className="w-full bg-gradient-to-r from-sky-100 via-white to-sky-100 py-12 mt-auto shadow-inner">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sky-950">

                {/* Project Info */}
                <div className="text-left mb-6 md:mb-0">
                    <h3 className="text-2xl font-black mb-2 text-sky-800 font-['Fredoka']">EchoVision</h3>
                    <p className="text-sm font-medium">Bachelor of Science with Honours (Information Technology)</p>
                    <p className="text-sm font-medium mt-1 opacity-80">Universiti Utara Malaysia • IT-47</p>
                </div>

                {/* Academic Details */}
                <div className="text-right text-sm bg-white/60 p-5 rounded-2xl backdrop-blur-sm border border-white/80 shadow-sm text-left md:text-right">
                    <p><span className="font-extrabold text-sky-900">Innovator:</span> Oon Jin En (298479)</p>
                    <p className="mt-2"><span className="font-extrabold text-sky-900">Supervisor:</span> Cik Fazilah Binti Hibadullah</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;