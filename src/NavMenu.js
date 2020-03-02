import React from "react";

const NavMenu = props => {
  return (
    <ul className='myLinks'>
      {props.navList.map((el, i) => (
        <li key={i} clasName={el.hover}>
          <a className={el.hover} href={el.link}>{el.text}</a>
          {el.subMenu && (
            <ul className='dropdown'>
              {el.subMenu.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default NavMenu;
