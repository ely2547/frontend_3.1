import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-10" src="https://st.depositphotos.com/60679122/55028/v/450/depositphotos_550288902-stock-illustration-sweat-icon-water-drop-icon.jpg" alt="Hotel Logo" />
            <a href="/" className="ml-2 text-lg font-bold text-gray-800">Hotel La Montaña</a>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
              <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services">Services</a></li>
              <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/precios">Precios</a></li>
              <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/reservas">Reservar</a></li>
              <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/promotions">Promotions</a></li>
              <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/contact">Contact us</a></li>
              <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog">Blog</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={handleToggleMenu}>
            <svg className="h-6 w-6 fill-current text-gray-600 hover:text-gray-800" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-white shadow">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center">
//             <img className="h-10" src="https://st.depositphotos.com/60679122/55028/v/450/depositphotos_550288902-stock-illustration-sweat-icon-water-drop-icon.jpg" alt="Hotel Logo" />
//             <a href="/" className="ml-2 text-lg font-bold text-gray-800">Hotel La Montaña</a>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex space-x-4">
//               <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services">Services</a></li>
//               <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/precios">Precios</a></li>
//               <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/reservas">Reservar</a></li>
//               <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/promotions">Promotions</a></li>
//               <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/contact">Contact us</a></li>
//               <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog">Blog</a></li>

//             </ul>
//           </nav>
//           <button className="md:hidden">
//             <svg className="h-6 w-6 fill-current text-gray-600 hover:text-gray-800" viewBox="0 0 24 24">
//               <path d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

