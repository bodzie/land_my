// components/TopWarningBanner.js

import React, { useState, useEffect } from 'react';

const TopWarningBanner = () => {
  // ... (остальной код с хуками useState и useEffect без изменений)
  const [targetDate, setTargetDate] = useState('');
  const [countdown, setCountdown] = useState('60:00');

  useEffect(() => {
    // Установка даты на 7 дней вперед
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    setTargetDate(today.toLocaleDateString('en-GB', options).split('/').join('/')); // Формат DD/MM/YYYY

    // Таймер обратного отсчета, привязанный к концу текущего часа
    let totalSeconds;
    const now = new Date();
    const minutesLeftInHour = 59 - now.getMinutes();
    const secondsLeftInMinute = 59 - now.getSeconds();
    totalSeconds = (minutesLeftInHour * 60) + secondsLeftInMinute;

    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = 60 * 60; // Сброс на 60 минут
      }
      totalSeconds--;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      setCountdown(
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Удалены классы fixed top-0 left-0 z-[60]
    // Оставлены классы для стилизации и ширины
    <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold w-full"> 
      Warning: Due to extremely high media demand, we will close registration as of {targetDate} - HURRY {countdown}
    </div>
  );
};

export default TopWarningBanner;