import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

import animals from '../../data/animals.json';

export default function Giraffe() {
    let animal = animals[3];
    console.log('animal: ', animal);
    return (
        <>
            <Head>
                <title>{animal.name}</title>
            </Head>
            <main className={styles.main}>
                <h2>{animal.name}</h2>
                <section className={styles.mainAnimal}>
                    <table className={styles.animalInfo}>
                        <tbody>
                            <tr>
                                <td>Scientific Name</td>
                                <td>{animal.scientificName}</td>
                            </tr>
                            <tr>
                                <td>Diet</td>
                                <td>{animal.diet}</td>
                            </tr>
                            <tr>
                                <td>Habitat</td>
                                <td>{animal.habitat}</td>
                            </tr>
                        </tbody>
                    </table>

                    <Image
                        src={animal.image}
                        alt={animal.name}
                        width={640}
                        height={426}
                    />
                </section>
            </main>
        </>
    );
}
