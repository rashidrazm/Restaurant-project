import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images,data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex_center section_padding' id="menu" >
    <div className='app__specialMenu-title'>
      <SubHeading title=" Menu That You Palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_tea flex__center'>
         <p className='app__specialMenu-menu_heading'>Tea & Coffee</p>
         <div className='app__specialMenu_menu_items'>
            {data.teas.map((tea, index) => (
              <MenuItem key={tea.title + index} title={tea.title} price={tea.price} tags={tea.tags} />
            ))}
         </div>
      </div>

      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu img" />
      </div>

      <div className='app__specialMenu-menu_juice flex__center'>
         <p className='app__specialMenu-menu_heading'>Juice & Drinks</p>
         <div className='app__specialMenu_menu_items'>
            {data.juices.map((juice, index) => (
                <MenuItem key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags} />
            ))}
         </div>
      </div>

    </div>  

    <div style={{marginTop: '15px'}}>
         <button type='button' className='custom_button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
