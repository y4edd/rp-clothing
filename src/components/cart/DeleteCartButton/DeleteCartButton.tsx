// "use client";

// import Button from "@/components/utils/button/Button";
// import styles from "./DeleteCartButton.module.css";
// import { deleteItem } from "@/utils/actions";

// type DeleteCartButtonProps = {
//   itemCode: string;
// }

// const DeleteCartButton = ({itemCode}: DeleteCartButtonProps) => {
//   const handleDelete = async() => {
//     try{
//       await deleteItem(itemCode);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <Button type="button" onClick={handleDelete} className={styles.black} text="カートから削除" />
//   );
// };

// export default DeleteCartButton;

"use client";

import { deleteItem } from "@/utils/actions";
import styles from "./DeleteCartButton.module.css";

type DeleteCartButtonProps = {
  itemCode: string;
  userId: string;
};

const DeleteCartButton = ({ itemCode,userId }: DeleteCartButtonProps) => {
  const value = { itemCode,userId };
  const valueString = JSON.stringify(value);
  return (
    <form action={deleteItem}>
      <input type="hidden" name="deleteItem" value={valueString} />
      <button type="submit" className={styles.black}>カートから削除</button>
    </form>
  );
};

export default DeleteCartButton;
