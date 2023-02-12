import styles from "../styles/loading-dots.module.css";

const LoadingDots = ({
  color = document.querySelector("html")?.classList.contains("dark")
    ? "#ddf"
    : "#000",
  style = "small",
}: {
  color: string;
  style: string;
}) => {
  return (
    <span className={style == "small" ? styles.loading2 : styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;

LoadingDots.defaultProps = {
  style: "small",
};
