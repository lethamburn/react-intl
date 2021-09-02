import logo from "./logo.svg";
import "./App.css";
import React, { useContext } from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { Context } from "./components/Wrapper";
function App(props) {
  const context = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="Edit the  and save to reload"
            values={{
              fileName: "src/App.js",
              code: (word) => <strong>{word}</strong>,
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.content" defaultMessage="Learn React" />
        </a>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Internationalization for Upgraders"
          values={{ userName: "Peter Parker" }}
        />
        <br />
        <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </header>
    </div>
  );
}

export default App;
