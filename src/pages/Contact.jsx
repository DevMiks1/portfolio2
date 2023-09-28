import { useForm } from 'react-hook-form';
import { useState } from 'react';
import earth from "../assets/contact-img/earth.png"
// import css
import "./css/contact.css/mobile.css"

export const Contact = () => {
  const { register, trigger, formState:{errors} } = useForm();
  const [errorMessagesVisible, setErrorMessagesVisible] = useState(false);
  
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      setErrorMessagesVisible(true); // Show error messages
      setTimeout(() => {
        setErrorMessagesVisible(false); // Hide error messages after 2 seconds
      }, 2000);
    }
  };

  return (
    <section id='contact' className="py-32 flex justify-center">
      <div className='container grid justify-center lg:grid-cols-2'>
        {/* contact */}
        <div className="contact border-primary border-2 p-2 rounded-lg max-w-xl mx-10 px-5 order-2 sm:order-1 ">
          <h1 className="text-center text-3xl font-bold text-primary py-5">
              CONTACT ME TO GET STARTED
          </h1>
          <form action="https://formsubmit.co/d9199cd83bc9f38640ce6ba1b3800c93" method="post" onSubmit={onSubmit}>
            <div className='flex flex-col'>
              <label className='py-3'>Full Name</label>
              <input
                type="text"

                placeholder='Your name goes here!'
                {...register("name",{
                  required: true,
                  maxLength: 100,
                })}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-transparent border-none outline-none text-black"
              />
              {errors.name && errorMessagesVisible && (
              <p className='text-red-500'>
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max Length is required."}
              </p>
              )}
            </div>
            <div className='flex flex-col '>
              <label className='py-3'>Email:</label>
              <input
                type="text"
                
                placeholder='Leave your email here!'
                {...register("email",{
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-transparent border-none outline-none text-black"
              />
              {errors.email && errorMessagesVisible &&(
              <p className='text-red-500'>
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='py-3'>Message:</label> {/* Corrected 'htmlFor' value */}
              <textarea
                
                placeholder='Hit me up with a message'
                cols="30"
                rows="10"
                {...register("message",{
                  required: true,
                  maxLength: 2000,
                })}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-transparent border-none outline-none text-black"
              />
              {errors.message && errorMessagesVisible &&(
              <p className='text-red-500'>
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max Length is 2000 char."}
              </p>
              )}
            </div>
            <button type="submit" className="border border-white  rounded-lg px-3 py-4 my-5 hover:bg-primary">
              SEND MESSAGE
            </button>
          </form>
        </div>
        {/* global image */}
        <div className='flex justify-center items-center order-1 sm:order-2 pb-7'>
          <img src={earth} alt="global" />
        </div>
      </div>
    </section>
  );
};
