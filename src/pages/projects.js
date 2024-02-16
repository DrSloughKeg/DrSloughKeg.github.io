import React from "react";

function Projects() {
  return (
    <div className="mainBox">
      <div className="splitbox">
        <div className="rightbox">
          <h1>HarmonyHub - Where Music meets Freedom</h1>
          <p className="textblock">
            During my Web Developer course, I was part of a small team that
            created a website called HarmonyHub. <br />
            HarmonyHub is a royality free audio sharing platform designed so
            users may browse and search for, listen to, and upload & download
            music and sounds. It was my task to impliment the Music player, User
            dashboard, and Upload pages.
          </p>
          <br />
          <a href="https://harmony-hub-client-748a5025ff7d.herokuapp.com/">
            Check it out here!
          </a>
          <br />
          <a href="https://github.com/sophiephie/harmonyhub-client">
            Or look at the <i>frontend</i> source code!
          </a>
          <br />
          <a href="https://github.com/sophiephie/harmonyhub-server">
            Or look at the <i>backend</i> source code!
          </a>
        </div>
        <div>
          <img className="image" src="./HarmonyHub.png" />
        </div>
      </div>
      <div className="splitbox">
        <div className="rightbox">
          <h1>JustSell - Find your Perfect Home</h1>
          <p className="textblock">
            This website was designed and created by a small team learning PHP
            for the first time. <br />
            JustSell is a real estate website for potenitally buyers and
            real-estate agents. All user can browse listing an make offers on
            them. While Agent and Admin users have higher access prilledges like
            creating listing or deleting users. <br /> I was in charge of the
            Database, User registration & login, Admin dashboard and Site
            hosting.
          </p>
          <br />
          <a href="https://expressionism-chall.000webhostapp.com/">
            Check it out here!
          </a>
          <br />
          <a href="https://github.com/Dripamine/RealEstateProperties-Project">
            Or look at the source code!
          </a>
        </div>
        <div>
          <img className="image" src="./JustSell.png" />
        </div>
      </div>
      <div className="splitbox">
        <div className="rightbox">
          <h1>Connect 4</h1>
          <p className="textblock">
            During our User Interfaces course, myself and some other students
            created this simple game in PHP. <br />
            You may be familiar with the concept. Two players take turns placing
            tiles, while attempting to connect four of their own tiles
            horizontially, vertically or diagonally. <br /> I started the first
            player movement/selection logic, and then implimented the win
            condision, aswell as helped with come of the CSS.
          </p>
          <br />
          <a href="https://github.com/DrSloughKeg/Connect4">
            Check out the source code here, and try for yourself!
          </a>
        </div>
        <div>
          <img className="image" src="./Connect4.png" />
        </div>
      </div>
      <div className="splitbox">
        <div className="rightbox">
          <h1>Gobbo Killer - My first ever coding</h1>
          <p className="textblock">
            This was my first ever project in the coding world. <br />
            Gobbo Killer was built on scratch.mit.edu, using pseudocode which
            helped me learn my first coding principals, like loops and if
            statments. <br />
            The goal of the game is to kill as many gobbos as possible before
            being overwhelmed. The player can move horizontially and point their
            sword in four diffent directions.
          </p>
          <br />
          <a href="https://github.com/DrSloughKeg/GobboKiller">
            Take a look at the source code here!
          </a>
        </div>
        <div>
          <img className="image" src="./GobboKiller.png" />
        </div>
      </div>
    </div>
  );
}
export default Projects;
