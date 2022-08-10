import React from "react";

export default function CardPokemon(props) {
  return (
    <div className="grid grid-row-2 grid-flow-col items-center mt-6">
      <div className="row-span-3">
        <div className="text-center">{props.name}</div>
        <div className="flex justify-center">
          <img src={props.sprite} alt={props.name} />
        </div>
        <div>
          <h5>Abilities</h5>
          {props.abilities.map((ability, key) => (
            <div key={key}>
              <span>{ability.ability.name}</span>
            </div>
          ))}
        </div>
        <div>
          <h5>Types</h5>
          {props.types.map((type, key) => (
            <div key={key}>
              <span>{type.type.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="row-span-3">
        <div className="w-2/5">
          <h5>Base Stats</h5>
          {props.stats.map((stat, key) => (
            <div key={key}>
              <span>{stat.stat.name}</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gray-600 h-2.5 rounded-full"
                  style={{ width: stat.base_stat }}
                  label={stat.base_stat}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
