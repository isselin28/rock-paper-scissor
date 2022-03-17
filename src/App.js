import "./App.css";
import logo from "./assets/logo.svg";
import triangle from "./assets/bg-triangle.svg";
import { Pick } from "./components/Pick";

function App() {
  return (
    <>
      <div class="flex flex-col justify-between items-center p-20 h-screen w-screen bg-blue">
        <div class="p-4 w-3/6 max-w-44 mb-12 flex justify-between border-solid rounded-lg border-4 border-slate">
          <img src={logo} alt="logo" />
          <div class="px-4 w-32 rounded-lg flex flex-col items-center bg-white">
            <div class="p-1 text-purple">SCORE</div>
            <div class="text-5xl">10</div>
          </div>
        </div>
        <div class="relative bottom-36">
          <div class="absolute top-0 left-4">
            <Pick type="paper" />
          </div>
          <div class="absolute top-0 left-64">
            <Pick type="scissor" />
          </div>
          <div class="absolute top-52 left-36">
            <Pick type="rock" />
          </div>
          <img src={triangle} alt="triangle" class="p-20" />
        </div>
      </div>
    </>
  );
}

export default App;
