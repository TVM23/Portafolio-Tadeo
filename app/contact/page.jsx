"use client"

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

import Swal from "sweetalert2";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+52) 353 108 5444"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tadeovazquez519@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Jiquilpan, Michoacan, Mexico"
  },
]

const Contact = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "42ab57af-d664-481f-b6b9-7c9ec1daa3f4");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const name = document.getElementById("name")
      const email = document.getElementById("email")
      const subject = document.getElementById("subject")
      const phone = document.getElementById("phone")
      const message = document.getElementById("message")

  
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
          title: "Success!",
          text: "Message sent succesfully!",
          icon: "success"
        });
        name.value = "";
        email.value = "";
        subject.value = "";
        phone.value = "";
        message.value = "";
      }
    };
  


  return (
    <section className="h-full py-12">
      <motion.section initial={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration:0.4, ease:"easeIn"} }}
          className="py-6">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-sec_gray rounded-xl" onSubmit={onSubmit}>
                <h3 className="text-4xl text-accent">Send me an email</h3>
                <p className="text-white/60">
                  If you are interested you can contact me directly here
                </p>
                {/* inputs */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input type="text" placeholder="Name" name="name" id="name" required/>
                  <Input type="email" placeholder="Email Address" name="email" id="email" required/>
                  <Input type="text" placeholder="Subject" name="subject" id="subject" />
                  <Input type="phone" placeholder="Phone Number" name="phone" id="phone" />
                </div>
                {/* textarea */}
                <Textarea className="h-[200px]" placeholder="Type your message here" name="message" id="message" required/>
                {/* btn */}
                <Button className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-sec_gray text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]"> {item.icon} </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}

export default Contact