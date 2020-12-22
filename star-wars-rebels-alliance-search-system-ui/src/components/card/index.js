import React from 'react';
import { Redirect } from 'react-router-dom';
import CardData from './card-data';
import * as constants from '../../constants';

function renderTypeCard(data, type) {
  switch (type) {
    case 'species':
      return (
        <CardData
          data={data}
          type={type}
          relatedContentKeys={constants.speciesRelatedContentKeys}
          normalDataKeys={constants.speciesNormalDataKeys}
        />
      );
    case 'people':
      return (
        <CardData
          data={data}
          type={type}
          relatedContentKeys={constants.peopleRelatedContentKeys}
          normalDataKeys={constants.peopleNormalDataKeys}
        />
      );
    case 'films':
      return (
        <CardData
          data={data}
          type={type}
          relatedContentKeys={constants.filmsRelatedContentKeys}
          normalDataKeys={constants.filmsNormalDataKeys}
        />
      );
    case 'starships':
      return (
        <CardData
          data={data}
          type={type}
          relatedContentKeys={constants.starshipsRelatedContentKeys}
          normalDataKeys={constants.starshipsNormalDataKeys}
        />
      );
    case 'vehicles':
      return (
        <CardData
          data={data}
          type={type}
          relatedContentKeys={constants.vehiclesRelatedContentKeys}
          normalDataKeys={constants.vehiclesNormalDataKeys}
        />
      );
    case 'planets':
      return (
        <CardData
          data={data}
          type={type}
          relatedContentKeys={constants.planetsRelatedContentKeys}
          normalDataKeys={constants.planetsNormalDataKeys}
        />
      );
    default:
      return <Redirect to="/not-found" />;
  }
}

function Card({ type, data }) {
  return renderTypeCard(data, type);
}

export default Card;
