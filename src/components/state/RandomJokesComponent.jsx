// import hooks
import {useState,useEffect} from "react"

// import framer motion for animation
import { motion, } from "framer-motion";

// import and install the carousel to use this react library
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

// import image
import randomJokes from "../../assets/project-img/RandomJokes.png"
import randomJokes1 from "../../assets/project-img/RandomJokes1.png"
import randomJokes2 from "../../assets/project-img/RandomJokes2.png"

const RamdomJokesComponent = () => {
  const [isHoveredRandomJokes, setIsHoveredRandomJokes] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // handle for hover
  const handleHoverRandomJokes = () => {
    setIsHoveredRandomJokes(true);
  };

  const handleHoverExitRandomJokes = () => {
    setIsHoveredRandomJokes(false);
  };

  // modal    
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
    
  const closeModal = () => {
    setIsModalOpen(false);
    setIsHoveredRandomJokes(false);
    document.body.style.overflow = "auto";
  };
      
  useEffect(() => {
    // Ensure that the scroll behavior is reverted when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="relative w-full h-full overflow-hidden" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" onMouseEnter={handleHoverRandomJokes} onMouseLeave={handleHoverExitRandomJokes}>
      <img src={randomJokes} alt="A website describes hotel" className="w-full h-full lg:h-[300px]"/>
      {/* animation when hovering there is a background and make it scaling with opacity */}
      <motion.div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
        initial={{ opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
        animate={{ opacity: isHoveredRandomJokes ? 1 : 0, scaleX: isHoveredRandomJokes ? 1 : 0.3, scaleY: isHoveredRandomJokes ? 1 : 0.3 }}
        transformorigin="center center"
        transition={{ duration: 0.8 ,  ease: "easeInOut"}}>
      </motion.div>
      {/* animation for the opacity with duration, delay and some transition of ease in out */}
      <motion.div className="flex flex-col justify-center items-center absolute inset-0"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 1, ease: "easeInOut"}}>
        <p className="text-[28px] pb-2 font-bold" style={{ opacity: isHoveredRandomJokes ? 1 : 0 }}>Side Project 1</p>
        {/* icon to view the data of an image */}
        <div className="flex " style={{ opacity: isHoveredRandomJokes ? 1 : 0 }}>
          <span className="text-[26px] cursor-pointer hover:text-primary" onClick={openModal}><i className="fa-solid fa-eye"></i></span>
        </div>
      </motion.div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto ">
          <div className="bg-semiSecondary p-4 pt-72 text-white shadow-lg min-h-screen w-screen lg:pt-[34rem] sm:px-24 lg:px-24 xl:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              <div className="col-span-2 py-3">
                <h2 className="py-6 font-bold text-[20px]">Chuky Jokes</h2>
                {/* Carousel import */}
                <Carousel showThumbs={false} autoPlay interval={1500} stopOnHover={false} showStatus={false} showArrows={false} infiniteLoop>
                  {/* 1st image in the carousel */}
                  <div className="max-w-full h-auto">
                    <img src={randomJokes} alt="" className="w-full"  />
                  </div>
                  {/* 2nd image in the carousel */}
                  <div className="max-w-full h-auto">
                    <img src={randomJokes1} alt="" className="w-full"  />
                  </div>
                  {/* 3rd image in the carousel */}
                  <div className="max-w-full h-auto">
                    <img src={randomJokes2} alt="" className="w-full"  />
                  </div>
                </Carousel>
              </div>
              <div className="py-3">
                {/* close button or x button */}
                <button 
                  className="absolute top-6 right-6 p-2 text-red-500 lg:top-6 lg-right-16" onClick={closeModal}><i className="fa-solid fa-x"></i>
                </button>
                <h2 className="pt-[5px] pb-5 font-bold text-[20px] lg:pt-[76px] ">Project Information</h2>
                <h3><span className="font-bold">Category:</span> Web design</h3>
                <div className="flex gap-2 text-sm py-3">
                  <p className="font-bold">Tech stacks:</p>
                  <p className="text-red">#html</p>
                  <p className="text-lightBlue">#css</p>
                  <p className="text-yellow">#javascript</p>
                </div>
                {/* repository link */}
                <h3><span className="font-bold">Repository: </span><a href="https://github.com/DevMiks1/norrischuckjokes" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary"><span className="block pb-3">https://github.com/DevMiks1/norrischuckjokes</span></a></h3>
                {/* project url */}
                <h3><span className="font-bold">Project Url:</span> <a href="https://norrischuckjokes.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary"><span className="block">https://norrischuckjokes.netlify.app/</span></a></h3>
                {/* description */}
                <p className="pt-6"> This is a website dedicated to generating random 'Chuck Norris jokes' and delivering doses of humor! Welcome to the ultimate Chuck Norris humor hub, where you can enjoy a daily dose of Chuck Norris-related laughter with just a click. Our jokes are specialized API, ensuring you get the most legendary and entertaining 'Chuck Norris jokes' available. Dive into the world of Chuck Norris humor, Get ready to laugh your heart out with Chuck Norris Jokes.</p>
              </div>
            </div>
          </div>
        </div>
      )} 
    </div>
  )
}

export default RamdomJokesComponent