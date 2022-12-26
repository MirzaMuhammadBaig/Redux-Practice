import Balance from "./components/Balance";
import DepositeCard from "./components/DepositeCard";
import WidthrawCard from "./components/WidthrawCard";

function App() {
  return (
    <>
      <h1 className="text-center">Your Wallet</h1>
      <Balance />
      <WidthrawCard />
      <DepositeCard />
    </>
  );
}

export default App;
