import Head from 'next/head';
import React, { useEffect, useState } from 'react';
// import TopWarningBanner from '../components/TopWarningBanner';
import Footer from '../components/Footer';

export default function Home() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  // 1. ДОБАВЛЕНО: Новое состояние для Cookie Policy
  const [showCookies, setShowCookies] = useState(false);

  const backgroundImagePath = '/images/background.jpg';
  const backgroundOpacity = 0.3;

  const sectionBgImagePath = '/images/background2.jpg';
  const overlayColor = 'rgba(26, 79, 79, 0.85)';

  useEffect(() => {
    const handleScrollToForm = () => {
      const formSection = document.getElementById('form-section');
      if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
    };

    const signUpButton = document.getElementById('sign-up-button');
    if (signUpButton) signUpButton.addEventListener('click', handleScrollToForm);

    return () => {
      if (signUpButton) signUpButton.removeEventListener('click', handleScrollToForm);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get('firstName')?.toString() || '',
      lastName: formData.get('lastName')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
    };

    console.log('Submitting form:', payload);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      alert('Registration successful! Our manager will contact you shortly.');
      form.reset();
    } catch (err) {
      console.error('Submit error:', err);
      alert('Error sending form — check console.');
    }
  };

  return (
    <div className="min-h-screen bg-teal-900 text-white relative">
      <Head>
        <title>EquLum App AI - Malaysia</title>
        <meta name="description" content="Investment trading platform Malaysia" />
      </Head>



      {/* Responsive Navigation Header (без изменений) */}
      <nav className="fixed top-0 left-0 w-full bg-teal-900/95 backdrop-blur-md shadow-md z-50">

        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-extrabold text-yellow-400 tracking-wide">
            Equlum App AI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-white text-sm font-medium">

            <button
              onClick={() => {
                const formSection = document.getElementById('form-section');
                if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-400 text-teal-900 font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              className="text-white focus:outline-none text-2xl"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-teal-800/95 text-white px-6 py-4 space-y-4 text-center border-t border-teal-700">
      

          <button
            onClick={() => {
              const formSection = document.getElementById('form-section');
              if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-yellow-400 text-teal-900 font-bold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Header Section (без изменений) */}
      <header className="pt-20 md:pt-24 px-4 md:px-10 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* 1. Слой фона с изображением и прозрачностью */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${backgroundImagePath})`,
          opacity: backgroundOpacity, 
        }}
        aria-hidden="true" // Скрываем элемент от скрин-ридеров, так как это декоративный фон
      ></div>

      {/* 2. Контейнер контента: 'relative z-10' для отображения над фоном */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl">
        
        {/* Left Side (Левая сторона) */}
        <div className="col-span-1 md:col-span-7 text-center md:text-left">
          <h1 className="text-5xl md:text-4xl font-bold mb-4 font-extrabold text-yellow-400 tracking-tight">
            Equlum App AI
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            {/* Добавлен 'text-white' для лучшей читаемости на фоне */}
            Unlock Your Future Wealth With The Equlum AI App — Backed By The Malaysian Government
          </h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mb-4">
            🇲🇾 Malaysian registration is now open
          </button>
        </div>

        {/* Right Side (Form) (Правая сторона) */}
        <div className="col-span-1 md:col-span-5 mt-6 md:mt-0">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-teal-900 p-4 rounded-lg shadow-lg max-w-sm mx-auto md:mx-0"
          >
            {/* Поля формы */}
            <div className="mb-3 flex gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="w-1/2 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="w-1/2 p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </header>
      
      {/* ... (Остальные секции без изменений) ... */}

      {/* --- Start Steps Section --- */}
      <section className="relative py-20 bg-gradient-to-b from-white via-white to-green-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 leading-tight">
            Kickstart Your Investment Path with{" "}
            <span className="text-[#00B67A]">Equlum App AI</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step One */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-[#00B67A] font-semibold uppercase tracking-wide mb-3">
                Step One
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sign up</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Complete a quick registration to start your journey. Fill in your
                details and verify your email for approval. Enjoy secure and
                transparent access powered by advanced cryptography — completely free.
              </p>
            </div>

            {/* Step Two */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-[#00B67A] font-semibold uppercase tracking-wide mb-3">
                Step Two
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fund account</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                After approval, choose a trusted broker from our verified list. Fund
                your account with a minimum of <span className="font-semibold">$250 </span>
                and enjoy full access to trading tools and flexible withdrawals.
              </p>
            </div>

            {/* Step Three */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-[#00B67A] font-semibold uppercase tracking-wide mb-3">
                Step Three
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Make money</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Experience the innovation of Equlum App AI — customize your trading
                strategy, automate processes, and achieve consistent growth through
                our advanced AI-powered system.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- End Steps Section --- */}

      {/* Advantages Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-white to-green-50 overflow-hidden"
  className="relative py-20 text-white bg-cover bg-center overflow-hidden" 
  style={{
    // Формат: linear-gradient(ЦВЕТ_ОВЕРЛЕЯ), url(ПУТЬ_К_КАРТИНКЕ)
    backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${sectionBgImagePath})`,
  }}
>
 {/* В этом варианте нет отдельных div для фона и градиента! */}
  
  {/* 1. Контейнер контента Section (z-10, который теперь не обязателен, но не мешает) */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-yellow-400 tracking-tight">
      The Power Behind the Equlum AI app
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-teal-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-teal-600 transition-all duration-300 hover:scale-[1.02]">
        <h3 className="text-yellow-400 font-semibold text-xl mb-3">A13.2 X average performance.</h3>
        <p className="text-gray-100 leading-relaxed text-[15px]">
          Equlum’s AI engine has consistently outperformed traditional investment benchmarks, including the S&P 500.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-teal-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-teal-600 transition-all duration-300 hover:scale-[1.02]">
        <h3 className="text-yellow-400 font-semibold text-xl mb-3">Sophisticated analytics</h3>
        <p className="text-gray-100 leading-relaxed text-[15px]">
          Over 100 million data points are continuously analysed to identify trends, correlations, and early market signals that humans often miss.
        </p>
      </div>
            {/* ... (остальные карточки) */}
      {/* Card 3 */}
      <div className="bg-teal-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-teal-600 transition-all duration-300 hover:scale-[1.02]">
        <h3 className="text-yellow-400 font-semibold text-xl mb-3">Instant decision making</h3>
        <p className="text-gray-100 leading-relaxed text-[15px]">
          The system reacts to real-time market changes within 0.12 seconds, executing precise buy and sell simulations faster than any manual trader.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-teal-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-teal-600 transition-all duration-300 hover:scale-[1.02]">
        <h3 className="text-yellow-400 font-semibold text-xl mb-3">AI analyzing models</h3>
        <p className="text-gray-100 leading-relaxed text-[15px]">
          Powered by more than 12,000 machine-learning and predictive models, Equlum continuously improves its accuracy and adaptability with every data cycle.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-teal-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-teal-600 transition-all duration-300 hover:scale-[1.02]">
        <h3 className="text-yellow-400 font-semibold text-xl mb-3">Trusted and Secured</h3>
        <p className="text-gray-100 leading-relaxed text-[15px]">
          Initiative of the Malaysian government as part of “National Financial Literacy Strategy 2026-2030”.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-teal-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-teal-600 transition-all duration-300 hover:scale-[1.02]">
        <h3 className="text-yellow-400 font-semibold text-xl mb-3">Tested Framework</h3>
        <p className="text-gray-100 leading-relaxed text-[15px]">
          Tested by over 10,000+ participants during the national pilot programme — demonstrating performance and reliability.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Leaders Section */}
      <section className="relative bg-gradient-to-b from-white via-white to-green-50 py-24 fade-in-section">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Leaders Who Support {" "}
            <span className="text-[#00B67A]">Equlum App AI</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-16 max-w-2xl mx-auto">
            Supported by visionary leaders who share our passion for innovation and progress.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Leader 1 */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all p-10 border border-gray-100">
              <div className="relative h-28 w-28 mx-auto mb-6 rounded-full overflow-hidden shadow-md bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-3xl font-bold text-white">
                <img
                  src="/images/anwar_ibrahim.jpg"
                  alt="Anwar Ibrahim"
                  className="h-full w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">Anwar Ibrahim</h3>
              <p className="text-gray-500 text-sm mb-4">Prime Minister of Malaysia</p>
              <p className="text-gray-600 text-base leading-relaxed">
                “This is about empowerment. We want every Malaysian — from students to retirees — to understand how modern financial tools work, and to have the confidence to manage and grow their own resources responsibly”
              </p>
            </div>

            {/* Leader 2 */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all p-10 border border-gray-100">
              <div className="relative h-28 w-28 mx-auto mb-6 rounded-full overflow-hidden shadow-md bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">
                <img
                  src="/images/abdul.jpg"
                  alt="Shaik Abdul Rasheed Abdul Ghaffour"
                  className="h-full w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">Shaik Abdul Rasheed Abdul Ghaffour</h3>
              <p className="text-gray-500 text-sm mb-4">Governor of Bank Negara Malaysia</p>
              <p className="text-gray-600 text-base leading-relaxed">
                “Equlum AI app could build the foundation for a more resilient and future-ready economy, as well as improve the life quality of every Malaysian.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="form-section"
        className="bg-teal-900 px-4 md:px-10 py-20 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Join Now</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-teal-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-1/2 p-2 bg-teal-700 text-white border border-teal-600 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-1/2 p-2 bg-teal-700 text-white border border-teal-600 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 bg-teal-700 text-white border border-teal-600 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="w-full p-2 bg-teal-700 text-white border border-teal-600 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-teal-900 font-bold py-2 rounded hover:bg-yellow-500 transition"
          >
            Join Now
          </button>
        </form>
      </section>

      {/* Fixed Banner */}
      <div className="fixed bottom-4 left-4 right-4 bg-gradient-to-r from-teal-700 to-teal-500 p-3 rounded-lg shadow-lg flex justify-between items-center z-50 transform transition-all hover:scale-105">
        <div className="flex items-center space-x-4">
          <span className="text-xl">🇲🇾</span>
          <span className="text-sm md:text-base">Earn Up to RM6,400/day</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm md:text-base text-yellow-300">Places left: 14</span>
          <button
            id="sign-up-button"
            className="bg-yellow-400 text-teal-900 font-bold py-1 px-3 rounded hover:bg-yellow-500 transition text-sm md:text-base"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Footer */}
      
      <Footer 
          showPrivacy={showPrivacy} 
          setShowPrivacy={setShowPrivacy} 
          showCookies={showCookies} 
          setShowCookies={setShowCookies} 
      />


      {/* Tailwind Animations (без изменений) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}