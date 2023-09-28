// import css
import "./css/tech.css/mobile.css"

import { motion } from "framer-motion";
import TechList from "./TechList"; // Import the TechList array

export const Tech = () => {
  return (
    <div id="tech">
      <section className="py-20">
        <div className="py-10">
          <div className="container1">
            <h2 className="text-secondary text-[16] md:text-[20px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">WHAT SKILLS I CURRENTLY HAVE</h2>
            <h1 className="text-[50px] font-bold py-7" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">Tech Stacks.</h1>
            <div className="tech grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-20 py-20 mx-4 my-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
              {TechList.map((skill) => {
                const { id, img } = skill;
                return (
                  <motion.div
                    key={id}
                    className="flex justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    transition={{ duration: 0.3 }} // Add a smoother transition here
                  >
                    <img src={img} alt="" className="h-[70px] lg:h-[90px] object-contain" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
