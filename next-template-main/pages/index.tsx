import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
      <><Head>
      <title>My portfolio</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head><NavBar />
    <div id='A propos' className='bg-[#E0E1E6] text-[#50524A] w-screen h-screen'>
        <div className='flex justify-start items-center font-serif text-4xl h-[30%] mx-12'>
          Bonjour ! Je suis Abdelqodousse Boustani

        </div>
      </div></>
  );
}