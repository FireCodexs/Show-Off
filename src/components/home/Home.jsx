import React from "react";
import "./home.scss";

function Home() {
  return (
    <div className="homeContainer">
          <div class='light x1'></div>
          <div class='light x2'></div>
          <div class='light x3'></div>
          <div class='light x4'></div>
          <div class='light x5'></div>
          <div class='light x6'></div>
          <div class='light x7'></div>
          <div class='light x8'></div>
          <div class='light x9'></div>
      <div className="left">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"/>
        <p id='head1' class='header'>Hi!</p>
        <p id='head2' class='header'>I'm Andrei.</p>
        <p id='head3' class='header'>A junior web developer</p>
        <p id='head4' class='header'>And a data analyst</p>
        <p id='head5' class='header'>Come and see my work!</p>
        <button>Continue</button>
      </div>
      <div className="right">
        <img src="https://i.ibb.co/PhPw5Yj/profile.jpg" alt="profile" border="0" className="profileIMG"/>
      </div>
    </div>
  );
}

export default Home;
