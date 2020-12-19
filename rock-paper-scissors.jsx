var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* displays site properly based on user's device */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,600;1,700&display=swap" rel="stylesheet" /> 
          <link rel="stylesheet" href="style.css" />
          <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
          <title>Rock Paper Scissors</title>
          {/*heading*/}
          <div className="container" />
          <header>
            <h1>
              <span>Rock</span>
              <span>Paper</span>
              <span>Scissors</span>
            </h1>
            <div className="score-container">
              <h3>score</h3>
              <p id="score">0
              </p></div>
          </header>
          <main>
            <button className="btn-circle btn-paper">
              <span className="wrapper">
                <img src="./images/icon-paper.svg" alt="paper-icon" /></span></button>
            <button className="btn-circle btn-scissors"><span className="wrapper"><img src="./images/icon-rock.svg" alt="rock-icon" /></span></button>
            <button className="btn-circle btn-rock">
              <span className="wrapper"><img src="./images/icon-scissors.svg" alt="scissors" />
              </span>
            </button>
          </main>
          <button className="btn-rules"> Rules</button>
        </div>
      );
    }
  });