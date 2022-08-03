import logo from "../assets/logo.svg";

function Scorebar() {
  return (
    <div class="p-6 w-3/6 max-w-44 mb-12 flex justify-between border-solid rounded-xl border-4 border-slate">
      <img src={logo} alt="logo" />
      <div class="px-4 w-32 rounded-lg flex flex-col items-center bg-white">
        <div class="p-1 text-purple">SCORE</div>
        <div class="text-5xl">10</div>
      </div>
    </div>
  );
}

export default Scorebar;
