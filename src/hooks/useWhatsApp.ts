export const useWhatsApp = () => {
  // Tu número de WhatsApp (incluye código de país sin + ni espacios)
  const WHATSAPP_NUMBER = '573153630625'; // Reemplaza con tu número real

  const sendToWhatsApp = (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    // Formatear el mensaje para WhatsApp
    const whatsappMessage = `
🔹 *Nuevo contacto desde tu portfolio*

👤 *Nombre:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📞 *Teléfono:* ${formData.phone}
🔧 *Servicio:* ${formData.service}

💬 *Mensaje:*
${formData.message}
    `.trim();

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return { sendToWhatsApp };
};
