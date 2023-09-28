import "./css/home.css/mobile.css"
// import image
import astronaut from "../assets/home-img/astronaut1-removebg-preview.png"

export const Home = () => {

  return (
    <div>
      {/* start of hero-section  */}
      <section id="home">     
        <div className="container1 ">
          <div className="home grid md:grid-cols-2 ">
            <div className="description pt-24 md:py-60 text-center leading-normal md:text-left md:pl-10 lg:pr-10 ">
              <h1 className="text-3xl mb-5 font-bold  md:text-3xl md:text-[50px] lg:text-[70px]">HI, I'm <span id="changing-text">Mike</span> </h1>
              <p className="mb-10 text-[20px] md:text-[16px] lg:text-[20px]">Passionate Full-Stack Developer dedicated to elevating digital experiences. Crafting innovative solutions to enhance user engagement. </p>
              <div className="flex gap-7 justify-center md:justify-start pb-10">
                <div>
                  <a href="https://drive.google.com/uc?export=download&id=1ZVV-tFGrVszkd25HkAtvQZmMRsVSveJB" download>
                    <button className="border border-primary bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-transparent hover:text-secondary">Resume
                    </button>
                  </a>
                </div>
              </div>
                
            </div>

            <div className="z-10">        
              <img src={astronaut} alt=" personal profile" className="astraunot h-[300px]  cursor-pointer sm:mx-auto md:h-[550px] md:my-20 lg:my-0 lg:h-[700px]"/>
            </div>
          </div>
        </div>
      </section> {/* end of hero-section  */}
    </div>
  )
}
