import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant, index) => (
        <PlantCard key={plant.id || index} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
