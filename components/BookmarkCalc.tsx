import { useState } from 'react';

import { EyeIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import { FaceSmileIcon } from '@heroicons/react/24/solid';

import { useRouter } from 'next/router';

import Error from './Error';
import NumberInput from './NumberInput';

const BookmarkCalc = ({ id }: { id: number }) => {
	const [viewCount, setViewCount] = useState('');
	const [bookmarkCount, setBookmarkCount] = useState('');
	const [likeCount, setLikeCount] = useState('');

	const { query } = useRouter();
	const includeLikes = !!query.likes;

	//Calculate engagement percentage
	const roundDecimal = (percent: number) => Math.round(percent * 10) / 10;

	const rawPercent: number = (+bookmarkCount / +viewCount) * 100;
	const roundedPercent: number = roundDecimal(rawPercent);

	const rawPercentWithLikes: number =
		((+bookmarkCount + +likeCount) / +viewCount) * 100;

	const roundedPercentWithLikes: number = roundDecimal(rawPercentWithLikes);

	//Set up error states for input validation
	const [viewCountError, setViewCountError] = useState('');
	const [bookmarkCountError, setBookmarkCountError] = useState('');
	const [likeCountError, setLikeCountError] = useState('');

	//Input validation & error display while typing
	const onInputHandler = (setErrorFn: CallableFunction) => (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const userInput = e.target.value;
		const inputId = e.target.id;

		//Validate inputs
		const zeroRegex = /^0+(?:0)?$/;
		const isZero = zeroRegex.test(userInput);

		const negativeNumberRegex = /-/;
		const isNegative = negativeNumberRegex.test(userInput);

		const decimalRegex = /\./;
		const isDecimal = decimalRegex.test(userInput);

		if (inputId === 'viewCount' && isZero) {
			setErrorFn(<Error message="閲覧数は1以上を入力してください" />);
		} else if (isNegative || isDecimal) {
			setErrorFn(<Error message="自然数を入力してください" />);
		} else if (userInput === '') {
			setErrorFn(<Error message="カンマなしで数値を入力してください" />);
		} else {
			setErrorFn('');
		}
	};

	//Set state only on valid inputs
	const onChangeHandler = (setStateFn: CallableFunction) => (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const userInput = e.target.value;
		const inputId = e.target.id;

		//Validate inputs
		const zeroRegex = /^0+(?:0)?$/;
		const isZero = zeroRegex.test(userInput);

		const negativeNumberRegex = /-/;
		const isNegative = negativeNumberRegex.test(userInput);

		const decimalRegex = /\./;
		const isDecimal = decimalRegex.test(userInput);

		if (
			(inputId === 'viewCount' && isZero) ||
			isNegative ||
			isDecimal ||
			userInput === ''
		) {
			setStateFn('');
		} else {
			setStateFn(userInput);
		}
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
			<NumberInput
				id="likeCount"
				icon={<FaceSmileIcon className="icon" />}
				label="いいね"
				onChangeHandler={onChangeHandler(setLikeCount)}
				onInputHandler={onInputHandler(setLikeCountError)}
				min={0}
				errorState={likeCountError}
				value={likeCount}
			/>
		);
	} else {
		result = viewCount === '' || bookmarkCount === '' ? '--' : roundedPercent;
	}

	let titlePlaceholder: string = '作品' + id;

	return (
		<div className="calc-cont vflex">
			<input
				className="work-title"
				type="text"
				placeholder={titlePlaceholder}
			/>
			<div className="result">
				<h1>ブクマ率</h1>
				<h1 className="percent">
					{result}
					<span className="counter">%</span>
				</h1>
			</div>
			<form>
				<NumberInput
					id="viewCount"
					icon={<EyeIcon className="icon" />}
					label="閲覧数"
					onChangeHandler={onChangeHandler(setViewCount)}
					onInputHandler={onInputHandler(setViewCountError)}
					min={1}
					errorState={viewCountError}
				/>
				<NumberInput
					id="bookmarkCount"
					icon={<HeartIcon className="icon" />}
					label="ブックマーク"
					onChangeHandler={onChangeHandler(setBookmarkCount)}
					onInputHandler={onInputHandler(setBookmarkCountError)}
					min={0}
					errorState={bookmarkCountError}
				/>
				{likesInput}
			</form>
		</div>
	);
};

export default BookmarkCalc;
