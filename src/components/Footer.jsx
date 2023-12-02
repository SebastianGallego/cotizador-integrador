export default function Footer() {
  return (
    <footer className="text-xl text-gray-400 h-40 container mx-auto bg-gray-800 flex gap-4 justify-around  items-center  ">
      <div>
        <p className="text-2xl mb-2">Sebastián Gallego (2023) ©</p>
      </div>
      <div className="flex flex-col placeholder:items-center ">
        <p className="text-2xl mb-5 text-center">Contacto:</p>
        <div className="flex gap-5 h-10">
          <a
            href="mailto:sebastian.gallego@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden transition-transform duration-300 hover:scale-110"
          >
            <img src="correo.png" className="w-8"></img>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden transition-transform duration-300 hover:scale-110"
          >
            <img src="linkedin.png" className="w-8"></img>
          </a>
          <a
            href="https://github.com/SebastianGallego/"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden transition-transform duration-300 hover:scale-110"
          >
            <img src="github.png" className="w-8"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
