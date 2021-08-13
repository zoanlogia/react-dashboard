/** @format */

import "./featuredInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured__item">
        <span className="featured__title">Recette</span>
        <div className="featured__container">
          <span className="featured__money">2000 €</span>
          <span className="featured__rate">
            -55
            <ArrowDownward className="featured__iconState" />
          </span>
        </div>
        <span className="featured__featuredSub">Comparé au mois dernier</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Coût</span>
        <div className="featured__container">
          <span className="featured__money">300 €</span>
          <span className="featured__rate">
            -3
            <ArrowUpward className="featured__iconState" />
          </span>
        </div>
        <span className="featured__featuredSub">Comparé au mois dernier</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Coût</span>
        <div className="featured__container">
          <span className="featured__money">300 €</span>
          <span className="featured__rate">
            -3
            <ArrowUpward className="featured__iconState negative" />
          </span>
        </div>
        <span className="featured__featuredSub">Comparé au mois dernier</span>
      </div>
    </div>
  );
}
