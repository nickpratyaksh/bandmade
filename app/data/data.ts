export type Band = {
  name: string;
  icon_url: string;
};

export type Member = {
  name: string;
  band: string;
  image_url: string;
};

export const bands_list: Band[] = [
  {
    name: "Babymetal",
    icon_url:
      "https://i.scdn.co/image/ab676161000051742c0d80b9de67c2819bb4dbc0",
  },
  {
    name: "Metallica",
    icon_url:
      "https://i.scdn.co/image/ab6761610000e5eb69ca98dd3083f1082d740e44",
  },
  {
    name: "Hanabie",
    icon_url:
      "https://fmstation.jp/wp-content/uploads/GOOD-THINGS_Hanabie-07785-2-e1702262907996-600x400.jpg",
  },
];

export const band_members: Member[] = [
  {
    name: "SuMetal",
    band: "Babymetal",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylyswULlFJuCERmq-TZTH8c8WWmS0r9OYZ3X85NGrySMqN1e-Ekz3LGsDu5s4G5pH9kA&usqp=CAU",
  },
  {
    name: "YuiMetal",
    band: "Babymetal",
    image_url:
      "https://www.themoviedb.org/t/p/w235_and_h235_face/aMasawi6DPFAMGkyFzJwhinklKs.jpg",
  },
  {
    name: "MoaMetal",
    band: "Babymetal",
    image_url:
      "https://preview.redd.it/05tmvqra70971.jpg?auto=webp&s=e00ce7b5dbd2d17b05717dc9afbea36524b1387f",
  },
  {
    name: "MomoMetal",
    band: "Babymetal",
    image_url:
      "https://i.pinimg.com/736x/bb/8c/55/bb8c552de2d3ed89a748b6212520d6d3.jpg",
  },
  {
    name: "James Hetfield",
    band: "Metallica",
    image_url:
      "https://www.rollingstone.com/wp-content/uploads/2023/03/James-Hetfield.jpg?w=1581&h=1054&crop=1",
  },
  {
    name: "Lars Ulrich",
    band: "Metallica",
    image_url: "https://i.redd.it/ahf1zwv09yt61.jpg",
  },
  {
    name: "Kirk Hammett",
    band: "Metallica",
    image_url:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/21/1429600425589/5c19ecf8-baff-42dc-8b80-9ccc9d37c480-1020x612.jpeg?width=465&dpr=1&s=none",
  },
  {
    name: "Robert Trujillo",
    band: "Metallica",
    image_url:
      "https://www.1057thepoint.com/wp-content/uploads/2023/12/M_trujillo_091123.jpg",
  },
  {
    name: "Yukina",
    band: "Hanabie",
    image_url:
      "https://www.sonymusic.co.jp/img/common/artist_image/90000/90091/profile/yukina.jpg",
  },
  {
    name: "Matsuri",
    band: "Hanabie",
    image_url:
      "https://i.pinimg.com/originals/eb/8d/c4/eb8dc4f48ef180461ce45636f0339aca.jpg",
  },
  {
    name: "Hettsu",
    band: "Hanabie",
    image_url:
      "https://i.redd.it/from-this-moment-i-declare-myself-president-of-the-hettsu-v0-uv4n42x6c9f81.jpg?width=1080&format=pjpg&auto=webp&s=88536396ff7fe28d1082423edc139a1b43a2e145",
  },
  {
    name: "Chika",
    band: "Hanabie",
    image_url:
      "https://preview.redd.it/some-photos-from-chika-at-08-06-sun-legendclub-milan-it-v0-niynbj9k7mgb1.jpg?width=640&crop=smart&auto=webp&s=1d3f835b044e9cfb0561821be4e4cd01e15e2abf",
  },
];
