import styles from "./KeyWordCondition.module.css"

const KeyWordCondition = () => {
  return (
    <>
      <h3>キーワード</h3>
      <input type="text" id="キーワード" name="キーワード" className={styles.keyWord} />
    </>
  )
}

export default KeyWordCondition;
