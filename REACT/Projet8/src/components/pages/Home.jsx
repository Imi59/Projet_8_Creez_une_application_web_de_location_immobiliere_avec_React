import ImgBanner from "../../assets/images/IMG.jpg";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src={ImgBanner} alt="source" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}
export default Home;

//installation react rooter dom // npm i react-router-dom
