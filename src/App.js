import { useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import Fight from "./pages/Fight";
import { RecoilRoot } from "recoil";

function App() {
  // const userPick = selector({
  //   key: "userPick",
  //   get: ({ get }) => {
  //     const type = get(userPickType);
  //     return type;
  //   },
  // });

  return (
    <RecoilRoot>
      <Main />
      {false && <Fight />}
    </RecoilRoot>
  );
}

export default App;
