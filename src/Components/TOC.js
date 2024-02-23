import React from "react";
import { Link } from "react-router-dom";
import "./TOC.css";
function TOC() {
  return (
    <div className="toc-container">
      <div className="toc">
        <div className="author">
          <img className="author_avatar" src="img/profileimg.png" alt="profile img" />
          <div className="author_content">
            <div className="author_name">비연</div>
            <div className="author_bio">화이팅</div>
            <div className="author_social">지역이메일깃허브인스타</div>
          </div>
        </div>
        <nav className="nav_list">
          <ul className="nav_items">
            <li>
              <div className="sub_title">
                <Link to="/study">Study</Link>
              </div>
              <ul>머신러닝</ul>
              <ul>IT 지식</ul>
            </li>
            <li>
              <div className="sub_title">
                <Link to="/project">Project</Link>
              </div>
            </li>
            <li>
              <div className="sub_title">
                <Link to="/story">Story</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TOC;
