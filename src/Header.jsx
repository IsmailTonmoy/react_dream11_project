import Banner from "./banner";
import Navbar from "./navbar";

export default function Header({balance,onChange}) {
  return (
    <>
      <Navbar balance={balance} />
      <Banner onChange={onChange} />
    </>
  );
}
