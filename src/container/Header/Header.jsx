import './Header.css';
import {images} from "../../constants"
import { SubHeading }  from '../../components';

const Header = () => {
  return (
    <header className='app__header app__wrapper section__padding' id='home'>
      
      <ul className='app__header-sideMenu'>
        <li className='p__opensans'><a href="#Bar">#Bar</a></li>
        <li className='p__opensans'><a href="#Gericht">#Gericht</a></li>
      </ul>

      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">The key to Fine dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et,
          penatibus aliquam amet tellus </p>
        <button type="submit" className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="welcome" />
        <p></p>
      </div>
      <div className='app__header-scroll'>
        <div />
        <p className='p__opensans'>scroll</p>
      </div>
    </header>
)};

export default Header;