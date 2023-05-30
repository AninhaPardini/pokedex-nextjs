"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [pokemons, setPokemons] = useState([
    {
      name: "bulbasaur",
      id: 1,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      elementTypes: ["grass", "poison"],
    },
    {
      name: "ivysaur",
      id: 2,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      elementTypes: ["grass", "poison"],
    },
    {
      name: "venusaur",
      id: 3,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      elementTypes: ["grass", "poison"],
    },
  ]);

  return (
    <div className={styles.container}>

      <div className={styles.container}>
        <h1 className={styles.title}>Pokédex</h1>
        <div className={styles.pokedex}>
          {pokemons.map(({ name, id, image, elementTypes }) => (
            <a
              href={`pokemon/${name}`}
              key={id}
              className={`${styles.card} ${styles[elementTypes[0]]}`}
            >
              <Image
                className={styles["card-image"]}
                alt={name}
                src={image}
                width={150}
                height={150}
              />
              <h2 className={styles["card-title"]}>
                {id}. {name}
              </h2>
              <p className={styles["card-subtitle"]}>
                {elementTypes.join(" | ")}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}