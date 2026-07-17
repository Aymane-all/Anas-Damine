export type Category =
  | "campaigns"
  | "institutional"
  | "posters"
  | "covers";

export type Project = {
  cat: Category;
  num: string;
  tag: string;
  title: string;
  subtitle: string;
} & (
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string }
);

export const filters: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "NotionCall Campaigns", value: "campaigns" },
  { label: "Institutional", value: "institutional" },
  { label: "Matchday Posters", value: "posters" },
  { label: "YouTube Covers", value: "covers" },
];

export const projects: Project[] = [
  {
    type: "image",
    cat: "campaigns",
    num: "CAMP — 01",
    tag: "NotionCall",
    title: "Recrutement — Profils confirmés",
    subtitle: "Social media campaign",
    src: "/assets/notioncall-01.png",
    alt: "NotionCall recruitment poster — experienced profiles",
  },
  {
    type: "image",
    cat: "campaigns",
    num: "CAMP — 02",
    tag: "NotionCall",
    title: "Débutant aujourd'hui, Expert demain",
    subtitle: "Social media campaign",
    src: "/assets/notioncall-02.png",
    alt: "NotionCall recruitment poster — debutant expert",
  },
  {
    type: "image",
    cat: "campaigns",
    num: "CAMP — 03",
    tag: "NotionCall",
    title: "Pas pour tout le monde",
    subtitle: "Social media campaign",
    src: "/assets/notioncall-03.png",
    alt: "NotionCall recruitment poster — chess",
  },
  {
    type: "image",
    cat: "campaigns",
    num: "CAMP — 04",
    tag: "NotionCall",
    title: "Ton niveau détermine ton salaire",
    subtitle: "Social media campaign",
    src: "/assets/notioncall-04.png",
    alt: "NotionCall recruitment poster — salaire",
  },
  {
    type: "image",
    cat: "campaigns",
    num: "CAMP — 05",
    tag: "NotionCall",
    title: "Commence ta carrière aujourd'hui",
    subtitle: "Social media campaign",
    src: "/assets/notioncall-05.png",
    alt: "NotionCall recruitment poster — carriere",
  },
  {
    type: "image",
    cat: "campaigns",
    num: "CAMP — 06",
    tag: "NotionCall",
    title: "Recrute sans expérience",
    subtitle: "Social media campaign",
    src: "/assets/notioncall-06.png",
    alt: "NotionCall recruitment poster — sans experience",
  },
  {
    type: "video",
    cat: "campaigns",
    num: "CAMP — 07",
    tag: "Video",
    title: "NotionCall Promo — Video 1",
    subtitle: "Recruitment video ad",
    src: "/assets/video-01.mp4",
    poster: "/assets/video-01-poster.jpg",
  },
  {
    type: "video",
    cat: "campaigns",
    num: "CAMP — 08",
    tag: "Video",
    title: "NotionCall Promo — Video 2",
    subtitle: "Recruitment video ad",
    src: "/assets/video-02.mp4",
    poster: "/assets/video-02-poster.jpg",
  },
  {
    type: "image",
    cat: "institutional",
    num: "INST — 01",
    tag: "Freelance",
    title: "Abderrahman Oiffa — Eid Greeting",
    subtitle: "Parliamentarian social design",
    src: "/assets/institutional-01.jpg",
    alt: "Eid Al Adha greeting design for Abderrahman Oiffa",
  },
  {
    type: "image",
    cat: "institutional",
    num: "INST — 02",
    tag: "Freelance",
    title: "Abdellatif Zaime — New Year Greeting",
    subtitle: "Parliamentarian social design",
    src: "/assets/institutional-02.jpg",
    alt: "Hijri New Year greeting design for Abdellatif Zaime",
  },
  {
    type: "image",
    cat: "posters",
    num: "POST — 01",
    tag: "Matchday",
    title: "Hamza Igamane — The Rise Begins",
    subtitle: "Player feature poster",
    src: "/assets/posters-01.png",
    alt: "Hamza Igamane — Rangers matchday poster, The Rise Begins",
  },
  {
    type: "image",
    cat: "posters",
    num: "POST — 02",
    tag: "Matchday",
    title: "Liverpool vs Tottenham",
    subtitle: "Matchday announcement",
    src: "/assets/posters-02.png",
    alt: "Liverpool vs Tottenham matchday poster",
  },
  {
    type: "image",
    cat: "posters",
    num: "POST — 03",
    tag: "Matchday",
    title: "Morocco vs France",
    subtitle: "Matchday announcement",
    src: "/assets/posters-03.png",
    alt: "Morocco vs France matchday poster, Hakimi and Mbappé",
  },
  {
    type: "image",
    cat: "covers",
    num: "COV — 01",
    tag: "YouTube",
    title: "يومي في فرنسا — Part 2",
    subtitle: "Vlog thumbnail",
    src: "/assets/covers-01.png",
    alt: "Yawmi fi Fransa YouTube thumbnail, Part 2",
  },
  {
    type: "image",
    cat: "covers",
    num: "COV — 02",
    tag: "YouTube",
    title: "Real Madrid — الحقيقة",
    subtitle: "Story thumbnail",
    src: "/assets/covers-02.png",
    alt: "Real Madrid secret story YouTube thumbnail",
  },
];
