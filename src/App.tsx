import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../src/theme/app.scss";
import { AppRouter } from "./Routes/AppRouter"
import { useCustomDispatch } from "./hooks";
import { useEffect } from 'react';
import { startLoadPost } from "./redux/thuks";

export const App: React.FC = () => {

  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(startLoadPost())
  }, [])

  return (
    <AppRouter />
  )
}
