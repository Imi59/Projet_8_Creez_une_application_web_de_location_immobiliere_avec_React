import ImgBanner from "../../assets/images/IMG.jpg";

function Banner() {
  return (
    <div>
      <div className="banner">
        <img src={ImgBanner} alt="source" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
