import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Home from "./pages/Home";
import NewItem from "./pages/NewItem";
import TeamList from "./components/TeamList";
import PlayerList from "./components/PlayerList";
import Contrat from "./components/Contrat";
import DateSelector from "./components/DateSelector";

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact();

/* Theme variables */
import "./theme/variables.css";
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/date" component={DateSelector} />
          <Route path="/TeamList/:date" component={TeamList} />
          <Route path="/contrat/:teamId/date/:date" component={Contrat} />
          {/* <Route path="/PlayerList/:teamId/date/:date" component={PlayerList} /> */}
          <Redirect exact from="/" to="/date" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
