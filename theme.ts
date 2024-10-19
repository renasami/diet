import { createTheme, MantineThemeOverride } from "@mantine/core";

const customTheme: MantineThemeOverride = {
  // colorScheme: "light",
  primaryColor: "brand",
  colors: {
    brand: [
      "#E6FAF5",
      "#C1F0E3",
      "#99E6D0",
      "#70DBBD",
      "#47D1AA",
      "#1FC797", // メインのミントグリーン
      "#19A37A",
      "#13805C",
      "#0D5C3F",
      "#073821",
    ],
    accent: [
      "#FFEDED",
      "#FFD2D2",
      "#FFB6B6",
      "#FF9A9A",
      "#FF7F7F", // アクセントのサーモンピンク
      "#FF6363",
      "#FF4848",
      "#FF2C2C",
      "#FF1111",
      "#FF0000",
    ],
  },
  fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  headings: {
    fontFamily: "Montserrat, sans-serif",
  },
};

export const theme = createTheme(customTheme);
