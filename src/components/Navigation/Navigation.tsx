import styles from './Navigation.module.css';

interface NavigationProps {
  backUrl: string;
  title: string;
}

function Navigation({ backUrl, title }: NavigationProps) {
  return (
    <div className={styles.navigation}>
      <a href={backUrl}>Back</a>
      <p>{title}</p>
      <p>Additional Info</p>
    </div>
  );
}

export default Navigation;
