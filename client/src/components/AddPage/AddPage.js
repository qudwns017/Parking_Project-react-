import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MapContainer2 from "../../api/MapContainer2";

function AddPage() {

  useEffect(() => {
    MapContainer2();
  });

  return (
    <>
    <h2 style={{
      textAlign: "center",
      margin: "3%",
          }}>
      등록할 장소를 검색하거나 지도를 클릭해 등록해주세요.
    </h2>
    <div
      id="myMap"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60vh",
        // position: "relative",
      }}
    >
    </div>
    </>
  );
}

export default AddPage;