import Container from "../Container";

interface ImageTextDivProps {
  image: string;
  heading: string;
  description: string;
  inverse?: boolean;
}

const ImageTextDiv = ({ image, heading, description }: ImageTextDivProps) => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:gap-5 mt-16 items-center">
        <div className="lg:w-1/2 lg:order-2 relative">
          <img className="w-full object-contain max-h-[400px]" src={image} />
        </div>
        <div className="lg:w-1/2 lg:order-1 mt-6 lg:mt-0">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold">{heading}</h2>
            <p className="mt-4 text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageTextDiv;
