import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../theme/useTheme';
import { classNames } from '../helpers/classNames/classNames';
import '../styles/index.scss';

export const App = () => {
  const {toggleTheme, theme} = useTheme();

  return (
      <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>switch theme</button>
      <Outlet />
    </div>
  )
}
