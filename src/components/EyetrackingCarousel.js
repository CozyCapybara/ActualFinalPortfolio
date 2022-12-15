import Carousel from 'react-bootstrap/Carousel';


export function EyetrackingCarousel({item}){
  return(
    <Carousel interval={null} variant="light" style={{marginLeft: '10%', marginRight: '10%', marginBottom: '4%', width: '80%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}} >
      <Carousel.Item >
        <img style={{width: '700px'}}
          className="d-block w-100"
          src={item.img1}
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img style={{width: '700px'}}
          className="d-block w-100"
          src={item.img2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{width: '700px'}}
          className="d-block w-100"
          src={item.img3}
          alt="Third slide"
        />
      </Carousel.Item>



    </Carousel>
  )
}