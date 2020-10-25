export const MOVIES_COUNT = 9;
export const MAXIMUM_SIMIALAR_MOVIES = 4;
export const MAXIMUM_RATING = 10;
export const MAXIMUM_RATING_COUNT = 1000;
export const MAXIMUM_DISPLAYED_ACTORS = 4;
export const MAXIMUM_DISPLAYED_MOVIES = 8;

export const GENRES = [`All genres`, `Comedie`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thriller`];
export const MOVIES = [`Aviator`, `Bohemian Rhapsody`, `Dardjeeling Limited`, `Fantastic Beasts The Crimes of Grindelwald`, `Johnny English`, `Macbeth`, `Midnight Special`, `Mindhunter`, `Moonrise Kingdom`, `No Country For Old Men`, `Orlando`, `Pulp Fiction`, `Revenant`, `Seven Years In Tibet`, `Shutter Island`, `Snatch`, `War of the Worlds`, `We need to talk about Kevin`, `What We Do in the Shadows`];
export const VIDEO_URLS = [`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`];
export const DIRECTORS = [`Steven Spielberg`, `Martin Scorsese`, `Alfred Hitchcock`, `Quentin Tarantino`, `Stanley Kubrick`, `Christopher Nolan`, `Tim Burton`, `Spike lee`];
export const ACTORS = [`Tom Hanks`, `Will Smith`, `Leonardo DiCaprio`, `Robert De Niro`, `Tom Cruise`, `Samuel L. Jackson`, `Robert Downey, Jr.`, `Scarlett Johansson`, `Jennifer Lawrence`, `Nickole Kidman`, `Cate Blanchett`, `Meryl Streep`, `Charlize Theron`, `Amy Adams`, `Angelina Jolie`];

export const FISH_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales convallis elit et lacinia. Quisque quis cursus lectus. Praesent elementum semper felis ut pretium. Ut eu mi mollis, luctus purus ac, aliquet ipsum. Maecenas libero nunc, faucibus a porttitor eget, laoreet hendrerit diam. Aliquam eget purus sit amet augue feugiat efficitur in et augue. Curabitur nec nulla a mauris maximus semper vel in dui. Vivamus mollis urna ex, id facilisis velit facilisis tincidunt. Maecenas vitae congue massa. Maecenas vel tortor justo.`;

export const PROMOTED_MOVIE = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014,
  descriptionParagraphs: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  rating: 8.9,
  ratingsCount: 240,
  videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  duration: 99,
  id: 1,
  isMyList: false
};

export const CatalogHeadingVariant = {
  CATALOG: `Catalog`, // скрыт
  MOVIE_PAGE: `More like this` // не скрыт
};

export const ActorsCount = {
  MINIMUM: 5,
  MAXIMUM: 10
};

export const UserRating = {
  MINIMUM: 1,
  DEFAULT: 3,
  MAXIMUM: 5
};

export const Description = {
  MINIMUM: 1,
  MAXIMUM: 10
};

export const Paragraph = {
  MINIMUM: 1,
  MAXIMUM: 3
};

export const Duration = {
  MINIMUM: 10,
  MAXIMUM: 300
};


export const CommentCount = {
  MINIMUM: 10,
  MAXIMUM: 30
};

export const MoreLikeThis = {
  FIRST_INDEX: 1,
  LAST_INDEX: 5
};

export const RatingSystem = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  AWESOME: 10
};

export const Id = {
  MINIMUM: 2,
  MAXIMUM: 3000
};

export const CallSource = {
  CATALOG: `catalog`,
  PLAYER: `player`
};

export const MovieScreenTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
};
