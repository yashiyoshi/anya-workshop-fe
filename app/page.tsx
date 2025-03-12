import Image from "next/image";
import Pokedex from "@/public/images/pokedex.png";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        {/* Header */}
        <div className="header">
          <p className="logo">Pokédex</p>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Body */}
        <div className="body">
          <Image 
            src={Pokedex} 
            alt="pokedex" 
            height={250} 
            width={250} 
            className="pokedex-image" 
          />
          <div className="bodyContent">
            <p id="title">Catch 'em All</p>
            <p id="subtitle">Explore with our Interactive Pokédex</p>
            <button className="explore-button">View Pokédex</button>
          </div>
        </div>
      </main>
    </div>
  );
}