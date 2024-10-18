import styled, {keyframes} from "styled-components";

export const pulse = keyframes`
  0% {
    background-color: rgb(180, 180, 180)
  }
  50% {
    background-color: rgb(200, 200, 200)
  }
  100% {
    background-color: rgb(180, 180, 180)
  }
`;

export const DefaultImagePlaceholder = styled.div`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	background-color: #f0f0f0;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: #666;
	animation: ${pulse} 1.8s infinite;

	${props =>
		props.fill &&
		`
    width: 100%;
    height: 100%;
  `}
`;
