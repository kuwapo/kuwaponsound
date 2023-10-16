import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

// 背景色が黄色のテーマ
const theme = createTheme({
    palette: {
        background: {
            default: yellow[400],
        },
    },
});

export default theme;
