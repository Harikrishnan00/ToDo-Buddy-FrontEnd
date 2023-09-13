import { Header } from "../../components/components";
import { HomeBgEffect } from "../../components/ui-componnets/svg-components/Svg";
import "./style/home.css";
import { HomeIllustraion } from "../../assets/images/images";



function Home() {
  
  return (
    <div className="home-page-container">
      <div className="home-inner-container">
        <div className="home-inner-bg">
          <HomeBgEffect />
        </div>
        <div className="content-container">
          <Header />
          <div className="content-wrapper">
            <h1>
              Welcome <br /> <span className="purple-color">ON</span> board with
              your{" "}
              <span className="purple-color To-D0-Buddy-Text">To-Do BUDDY</span>{" "}
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="home-illustration">
        <img src={HomeIllustraion} alt="" />
      </div>
    </div>
  );
}

export default Home;
