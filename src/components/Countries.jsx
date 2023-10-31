import React from "react";
import { Card, CardHeader, CardBody, CardText, CardImg } from "react-bootstrap";

const countries = [
  {
    name: "France",
    continent: "Europe",
    capital: "Paris",
    currency: "Euro",
    language: "French",
    flagUrl: "URL_DE_L_IMAGE_DU_DRAPEAU_FRANCE",
  },
  {
    name: "United States",
    continent: "North America",
    capital: "Washington, D.C.",
    currency: "US Dollar",
    language: "English",
    flagUrl: "URL_DE_L_IMAGE_DU_DRAPEAU_USA",
  },
  // Ajoutez d'autres pays avec leurs informations
];

const Countries = () => {
  return (
    <div>
      <h1>Pays</h1>
      {countries.map((country, index) => (
        <Card key={index} className="mb-3">
          <CardHeader>{country.name}</CardHeader>
          <CardImg src={country.flagUrl} alt={country.name} />
          <CardBody>
            <CardText>Continent: {country.continent}</CardText>
            <CardText>Capitale: {country.capital}</CardText>
            <CardText>Monnaie: {country.currency}</CardText>
            <CardText>Langue: {country.language}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Countries;
