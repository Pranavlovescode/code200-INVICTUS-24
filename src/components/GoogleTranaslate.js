// // import React, { useEffect, useState } from 'react';

// // const GoogleTranslate = () => {
// //   const [error, setError] = useState(false);

// //   useEffect(() => {
// //     const script = document.createElement('script');
// //     script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
// //     script.async = true;

// //     script.onerror = () => {
// //       setError(true);
// //     };

// //     document.body.appendChild(script);

// //     window.googleTranslateElementInit = function() {
// //       new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
// //     };

// //     return () => {
// //       document.body.removeChild(script);
// //       delete window.googleTranslateElementInit;
// //     };
// //   }, []);

// //   return (
// //     <div id="google_translate_element" className="my-4">
// //     {error && (
// //       <p className="text-red-500">Failed to load Google Translate. Please check your internet connection.</p>
// //     )}
// //   </div>
// //   );
// // };

// // export default GoogleTranslate;

// import React, { useEffect } from 'react';
// // import './GoogleTranslate.css'; // Import the CSS file

// const GoogleTranslate = () => {
//   useEffect(() => {
//     // Load the Google Translate Element script
//     const addScript = document.createElement('script');
//     addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
//     addScript.async = true;
//     document.body.appendChild(addScript);

//     // Define the googleTranslateElementInit function
//     window.googleTranslateElementInit = function() {
//       new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//     };

//     return () => {
//       // Clean up the script element
//       document.body.removeChild(addScript);
//     };
//   }, []);

//   return (
//     <div id="google_translate_element" className="translate"></div>
//   );
// };

// export default GoogleTranslate;
import React, { useEffect, useState } from 'react';

const GoogleTranslate = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;

      script.onerror = () => {
        console.error('Failed to load Google Translate. Please check your internet connection.');
      };

      document.body.appendChild(script);

      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };

      setScriptLoaded(true);
    }

    return () => {
      // Clean up if needed
    };
  }, [scriptLoaded]);

  return <div id="google_translate_element" className="my-4"></div>;
};

export default GoogleTranslate;

