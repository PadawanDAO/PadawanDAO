import React from "react";
import Player from "../components/Players/Card";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Page 1</h1>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="rowC">
              <div className="padding: 10rem">
                <Player />
              </div>
              <div className="padding: 10rem">
                <Player />
              </div>
              <div className="padding: 10rem">
                <Player />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
