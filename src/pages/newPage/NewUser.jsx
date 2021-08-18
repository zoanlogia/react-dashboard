/** @format */

import "./newUser.scss";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUser__title">Nouvel utilisateur</h1>
      <form action="" className="newUser__form">
        <div className="newUser__form__item">
          <label for="username">Nom d'utilisateur</label>
          <input type="text" placeholder="zoanlogia" />
        </div>
        <div className="newUser__form__item">
          <label for="fullname">Nom complet</label>
          <input type="text" placeholder="Guillaume Flambard" />
        </div>
        <div className="newUser__form__item">
          <label for="email">Email</label>
          <input type="email" placeholder="xxxx@xxxx.com" />
        </div>
        <div className="newUser__form__item">
          <label for="password">Mot de passe</label>
          <input type="password" placeholder="mot de passe" />
        </div>
        <div className="newUser__form__item">
          <label for="number">Téléphone</label>
          <input type="number" placeholder="06 78 75 23 43" />
        </div>
        <div className="newUser__form__item">
          <label for="adress">Adresse</label>
          <input type="text" placeholder="27 bis rue des montenbains, Paris" />
        </div>
        <div className="newUser__form__item">
          <div className="newUser__form__item__gender">
            <label>Genre</label>
            <input
              type="radio"
              name="male"
              id="male"
              value="male"
              placeholder="27 bis rue des montenbains, Paris"
            />
            <label for="male">Masculin</label>
            <input
              type="radio"
              name="female"
              id="female"
              value="female"
              placeholder="27 bis rue des montenbains, Paris"
            />
            <label for="female">Féminin</label>
            <input
              type="radio"
              name="other"
              id="other"
              value="other"
              placeholder="27 bis rue des montenbains, Paris"
            />
            <label for="other">Autre</label>
          </div>
        </div>
        <div className="newUser__form__item">
            <label>Actif</label>
            <select name="active" id="active" className="newUser__form__item--active">
                <option value="yes">Oui</option>
                <option value="no">Non</option>
            </select>
        </div>
      </form>
    </div>
  );
}
