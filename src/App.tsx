import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../src/theme/app.scss";
import { AppRouter } from "./Routes/AppRouter"

export const App: React.FC = () => {
  return (
    <AppRouter />
  )
}
