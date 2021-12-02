import styled from 'styled-components';

const StyledInput = styled.input`
	border: solid ${({ theme }) => theme.colors.border};
	border-width: ${({ theme }) => theme.common.pixelToRem(1)};
	border-radius: ${({ theme }) => theme.common.pixelToRem(4)};
	height: ${({ theme }) => theme.common.pixelToRem(20)};
	flex: 1;
	padding: ${({ theme }) => theme.spacing.s};
	color: ${({ theme }) => theme.colors.text};
	margin: 0;

	font-size: ${({ theme }) => theme.fontSizes.paragraph};

	&:focus {
		border-color: ${({ theme }) => theme.colors.primary};
		outline: ${({ theme }) => 'none'};
	}

	&::placeholder {
		color: ${({ theme }) => theme.colors.placeholder};
	}
`;

export { StyledInput };
