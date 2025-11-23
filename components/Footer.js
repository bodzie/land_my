import React from 'react';

const Footer = ({ showPrivacy, setShowPrivacy, showCookies, setShowCookies }) => {
  return (
    // Footer
    <footer
      className="bg-gray-900 text-gray-400 text-sm text-center py-10 px-4 relative z-10"
      style={{ marginTop: "-60px", paddingBottom: "140px" }}
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <p>
          <strong>REGULATION & HIGH RISK INVESTMENT WARNING:</strong> Trading Forex, CFDs and
          Cryptocurrencies is highly speculative and may not be suitable for all investors...
        </p>
        <p>
          USA REGULATION NOTICE: Option trading is not regulated within the United States. EquLum
          App AI is not supervised or regulated by any financial agencies.
        </p>
        <p>
          SITE RISK DISCLOSURE: EquLum App AI does not accept any liability for loss or damage as a
          result of reliance on the information contained within this website.
        </p>
        <p>
          LEGAL RESTRICTIONS: It is your responsibility to comply with any laws and regulations in
          your country of residence regarding use of this site.
        </p>

        <div className="space-y-3">
          <p>© 2025 All Rights Reserved — <strong>EquLum App AI</strong></p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-yellow-400 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowCookies(true)}
              className="text-yellow-400 hover:underline"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* extra bottom space so fixed banner won't cover footer content */}
      <div className="h-36" />

      {/* Modal: Privacy (Ширина w-11/12 max-w-4xl, Высота max-h-[60vh]) */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
          {/* ИЗМЕНЕНИЕ ЗДЕСЬ: max-h-[60vh] */}
          <div className="bg-white text-gray-900 p-6 rounded-lg w-11/12 max-w-4xl max-h-[60vh] overflow-y-auto relative transform transition-all duration-300 animate-slideUp">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-lg"
              onClick={() => setShowPrivacy(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-sm space-y-4 text-left">
              <h3 className="text-lg font-semibold mt-6 mb-2">1. Introduction</h3>
              <p>This statement outlines the privacy policy adopted by **EquLum App AI** ("us," "we," or "our") concerning our products and services (the "Services") and website (the "Website"). Safeguarding your privacy and the confidentiality of your information is crucial to us in delivering our Services and operating the Website.
              </p>
              <p>Our Services and Website may link to third-party sites and services. We are not accountable for the privacy practices of these third-party entities. It is advisable to review their privacy policies before using them.
              </p>
              <p>All information acquired by us in connection with our Services is treated as confidential. We employ robust technical, security, and organizational measures to protect Personal Data (as defined below) against unauthorized processing, accidental loss, destruction, damage, theft, or disclosure.
              </p>
              <p>When sending your information through our website, you may be required to provide personal information, (for example) your name, email, phone number, date of birth, and various identification details. This information may be utilized, inter alia, to verify identity, administer information, offer technical support, and fulfill contractual and legal obligations. We may communicate important details through notifications, and with your consent, provide information about products and services via SMS, email, etc. You have the option to manage notification preferences and unsubscribe from certain communications.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">2. Website; Visitors and Users</h3>
              <h4 className="text-base font-medium mt-3">2.1. General</h4>
              <p>This section delineates the specifics of data collection from different groups: Website's visitors ("Visitors"), users ("Users"), and business partners (collectively "Partners"). **Personal Data** includes IP address, name, contact details, and information about the relationship with us, as defined by applicable data protection regulations.
              </p>
              <h4 className="text-base font-medium mt-3">2.2. Collection and Use</h4>
              <p>By visiting the Website, you consent to the collection and use of your Personal Data. Failure to agree with these terms should deter you from visiting the Website. We may collect information through page view activity, IP addresses, and cookies. Additionally, we process volunteered data from forms and registrations.
              </p>
              <h4 className="text-base font-medium mt-3">2.3. Purpose of Processing Personal Data</h4>
              <p>We process Personal Data to enhance, understand, and personalize our Website and Services. This includes improving accuracy, communication about Services, support, contractual obligations, and collaboration with partners. Consent or legal basis is essential for any processing.
              </p>
              <p>The following outlines the purposes and legal basis for processing Personal Data:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                    <tr><td className="px-3 py-1 whitespace-nowrap">Registration as an account holder</td><td className="px-3 py-1 whitespace-nowrap">Your consent; Performance of Services or contract obligations</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Providing and using Services</td><td className="px-3 py-1 whitespace-nowrap">Performance of Services or contract obligations</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Operational updates</td><td className="px-3 py-1 whitespace-nowrap">Performance of Services or contract obligations</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Responding to queries and providing support</td><td className="px-3 py-1 whitespace-nowrap">Legitimate interests or performance of Services</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Tailor-made Services, advertising, and marketing</td><td className="px-3 py-1 whitespace-nowrap">Legitimate interests or your consent</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Improving and offering new Services</td><td className="px-3 py-1 whitespace-nowrap">Consent and legitimate interests</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Sending advertising and marketing materials</td><td className="px-3 py-1 whitespace-nowrap">Your consent</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Analyzing marketing campaign effectiveness</td><td className="px-3 py-1 whitespace-nowrap">Legitimate interests or consent</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Performing various support activities</td><td className="px-3 py-1 whitespace-nowrap">Legitimate interests or performance of Services</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Analysis, including statistical analysis</td><td className="px-3 py-1 whitespace-nowrap">Legitimate interests</td></tr>
                    <tr><td className="px-3 py-1 whitespace-nowrap">Protecting interests, rights, and assets</td><td className="px-3 py-1 whitespace-nowrap">Legitimate interests or legal obligations</td></tr>
                  </tbody>
                </table>
              </div>
              <h4 className="text-base font-medium mt-3">2.4. Sharing Personal Data</h4>
              <p>We may share information with service vendors, Partners, and contractors. For Visitors and Users in the European Data Region, data processing complies with GDPR and Data Protection Laws and applicable regulations.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">3. Partners</h3>
              <h4 className="text-base font-medium mt-3">3.1. General</h4>
              <p>To provide Services and collaborate with Partners, we collect and process specific data types. Partners are responsible for their data, and we may access it through secure means.
              </p>
              <h4 className="text-base font-medium mt-3">3.2. Processing of Personal Data</h4>
              <p>We rely on Partner consent or legitimate interests to process Personal Data. Data Aggregations may be created for development and quality improvement.
              </p>
              <h4 className="text-base font-medium mt-3">3.3. Controller/Processor</h4>
              <p>We may act as a Controller or Processor depending on the data type:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Visitor/User data: Controller</li>
                <li>Partner data: Processor</li>
              </ul>
              <p>All data is securely hosted, following the highest security standards. We implement physical, technical, and organizational safeguards.
              </p>
              <h4 className="text-base font-medium mt-3">3.4. Third-Party Data Protection</h4>
              <p>If Services involve processing Personal Data on a third-party platform:</p>
              <ul className="list-disc list-inside ml-4">
                <li>We act as a Processor</li>
                <li>Comply with the third party's instructions</li>
                <li>Implement security measures</li>
                <li>Inform about data breaches</li>
                <li>Do not subcontract without consent</li>
                <li>Do not process data outside the European Economic Area without consent</li>
              </ul>
              <p>For electronic marketing communications, consent and unsubscribe options are ensured.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">4. Security</h3>
              <p>We employ administrative, organizational, and technical safeguards to protect Personal Data from unauthorized access, disclosure, alteration, loss, misuse, or damage. When sharing data with third parties, we ensure they uphold the same data protection standards, and contractual obligations are established for exclusive, secure processing aligned with this Policy.
              </p>
              <p>If there's a belief that the interaction with us is compromised, Visitors, Users, or Partners should promptly notify us. It's important to note that, despite our security measures, we cannot guarantee complete immunity from third-party hacking. Users acknowledge the inherent risks and potential breaches.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">5. Cookies</h3>
              <p>Refer to our **Cookie Policy** for detailed information about the types of cookies and tracking technologies used on the Website, reasons for use, and how to accept or reject them.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">6. Links to Other Sites</h3>
              <p>While navigating the Website, Users may encounter links to external sites beyond our control. We don't bear responsibility for the content or privacy policies of these sites. Users are advised to review the privacy policies of such third-party websites and services before disclosing any Personal Data.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">7. Retention and Deletion</h3>
              <p>Data, including Personal Data, will not be retained longer than necessary. Visitors and/or Users with active accounts are responsible for timely data deletion. Upon termination of an account or partnership, related Personal Data collected through the Website and/or Services will be deleted in compliance with applicable laws and our internal policies.
              </p>
              <p>Withdrawal of consent for processing Personal Data may limit access to some or all requested Services, with no claims or contentions to be available.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">8. Your Rights</h3>
              <p>Users are entitled to specific rights regarding their Personal Data:</p>
              <h4 className="text-base font-medium mt-3">8.1. Right of Access</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Confirm if Personal Data is processed</li>
                <li>Access to Personal Data and related information</li>
                <li>Information about processing purposes, categories, recipients, storage duration, rights, and profiling existence</li>
              </ul>
              <h4 className="text-base font-medium mt-3">8.2. Right to Rectification</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Rectification of inaccurate Personal Data</li>
                <li>Completion of incomplete Personal Data</li>
              </ul>
              <h4 className="text-base font-medium mt-3">8.3. Right to Erasure</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Request erasure of Personal Data under specific grounds</li>
              </ul>
              <h4 className="text-base font-medium mt-3">8.4. Right of Restriction of Processing</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Obtain restriction of processing under specific circumstances</li>
              </ul>
              <h4 className="text-base font-medium mt-3">8.5. Right to Data Portability</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Receive Personal Data in a structured, machine-readable format</li>
                <li>Transmit Personal Data to another controller</li>
              </ul>
              <h4 className="text-base font-medium mt-3">8.6. Right to Object</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Object to processing based on legitimate interests or direct marketing</li>
                <li>Cease processing unless compelling and/or legal grounds applicable</li>
              </ul>
              <h4 className="text-base font-medium mt-3">8.7. Right to Withdraw Consent</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Withdraw consent for processing Personal Data at any time</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">9. Advertising and Marketing Materials</h3>
              <p>Consent is obtained to use Personal Data and contact details for providing advertising and marketing materials. Withdrawal of consent is possible by sending written notice to the provided email address.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">10. Acceptance of this Policy</h3>
              <p>By using the Website and/or Services, Visitors, Users, and/or Partners are presumed to have read and agreed to this Policy. Any disagreement implies refraining from using the platform. We reserve the right to modify the Policy, and Users are encouraged to check for updates periodically. Continued use after changes indicates acceptance.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">11. Legal Obligation to Disclose Personal Data</h3>
              <p>Personal Data may be disclosed without prior permission if there's a belief that it's necessary to establish identity, contact, or initiate legal proceedings against individuals suspected of infringing rights or property. Disclosure shall be made when legally required to.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal (Ширина w-11/12 max-w-4xl, Высота max-h-[60vh]) */}
      {showCookies && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
          {/* ИЗМЕНЕНИЕ ЗДЕСЬ: max-h-[60vh] */}
          <div className="bg-white text-gray-900 p-6 rounded-lg w-11/12 max-w-4xl max-h-[60vh] overflow-y-auto relative transform transition-all duration-300 animate-slideUp">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-lg"
              onClick={() => setShowCookies(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
            <div className="text-sm space-y-4 text-left">
              <p>
                The following statement sets out details of the cookies policy adopted by **EquLum App AI** regarding its website(s) (the "Website(s)"; "we"; "us" or "our") to gather and disseminate information ("Cookies Policy"). Whenever in this Cookies Policy that We refer to "you" or "yours"' the intention is to all users who make use of our Website(s).
              </p>
              <p>
                We use cookies (small text files containing a string of alphanumeric characters that we put on your computer) and other similar tracking technologies (like web beacons, pixels, tags and scripts) to uniquely identify visitors' and/or users' browsers and to gather information about how visitor and/or user interaction with the Website(s), including for interest-based advertising. We use this information for the following purposes: assisting visitors and/or users in navigation; assisting in registration, login and the ability to provide feedback; analyzing the use of products, services or applications; and assisting with promotional and marketing efforts (including behavioral advertising).
              </p>
              <p>
                Some of our service providers, affiliates, sub-contractors, business partners, advertisers, publishers, advertising agencies and/or platforms, etc. (herein: **"Third Parties"**), may also use such technologies in connection with the services they perform on our behalf.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Purpose of Cookies</h3>
              <p>
                Our Cookies Policy ensures your journey through our websites is tailored to your preferences. We employ cookies and similar tracking technologies to enhance your interaction with our Websites. These technologies, like web beacons, pixels, tags, and scripts, uniquely identify and gather information about your browser.
              </p>
              <p>
                **The information collected serves various purposes:**
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Assisting in navigation, registration, login, and feedback provision.</li>
                <li>Analyzing product, service, or application usage.</li>
                <li>Facilitating promotional and marketing efforts, including behavioral advertising.</li>
              </ul>
              <p>
                These technologies don’t disclose your personally identifiable information unless you willingly provide it.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Usage of Cookies</h3>
              <p>
                Cookies are utilized on the **EquLum App AI** website:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Website(s) operated by us and/or authorized Third Parties.</li>
                <li>Software and/or mobile applications made available by us and/or authorized Third Parties.</li>
              </ul>
              <p>
                By using our Websites, you agree to the Cookies Policy. Some cookies are **essential** to the performance of our Website (you cannot opt out from these cookies). Your browser may also allow you to block the storage of cookies on your computer; please refer to your browser’s “Help” menu or website for more information. If you use our services without blocking cookies you are actually consenting to the cookies.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Cookie Categories</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  **Session Cookies:** Temporary storage for browsing sessions, enhancing Website functionality.
                </li>
                <li>
                  **Essential Cookies:** Necessary for Website operation, enabling login and member benefits.
                </li>
                <li>
                  **Functional Cookies:** Save settings and data for a personalized experience on the Website(s).
                </li>
                <li>
                  **Persistent Cookies:** Stored for a fixed period, recognizing preferences across visits.
                </li>
                <li>
                  **Targeting and Advertising Cookies:** Collect information for service improvement and serve targeted advertisements.
                </li>
                <li>
                  **Analytics Cookies:** Enhance Website functionality by collecting and analyzing aggregated information about user behavior.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Cookie Examples:</h3>
              <ul className="list-disc list-inside ml-4">
                <li>
                  _____________: Connects to the server, storing data between requests.
                </li>
                <li>
                  ___________: Indicates Dark Mode preference.
                </li>
                <li>
                  _________: Adjusts website display based on access method.
                </li>
                <li>
                  _________ (Service Provider): Customizes ads on various websites.
                </li>
                <li>
                  _______ (Service Provider): Avoids repeated ads, improving overall ad quality.
                </li>
                <li>
                  ______ (Service Provider): Serves targeted ads based on previous website visits.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Third-Party Cookies</h3>
              <ul className="list-disc list-inside ml-4">
                <li>
                  **Service Provider cookies:** Utilized for analytics and advertising platforms for marketing, advertising, and remarketing.
                </li>
                <li>
                  **Social Platform cookies:** Enable interest-based advertising on social media platforms.
                </li>
                <li>
                  **Ad Network cookies:** Used for marketing, advertising, and remarketing purposes.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Information Sharing</h3>
              <p>
                We disclose contact and/or billing information as described in our Privacy Policy and this Cookies Policy:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>With your express permission.</li>
                <li>With Partners and affiliates, under common control.</li>
                <li>With Third Parties providing services like analytics, data management, web hosting, and development (Service Providers).</li>
                <li>In mergers, sales, asset transfers, or other corporate changes.</li>
                <li>When necessary to protect the Website, its users, or comply with legal obligations.</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Browser Settings</h3>
              <p>
                Different browsers provide control over cookies, session storage, and local storage. You can customize settings or use tools like "Do-Not-Track" signals and browser extensions to manage third-party tracking cookies. However, note that some features may not work if you disable cookies. Refer to relevant browser documentation for detailed control instructions.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;