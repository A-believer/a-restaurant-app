import './SpecialMenu.css';
import {data, images} from '../../constants'
import { MenuItem, SubHeading } from '../../components';

const SpecialMenu = () => {
 
  
  return (<section className='app__menu section__padding flex__center' id='menu'>
    <div className="app__menu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className="app__menu-menu">
      <div className="app__menu-menu_wine flex__center">
        <p className='app__menu-menu_heading'>Wine & Beer</p>
        <div className="app__menu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ) )}
        </div>
      </div>

      <div className='app__menu-menu_img'>

          <img src={images.menu} alt="drinks" />
      </div>

      <div className="app__menu-menu_cocktails flex__center">
        <p className='app__menu-menu_heading'>Cocktails</p>
        <div className="app__menu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ) )}
        </div>
      </div>
    </div>
  </section>
)};

export default SpecialMenu;
