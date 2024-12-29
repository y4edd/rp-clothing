import Link from "next/link";
import WordSearch from "./wordSearch/WordSearch";
import styles from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <WordSearch />
      </div>
      <div className={styles.title}>
        <p>RPclothing</p>
      </div>
      <Link href="/login" className={styles.login}>ログイン</Link>
      <button type="button"><SearchIcon sx={{borderColor: "transparent"}}/></button>
    </div>
  )
}

export default Header;
