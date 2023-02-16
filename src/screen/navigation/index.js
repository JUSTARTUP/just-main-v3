import { Outlet, useNavigate } from 'react-router-dom';
import './style.scss';

const MoveButton = (props) => {
  const { page, name } = props;
  const navigate = useNavigate();
  return (
    <div className="move-button" onClick={() => {
      navigate(page);
    }}>{name}</div>  
  )
}

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">로고</div>
        <div className="header__menu">
          <MoveButton page="/" name="메인" />
          <MoveButton page="/three" name="트리" />
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
