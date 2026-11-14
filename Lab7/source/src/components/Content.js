import React, { Component } from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eighthStyle: {},
      ninthStyle: {},
    };
  }

  handleEighthClick = () => {
    this.setState({
      eighthStyle: {
        backgroundColor: getRandomColor(),
        color: getRandomColor(),
      },
    });
  };

  handleNinthClick = () => {
    this.setState({
      ninthStyle: {
        backgroundColor: getRandomColor(),
        color: getRandomColor(),
      },
    });
  };

  render() {
    return (
      <main>
        {/* 2-й елемент */}
        <p>Дата та місце народження: 16.02.2007р м.Краматорськ.</p>

        {/* 3-й елемент */}
        <p>
          Освіта: ЗОШ І-ІІІ ступенів № 25 з профільним навчанням, Національний
          технічний університет України «Київський політехнічний інститут імені
          Ігоря Сікорського» (ФІОТ, комп'ютерна інженерія).
        </p>

        {/* 4-й елемент */}
        <h3>Мої хобі</h3>

        {/* 5-й елемент */}
        <ul>
          <li>Аніме, фільми (YouTube, Crunchyroll)</li>
          <li>Цифрова схемотехніка та моделювання (Verilog, ModelSim)</li>
          <li>Відеоігри (Project Zomboid, Osu, ETS 2)</li>
        </ul>

        {/* 6-й елемент */}
        <h3>Улюблені фільми та книги</h3>

        {/* 7-й елемент */}
        <ol>
          <li>"To me, The One Who Loved You" (2022)</li>
          <li>"Brothers" (2009)</li>
          <li>"Manchester By the Sea" (2016)</li>
        </ol>

        {/* 8-й елемент: (87 mod 10) + 1 = 8 */}
        <h3
          id="element-8"
          className="clickable-element"
          style={this.state.eighthStyle}
          onClick={this.handleEighthClick}
        >
          Київ
        </h3>

        {/* 9-й елемент */}
        <p
          className="element-9 clickable-element"
          style={this.state.ninthStyle}
          onClick={this.handleNinthClick}
        >
          Київ — це унікальне місто, де багатовікова історія непомітно
          зливається зі стрімким ритмом сучасного мегаполіса. Тут величні золоті
          куполи Софійського собору та старовинні вулички Подолу гармонійно
          сусідять зі скляними фасадами нових бізнес-центрів і технологічних
          хабів. Особливу атмосферу місту надають його зелені пагорби, широкі
          береги Дніпра та затишні сквери, де завжди можна знайти спокій
          посеред міського гамору. Київ надихає своєю невичерпною енергією,
          багатогранною архітектурою та незламним духом, залишаючи яскраві
          спогади після кожної прогулянки його історичними й сучасними
          кварталами.
        </p>
      </main>
    );
  }
}

export default Content;