import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContacts}>
          <h3>Контакты</h3>
          <p>a@example.com</p>
          <p>+7 (999) 999-99-99</p>
        </div>
        <div className={styles.footerSocial}>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>2024 Сникер-магазин. Все права защищены.</p>
        <button className={styles.emailButton}>Написать нам</button>
      </div>
    </footer>
  );
}

export default Footer;
