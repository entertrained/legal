export type IconsId =
  | "logo"
  | "link"
  | "link-external"
  | "light-mode"
  | "home"
  | "dark-mode"
  | "back";

export type IconsKey =
  | "Logo"
  | "Link"
  | "LinkExternal"
  | "LightMode"
  | "Home"
  | "DarkMode"
  | "Back";

export enum Icons {
  Logo = "logo",
  Link = "link",
  LinkExternal = "link-external",
  LightMode = "light-mode",
  Home = "home",
  DarkMode = "dark-mode",
  Back = "back",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Logo]: "61724",
  [Icons.Link]: "61697",
  [Icons.LinkExternal]: "10150",
  [Icons.LightMode]: "61725",
  [Icons.Home]: "61729",
  [Icons.DarkMode]: "61738",
  [Icons.Back]: "61745",
};
