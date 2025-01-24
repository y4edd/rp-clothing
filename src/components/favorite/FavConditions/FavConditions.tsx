import ConditionEditButtons from "../ConditionEditButtons/ConditionEditButtons";
import FavCondition from "../FavCondition/FavCondition";
import styles from "./FavConditions.module.css";
import pageStyles from "@/app/mypage/searchCondition/page.module.css"

const FavConditions = () => {

  return (
    <>
      <tr className={styles.conditionList}>
        <td className={styles.conditionNameEach}>ビンテージ市場</td>
        <td className={styles.registerConditionEach}>
          <dl className={styles.conditions}>
            <dt>値段：</dt>
            <dd>0〜4000円</dd>
            <dt>カテゴリ：</dt>
            <dd>Tシャツ</dd>
            <dt>キーワード：</dt>
            <dd>burberrys(三陽商会は除く)</dd>
          </dl>
        </td>
        <td className={styles.conditionControlEach}>
          <ConditionEditButtons />
        </td>
      </tr>
      <tr className={styles.conditionList}>
        <td className={styles.conditionNameEach}>軍パン（レギュラー）</td>
        <td className={styles.registerConditionEach}>
          <dl className={styles.conditions}>
            <dt>値段：</dt>
            <dd>4000〜16000円</dd>
            <dt>カテゴリ：</dt>
            <dd>ズボン・パンツ</dd>
            <dt>キーワード：</dt>
            <dd>80s</dd>
          </dl>
        </td>
        <td className={styles.conditionControlEach}>
          <ConditionEditButtons />
        </td>
      </tr>
      <tr className={styles.conditionList}>
        <td className={styles.conditionNameEach}>プチプラ（出勤）</td>
        <td className={styles.registerConditionEach}>
          <dl className={styles.conditions}>
            <dt>値段：</dt>
            <dd>0〜6000円</dd>
            <dt>カテゴリ：</dt>
            <dd>ジャケット・セットアップ</dd>
            <dt>キーワード：</dt>
            <dd>オールシーズン</dd>
          </dl>
        </td>
        <td className={styles.conditionControlEach}>
          <ConditionEditButtons />
        </td>
      </tr>
      <tr className={styles.conditionList}>
        <td className={styles.conditionNameEach}>軍パン（レギュラー）</td>
        <td className={styles.registerConditionEach}>
          <dl>
            <dt>値段：4000〜16000円</dt>
            <dt>カテゴリ：ズボン・パンツ</dt>
            <dt>キーワード：80s</dt>
          </dl>
        </td>
        <td className={styles.conditionControlEach}>
          <ConditionEditButtons />
        </td>
      </tr>
      <tr className={styles.conditionList}>
        <td className={styles.conditionNameEach}>軍パン（レギュラー）</td>
        <td className={styles.registerConditionEach}>
          <dl>
            <dt>値段：4000〜16000円</dt>
            <dt>カテゴリ：ズボン・パンツ</dt>
            <dt>キーワード：80s</dt>
          </dl>
        </td>
        <td className={styles.conditionControlEach}>
          <ConditionEditButtons />
        </td>
      </tr>
    </>
  );
};

export default FavConditions;
