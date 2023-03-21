import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.png";
import IMG2 from "../../assests/portfolio2.png";
import IMG3 from "../../assests/portfolio3.png";
import IMG4 from "../../assests/portfolio4.png";
import IMG5 from "../../assests/portfolio5.png";
import IMG6 from "../../assests/portfolio6.jpg";

const data = [
  {
    id: 2,
    image: IMG2,
    title: "Crypto Raffle",
    github: "https://github.com/LegatoReign/Crypto-Raffle",
    demo: "https://crypto-raffle-frontend.vercel.app/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Crypto Dev Whitelist",
    github: "https://github.com/LegatoReign/CryptoDev_dApp",
    demo: "https://crypto-dev-whitelist-frontend.vercel.app/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Crypto Dev NFT Collection",
    github: "https://github.com/LegatoReign/CryptoDev_dApp",
    demo: "https://crypto-dev-nft-collection-frontend-4fb9.vercel.app/",
  },

  {
    id: 1,
    image: IMG1,
    title: "CryptoDev ICO",
    github: "https://github.com/LegatoReign/CryptoDev_dApp",
    website: "#",
  },

  {
    id: 3,
    image: IMG3,
    title: "CryptoDev DAO",
    github: "https://github.com/LegatoReign/CryptoDev_dApp",
    website: "#",
  },

  // {
  //     id: 6,
  //     image: IMG6,
  //     title: "Crypto",
  //     github: "http://github.com",
  //     demo: "http://dribbble.com"
  // }
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-1"
                >
                  Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
