/** @format */

import "./user.scss";
import Avatar from '../../assets/img/moi.jpg'

export default function User() {
  return (
    <div className="user">
      <div className="user__titleContainer">
        <h1 className="user__titleContainer__userTitle">Editer profile</h1>
        <button className="user__titleContainer__addButton">Modifier</button>
      </div>
      <div className="user__userContainer">
          <div className="user__userContainer__userShow">
              <div className="user__userContainer__userShow__top">
                  <img className="user__userContainer__userShow__top__img" src={Avatar} alt="" />
              </div>
          </div>
          <div className="user__userContainer__userUpdate"></div>
      </div>
    </div>
  );
}
