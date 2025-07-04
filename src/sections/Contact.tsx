import { contactInfo } from "@/data/ContactInfo.data.ts"
import { useForm } from "@/hooks/useForm.ts"
import { useEmailJS } from "@/hooks/useEmailJS.ts"
import { useWhatsApp } from "@/hooks/useWhatsApp.ts"
import { useEffect, useState } from "react";
import { services } from "@/data/services.ts";
import { Mail, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

export const Contact = () => {
  const { form, onInputChange, setForm } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const { sendEmail, isLoading, isSuccess, error, resetStatus } = useEmailJS();
  const { sendToWhatsApp } = useWhatsApp();
  
  const { firstName, lastName, email, phone, service, message } = form;
  
  const [servicesState, setServicesState] = useState(services);

  useEffect(() => {
    setServicesState(services);
  }, [service]);

  const handleSubmit = async (e: React.FormEvent, method: 'email' | 'whatsapp') => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!firstName || !lastName || !email || !phone || !service || !message) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (method === 'email') {
      await sendEmail(form);
      if (isSuccess) {
        // Limpiar formulario
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } else {
      sendToWhatsApp(form);
    }
  };

  // Resetear mensajes después de 5 segundos
  useEffect(() => {
    if (isSuccess || error) {
      const timer = setTimeout(() => {
        resetStatus();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, error, resetStatus]);
  

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
              
              {/* Botón directo de WhatsApp para el teléfono */}
              {info.title === "Teléfono" && (
                <button
                  onClick={() => window.open(`https://wa.me/573153630625`, '_blank')}
                  className="ml-8 mt-2 flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-all duration-300 text-sm"
                >
                  <MessageCircle size={16} />
                  Enviar WhatsApp
                </button>
              )}
            </div>
          ))}
          </div>
          <div className="flex flex-col items-left justify-start gap-2 bg-secondary w-full rounded-xl p-10 mt-10 lg:-order-1">
            <h2 className="text-3xl font-bold text-accent">Trabajemos juntos</h2>
            <p className="text-sm py-6">
              Si tienes alguna pregunta o te gustaría trabajar juntos, no dudes en contactarme.
            </p>

          <form className="flex flex-col items-left justify-start bg-secondary w-full rounded-xl">
            {/* Mensaje de estado */}
            {isSuccess && (
              <div className="flex items-center gap-2 p-3 mb-4 bg-green-500/20 border border-green-500/50 rounded-md text-green-400">
                <CheckCircle size={20} />
                <span>¡Mensaje enviado correctamente!</span>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 p-3 mb-4 bg-red-500/20 border border-red-500/50 rounded-md text-red-400">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col items-left justify-start gap-6">
              <input type="text" name="firstName" value={firstName} onChange={onInputChange} placeholder="Nombre" className="text-sm w-full p-2 rounded-md bg-primary focus:border-[1px] focus:border-accent focus:outline-none"/>
              <input type="text" name="lastName" value={lastName} onChange={onInputChange} placeholder="Apellido" className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" />
              <input type="email" name="email" value={email} onChange={onInputChange} placeholder="Correo electrónico" className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" />
              <input type="tel" name="phone" value={phone} onChange={onInputChange} placeholder="Teléfono" className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" />
              <select name="service" value={service} onChange={onInputChange} className="text-sm w-full p-2 rounded-md bg-primary shadow-md focus:border-[1px] focus:border-accent focus:outline-none" required>
                <option value="">Selecciona un servicio</option>
                {servicesState.map((service) => (
                  <option key={service.id} value={service.title}>{service.title}</option>
                ))}
              </select>
              <textarea className="w-full p-2 rounded-md bg-primary focus:border-[1px] focus:border-accent focus:outline-none h-40" name="message" value={message} onChange={onInputChange} placeholder="Mensaje" />
              
              {/* Botones de envío */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  type="button"
                  onClick={(e) => handleSubmit(e, 'email')}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 bg-accent text-primary px-4 py-2 rounded-md hover:bg-accent-hover transition-all duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail size={18} />
                  {isLoading ? 'Enviando...' : 'Enviar por Correo'}
                </button>
                
                <button 
                  type="button"
                  onClick={(e) => handleSubmit(e, 'whatsapp')}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <MessageCircle size={18} />
                  Enviar por WhatsApp
                </button>
              </div>
            </div>
          </form>
          </div>
      </div>
    </section>
  )
}
