import Silder from '../../componant/silder/Silder';
import {books} from '../../data/books'
import BookSlider from '../../componant/bookSlider/BookSlider';

const HomePage = () => {
    return (
        <div>
     <Silder/>
      <BookSlider data={books} />

        </div>
      );
}
 
export default HomePage;