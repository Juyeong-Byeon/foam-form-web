import React, { ReactChildren, ReactNode } from 'react';

import styled from 'styled-components';

interface TitledFormProps {
	title: ReactNode;
	children: ReactNode;
}

const Wrapper = styled.div`
	width: 100%;
`;

const StyledForm = styled.form`
	${({ theme }) => theme.common.flexCenter}
	flex-direction: column;
	input {
		margin: ${({ theme }) => theme.spacing.xxs} 0;
		flex: 1;
		width: -webkit-fill-available;
	}
`;
const StyledHeader = styled.h1`
	font-weight: 300;
	font-size: ${({ theme }) => theme.common.pixelToRem(43)};
	margin: ${({ theme }) => theme.common.pixelToRem(10)} 0;
`;

export default function TitledForm({ title, children }: TitledFormProps) {
	return (
		<Wrapper>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm>{children}</StyledForm>
		</Wrapper>
	);
}
