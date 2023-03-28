import { useState } from "react";

import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

const App = () => {
  const [modalIsVisiable, setModalIsVisiable] = useState(false);

  const showHandler = () => {
    setModalIsVisiable(true);
  };

  const hideModalHandler = () => {
    setModalIsVisiable(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showHandler} />

      <main>
        <PostList isPosting={modalIsVisiable} onStopPosting={ hideModalHandler } />
      </main>
    </>
  );
};

export default App;
