import styles from "./Drawer.module.scss";

type Props = {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };

export default function Drawer({isOpened, setIsOpened}: Props) {

  return (
    <div onClick={() => setIsOpened(false)} className={`${styles.overlay} ${isOpened ? styles.overlayVisibility : ''}`}>
      <div onClick={(e) => e.stopPropagation() } className={styles.drawer}>
        <h2>
          <img onClick={() => setIsOpened(false)} width={11} height={18} src="./back.svg" alt="back" />
          Корзина
        </h2>
      </div>
    </div>
  );
}
