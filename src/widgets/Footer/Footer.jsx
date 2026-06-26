import './Footer.scss'
import Icon from '@/shared/ui/Icon/Icon'

const Footer = () => {
  const socialLinks = [
    {
      label: 'Gmail',
      iconName: 'gmail',
      href: 'mailto:allayrnw@gmail.com',
    },

    {
      label: 'Telegram',
      iconName: 'telegram',
      href: 'https://t.me/AllAYOFFICIAL',
    },

    {
      label: 'GitHub',
      iconName: 'github',
      href: 'https://github.com/allay-rne',
    },
  ]

  const infoLinks = [
    {
      label: 'Home Project',
      href: '/',
    },

    {
      label: 'Ilyin Ilya',
      href: '/',
    },

    {
      label: 'Cookie Ready',
      href: '/',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner">

        <nav className="footer__socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="footer__social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <Icon
                name={link.iconName}
                className="footer__icon"
              />
            </a>
          ))}
        </nav>
      </div>
      <div className="footer__extra">
        <p className="footer__copyright">
          © <time dateTime="2026">2026</time> DayHub. All rights reserved.
        </p>

        <div className="footer__extra-links">
          {infoLinks.map((link) => (
            <a
              key={link.label}
              className="footer__extra-link"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer