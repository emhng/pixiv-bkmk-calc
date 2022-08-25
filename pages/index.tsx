import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import BookmarkCalc from '../components/BookmarkCalc';

const Home: NextPage = () => {
	return (
		<div id="page-cont">
			<Head>
				<title>pixivブクマ率計算ツール</title>
				<meta name="description" content="pixivブクマ率計算ツール" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<BookmarkCalc />
			<BookmarkCalc />
			<BookmarkCalc />
		</div>
	);
};

export default Home;
