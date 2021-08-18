import "./sidebar.scss";
import { EqualizerSharp, EuroSharp, FeedbackSharp, LineStyle, MailSharp, MessageSharp, PersonSharp, ReportSharp, StorefrontSharp, Timeline, TrendingUp, WorkSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <LineStyle className="sidebar__icons" />
              Accueil
            </li>
            <li className="sidebar__listItem">
              <Timeline className="sidebar__icons"/>
              Analyses
            </li>
            <li className="sidebar__listItem">
              <TrendingUp className="sidebar__icons"/>
              Ventes
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Menu rapide</h3>
          <ul className="sidebar__list">
            <Link className="link" to="/users">
            <li className="sidebar__listItem">
              <PersonSharp className="sidebar__icons" />
              Utilisateurs
            </li>
            </Link>
            <Link className="link" to="/products">
            <li className="sidebar__listItem">
              <StorefrontSharp className="sidebar__icons"/>
              Produits
            </li>
            </Link>
            <li className="sidebar__listItem">
              <EuroSharp className="sidebar__icons"/>
              Transactions
            </li>
            <li className="sidebar__listItem">
              <EqualizerSharp className="sidebar__icons"/>
              Statistiques
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Notifications</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <MailSharp className="sidebar__icons" />
              Mail
            </li>
            <li className="sidebar__listItem">
              <FeedbackSharp className="sidebar__icons"/>
              Retours
            </li>
            <li className="sidebar__listItem">
              <MessageSharp className="sidebar__icons"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <WorkSharp className="sidebar__icons" />
              Gérer
            </li>
            <li className="sidebar__listItem">
              <Timeline className="sidebar__icons"/>
              Analyses
            </li>
            <li className="sidebar__listItem">
              <ReportSharp className="sidebar__icons"/>
              Rapports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
