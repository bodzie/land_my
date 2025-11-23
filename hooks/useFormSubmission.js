import { useRouter } from 'next/router';
import { useState } from 'react';

// ... (Ваш EXTERNAL_API_URL)
const EXTERNAL_API_URL = 'https://ecomventuresapi.net/leads'; 

/**
 * Вспомогательная функция для преобразования JS объекта в строку URL-кодированных данных.
 * Требуется для Content-Type: application/x-www-form-urlencoded
 */
function toFormUrlEncoded(obj) {
  // Создаем массив пар [ключ, значение]
  const formBody = [];
  for (const key in obj) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(obj[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  // Объединяем их знаком '&'
  return formBody.join('&');
}

export function useFormSubmission() {
  const router = useRouter();
  const { aff_sub5 } = router.query; 

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      // Имена полей: убедитесь, что они соответствуют требованиям API!
      first_name: formData.get('firstName')?.toString() || '',
      last_name: formData.get('lastName')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      
      // Поля для отслеживания и гео
      aff_sub5: aff_sub5 || '', 
      aff_id: '762',
      area_code: '+60',
      aff_sub3: 'en',
      language: 'en',
      aff_sub: '322'
    };

    // 💥 ИСПРАВЛЕНИЕ: Преобразование объекта в URL-кодированную строку
    const formUrlEncodedBody = toFormUrlEncoded(payload);

    console.log('Submitting payload (form-urlencoded):', formUrlEncodedBody);

    try {
      const res = await fetch(EXTERNAL_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
        // 💥 ИСПОЛЬЗУЕМ СКОНВЕРТИРОВАННУЮ СТРОКУ
        body: formUrlEncodedBody, 
      });

      // ... (Обработка ответа) ...
      if (!res.ok) {
        let userMessage;
        
        // 💥 ИЗМЕНЕННЫЙ БЛОК: Специальный кейс для 409 Conflict
        if (res.status === 409) {
          userMessage = 'Registration failed: A user with this email or phone number is already registered.';
        } 
        // 400 Bad Request часто означает ошибки валидации (например, неправильный формат email)
        else if (res.status === 400) {
          userMessage = 'Registration failed: Please check your entered data (e.g., email or phone format) and try again.';
        } 
        // 404 и 5xx - это ошибки на стороне сервера, не связанные с данными пользователя
        else if (res.status === 404) {
          userMessage = 'Server Error: We could not find the registration service.';
        } else if (res.status >= 500) {
          userMessage = 'Internal Server Error: The service is temporarily unavailable. Please try again later.';
        } else {
          // Универсальное сообщение для остальных ошибок (401, 403 и т.д.)
          userMessage = 'Registration failed: An unexpected error occurred.';
        }
        
        // Логируем полную ошибку для разработчика (вас)
        console.error(`HTTP Error ${res.status}: ${res.statusText}. See details if available.`);
        
        // Выбрасываем ошибку с сообщением для пользователя, 
        // которое будет перехвачено финальным alert.
        throw new Error(userMessage);
      }
      
      alert('Registration successful! Our manager will contact you shortly.');
      form.reset();
      return true;
      
    } catch (err) {
      // ...
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error };
}