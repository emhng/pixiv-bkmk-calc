import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const Error = ({ message }: { message: string }) => {
	return (
		<div className="error">
			<ExclamationCircleIcon className="icon" />
			<p>{message}</p>
		</div>
	);
};

export default Error;
