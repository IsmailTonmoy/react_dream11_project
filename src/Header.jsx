import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Header({balance,onChange}) {
  return (
    <>
      <Navbar balance={balance} />
      <Banner onChange={onChange} />
    </>
  );
}
