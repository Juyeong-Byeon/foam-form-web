import styled from 'styled-components';

interface ButtonProps {
	invert?: boolean;
	shadow?: boolean;
}

const Button = styled.button<ButtonProps>`
	${({ theme }) => theme.common.font};
	${({ theme, shadow }) => (shadow ? theme.common.boxShadow : '')};

	color: ${({ theme, invert }) => (invert ? theme.colors.background : theme.colors.primary)};
	background-color: ${({ theme, invert }) =>
		invert ? theme.colors.primary : theme.colors.background};

	padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.l};
	border-radius: ${({ theme }) => theme.spacing.l};
	border: none;

	font-size: ${({ theme }) => theme.fontSizes.paragraph};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme, invert }) => (invert ? theme.colors.disabledPrimary : '')};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.border};
		cursor: default;
	}

	font-weight: 500;
	line-height: 1;
	letter-spacing: 1.42px;
`;

export default Button;
