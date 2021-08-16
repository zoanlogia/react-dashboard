/** @format */

import "./widgetLg.scss";
import Avatar from "../../assets/img/moi.jpg";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLg__button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLg__title">Dernières transactions</h3>
      <table className="widgetLg__table">
        <tr className="widgetLg__table__tr">
          <th className="widgetLg__table__tr__th">Clients</th>
          <th className="widgetLg__table__tr__th">Date</th>
          <th className="widgetLg__table__tr__th">Montant</th>
          <th className="widgetLg__table__tr__th">Statut</th>
        </tr>
        <tr className="widgetLg__table__tr">
          <td className="widgetLg__user">
            <img src={Avatar} alt="avatar" className="widgetLg__image" />
            <span className="widgetLg__name">Guillaume Flambard</span>
          </td>
          <td className="widgetLg__date">22 Février 2021</td>
          <td className="widgetLg__amount">123 €</td>
          <td className="widgetLg__status"><Button type="Approuvé" /></td>
        </tr>
        <tr className="widgetLg__table__tr">
          <th className="widgetLg__table__tr__th">Clients</th>
          <th className="widgetLg__table__tr__th">Date</th>
          <th className="widgetLg__table__tr__th">Montant</th>
          <th className="widgetLg__table__tr__th">Statut</th>
        </tr>
        <tr className="widgetLg__table__tr">
          <td className="widgetLg__user">
            <img src={Avatar} alt="avatar" className="widgetLg__image" />
            <span className="widgetLg__name">Guillaume Flambard</span>
          </td>
          <td className="widgetLg__date">22 Février 2021</td>
          <td className="widgetLg__amount">123 €</td>
          <td className="widgetLg__status"><Button type="Décliné" /></td>
        </tr>
        <tr className="widgetLg__table__tr">
          <th className="widgetLg__table__tr__th">Clients</th>
          <th className="widgetLg__table__tr__th">Date</th>
          <th className="widgetLg__table__tr__th">Montant</th>
          <th className="widgetLg__table__tr__th">Statut</th>
        </tr>
        <tr className="widgetLg__table__tr">
          <td className="widgetLg__user">
            <img src={Avatar} alt="avatar" className="widgetLg__image" />
            <span className="widgetLg__name">Guillaume Flambard</span>
          </td>
          <td className="widgetLg__date">22 Février 2021</td>
          <td className="widgetLg__amount">123 €</td>
          <td className="widgetLg__status"><Button type="En attente" /></td>
        </tr>
        <tr className="widgetLg__table__tr">
          <th className="widgetLg__table__tr__th">Clients</th>
          <th className="widgetLg__table__tr__th">Date</th>
          <th className="widgetLg__table__tr__th">Montant</th>
          <th className="widgetLg__table__tr__th">Statut</th>
        </tr>
        <tr className="widgetLg__table__tr">
          <td className="widgetLg__user">
            <img src={Avatar} alt="avatar" className="widgetLg__image" />
            <span className="widgetLg__name">Guillaume Flambard</span>
          </td>
          <td className="widgetLg__date">22 Février 2021</td>
          <td className="widgetLg__amount">123 €</td>
          <td className="widgetLg__status"><Button type="Approuvé" /></td>
        </tr>
        <tr className="widgetLg__table__tr">
          <th className="widgetLg__table__tr__th">Clients</th>
          <th className="widgetLg__table__tr__th">Date</th>
          <th className="widgetLg__table__tr__th">Montant</th>
          <th className="widgetLg__table__tr__th">Statut</th>
        </tr>
        <tr className="widgetLg__table__tr">
          <td className="widgetLg__user">
            <img src={Avatar} alt="avatar" className="widgetLg__image" />
            <span className="widgetLg__name">Guillaume Flambard</span>
          </td>
          <td className="widgetLg__date">22 Février 2021</td>
          <td className="widgetLg__amount">123 €</td>
          <td className="widgetLg__status"><Button type="Approuvé" /></td>
        </tr>
      </table>
    </div>
  );
}
