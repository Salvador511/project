import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex items-center space-x-4">
          <a href="https://www.google.com.mx/?hl=es" className="text-white">
            <i className="fa fa-google"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/?locale=es_LA" className="text-white">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="text-white">&copy; Aritmos Corporation</div>
      </div>
    </footer>
  );
}

export default Footer;
