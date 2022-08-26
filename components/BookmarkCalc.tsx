import { useState } from 'react';

import { EyeIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import { FaceSmileIcon } from '@heroicons/react/24/solid';

import { useRouter } from 'next/router';

const BookmarkCalc = ({ id }: { id: number }) => {
	const [viewCount, setViewCount] = useState('');
	const [bookmarkCount, setBookmarkCount] = useState('');
	const [likeCount, setLikeCount] = useState('');

	const { query } = useRouter();
	const includeLikes = !!query.likes;

	const roundDecimal = (percent: number) => Math.round(percent * 10) / 10;

	const rawPercent: number = (+bookmarkCount / +viewCount) * 100;
	const roundedPercent: number = roundDecimal(rawPercent);

	const rawPercentWithLikes: number =
		((+bookmarkCount + +likeCount) / +viewCount) * 100;

	const roundedPercentWithLikes: number = roundDecimal(rawPercentWithLikes);

	const onChangeHandler = (setStateFn: CallableFunction) => (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setStateFn(e.target.value);
	};

	let result: number | string;
	let likesInput = [];

	if (includeLikes === true) {
		result =
			(includeLikes === true && viewCount === '') ||
			(includeLikes === true && bookmarkCount === '') ||
			(includeLikes === true && likeCount === '')
				? '--'
				: roundedPercentWithLikes;

		likesInput.push(
			<div className="vflex input-cont">
				<label>
					<FaceSmileIcon className="icon" />
					いいね
				</label>
				<input
					onChange={onChangeHandler(setLikeCount)}
					type="number"
					min={0}
					value={likeCount}
				/>
			</div>
		);
	} else {
		result = viewCount === '' || bookmarkCount === '' ? '--' : roundedPercent;
	}

	return (
		<div className="calc-cont vflex">
			<h1>作品{id}</h1>
			<div className="result">
				<h1>ブクマ率</h1>
				<h1 className="percent">
					{result}
					<span className="counter">%</span>
				</h1>
			</div>
			<form>
				<div className="vflex input-cont">
					<label>
						<EyeIcon className="icon" />
						閲覧数
					</label>
					<input
						onChange={onChangeHandler(setViewCount)}
						type="number"
						min={1}
					/>
				</div>
				<div className="vflex input-cont">
					<label>
						<HeartIcon className="icon" />
						ブックマーク
					</label>
					<input
						onChange={onChangeHandler(setBookmarkCount)}
						type="number"
						min={0}
					/>
				</div>
				{likesInput}
			</form>
		</div>
	);
};

export default BookmarkCalc;
