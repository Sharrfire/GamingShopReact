import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import YouTubeIcon from "@mui/icons-material/YouTube";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import img from "./logo.png";

Header.propTypes = {};
const cx = classNames.bind(styles);

function Header(props) {
  return (
    <div className={cx("header-container")}>
      <div className={cx("header-contact-top")}>
        <div className={cx("header-contact-container")}>
          <div className={cx("header-contact-left")}>
            <ul className={cx("header-contact-icon")}>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>
          <div className={cx("header-contact-right")}>
            <ul className={cx("header-contact-icon")}>
              <li>
                <PersonIcon />
              </li>
              <li>
                <ShoppingCartIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("header-navbar")}>
        <div className={cx("header-navbar-container")}>
          <div className={cx("header-left")}>
            <img src={img} alt="Logo" />
          </div>
          <div className={cx("header-right")}>
            <ul className={cx("header-nav-list")}>
              <li>
                <a href="/">GALLERY</a>
              </li>
              <li>
                <a href="/">CART</a>
              </li>
              <li>
                <a href="/">CHECKOUTS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
