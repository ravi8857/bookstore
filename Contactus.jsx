import React from 'react'
import Swal from "sweetalert2"

function Contactus() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
       Swal.fire({
        title:"Sucess!",
        text: "Message Send SucessFully!",
        icon: "success"
       })
        }
      };

  return (
   <>
   {/* <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
           <div className='slide'>
            <h1 className='text-2xl font-semibold md:text-4xl'>CONTACT US</h1>
           </div>
   </div> */}
   <section className='contact'>
    <form onSubmit={onSubmit}>
        <h1>contact form</h1>
        <div className='input-box'>
            <label >Full name</label>
            <input type="text" className='field' placeholder='Enter your name' name='name' required />

        </div>
        <div className='input-box'>
            <label>Email Address</label>
            <input type="email" className="field" placeholder='Enter your email' name='email' required />

        </div>
        <div className='input-box'>
            <label >your message</label>
            <textarea name="message" className='field message' placeholder='Enter your message'  required></textarea>
        </div>
        <button  type='submit' >submit</button>
    </form>
   </section>
 

   </>
  )
}

export default Contactus
