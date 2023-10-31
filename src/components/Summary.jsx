// Summary.js

import React, { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: null, // Utilisateur sélectionné
      countries: [], // Liste des pays associés à l'utilisateur sélectionné
    };
    this.userRef = React.createRef(); // Référence pour la liste déroulante d'utilisateurs
  }

  // Fonction pour afficher les pays associés à l'utilisateur sélectionné
  showCountries = () => {
    // Récupérez l'utilisateur sélectionné en utilisant la référence
    const selectedUser = this.userRef.current.value;
    // Utilisez cet utilisateur pour obtenir la liste des pays associés (vous devrez implémenter cette logique)
    // Remarque : les pays associés devraient être stockés dans le state de ce composant
    const associatedCountries = getAssociatedCountries(selectedUser); // Remplacez cela par votre logique réelle
    this.setState({ countries: associatedCountries });
  };

  render() {
    return (
      <div>
        <h1>Galerie</h1>
        <div>
          <label>Sélectionner un utilisateur :</label>
          <select ref={this.userRef}>
            <option value="user1">Utilisateur 1</option>
            <option value="user2">Utilisateur 2</option>
            {/* Ajoutez d'autres options d'utilisateurs ici */}
          </select>
          <button onClick={this.showCountries}>Afficher</button>
        </div>
        <div>
          {/* Affichage des pays associés */}
          <ul>
            {this.state.countries.map((country, index) => (
              <li key={index}>
                <img src={country.flag} alt={country.name} width="30" height="20" />
                <div>
                  <p>Nom : {country.name}</p>
                  <p>Continent : {country.continent}</p>
                  <p>Capitale : {country.capital}</p>
                  <p>Monnaie : {country.currency}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Summary;
