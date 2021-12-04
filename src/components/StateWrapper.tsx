import React, { ReactChild, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type Status = 'WARN' | 'SUCCESS';

const Wrapper = styled.div<{ status: Status }>`
	width: 100%;
	height: 100%;

	${({ status }) =>
		status === 'SUCCESS' &&
		css`
			& > * {
				border-color: ${({ theme }) => theme.colors.primary} !important;
			}
		`}

	${({ status }) =>
		status === 'WARN' &&
		css`
			& > * {
				border-color: ${({ theme }) => theme.colors.danger} !important;
			}
		`}
`;

const MessageWrapper = styled.div<{ status: Status }>`
	height: ${({ theme }) => theme.spacing.xxs};
	font-size: ${({ theme }) => theme.fontSizes.info};

	${({ status, theme }) => (status === 'WARN' ? `color: ${theme.colors.danger}` : '')}
`;

interface Props {
	status?: Status;
	message: string;
	children: ReactChild;
}

function StatusWrapper({ status, message, children }: Props) {
	return (
		<Wrapper status={status}>
			{children}
			<MessageWrapper status={status}> {status == 'WARN' && message}</MessageWrapper>
		</Wrapper>
	);
}

export { StatusWrapper };
