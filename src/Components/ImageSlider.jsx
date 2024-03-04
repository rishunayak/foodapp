// // ImageSlider.js
// import React, { useState, useEffect } from 'react';
// import { Box, Image, Flex, Text, Circle } from '@chakra-ui/react';

// const ImageSlider = () => {
//     const images=[
//         "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
//         "https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg",
//         "https://assets.architecturaldigest.in/photos/6385cf3311f0276636badfb6/16:9/w_2560%2Cc_limit/DSC_8367-Edit-W.png",
//         "https://cdn.britannica.com/02/239402-050-ACC075DB/plates-of-vegan-foods-ready-serve-restaurant-London.jpg"
//     ]
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleCircleClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <Box position="relative"  overflow={'hidden'} p={"0% 5%"}>
//       <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} borderRadius={"16px"} height={["250px","250px","500px"]} w={"100%"}/>

//       <Flex position="absolute" bottom="2" left="50%" transform="translateX(-50%)">
//         {images.map((_, index) => (
//           <Circle
//             key={index}
//             size="2"
//             mx="1"
//             bg={currentIndex === index ? 'teal.500' : 'gray.200'}
//             _hover={{ cursor: 'pointer', bg: 'teal.300' }}
//             onClick={() => handleCircleClick(index)}
//           />
//         ))}
//       </Flex>


//     </Box>
//   );
// };

// export default ImageSlider;


// ImageSlider.js
import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, Text, Circle, Badge } from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';

const ImageSlider = () => {
    const images=[
                "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
                "https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg",
                "https://assets.architecturaldigest.in/photos/6385cf3311f0276636badfb6/16:9/w_2560%2Cc_limit/DSC_8367-Edit-W.png",
                "https://cdn.britannica.com/02/239402-050-ACC075DB/plates-of-vegan-foods-ready-serve-restaurant-London.jpg"
            ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleLogoDrag = (event, info) => {
    setLogoPosition({ x: info.x, y: info.y });
  };

  return (
    <Box position="relative"  overflow={'hidden'} p={"0% 5%"}>
      <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}  borderRadius={"16px"} height={["250px","250px","500px"]} w={"100%"}/>

      <Box p={"0% 5%"}
        position="absolute"
        left={`${logoPosition.x}px`}
        top={`${logoPosition.y}px`}
        cursor="grab"
        userSelect="none"
        onMouseDown={(e) => e.preventDefault()}
        onDrag={(e, info) => handleLogoDrag(e, info)}
        draggable
      >
        <Badge borderRadius="full" bg="teal.500" p="2">
          <DragHandleIcon color="white" />
        </Badge>
      </Box>

      <Flex position="absolute" bottom="4" left="50%" transform="translateX(-50%)">
        {images.map((_, index) => (
          <Circle
            key={index}
            size="2"
            mx="1"
            bg={currentIndex === index ? 'teal.500' : 'gray.200'}
            _hover={{ cursor: 'pointer', bg: 'teal.300' }}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </Flex>

    </Box>
  );
};

export default ImageSlider;

