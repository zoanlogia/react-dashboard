/** @format */

import "./user.scss";
import Avatar from "../../assets/img/moi.jpg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";

export default function User() {
  return (
    <div className="user">
      <div className="container__title">
        <h1 className="title__user">Modifier vos informations</h1>
        <button className="user__btn">Modifier</button>
      </div>
      <div className="user__container">
        <div className="user__container__userShow">
          <div className="user__container__userShow__top">
            <img
              src={Avatar}
              alt="avatar"
              className="user__container__userShow__top__img"
            />
            <div className="user__container__userShow__top__title">
              <span className="user__container__userShow__top__title__username">
                Guillaume Flambard
              </span>
              <span className="user__container__userShow__top__title__job">
                Web developper
              </span>
            </div>
          </div>
          <div className="user__container__userShow__bottom">
            <span className="user__container__userShow__bottom__description">
              Détails du compte
            </span>
            <div className="user__container__userShow__bottom__info">
              <PermIdentity className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__title">
                Zoanlogia75
              </span>
            </div>
            <div className="user__container__userShow__bottom__info">
              <CalendarToday className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__date">
                12/02/2021
              </span>
            </div>
            <div className="user__container__userShow__bottom__description">
              Contact
            </div>
            <div className="user__container__userShow__bottom__info">
              <MailOutline className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__email">
                g.xxxx@xxx.com
              </span>
            </div>
            <div className="user__container__userShow__bottom__info">
              <PhoneAndroid className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__number">
                06 11 78 76 45
              </span>
            </div>
            <div className="user__container__userShow__bottom__info">
              <LocationSearching className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__adress">
                12 rue de paupaul, Paris
              </span>
            </div>
          </div>
        </div>
        <div className="user__container__userUpdate">
          <span className="user__container__userUpdate__title">Editer</span>
          <form action="" className="user__container__userUpdate__form">
            <div className="user__container__userUpdate__form__left">
              <div className="user__container__userUpdate__form__left__item">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input
                  type="text"
                  placeholder="zoanlogia75"
                  className="user__container__userUpdate__form__left__item__input"
                />
              </div>
            </div>
            <div className="user__container__userUpdate__form__left">
              <div className="user__container__userUpdate__form__left__item">
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  placeholder="Guillaume"
                  className="user__container__userUpdate__form__left__item__input"
                />
              </div>
            </div>
            <div className="user__container__userUpdate__form__left">
              <div className="user__container__userUpdate__form__left__item">
                <label htmlFor="lastname">Nom de famille</label>
                <input
                  type="text"
                  placeholder="Flambard"
                  className="user__container__userUpdate__form__left__item__input"
                />
              </div>
            </div>
            <div className="user__container__userUpdate__form__left">
              <div className="user__container__userUpdate__form__left__item">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="xxxx@xxx.com"
                  className="user__container__userUpdate__form__left__item__input"
                />
              </div>
            </div>
            <div className="user__container__userUpdate__form__left">
              <div className="user__container__userUpdate__form__left__item">
                <label htmlFor="username">Téléphone</label>
                <input
                  type="number"
                  placeholder="xx xx xx xx xx"
                  className="user__container__userUpdate__form__left__item__input"
                />
              </div>
            </div>
            <div className="user__container__userUpdate__form__left">
              <div className="user__container__userUpdate__form__left__item">
                <label htmlFor="username">Adresse</label>
                <input
                  type="text"
                  placeholder="2 rue de popaul, Paris"
                  className="user__container__userUpdate__form__left__item__input"
                />
              </div>
            </div>
            
            <div className="user__container__userUpdate__form__rigth">
              <div className="user__container__userUpdate__form__rigth__upload">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="user__container__userUpdate__form__right__upload__img"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
