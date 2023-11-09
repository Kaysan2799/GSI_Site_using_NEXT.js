"use client";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Headertext from "./components/Headertext";
import Detailsgrid from "./components/Detailsgrid";
import Inputform from "./components/Inputform";
import Piechart from "./components/Piechart";
import Top from "./components/Top";
import TopText from "./components/TopText";
import MapDetail from "./components/mapDetail";
import React, { useState } from "react";

// import "./global.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [selectedSiteData, setSelectedSiteData] = useState(null);

  // Callback function to update selected site data
  const handleSiteDataChange = (newSiteData) => {
    setSelectedSiteData(newSiteData);
  };

  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <Top />
        <TopText />

        {/* <Introabout /> */}
        {/* <Headertext /> */}

        <Detailsgrid onSiteDataChange={handleSiteDataChange} />
        <Piechart selectedSiteData={selectedSiteData} />
        <MapDetail selectedSiteData={selectedSiteData} />

        {/* <Piechart /> */}
        {/* <Inputform /> */}
      </body>
    </html>
  );
}