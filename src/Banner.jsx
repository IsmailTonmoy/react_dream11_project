import Background from "../assets/bg-shadow.png";
import BannerImg from "../assets/banner-main.png";
export default function Banner({onChange}) {
  return (
    <div
      className="w-11/12 mx-auto hero bg-black rounded-3xl"
      style={{
        backgroundImage: `
    url(${Background})
  `,
      }}
    >
      <div className="hero-overlay rounded-3xl bg-opacity-40 "></div>
      <div className="hero-content text-center text-neutral-content  ">
        <div className="flex flex-col items-center space-y-3">
          <img src={BannerImg} alt="" />
          <h1 className="mb-5 text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="mb-5 text-2xl text-gray-400">
          Beyond Boundaries Beyond Limits
          </p>
          <div className="p-1 bg-black border-1 border-[#E7FE29] rounded-xl">
          <button className="btn bg-[#E7FE29] " onClick={onChange}>Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
