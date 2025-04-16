import { Carousel, Image } from 'react-bootstrap';
import sild1 from '../../images/book1.png'
import sild2 from '../../images/book2.png'
import sild3 from '../../images/book3.png'
import './sild.css'
const Silder = () => {
    return (
        <Carousel style={{backgroundColor:"black"}} className='container' >
        <Carousel.Item>
          <Image className="sild-image"  src={sild1} alt='slid1' />
          <Carousel.Caption  >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="sild-image"  src={sild2} alt='slid2'  />
          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="sild-image"  src={sild3} alt='sild3' />
          <Carousel.Caption >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
      );
}
 
export default Silder;