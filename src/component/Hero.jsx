import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[95%] lg:w-[75%]  md:h-[300px] h-[150px] mx-auto bg-white md:mt-16 mt-2.5 flex flex-col lg:flex-row gap-1">

      {/* LEFT - SLIDER */}
      <div className="relative flex-1 overflow-hidden">

        {/* Images */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="banner"
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`md:h-2.5 md:w-2.5 h-2 w-2 rounded-full transition ${
                i === index ? "bg-blue-600 w-4" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT - ADS */}
      <div className="w-full lg:w-[280px] hidden md:block">


        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="ad2"
          className="w-full h-full object-cover rounded-[18px] p-2.5"
        />
      </div>

    </div>
  );
};

export default Hero;