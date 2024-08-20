// src/components/Banner.tsx

import React from "react";
import Container from "../Container";

interface BannerProps {
  heading: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({
  heading,
  description,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <section className="w-full flex items-center justify-center bg-gray-100">
      <Container>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Text Column */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 my-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate__animated animate__fadeInUp">
              {heading}
            </h1>
            <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeInUp">
              {description}
            </p>
            {ctaText && (
              <a
                href={ctaLink}
                className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {ctaText}
              </a>
            )}
          </div>

          {/* Image Column */}
          <div className="flex-1 flex items-end">
            <img
              src={image}
              alt="Banner"
              className="w-full h-full object-cover animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
