import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h3 id="projects">
        <br />
      </h3>

      {/* United Income */}
      <div className="project">
        <div className="project__info project__info--even">
          <h4 className="project-title">
            <a
              className="project-title__link"
              href="https://investing.capitalone.com/"
              target="_blank"
            >
              Capital One Investing
            </a>
          </h4>
          <div className="project__technologies">
            React &#9679; Node &#9679; AWS Lambda &#9679; PostgreSQL
          </div>
          <p className="project__description">
            I have worked with United Income (now Capital One Investing) for
            over two years. During my time there, I have worked on a plethora of
            different projects which included: new flows for adding a life
            insurance to a financial plan, simplifying the investment account
            opening process, laying the groundwork/creating documentation for
            the Salesforce data transfers, and so much more.
          </p>
        </div>
        <div>
          <div className="project-img four">
            <img
              className="project__screenshot"
              alt="united income"
              src="./images/unitedincome.png"
            />
            <video loop playsInline data-playing="false">
              <source src="./videos/unitedincome.mp4" type="video/mp4" />
            </video>
          </div>
          <h5></h5>
        </div>
      </div>

      {/* CVC */}
      <div className="project">
        <div className="project__info project__info--odd">
          <h4 className="project-title project-title__link">
            U.S. Capitol Visitor Center Lookup App
          </h4>
          <div className="project__technologies">
            REACT NATIVE &#9679; NODE &#9679; APIs
          </div>
          <p className="project__description">
            This is a React Native project my previous team was working on for
            the U.S Capitol Visitor's Center. The CVC needed a quick way to look
            up the federal representatives for their visitors. The app also
            allows for quick search, filtering, and browsing of representatives.
          </p>
        </div>
        <div>
          <div className="project-img five">
            <img className="project__screenshot" src="./images/cvc.png" />
            <video loop playsInline data-playing="false">
              <source src="./videos/cvc.mp4" type="video/mp4" />
            </video>
          </div>
          <h5></h5>
        </div>
      </div>

      {/* SDFCU */}
      <div className="project">
        <div className="project__info project__info--even">
          <h4 className="project-title">
            <a
              className="project-title__link"
              href="http://sdfcu.org"
              target="_blank"
            >
              State Department Federal Credit Union
            </a>
          </h4>
          <div className="project__technologies">
            DRUPAL 8 &#9679; SASS &#9679; MYSQL
          </div>
          <p className="project__description">
            My previous team built the new site for the State Department Federal
            Credit Union. The Drupal 8 site is a complete overhaul of their
            current Drupal 7 site with a sleek & clean design and even cleaner
            code. The site not only looks great, but adheres to strict
            accessibility standards common to financial institutions. You can
            currently view the site
            <a
              href="http://sdfcu.org"
              target="_blank"
              className="project__link"
            >
              here
            </a>
            .
          </p>
        </div>
        <div>
          <div className="project-img four">
            <img
              className="project__screenshot"
              alt="sdfcu"
              src="./images/sdfcu.png"
            />
            <video loop playsInline data-playing="false">
              <source src="./videos/sdfcu.mp4" type="video/mp4" />
            </video>
          </div>
          <h5></h5>
        </div>
      </div>

      {/* Clements */}
      <div className="project">
        <div className="project__info project__info--odd">
          <h4 className="project-title">
            <a
              className="project-title__link"
              target="_blank"
              href="http://clements.com"
            >
              Clements
            </a>
          </h4>
          <div className="project__technologies">
            DRUPAL 8 &#9679; SASS &#9679; MYSQL
          </div>
          <p className="project__description">
            My previous team built a new Drupal 8 site for Clements, an Expat
            Insurance organization. We chose Drupal so the client would have
            maximum control over their site. Every component on the site is
            modular and can be freely edited by the Clements team. You can
            currently view the site
            <a
              href="http://clements.com"
              target="_blank"
              className="project__link"
            >
              here
            </a>
            .
          </p>
        </div>
        <div>
          <div className="project-img three">
            <img
              className="project__screenshot"
              alt="clements"
              src="./images/clements.png"
            />
            <video loop playsInline data-playing="false">
              <source src="./videos/clements.mp4" type="video/mp4" />
            </video>
          </div>
          <h5></h5>
        </div>
      </div>

      {/* NDC */}
      <div className="project">
        <div className="project__info project__info--even">
          <h4 className="project-title">
            <a
              className="project-title__link"
              href="http://ndcpartnership.org"
              target="_blank"
            >
              NDC Partnership
            </a>
          </h4>
          <div className="project__technologies">
            DRUPAL 7 &#9679; SASS &#9679; STYLUS &#9679; AJAX
          </div>
          <p className="project__description">
            Our team and I worked with NDC Partnership to enhance their site. I
            helped increase the speed of two of their essential tools: the
            Climate Finance Explorer and the Good Practice Database. In
            addition, I also helped revamp their current homepage with a newly
            designed carousel and additional styling upgrades and fixes. You can
            view the site{" "}
            <a
              href="http://ndcpartnership.org"
              target="_blank"
              className="project__link"
            >
              here
            </a>
            .
          </p>
        </div>
        <div>
          <div className="project-img one">
            <img
              style={{ display: "block" }}
              className="project__screenshot"
              alt="ndc"
              src="./images/ndc.png"
            />
            <video loop playsInline data-playing="false">
              <source src="./videos/ndc.mp4" type="video/mp4" />
            </video>
          </div>
          <h5></h5>
        </div>
      </div>

      <div className="other-projects">
        <div className="other-projects__list">
          <span className="other-projects__title">Other Notable Projects:</span>
          <a className="other-projects__project" href="http://ateball.surge.sh">
            ATE-BALL
          </a>{" "}
          &#9679;
          <a className="other-projects__project" href="http://wow-iss.surge.sh">
            WOW-ISS
          </a>
          &#9679;
          <a className="other-projects__project" href="http://chee-yun.com">
            CHEE-YUN
          </a>{" "}
          &#9679;
          <a
            className="other-projects__project"
            href="http://ortizlu.com/Space-Dash"
          >
            SPACE-DASH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
