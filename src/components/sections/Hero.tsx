import React from 'react';
import logo1 from '../../logopng1.png'; // Earth image
import logo2 from '../../logopng2.png'; // Satellite image

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-900 flex items-center justify-center"
    >
      <div className="relative w-[500px] h-[500px]">
        {/* Earth Container */}
        <div className="earth-container w-[300px] h-[300px] relative rounded-full">
          <img
            src={logo1}
            alt="Earth"
            className="w-full h-full rounded-full object-contain"
          />

          {/* Orbit Path */}
          <div className="animate-orbit">
            {/* Satellite */}
            <div className="satellite">
              <img
                src={logo2}
                alt="Satellite"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
