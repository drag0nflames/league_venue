import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call.",
      "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age.",
      "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.  "
    ],
    linkTo: ["http://sales/b", "http://sales/b", "http://sales/b"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span> {this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_button">
              <MyButton
                text="purchase"
                bck="#ffa800"
                color="#ffffff"
                href="_blank"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
