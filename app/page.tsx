import Image from "next/image";
import Pokedex from "@/public/images/pokedex.png";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        {/* Header */}
        <div className="header">
          <p>Pokedex</p>
          <p>+</p>
        </div>

        {/* Body */}
        <div className="body">
          <Image src={Pokedex} alt="pokedex" height={250} width={250} />
          <div className="bodyContent">
            <p id="title">Catch em All</p>
            <p id="subtitle">Explore with our Interactive Pokedex</p>
            <button style={{marginTop: "2rem"}}>View Pokedex</button>

          </div>
        </div>
      </main>
    </div>
  );
}
