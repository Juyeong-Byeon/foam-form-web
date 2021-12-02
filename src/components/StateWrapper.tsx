import React, { ReactChild, ReactNode } from 'react';
import styled from 'styled-components';

type Status = 'WARN' | 'SUCCESS';

const Wrapper = styled.div<{ state: Status }>`
	width: 100%;
	height: 100%;
`;

const MessageWrapper = styled.div``;

interface Props {
	state?: Status;
	message: string;
	children: ReactChild;
}

function StatusWrapper({ state, message, children }: Props) {
	return (
		<Wrapper state={state}>
			{children}
			{state && <MessageWrapper> {message}</MessageWrapper>}
		</Wrapper>
	);
}

export { StatusWrapper };
