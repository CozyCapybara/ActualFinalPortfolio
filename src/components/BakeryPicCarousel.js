import Carousel from 'react-bootstrap/Carousel';


export function BakeryPicCarousel(){
  return(
    <Carousel interval={null} variant="light" style={{marginLeft: '10%', marginRight: '10%', width: '80%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}} >
      <Carousel.Item >
        <img style={{width: '700px'}}
          className="d-block w-100"
          src="images/Version A.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img style={{width: '700px'}}
          className="d-block w-100"
          src="images/Version B.jpg"
          alt="Second slide"
        />
      </Carousel.Item>


    </Carousel>
  )
}