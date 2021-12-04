import React from 'react';
import { Status, StatusWrapper } from './StateWrapper';
import { StyledInput } from './StyledInput';

interface StatusInputProps {
	status: Status;
	statusMessage: string;
	inputName: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder: string;
	autoComplete?: string;
	type?: string;
}

export const StatusInput = ({
	status,
	statusMessage,
	inputName,
	value,
	onChange,
	placeholder,
	autoComplete,
	type,
}: StatusInputProps) => {
	return (
		<StatusWrapper status={status} message={statusMessage}>
			<StyledInput
				name={inputName}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				autoComplete={autoComplete}
				type={type}
			/>
		</StatusWrapper>
	);
};
