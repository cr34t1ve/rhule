import styles from "./page.module.css";
import Link from "next/link";

const PROJECTS = [
  {
    title: "MailPigeon",
    url: "https://mailpigeon.app",
    image: "/images/mailpigeon.png",
    colorImage: "/images/mailpigeon-color.png",
    size: {
      width: 172,
    },
  },
  {
    title: "FluffyShelf",
    url: "https://fluffyshelf.com",
    image: "/images/fluffyshelf.png",
    colorImage: "/images/fluffyshelf-color.png",
    size: {
      width: 122,
    },
  },
  {
    title: "Spawn Campfire",
    url: "https://scfaccra.com",
    image: "/images/scf.png",
    colorImage: "/images/scf-color.png",
    size: {
      width: 243,
    },
  },
  {
    title: "Systemizer",
    url: "https://www.figma.com/community/plugin/1227072991823029464/systemizer",
    image: "/images/systemizer.png",
    colorImage: "/images/systemizer-color.png",
    size: {
      width: 166,
    },
  },
  {
    title: "AuctionPapa",
    url: "https://auctionpapa.com",
    image: "/images/auctionpapa.png",
    colorImage: "/images/auctionpapa-color.png",
    size: {
      width: 182,
    },
  },
  {
    title: "Mirage UI",
    url: "https://mirageui.com",
    image: "/images/mirage.png",
    colorImage: "/images/mirage-color.png",
    size: {
      width: 108,
    },
  },
  {
    title: "Rare Goods Only",
    url: "https://raregoodsonly.com",
    image: "/images/rgo.png",
    colorImage: "/images/rgo-color.png",
    size: {
      width: 222,
    },
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.name_section_tablet} style={{ marginTop: 85 }}>
        <h1>John Rhule</h1>
        <h2 style={{ marginTop: 16, marginBottom: 24 }}>
          <strong>User Interactions and Interface designer </strong>
          with 3+ years experience and growing. My conviction for designing is
          that the newest designs are hidden in the old.
        </h2>
        <div>
          <h2>
            Currently creating my surrounding at{" "}
            <Link href="https://raregoodsonly.com">RGO</Link>,{" "}
            <Link href="https://mirageui.com">MirageUI</Link> and{" "}
            <Link href="https://scfaccra.com">scfaccra</Link>
          </h2>
        </div>
      </section>

      <section className={styles.project_grid}>
        {PROJECTS.map((project, index) => (
          <Link href={project.url} key={index} className={styles.project_card}>
            <img
              className={styles.img}
              src={project.image}
              width={project.size?.width}
              alt={project.title}
            />
            <img
              className={styles.img_color}
              src={project.colorImage}
              width={project.size?.width}
              alt={project.title}
            />
          </Link>
        ))}
      </section>

      <section className={styles.name_section}>
        <h1>John Rhule</h1>
        <h2>
          <strong>User Interactions and Interface designer </strong>
          with 3+ years experience and growing. My conviction for designing is
          that the newest designs are hidden in the old.
        </h2>
        <div>
          <h2>
            Currently creating my surrounding at{" "}
            <Link href="https://raregoodsonly.com">RGO</Link>,{" "}
            <Link href="https://mirageui.com">MirageUI</Link> and{" "}
            <Link href="https://scfaccra.com">scfaccra</Link>
          </h2>
          <h2 style={{ marginTop: 25 }}>
            <Link href="mailto:kojorhule@gmail.com">
              Drop a message in my mail box
            </Link>
          </h2>
        </div>
      </section>

      <section className={styles.name_section_tablet}>
        <h2 style={{ marginTop: 25 }}>
          <Link href="mailto:kojorhule@gmail.com">
            Drop a message in my mail box
          </Link>
        </h2>
      </section>
    </main>
  );
}
