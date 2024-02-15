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
            for the firs time. <br />
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
        </div>
        <div>
          <img className="image" src="./JustSell.png" />
        </div>
      </div>
    </div>
  );
}
export default Projects;
