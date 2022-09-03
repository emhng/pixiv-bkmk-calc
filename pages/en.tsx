import { NextPage } from 'next';
import Head from 'next/head';

import Link from 'next/link';

import { useRouter } from 'next/router';

import BookmarkCalc from '../components/BookmarkCalc';

import { useState } from 'react';

const EnglishHome: NextPage = () => {
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
		<div className="en" id="page-cont">
			<Head>
				<title>pixiv bookmark calculator</title>
				<meta name="description" content="pixiv bookmark calculator" />
				<meta property="og:image" content="/preview.png" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav className="hflex space-btwn small-gap med-space wrap">
				<h1 className="en" id="title">
					pixiv bkmk calc
				</h1>
				<div className="hflex small-gap">
					<Link href={includeLikes ? '/en' : '?likes=true'}>
						<a className="link-button">
							{includeLikes ? 'Remove Likes' : 'Include Likes'}
						</a>
					</Link>
					<button onClick={addCalc}>Add a calculator</button>
				</div>
			</nav>

			<section className="hflex wrap small-gap">{calculators}</section>
			<footer className="hflex">
				<Link href="/">
					<a>日本語</a>
				</Link>
			</footer>
		</div>
	);
};

export default EnglishHome;
