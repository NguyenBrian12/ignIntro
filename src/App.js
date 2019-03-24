import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <div className="center">
            <img
              src="https://i.imgur.com/oJrjZ4X.png"
              width="570px"
              height="130px"
              alt=""
            />
          </div>
        </div>

        <div id="body">
          <div id="header">
            <div className="profilePic">
              <img
                src="https://i.imgur.com/jeF4RfJ.jpg"
                width="40%"
                height="40%"
                alt=""
              />

              <ul>
                <li>
                  <a href="#introduction">Introduction</a>
                  <br />
                  <a href="#notable">Notable Achievements</a>
                  <br />
                  <a href="#passion">Passion for IGN</a>
                  <br />
                  <a href="#candidate">Exceptional Candidate</a>
                  <br />
                  <a href="#question">Code Foo Question 2</a>
                  <br />
                  <a href="#resources">Resources</a>
                </li>
              </ul>
            </div>

            <div className="pic">
              <img
                src="https://i.imgur.com/7FTNrkr.png"
                width="640px"
                height="89px"
                alt=""
              />
            </div>
            <div id="skills">
              <ul>
                <li>
                  <a>React</a>
                </li>
                <li>
                  <a>Javascript</a>
                </li>
                <li>
                  <a>Node.js</a>
                </li>
                <li>
                  <a>MySQL/MSSQL</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="body">
            <div className="article">
              <div>
                <h2 id="introduction">Introduction</h2>
                <div>
                  My name is Brian Nguyen and I am a full stack web developer
                  with skills in React, JavaScript, Node.js, MYSQL, AWS, and
                  MYSQL.
                </div>
                <h2 id="notable">Notable Achievements (Projects)</h2>
                <div>
                  My notable projects are as follows: I created a login page
                  using Redux to store user information to other components,
                  developed a full stack chat app between administrators and
                  tenants with socket.io, implemented an image and file uploader
                  for business owners to create social media posts using
                  AWS-SDK, and launched a volunteer portal at Make-A-Wish using
                  MERN tech stack for Hack-A-Wish 2019.
                </div>
                <h2 id="passion">Passion for IGN</h2>
                <div>
                  IGN continues to develop a platform that demonstrates why they
                  are the gold standard for game reviews. I have a clear
                  understanding of the quality of content IGN strives to produce
                  which I will embody into my work as a Code Foo intern.
                </div>
                <h2 id="candidate">Exceptional Candidate</h2>
                <div>
                  Based on my past experiences and proficiency, I am an
                  exceptional candidate for the Imagine Games Network’s Code Foo
                  Engineering Internship. My skills in full stack web
                  development, will be instrumental in creating production level
                  code and responsive components for IGN’s web platforms. My
                  attached application showcases, in more detail, my experiences
                  and projects.
                </div>
              </div>
            </div>
            <div className="body">
              <div className="pokemon">
                <h2 id="question">Code Foo Question 2: Pokeball Heist</h2>
                <div>
                  In describing my step by step thought process of how many
                  pokeballs Team Rocket can steal, I will be taking some
                  creative liberties. The solution to the pokeball heist can be
                  explained using the Big O time concept. The Big O time concept
                  is the efficiency of an algorithm based on time and space. A
                  pokeball represents 1 Megabyte. Coit Tower represents a
                  storage database of 1 Terabyte. Lombard Street represents a
                  method of transfer denoted as O(n). If Team Rocker were to use
                  Lombard Street as a method of stealing the pokeballs, it would
                  be inefficient because the time to transfer pokeballs
                  increases linearly with the amount of pokeballs. I propose
                  taking Team Rocket’s hot air balloon with a vacuum attached
                  with a storage of 1 Terabyte denoted as O(1). The hot air
                  balloon is a more efficient method of transfer larger amounts
                  of pokeballs. As the amount of pokeballs increase, it won’t
                  take the hot air balloon any longer to travel. The time is
                  constant. Using the hot air balloon, Team Rocket could steal
                  1,048,576 pokeballs!
                </div>
              </div>
            </div>
          </div>

          <div class="footer center" id="resources">
            <h2>Was this guide helpful?</h2>
          </div>
          <div class="footer links">
            <div>
              <h3>
                <a href="https://www.linkedin.com/in/brian-nguyen-0802b7104/">
                  {" "}
                  LinkedIn Profile
                </a>
              </h3>
              <p>Check my connections and past positions.</p>
            </div>
            <div>
              <h3>
                {" "}
                <a href="https://github.com/nguyenbrian12"> GitHub Account</a>
              </h3>
              <h3>
                {" "}
                <a href="https://github.com/NguyenBrian12/ignCodeFooQuestion-3">
                  {" "}
                  Code Foo Question 3 Repository
                </a>
              </h3>
              <p>Take a look at my GitHub account for my previous projects.</p>
            </div>
            <div>
              <h3>
                {" "}
                <a href="http://ignchatroom.us-west-1.elasticbeanstalk.com/">
                  {" "}
                  Deployed Chat App for Code Foo
                </a>
              </h3>
              <h3>
                {" "}
                <a href="https://github.com/NguyenBrian12/ignCodeFooFullStackChatroom">
                  {" "}
                  Full Stack Chat App Repository
                </a>
              </h3>
              <p>Test my deployed full stack chat app created for IGN.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
