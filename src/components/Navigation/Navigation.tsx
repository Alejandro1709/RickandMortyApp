import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

interface NavigationProps {
  backUrl: string;
  title: string;
}

function Navigation({ backUrl, title }: NavigationProps) {
  return (
    <div className={styles.navigation}>
      <Link to={backUrl}>Back</Link>
      <p>{title}</p>
      <p>Additional Info</p>
    </div>
  );
}

export default Navigation;
