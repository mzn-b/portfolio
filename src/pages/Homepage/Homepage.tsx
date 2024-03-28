export const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative">
        <h1 className="text-center text-emerald-400 rakkas-regular text-[6em] sm:text-[12em]  md:text-[15em]  lg:text-[18em] xl:text-[18em] drop-shadow-[0_40px_40px_rgba(110,231,183,0.3)]">
          مازن الشعراوي
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 place-items-center">
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-white pointer-events-none font-bold tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]">
              Mazen El-shaarawi
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-widest text-gray-300">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
