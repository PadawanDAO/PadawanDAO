import React from "react";
import Player from "../components/Players/Card";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">

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
