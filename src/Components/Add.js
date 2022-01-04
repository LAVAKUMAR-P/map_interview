import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapContainer from "./googlemap";
import "./Home.css";

function Add() {
  const[lat,setLat]=useState(0)
  const[lng,seLng]=useState(0)
  const[place,setPlace]=useState("");
  const[length,setLength]=useState(1)
  const[location,setlocation]=useState([])
//   let location=[]
  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(lat,lng,place);
    let currentData={lat,lng,place}
    // location.push(currentData)
    setlocation([...location,currentData])
   console.log(location)
   setLength(location.length)
  }
  return (
    <>
      <div className="home_backgroung">
        <Link to="/"><button className="home_button">Home</button></Link>
        <div className="home_overall_content_position">
          <section className="home_mobie_responsive">
            <div className="overall_map_card">
              <div className="Homecard_top">
                <div className="Home_top_overall_position">
                  <form onSubmit={handleSubmit}>
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
                          placeholder="Location"
                          onChange={(e) => {
                            setPlace(e.target.value);
                          }}
                          value={place}
                          required={true}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="Lattitude" className="h_lable" >
                          Enter Lattitude
                        </label>
                        <br />
                        <input
                          type="text"
                          id="Lattitude"
                          placeholder="Lat"
                          className="h_inputtwo"
                          onChange={(e) => {
                            setLat(e.target.value);
                          }}
                          value={lat}
                          required={true}
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
                          placeholder="Lon"
                          className="h_inputthree"
                          onChange={(e) => {
                            seLng(e.target.value);
                          }}
                          value={lng}
                          required={true}
                        ></input>
                      </div>

                      <div className="Home_top_submit_position">
                          {
                              (location.length <2) ?  <button
                              type="submit"
                              value="Submit"
                                className="Home_top_Add"
                               
                              //   disabled={true}
                              >
                                ADD
                              </button> :  <button
                          className="Home_top_submit"
                         
                          disabled={true}
                        >
                             Submit
                        </button>
                          }
                        
                       
                         
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="home_card_separation">
                <div>
                  <div className="h_left_side_text">All Co-ordinates:</div>
                  <div className="h_left_side_2_text">
                    {
                        (location.length ===0) ? <table>
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
                        </table>:<>
                        <table>
                            <tbody>
                        {location.map((data,index)=>{
                            return(
                        <tr className="first_cell" key={index}>
                          <td>{index+1})</td>
                            <td className="first_cell">{data.place}</td>
                            <td className="sec_cell">{data.lat}</td>
                            <td className="third_cell">{data.lng}</td>
                          </tr>
                            );
                        })}
                        </tbody>
                        </table>
                        </> 
                    }
                    
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

export default Add;
