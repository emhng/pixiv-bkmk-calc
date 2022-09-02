import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';

import { useRouter } from 'next/router';

import BookmarkCalc from '../components/BookmarkCalc';

import { useState } from 'react';

const Home: NextPage = () => {
	const { query } = useRouter();
	const includeLikes = !!query.likes;

	const [calculators, setCalculators] = useState([
		<BookmarkCalc id={1} key={1} />
	]);

	const addCalc = () =>
		setCalculators([
			<BookmarkCalc id={calculators.length + 1} key={calculators.length + 1} />,
			...calculators
		]);

	return (
		<div id="page-cont">
			<Head>
				<title>pixivブクマ率計算ツール</title>
				<meta name="description" content="pixivブクマ率計算ツール" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav className="hflex space-btwn small-gap med-space wrap">
				<h1 className="en" id="title">
					pixiv bkmk calc
				</h1>
				<div className="hflex small-gap">
					<Link href={includeLikes ? '/' : '?likes=true'}>
						<a className="link-button">
							{includeLikes ? 'いいねを除く' : 'いいねを含む'}
						</a>
					</Link>
					<button onClick={addCalc}>作品を追加</button>
				</div>
			</nav>

			<section className="hflex wrap small-gap">{calculators}</section>
			<footer className="hflex">
				<Link href="/en">
					<a className="en">English</a>
				</Link>
			</footer>
		</div>
	);
};

export default Home;
