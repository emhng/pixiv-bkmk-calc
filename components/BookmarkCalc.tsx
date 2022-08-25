import { useState } from 'react';

import { EyeIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';

const BookmarkCalc = () => {
	const [viewCount, setViewCount] = useState('');
	const [bookmarkCount, setBookmarkCount] = useState('');
	const [likeCount, setLikeCount] = useState('');

	const rawPercent: number = (+bookmarkCount / +viewCount) * 100;
	const roundedPercent: number = Math.round(rawPercent * 10) / 10;

	const onChangeHandler = (setStateFn: any) => (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setStateFn(e.target.value);
	};

	return (
		<div className="calc-cont hflex">
			<form>
				<div className="vflex">
					<label>
						<EyeIcon className="icon" />
						閲覧数
					</label>
					<input onChange={onChangeHandler(setViewCount)} type="number" />
				</div>
				<div className="vflex">
					<label>
						<HeartIcon className="icon" />
						ブックマーク
					</label>
					<input onChange={onChangeHandler(setBookmarkCount)} type="number" />
				</div>
			</form>
			<div className="result">
				<h1>ブクマ率</h1>
				<h1>
					{viewCount === '' || bookmarkCount === '' ? '--' : roundedPercent}
					<span className="counter">%</span>
				</h1>
			</div>
		</div>
	);
};

export default BookmarkCalc;
