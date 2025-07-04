import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '@/config/email.config';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Verificar que la configuración esté completa
      if (EMAIL_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
          EMAIL_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
          EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS no está configurado. Revisa el archivo email.config.ts');
      }

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'David', // Tu nombre
      };

      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      setIsSuccess(true);
    } catch (err) {
      setError('Error al enviar el correo. Intenta nuevamente.');
      console.error('Error sending email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    sendEmail,
    isLoading,
    isSuccess,
    error,
    resetStatus,
  };
};
