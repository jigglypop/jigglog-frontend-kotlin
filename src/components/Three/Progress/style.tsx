import styled from 'styled-components';

interface IProgress {
  ratio: number;
}

export const Progress = styled.div<IProgress>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 800;
  }

  .progress-bar {
    overflow: hidden;
    position: relative;
    padding: 5px 0;
    width: 200px;
    height: 35px;
    transition: all 0.3s ease-in;

    .progress-color {
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translate(${props => props.ratio + 'px'}, -50%);
      width: 200px;
      height: 15px;
      background: linear-gradient(45deg, #8e2de2, #4a00e0);
      box-shadow: 0 0 10px #4a00e0;
    }
    .progress-gray {
      position: absolute;
      z-index: 1;
      transform: translateY(-50%);
      top: 50%;
      width: 200px;
      height: 15px;
      background: #1d1d1d;
    }
  }
`;
