import { React } from 'react';
import { ListItem } from './ListItem';
import styled from 'styled-components';

const ItemContainerDiv = styled.div`
  /* background-color: #0c1a25; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const ItemContainer = ({ data, teamName }) => {

  const filteredForTeam = (el) => {
    if (teamName === 'All') return true;
    return el.teamName === teamName;
  }

  const sortedPlayer = (arr) => {
    return arr.sort((a, b) => b.playerPoints - a.playerPoints);
  }

  const addPosition = (data) => {

    let currentPosition = 1;
    for (let i = 0; i < data.length; i++) {
      if (i === 0) {
        data[i].playerPosition = currentPosition;
        continue;
      }
      if (data[i].playerPoints === data[i - 1].playerPoints) {
        data[i].playerPosition = currentPosition;
      }else {
        data[i].playerPosition = ++currentPosition;
      } 
    }

    return data;
  }

  const appplyFilter = (data) => {
    const arrFiltered = data.filter(filteredForTeam);
    const arrSorted = sortedPlayer(arrFiltered);
    const arrWithPosition = addPosition(arrSorted);
    return arrWithPosition;

  };


  console.log(data);
  return (
    <ItemContainerDiv>
      {appplyFilter(data).map((p) => {
        return (
          <ListItem
            key={p._id}
            playerName={p.playerName}
            playerNumber={p.playerNumber}
            playerImg={p.playerImg}
            playerPoints={p.playerPoints}
            teamName={p.teamName}
            playerPosition={p.playerPosition}
            inactive={p?.inactive || false}
            inactiveInfo={p?.inactiveInfo || ''}
          />
        );
      })}
    </ItemContainerDiv>
  );
};

export { ItemContainer };
