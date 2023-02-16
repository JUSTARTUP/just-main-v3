import { Outlet } from 'react-router-dom';
import './style.scss';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">로고</div>
        <div className="header__menu">
          <div>메뉴1</div>
          <div>메뉴2</div>
          <div>메뉴3</div>
        </div>
      </div>
      <div className="header__padding"></div>
    </>
  )
}

const Navigation = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default Navigation;
