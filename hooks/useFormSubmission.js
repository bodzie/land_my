import { useRouter } from 'next/router';
import { useState } from 'react';

// Укажите ваш внешний API-адрес
const EXTERNAL_API_URL = 'https://ecomventuresapi.net/leads'; 

// --- Вспомогательная функция для URL-кодирования ---
function toFormUrlEncoded(obj) {
  const formBody = [];
  for (const key in obj) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(obj[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}

// 💥 Объявление глобального интерфейса для trackLead (для чистого JS это не нужно, но не повредит)
if (typeof window !== 'undefined') {
  // Проверка для избежания ошибок в SSR Next.js
  if (typeof window.trackLead === 'undefined') {
    window.trackLead = () => {}; 
  }
}

export function useFormSubmission() {
  const router = useRouter();
  
  // 1. Считывание параметров URL, включая pxlid и aff_sub5
  const { aff_sub5, pxlid } = router.query; 

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      // Имена полей формы
      first_name: formData.get('first_name')?.toString() || '',
      last_name: formData.get('last_name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      aff_sub5: aff_sub5 || '', 
      affid: '762',
      area_code: '+60',
      aff_sub3: 'en',
      language: 'en',
      aff_sub: '322'
    };

    const formUrlEncodedBody = toFormUrlEncoded(payload);
    console.log('Submitting payload:', formUrlEncodedBody);

    try {
      const res = await fetch(EXTERNAL_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formUrlEncodedBody,
      });

      if (!res.ok) {
        let userMessage;
        
        if (res.status === 409) {
          userMessage = 'Registration failed: A user with this email or phone number is already registered.';
        } else if (res.status === 400) {
          userMessage = 'Registration failed: Please check your entered data and try again.';
        } else if (res.status === 404) {
          userMessage = 'Server Error: We could not find the registration service.';
        } else if (res.status >= 500) {
          userMessage = 'Internal Server Error: The service is temporarily unavailable. Please try again later.';
        } else {
          userMessage = 'Registration failed: An unexpected error occurred.';
        }
        
        console.error(`HTTP Error ${res.status}: ${res.statusText}. See details if available.`);
        throw new Error(userMessage);
      }
      
      if (typeof window.trackLead === 'function') {
        window.trackLead();
      }

      alert('Registration successful! Our manager will contact you shortly.');
      form.reset();
      return true;
      
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred during submission.';
      setError(errorMessage);
      alert(errorMessage);
      return false;
      
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error };
}