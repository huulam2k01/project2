import React from "react";
import Header from "../../components/Header";
import "./style.scss";

export default function HomePage() {
  return (
    <div>
      <Header />
      <hr />
      <div className="contentSubject">
        <div>
          <div className="subject"></div>
          <div>Mon 1</div>
        </div>
        <div>
          <div className="subject"></div>
          <div>Mon 2</div>
        </div>
      </div>
    </div>
  );
}
