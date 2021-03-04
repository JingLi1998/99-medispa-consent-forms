import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CreateFormGenerator } from "../components/CreateFormGenerator";
import { CreateFormPreview } from "../components/CreateFormPreview";

export const CreateForm = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/preview`}>
        <CreateFormPreview />
      </Route>
      <Route path={`${match.url}`}>
        <CreateFormGenerator />
      </Route>
    </Switch>
  );
};
