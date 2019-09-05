import React from "react";

class TransplantOptions extends React.Component {
    render() {
        return (
            <div className="transplants-filter">
                <p className="transplants-title">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
                <label>
                    <input className="option all" type="checkbox" />
                    <span className="checkmark">Все</span>
                </label>
                <label>
                    <input className="option without" type="checkbox" />
                    <span className="checkmark">Без пересадок</span>
                </label>
                <label>
                    <input className="option  1-transplant" type="checkbox" />
                    <span className="checkmark">1 пересадка</span>
                </label>
                <label>
                    <input className="option  2-transplant" type="checkbox" />
                    <span className="checkmark">2 пересадки</span>
                </label>
                <label>
                    <input className="option  3-transplant" type="checkbox" />
                    <span className="checkmark">3 пересадки</span>
                </label>
            </div>
        );
    }
}

export default TransplantOptions;
