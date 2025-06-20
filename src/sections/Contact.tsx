import { contactInfo } from "@/data/ContactInfo.data.ts"
import { useForm } from "@/hooks/useForm.ts"
import { useEffect, useState } from "react";
import { services } from "@/data/services.ts";

export const Contact = () => {
  const { form, onInputChange, setForm } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  
  const { firstName, lastName, email, phone, service, message } = form;
  
  const [servicesState, setServicesState] = useState(services);

  useEffect(() => {
    setServicesState(services);
  }, [service]);
  

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-start my-20 lg:flex-row lg:justify-between">
      <div className=" mx-auto px-4 lg:flex lg:flex-row lg:justify-between lg:gap-x-60">
        <div className="flex flex-col items-left justify-center gap-2">
          {contactInfo.map((info) => (
            <div key={info.title} className="flex flex-col items-start justify-start py-4">
              <div className="flex flex-row items-center justify-start gap-2 py-2">
              <p>{info.icon}</p>
              <p className="text-sm text-gray-400">{info.title}</p>
              </div>
              <p className="ml-8 font-semibold">{info.description}</p>
            </div>
          ))}
          </div>
          <div className="flex flex-col items-left justify-start gap-2 bg-secondary w-full rounded-xl p-10 mt-10 lg:-order-1">
            <h2 className="text-3xl font-bold text-accent">Trabajemos juntos</h2>
            <p className="text-sm py-6">
              Si tienes alguna pregunta o te gustaría trabajar juntos, no dudes en contactarme.
            </p>

          <form className="flex flex-col items-left justify-start bg-secondary w-full rounded-xl">
            <div className="flex flex-col items-left justify-start gap-6">
              <input type="text" name="firstName" value={firstName} onChange={onInputChange} placeholder="Nombre" className="text-sm w-full p-2 rounded-md bg-primary focus:border-[1px] focus:border-accent focus:outline-none"/>
              <input type="text" name="lastName" value={lastName} onChange={onInputChange} placeholder="Apellido" className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" />
              <input type="email" name="email" value={email} onChange={onInputChange} placeholder="Correo electrónico" className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" />
              <input type="tel" name="phone" value={phone} onChange={onInputChange} placeholder="Teléfono" className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" />
              <select name="service" value={service} onChange={onInputChange} className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" required>
                {servicesState.map((service) => (
                  <option key={service.id} value={service.id}>{service.title}</option>
                ))}
              </select>
              <textarea className="w-full p-2 rounded-md bg-primary focus:border-[1px] focus:border-accent focus:outline-none h-40" name="message" value={message} onChange={onInputChange} placeholder="Mensaje" />
              <button type="submit" className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-accent-hover transition-all duration-300 cursor-pointer hover:scale-105">Enviar</button>
            </div>
          </form>
          </div>
      </div>
    </section>
  )
}
