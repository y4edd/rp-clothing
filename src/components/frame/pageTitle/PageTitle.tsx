import styles from "./PageTitle.module.css";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.title}>{title}</div>
  )
}

export default PageTitle;
