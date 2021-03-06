import React from "react";
import { Link } from "react-router-dom";
import MapContainer from "./googlemap";
import "./Home.css";
(function () {
 window.alert("kindly follow UI instruction => Click at Home (left top corner) Click on Submit=>Click on Add=>Click on Add, once again => Click on Show Route")
})();
function Home() {
 
  return (
    <>
      <div className="home_backgroung">
       <Link to="submit" ><button className="home_button">Home</button></Link>
        <div className="home_overall_content_position">
          <section className="home_mobie_responsive">
            <div className="overall_map_card">
              <div className="Homecard_top">
                <div className="Home_top_overall_position">
                  <form>
                    <div className="Home_top_input">
                      <div>
                        <label htmlFor="location" className="h_lable">
                          Locatio className
                        </label>
                        <br />
                        <input
                          type="text"
                          id="location"
                          className="h_inputone"
                          placeholder=""
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="Lattitude" className="h_lable">
                          Enter Lattitude
                        </label>
                        <br />
                        <input
                          type="text"
                          id="Lattitude"
                          className="h_inputtwo"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="Longitude" className="h_lable">
                          Enter Longitude
                        </label>
                        <br />
                        <input
                          type="text"
                          id="Longitude"
                          className="h_inputthree"
                        ></input>
                      </div>

                      <div className="Home_top_submit_position">
                        <button
                          className="Home_top_submit"
                          
                          disabled={true}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="home_card_separation">
                <div>
                  <div className="h_left_side_text">All Co-ordinates:</div>
                  <div className="h_left_side_2_text">
                    <table>
                    <tbody>
                      <tr >
                      <td></td>
                        <td className="first_cell">My Co-ordinates</td>
                        <td className="sec_cell">Default</td>
                        <td className="third_cell">Default</td>
                      </tr>
                      <tr className="first_cell">
                      <td>1)</td>
                        <td>----------</td>
                        <td>----------</td>
                        <td>----------</td>
                      </tr>
                      <tr className="first_cell">
                      <td>1)</td>
                        <td>----------</td>
                        <td>----------</td>
                        <td>----------</td>
                      </tr>
                      <tr className="first_cell">
                      <td>1)</td>
                        <td>----------</td>
                        <td>----------</td>
                        <td>----------</td>
                      </tr>
                      </tbody>
                    </table>
                    
                    <div className="h_show_Route">
                        <button className="show_route" disabled={true}>Show Route</button> 
                    </div>
                  </div>
                </div>
                <div><MapContainer/></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
