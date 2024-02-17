import React from "react";

function Projects() {
  return (
    <div className="mainBox">
      <div className="splitbox">
        <div className="rightbox">
          <h1>HarmonyHub - Where Music meets Freedom</h1>
          <p className="textblock">
            During my Web Development course, I was part of a small team that
            created a website called HarmonyHub. <br />
            HarmonyHub is a royalty-free audio sharing website allowing users to
            create their account, upload music and sounds, as well as browse,
            search and download content uploaded by other users. I implemented
            the music player, user dashboard, and Upload pages.
          </p>
          <br />
          <a href="https://harmony-hub-client-748a5025ff7d.herokuapp.com/">
            Check it out here!
          </a>
          <br />
          <a href="https://github.com/sophiephie/harmonyhub-client">
            Or look at the <i>frontend</i> source code
          </a>
          <br />
          <a href="https://github.com/sophiephie/harmonyhub-server">
            Or look at the <i>backend</i> source code
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
            JustSell is a real estate website for potenital buyers and
            real-estate agents. All users can browse listings an make offers on
            them. Agent and Admin users have higher access privileges like
            creating listings or deleting users. <br /> I was in charge of the
            database, user registration & login, admin dashboard and site
            hosting.
          </p>
          <br />
          <a href="https://expressionism-chall.000webhostapp.com/">
            Check it out here!
          </a>
          <br />
          <a href="https://github.com/Dripamine/RealEstateProperties-Project">
            Or look at the source code
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
            horizontially, vertically or diagonally. <br /> I implemented the
            player tile selection, the win condition, as well as helped with
            CSS.
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
          <h1>Gobbo Killer - My first ever coding project</h1>
          <p className="textblock">
            This was my first ever project in the coding world. <br />
            Gobbo Killer was built in Scratch, a visual programming language,
            which helped me learn my first programming principles, like loops
            and if statments. <br />
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
