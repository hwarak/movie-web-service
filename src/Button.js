import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.protoTypes = {
  text: PropTypes.string.isRequired,
};

export default Button; //App.js에서 Button을 가져오기 위해
