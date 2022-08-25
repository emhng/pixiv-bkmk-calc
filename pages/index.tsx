import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRouter } from 'next/router';

import BookmarkCalc from '../components/BookmarkCalc';

import { useState } from 'react';

const Home: NextPage = () => {
	const { query } = useRouter();
	const includeLikes = !!query.likes;

	const [calculators, setCalculators] = useState([<BookmarkCalc key={1} />]);

	const addCalc = () =>
		setCalculators([
			...calculators,
			<BookmarkCalc key={calculators.length + 1} />
		]);

	return (
		<div id="page-cont">
			<Head>
				<title>pixivブクマ率計算ツール</title>
				<meta name="description" content="pixivブクマ率計算ツール" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>pixivブクマ率計算ツール</h1>
			<Link href={includeLikes ? '/' : '/?likes=true'}>
				<a className="link-button">
					{includeLikes ? 'いいねを除く' : 'いいねを含む'}
				</a>
			</Link>
			<section className="hflex">
				{includeLikes ? calculators : calculators}
				<button onClick={addCalc}>Add another calculator</button>
			</section>
		</div>
	);
};

export default Home;
