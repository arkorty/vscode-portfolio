import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "webark.in",
    href: "https://webark.in",
  },
  {
    social: "email",
    link: "mail@webark.in",
    href: "mailto:mail@webark.in",
  },
  {
    social: "github",
    link: "arkorty",
    href: "https://github.com/arkorty",
  },
  {
    social: "linkedin",
    link: "arkorty",
    href: "https://www.linkedin.com/in/arkorty/",
  },
  {
    social: "mastodon",
    link: "arkorty",
    href: "https://mastodon.social/@arkorty",
  },
  {
    social: "twitter",
    link: "arkorty",
    href: "https://x.com/arkorty",
  },
  {
    social: "instagram",
    link: "arkorty",
    href: "https://instagram.com/arkorty",
  },
  {
    social: "leetcode",
    link: "arkorty",
    href: "https://leetcode.com/arkorty",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
