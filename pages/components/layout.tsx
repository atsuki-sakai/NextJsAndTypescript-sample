import styles from "../../styles/layout.module.css";

// TypeScriptでchildrenを持つComponentを作る
type Props = {}; // Props型を定義
// function Component(props: React.PropsWithChildren<Props>) {}
const name: string = "Sakai Atsuki";

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <div className={styles.container}>{props.children}</div>
    </>
  );
};

export default Layout;
