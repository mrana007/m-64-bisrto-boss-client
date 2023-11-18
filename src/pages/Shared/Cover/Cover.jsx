import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
  return (

    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="Our Menu"
        strength={-200}
    >
       <div
      className="hero h-[500px]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 space-y-4 md:px-72 py-24">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
          <p className="mb-5 uppercase text-xl font-semibold">
          Would you like to try a dish?
          </p>
        </div>
      </div>
    </div>
    </Parallax>

    
  );
};

export default Cover;
