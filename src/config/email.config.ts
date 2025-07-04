// Configuración de EmailJS
// Sigue estos pasos para configurar EmailJS:

// 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
// 2. En el dashboard, ve a "Email Services" y conecta tu servicio de email (Gmail, Outlook, etc.)
// 3. Ve a "Email Templates" y crea un template con estas variables:
//    - {{from_name}} - Nombre del remitente
//    - {{from_email}} - Email del remitente  
//    - {{phone}} - Teléfono del remitente
//    - {{service}} - Servicio solicitado
//    - {{message}} - Mensaje del remitente
//    - {{to_name}} - Tu nombre (destinatario)

// 4. Obtén tus credenciales y reemplaza los valores aquí:

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_itad1c7', // Desde "Email Services"
  TEMPLATE_ID: 'template_sksdst2', // Desde "Email Templates"  
  PUBLIC_KEY: 'Aif5yyJPEk_TC3-5v', // Desde "Account" > "API Keys"
};

// 5. Reemplaza estos valores en el archivo useEmailJS.ts

// Ejemplo de template de email:
/*
Asunto: Nuevo mensaje desde tu portfolio - {{from_name}}

Hola {{to_name}},

Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portfolio web.
*/
