/* eslint-disable import/extensions */
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

export default function Home() {
  return (
      <><Head>
      <title>My portfolio</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head><NavBar />
    <div className='bg-[#293845] text-[#C2CBD2] w-screen h-screen'>
        <div className='flex justify-start items-center font-serif text-5xl h-[30%] mx-12 '>
        <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
         Bonjour ! je suis <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    ><br />
      Abdelqodousse Boustani 👋
    </span>
    <span
      className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
    ></span>
  </h1>
        </div>
        <article className="prose lg:prose-xl pt-2">
          <section id="A-propos">

  <h1 className='flex justify-start items-center font-serif text-5xl h-[30%] mx-12 '>A propos</h1>
  <p className='w-[50%] mt-4 mx-12 text-lg'>
  Jeune developpeur full-stack trés motivé pour développer constamment mes compétences et
  évoluer professionnellement. J'ai une
  aisance relationnelle et une capacité
  d'adaptation qui me permettent
  d'intégrer et d'évoluer au sein d'une
  équipe
    <img className='absolute h-fit top-[30%] right-[2%] animate-pulse' src="https://ythwitum.sirv.com/Images/Code%20Development%20_Flatline.svg"/>
    <a href='CV.pdf' className="flex items-center justify-center h-10 w-44 ml-4 py-2 px-5 border-2 bg-[#C2CBD2] border-black hover:bg-[#616175] text-[#293845] hover:text-[#DDE0EA] font-serif mt-6 rounded-md  space-x-2" type="button">
  <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" role="img"><path d="M12.372 7.289l-4.405 4.416a.357.357 0 01-.506 0L3.057 7.29a.357.357 0 010-.506l.583-.584a.353.353 0 01.509.006l2.788 2.89V1.69c0-.196.161-.357.358-.357h.833c.196 0 .357.161.357.357v7.405l2.789-2.89a.358.358 0 01.509-.006l.583.584c.146.14.146.366.006.506zm.7 5.83H2.356a.358.358 0 00-.357.357v.833c0 .197.16.358.357.358h10.714c.197 0 .358-.161.358-.357v-.834a.358.358 0 00-.358-.357z" /></svg>
  <span className="font-semi-bold text-lg ">Mon CV</span>
</a>
  </p>
  </section>
  <section className='mt-4' id="Compétences">
  <h1 className='flex justify-start items-center font-serif text-5xl h-[30%] mx-12 mt-12'>Compétences</h1>
  <div className='w-[50%] mx-12'>
 <Skills />
  </div>
  </section>
  <section id="Projets">
  <h1 className='flex justify-start items-center font-serif text-5xl h-[30%] mx-12 mt-12'>Projets</h1>
  <div className='flex flex-row gap-4 mt-8 mb-32 h-auto mx-12 flex-wrap '>
     <Card title='Wordle' description='Wordle est un jeu de lettres en ligne où les joueurs doivent trouver et soumettre des mots cachés dans une grille de lettres. Les mots sont souvent liés à un thème ou à un sujet spécifique, et les joueurs sont notés en fonction de la longueur et de la difficulté des mots qu`ils soumettent.
      Le jeu est souvent utilisé pour améliorer les compétences en vocabulaire et en orthographe.' />
     <Card title='API' description='Pour mon premier projet API, j`ai créé une interface pour un site de vente de skins en ligne. L`objectif était de permettre aux utilisateurs de consulter les différents skins disponibles à la vente, de les trier par catégories et de les ajouter au panier d`achat en utilisant une requête HTTP.
     Pour réaliser ce projet, j`ai utilisé un framework pour créer les routes et les fonctionnalités de l`API. J`ai également utilisé une base de données pour stocker les informations sur les skins, comme les images, les prix et les catégories.
      J`ai mis en place un système de sécurité pour protéger les données sensibles et j`ai créé une documentation détaillée pour les utilisateurs. Ce projet m`a permis de comprendre les différentes étapes de la création d`une API, de la définition des besoins à la mise en production.'/>
     <Card title='Website' description='Pour mon premier projet de développement front-end, j`ai créé un site web pour un site de vente de skins en ligne en utilisant Next.js.
      L`objectif était de permettre aux utilisateurs de naviguer facilement sur le site, de consulter les différents skins disponibles à la vente, de les trier par catégories .
      Pour réaliser ce projet, j`ai utilisé Next.js pour gérer les routes et les composants de l`application, J`ai également utilisé des technologies telles que HTML, CSS et TypeScript pour créer l`interface utilisateur.
      J`ai intégré  l`API que j`avais crée. Ce projet ma permis d`acquérir des compétences en développement front-end et de comprendre comment les technologies web peuvent être utilisées pour essayer de créer une expérience utilisateur
      fluide et intuitive avec Next.js.'/>
     <Card title='Inclu`dChat' description='Le projet que j`ai réalisé en groupe  est une solution pour l`entreprise Inclusion Conseil.
      Il s`agit d`un calendrier et d`un chat en temps réel qui permettent aux employés de planifier et de communiquer efficacement.
      J`ai utilisé le framework Next.js 13 pour développer cette solution, pour ma part je me suis occuper pour la mise en page et la création de l`interface utilisateur utilisé Tailswinds
      Enfin, j`ai inclus une page d`administration pour permettre aux utilisateurs de gérer les événements et les utilisateurs'/>
  </div>
  </section>
</article>
<div className='h-auto w-screen border-t-2 '> <Footer /></div>
      </div></>
  );
}
