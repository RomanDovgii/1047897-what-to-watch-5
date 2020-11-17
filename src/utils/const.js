export const SHOWN_MOVIES_COUNT = 8;
export const MOVIES_COUNT = 20;
export const MAXIMUM_SIMIALAR_MOVIES = 4;
export const MAXIMUM_RATING = 10;
export const MAXIMUM_RATING_COUNT = 1000;
export const MAXIMUM_DISPLAYED_ACTORS = 4;
export const MAXIMUM_DISPLAYED_MOVIES = 8;
export const HOURS_IN_SECONDS = 3600;
export const MINUTES_IN_SECONDS = 60;
export const COLOR_DIFFERENCE = 0x71312;
export const ZERO = 0;
export const ALL_GENRE = `All genres`;

export const GENRES = [`Comedie`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thriller`];
export const MOVIES = [`Aviator`, `Bohemian Rhapsody`, `Dardjeeling Limited`, `Fantastic Beasts The Crimes of Grindelwald`, `Johnny English`, `Macbeth`, `Midnight Special`, `Mindhunter`, `Moonrise Kingdom`, `No Country For Old Men`, `Orlando`, `Pulp Fiction`, `Revenant`, `Seven Years In Tibet`, `Shutter Island`, `Snatch`, `War of the Worlds`, `We need to talk about Kevin`, `What We Do in the Shadows`];
export const VIDEO_URLS = [`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`];
export const DIRECTORS = [`Steven Spielberg`, `Martin Scorsese`, `Alfred Hitchcock`, `Quentin Tarantino`, `Stanley Kubrick`, `Christopher Nolan`, `Tim Burton`, `Spike lee`];
export const ACTORS = [`Tom Hanks`, `Will Smith`, `Leonardo DiCaprio`, `Robert De Niro`, `Tom Cruise`, `Samuel L. Jackson`, `Robert Downey, Jr.`, `Scarlett Johansson`, `Jennifer Lawrence`, `Nickole Kidman`, `Cate Blanchett`, `Meryl Streep`, `Charlize Theron`, `Amy Adams`, `Angelina Jolie`];

export const FISH_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales convallis elit et lacinia. Quisque quis cursus lectus. Praesent elementum semper felis ut pretium. Ut eu mi mollis, luctus purus ac, aliquet ipsum. Maecenas libero nunc, faucibus a porttitor eget, laoreet hendrerit diam. Aliquam eget purus sit amet augue feugiat efficitur in et augue. Curabitur nec nulla a mauris maximus semper vel in dui. Vivamus mollis urna ex, id facilisis velit facilisis tincidunt. Maecenas vitae congue massa. Maecenas vel tortor justo.`;

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

export const ReviewLength = {
  MINIMUM: 50,
  MAXIMUM: 400
};

export const MovieScreenTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  RESET_SHOWN_MOVIES: `RESET_SHOWN_MOVIES`,
  START_PLAYING: `START_PLAYING`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMOTED_MOVIE: `LOAD_PROMOTED_MOVIE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SELECT_MOVIE: `SELECT_MOVIE`,
  UPDATE_USER_INFO: `UPDATE_USER_INFO`,
  THROW_ERR: `THROW_ERR`,
  REMOVE_ERR: `REMOVE_ERR`,
  LOAD_SELECTED_MOVIE: `LOAD_SELECTED_MOVIE`,
  LOAD_SELECTED_MOVIE_COMMENTS: `LOAD_SELECTED_MOVIE_COMMENTS`,
  ADD_MOVIE_TO_FAVORITE: `ADD_MOVIE_TO_FAVORITE`
};

export const CatalogCallSource = {
  MAIN_PAGE: `MAIN_PAGE`,
  MY_LIST: `MY_LIST`,
  MOVIE_PAGE: `MOVIE_PAGE`
};

export const ApiInformation = {
  BASE_URL: `https://5.react.pages.academy/wtw`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
};

export const HttpCode = {
  UNAUTHORIZED: 401
};

export const AuthorizationStatus = {
  AUTH: true,
  NO_AUTH: false
};

export const AppRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`
};

export const APIRoute = {
  FILMS: `/films`,
  PROMOTED_MOVIE: `/films/promo`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`
};
