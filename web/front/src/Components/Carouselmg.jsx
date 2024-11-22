import { Carousel } from "@material-tailwind/react";
import PropTypes from 'prop-types';

export function CarouselImg({ imgsSrc }) {

  const defaultImg =[
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
  ]
  return (
    <Carousel
      transition={{ duration: 1, timingFunction: "ease-in-out" }}
      // className="rounded-xl"
      loop={true}
      autoplay={true}
      autoplayDelay={10000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>

      {

        imgsSrc? imgsSrc.map((srcImg, index) => (<img key={index}
          src={srcImg}
          alt={`image ${index}`}
          className="h-full w-full object-cover"
        />
        ))
          :
          defaultImg.map((srcImg, index) => (<img key={index}
            src={srcImg}
            alt={`image ${index}`}
            className="h-full w-full object-cover"/>
          ))

      }
    </Carousel>
  );
}

CarouselImg.propTypes = {
  imgsSrc: PropTypes.arrayOf(PropTypes.string)
};

