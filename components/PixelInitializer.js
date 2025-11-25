import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// --- ФУНКЦИЯ ЗАГРУЗЧИКА ПИКСЕЛЯ ---
// Эта функция загружает библиотеку Meta Pixel и создает глобальную команду fbq()
const loadAndInitializePixel = (pixelId) => {
  // Используем window.fbq напрямую, без TypeScript-деклараций
  if (typeof window.fbq === 'undefined') {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  }
  
  // Инициализация с динамическим ID
  window.fbq('init', pixelId); 
};

const PixelInitializer = () => {
  // Хук для доступа к параметрам URL (router.query)
  const router = useRouter();

  useEffect(() => {
    // 1. Считывание ID из URL: получаем значение параметра 'pxlid'
    const { pxlid } = router.query;
    
    // Проверяем, что ID существует и является непустой строкой
    if (pxlid && typeof pxlid === 'string' && pxlid.length > 0) {
      
      // Инициализация Пикселя
      loadAndInitializePixel(pxlid);
      
      // Событие 1: ViewContent 
      window.fbq('track', 'ViewContent');

      // 2. СОЗДАНИЕ ГЛОБАЛЬНОЙ ФУНКЦИИ trackLead()
      // В JavaScript мы просто присваиваем функцию объекту window
      window.trackLead = () => {
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
          console.log(`Meta Pixel (${pxlid}): Lead event tracked successfully!`);
        }
      };
      
    } else {
        console.log('Meta Pixel: pxlid parameter not found in URL. Pixel not initialized.');
    }
    
  }, [router.query]); 

  return null;
};

export default PixelInitializer;