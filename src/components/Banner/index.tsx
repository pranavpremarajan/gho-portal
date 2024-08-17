import Container from "../Container";

interface BannerProps {
  image: string;
  heading: string;
  description: string;
}

const Banner = ({ image, heading, description }: BannerProps) => {
  return (
    <section className="relative overflow-hidden bg-slate-100">
      <Container>
        <div className="container mx-auto px-4 pt-16">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 pb-16">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                {heading}
              </h1>
              <p className="text-lg mb-8 text-gray-600">{description}</p>
            </div>
            <div className="lg:w-1/2">
              <img
                className="w-full object-contain"
                src={image}
                width="603"
                height="396"
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
