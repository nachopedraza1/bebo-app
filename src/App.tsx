import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../src/theme/app.scss";
import { useEffect } from 'react';
import { useCustomDispatch } from "./hooks";
import { startLoadPost } from "./redux/thuks";
import { AppRouter } from "./Routes/AppRouter"

export const App: React.FC = () => {

  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(startLoadPost())
  }, [])

  return (
    <AppRouter />
  )
}
