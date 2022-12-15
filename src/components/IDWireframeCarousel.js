import Carousel from 'react-bootstrap/Carousel';

export function IDWireframeCarousel(){
  return(
    <Carousel interval={null} variant="dark" style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}} >
      <Carousel.Item >
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Pre Sign In.png"
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Create Account.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Leagues.png"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Friends page.png"
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Home page.png"
          alt="Fifth slide"
        />
      </Carousel.Item>


    </Carousel>
  )
}