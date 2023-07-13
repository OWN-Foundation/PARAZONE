import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import styles from './footer.module.scss'
import logo from "../../../../public/images/footerlogo.png"
import telegram from "../../../../public/images/telegram.svg";
import discord from "../../../../public/images/discord.svg";
import vector from "../../../../public/images/vector.svg";
function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
      <footer className={styles.footer}>
        <div className={styles.footer_head}>
          <nav className="flex flex-wrap justify-center" aria-label="Footer">
            <Image src={logo} alt={"Parazone logo"} className={styles.logo} />
          </nav>
          <ul className={styles.menu}>
            <li>
              <Link href="/Security" className={currentRoute === "/security"
                  ? "text-light"
                  : "text-white"}>Security</Link>
            </li>

            <li>
              <Link href="/Private Police" className={currentRoute === "/private police"
                  ? "text-light"
                  : "text-white"}>Private Police</Link>

            </li>
            <li>
              <Link href="/Community" className={currentRoute === "/community"
                  ? "text-light"
                  : "text-white"}>Community</Link>

            </li>
            <li>
              <Link href="/Ecosystem" className={currentRoute === "/ecosystem"
                  ? "text-light"
                  : "text-white"}>Ecosystem</Link>

            </li>


            <li>
              <Link href="/Developers" className={currentRoute === "/developers"
                  ? "text-light"
                  : "text-white"}>Developers</Link>

            </li>
            <li>
            <Link href="/Blog" className={currentRoute === "/blog"
                ? "text-light"
                : "text-white"}>Blog</Link>

          </li>
            <li>
              <Link href="/FAQ" className={currentRoute === "/FAQ"
                  ? "text-light"
                  : "text-white"}>FAQ</Link>

            </li>

          </ul>


          <div className={styles.icon_container}>
            <Image
                src={vector}
                alt={"vector"}
                width={20}
                height={20}
            />
            <Image
                src={telegram}
                alt={"telegram"}
                width={29}
                height={29}

            />
            <Image
                src={discord}
                alt={"discord"}
                width={29}
                height={29}
            />
          </div>



        </div>
        <div className={styles.sentence}>
          <h2> Powered by OWN Foundation </h2>
        </div>
      </footer>
  );
}

export default Footer;

