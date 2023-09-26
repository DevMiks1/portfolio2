
// import other components
import HotelComponent from "../components/state/HotelComponent";
import KodeledgerComponent from "../components/state/KodeledgerComponent";
import NewsgridComponent from "../components/state/NewsgridComponent";
import RamdomJokesComponent from "../components/state/RandomJokesComponent";
import KeyCodesComponent from "../components/state/KeyCodesComponent";
import FeedbackComponent from "../components/state/FeedbackComponent";
import Cargo1Component from "../components/state/Cargo1Component";
import NutriChefHubComponent from "../components/state/NutriChefHubComponent";
import CargoCapstoneComponent from "../components/state/CargoCapstoneComponent";
import PortfolioComponent from "../components/state/PortfolioComponent";


export const Project = () => {
  return(
    <section id="project">
      <div>
        <div className="container">
          <h2 className="text-secondary text-[16] md:text-[20px]" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">MY WORKS AND SIDE PROJECTS</h2>
          <h1 className="text-[50px] font-bold py-7" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">Projects.</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center">
            {/* 1st Website */}
            <HotelComponent />
            {/* 2nd Website */}
            <KodeledgerComponent />
            {/* 3rd Website */}
            <NewsgridComponent />
            {/* 1st Side Project */}
            <RamdomJokesComponent />
            {/* 2nd Side Project */}
            <KeyCodesComponent />
            {/* 3rd Side Project */}
            <FeedbackComponent />
            {/* Mini 1 Project */}
            <Cargo1Component />
            {/* Mini 2 Project */}
            <NutriChefHubComponent />
            {/* Mini 3 Project */}
            <CargoCapstoneComponent />
            {/* Portfolio 1 */}
            <PortfolioComponent />
          </div>
        </div>
      </div>
    </section>
  )
}