import Carousel from 'react-bootstrap/Carousel';


export function IDSketchesCarousel() {
  return(
    <Carousel interval={null} variant="dark" style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}} >
      <Carousel.Item >
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches .png"
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches  2.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches  3.png"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches  4.png"
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches  5.png"
          alt="Fifth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches  6.png"
          alt="Sixth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches  7.png"
          alt="Seventh slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight: '700px'}}
          className="d-block w-100"
          src="images/Sketches  8.png"
          alt="Eigth slide"
        />
      </Carousel.Item>

    

    </Carousel>
  )
}