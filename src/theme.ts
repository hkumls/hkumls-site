import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#6C63FF",
    secondary: "#3F3D8B",
    selectedNavColor: theme.colors.purple[200],
  },
};
