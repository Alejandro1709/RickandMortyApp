import styles from './Section.module.css';

interface SectionProps {
  size: 'sm' | 'md';
  children: React.ReactNode;
}

function Section({ size = 'sm', children }: SectionProps) {
  const sizeName = size === 'sm' ? styles.section : styles.sectionMd;

  return <section className={sizeName}>{children}</section>;
}

export default Section;
