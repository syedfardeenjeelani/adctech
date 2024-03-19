import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToServices = () => {
    const Services = document.getElementById("Services");
    Services.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className=" sm:border-b-[150px] w-screen h-[100vh] flex items-center justify-center flex-col pb-[20rem] md:pb-0
                      bg-[radial-gradient(at_50%_0%,#202023_0%,transparent_100%)]"
      >
        <div className="relative flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full hidden md:flex  " // rounded-b-full
          >
            <source
              src="./assets/vecteezy_circuit-data-neural-network-ai-technology-cloud-computing_8800860.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="md:absolute  md:py-0  pt-[40px] sm:bottom-[6.5rem] w-full h-full flex flex-col justify-center items-center">
            <div className="max-w-[900px] mx-auto md:mt-9">
              <h1 className="font-bold text-6xl text-center text-white mb-8">
                Secure Data <span className="text-[#00FFFF]">Sovereignty</span>
              </h1>
              <p className="text-xl text-center text-[#c2c2c2] font-medium mb-4 leading-[160%]">
                Secure Data Sovereignty: Collaborating for Control. Join us in
                building and maintaining secure software environments,
                prioritizing data privacy and control.
              </p>
            </div>
            <button
              onClick={scrollToServices}
              className="px-8 py-[16px] text-2xl rounded-lg bg-[#62bdbd] hover:bg-blue-700 text-white"
              style={{ boxShadow: `0 0 5px #018a275e, 0 0 15px #00FFFF` }}
            >
              Get started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
