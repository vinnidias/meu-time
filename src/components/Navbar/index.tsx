import styles from "./styles.module.css";

interface IProps { 
  onCLick: ()=> void;
}

export const Navbar = ({onCLick}: IProps) => {
  return (
    <nav className={styles.navBar}>
      <h1>
        Meu <span>Time</span>
      </h1>
      <button onClick={onCLick}>Sair</button>
    </nav>
  );
};
