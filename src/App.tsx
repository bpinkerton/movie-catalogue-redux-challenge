import { FC } from "react";
import { Provider } from "react-redux";
import "./styles.css";

import MovieHeader from "./smart-components/MovieHeader";
import MoviePage from "./pages/MoviePage";
import store from "./redux/store";

const App: FC<{}> = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <MovieHeader />
        <MoviePage />
      </div>
    </Provider>
  );
};

export default App;
