import styles from './MainContainer.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

function MainContainer({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default MainContainer;
