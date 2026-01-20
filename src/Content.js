import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEl2Active: false,
      isEl3Active: false
    };
  }

  toggleEl2 = () => {
    this.setState({ isEl2Active: !this.state.isEl2Active });
  };

  toggleEl3 = () => {
    this.setState({ isEl3Active: !this.state.isEl3Active });
  };

  render() {
    return (
      <div>
        <p 
          id="element-2" 
          onClick={this.toggleEl2}
          className={this.state.isEl2Active ? 'active-style-1' : ''}
          style={{ cursor: 'pointer' }}
        >
          Дата народження: 10.02.2004 <br />
          Місце народження: м. Рівне
        </p>

        <p 
          className={`element-3 ${this.state.isEl3Active ? 'active-style-2' : ''}`}
          onClick={this.toggleEl3}
          style={{ cursor: 'pointer' }}
        >
          Освіта: ПМЛ «Елітар», студент університету
        </p>

        <h3>Моє хобі</h3>
        <ul>
          <li>Заняття спортом у залі</li>
          <li>Силові тренування</li>
        </ul>

        <h3>Моє улюблене місто</h3>
        <p>Люблін — одне з найстаріших міст Польщі...</p>
      </div>
    );
  }
}

export default Content;