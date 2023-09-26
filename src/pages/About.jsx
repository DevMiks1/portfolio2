
// import image

export const About = () => {
  return (
    <div id="about">
      {/* Start of know-me section */}
      <section className="py-20">
        <div className="container1 grid  ">
          <div> 
            <h3 className="uppercase text-[18px] md:text-[20px] text-secondary" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">Introduction and Summary</h3>
            <h2 className="text-[50px] py-7 font-bold" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">Overview.</h2>
            {/* right side with some description about me */}
            <div className="text-secondary md:pr-40 lg:pr-60">
              <p className="pb-5" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
                Hi, I'm Mike Alfred Vargas. I'm inspired to become a full-stack web developer who can learn and adapt to new things. I want to create and develop solutions that can solve problems and help a lot of people since we know that there are a lot of possible solutions to implement that can give us easy access to our lives.
              </p>
              <p className="pb-5" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
                I am passionate to learn more about UI/UX design because it is nice to have a good implementation into your website, such as layout and API building on the back-end side.
              </p>
              <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
                Before, I always challenged myself to corporate all the learnings I had when I was a beginner, such as Html, CSS, Bootstrap, Javascript,Tailwind, PHP, Laravel, and MySQL.
              </p>
            </div>
          </div>
          
        </div> 
      </section> {/* End of know-me section */}
    </div>
  )
}
