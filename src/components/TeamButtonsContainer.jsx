import React, { useEffect, useState } from 'react';
import { ItemContainer } from './ItemContainer';
import { TitleLogo } from './TitleLogo';

import styled from 'styled-components';

const ContainerDiv = styled.div`
  background-color: black;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: #101822; */
  background-color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  color: white;
`;

const TeamButton = styled.button`
  background-color: #33363b;
  border-color: #373737;
  border-radius: 50%;
  box-shadow: 0px 0px 9px 2px rgba(213, 213, 213, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-width: 85px;
  min-height: 85px;
  margin-left: 20px;
  margin-right: 20px;
`;

const LegendButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const LegendButton = styled.h5`
  margin-top: 15px;
  color: white;
  font-weight: 300;
`;



const TeamButtonsContainer = ({ players, setPlayers }) => {


  const [ teamName, seTeamName ] = useState('All');

  


  // const ordenarData = (equiposFiltrados) => {
  //   let enumeradorA = 0;
  //   let enumeradorB = 0;

  //   const equiposOrdenados = equiposFiltrados.sort((a, b) => {
  //     return  b.playerPoints - a.playerPoints;
  //   });

  //   const equiposNumerados = equiposOrdenados.map((element) => {
  //     enumeradorA += 1
  //     element.playerPosition = enumeradorA 
  //     return element
  //   });

  //   for (let i = 0; i < equiposNumerados.length; i++) {
    
  //     if(i !== 0) {


  //         if (equiposNumerados[i].playerPoints === equiposNumerados[i-1].playerPoints ) {
  //           equiposNumerados[i].playerPosition = enumeradorB;
  //           continue;
  //         }

  //     }

  //     enumeradorB += 1;
  //     equiposNumerados[i].playerPosition = enumeradorB;

  //   }

  //   return equiposNumerados;
  // }

  // const filtrarEquipo = (arr, equipo) => {
    
  //   const equipos = arr.filter((e) => e.teamName === equipo);

  //   // Llamar a función de ordenamiento
  //   const dataLista = ordenarData(equipos);
  //   console.log(dataLista);

  //   setPlayers(dataLista);
  // };


  return (
    <>
      <ContainerDiv>
        <TitleLogo />

        <ButtonsContainer>
          <div>
            <TeamButton onClick={() => seTeamName('All')}>
              ALL
            </TeamButton>
            <LegendButtonContainer>
            <LegendButton>Equipos</LegendButton>
            </LegendButtonContainer>
          </div>

          <div>
            <TeamButton onClick={() => seTeamName('Leyendas')}>
             Leyendas
            </TeamButton>
            <LegendButtonContainer>
            <LegendButton>Leyendas</LegendButton>
            </LegendButtonContainer>
          </div>

          <div>
            <TeamButton onClick={() => seTeamName('Rookies')}>
             Rookies
            </TeamButton>
            <LegendButtonContainer>
            <LegendButton>Rookies</LegendButton>
            </LegendButtonContainer>
          </div>

          <div>
            <TeamButton onClick={() => seTeamName('All Stars')}>
             All Stars
            </TeamButton>
            <LegendButtonContainer>
            <LegendButton>All Stars</LegendButton>
            </LegendButtonContainer>
          </div>

          <div>
            <TeamButton onClick={() => seTeamName('Resto del mundo')}>
            RDM
            </TeamButton>
            <LegendButtonContainer>
            <LegendButton>Resto del mundo</LegendButton>
            </LegendButtonContainer>
          </div>
        </ButtonsContainer>

        <ItemContainer data={players} teamName={teamName}/>
        {/* <ItemContainer data={players.length === 0 ? ordenarData(data) : players} /> */}
        {/* <ItemContainer data={players.length === 0 ? data : players} /> */}
      </ContainerDiv>
    </>
  );
};


export { TeamButtonsContainer };
