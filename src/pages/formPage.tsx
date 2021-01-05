import { useRouteMatch, Route, Switch } from "react-router-dom";
import { CollectionDataTable } from "../components/CollectionDataTable";
import { CompletedForm } from "../components/CompletedForm";
import { Form } from "../components/Form";

type Props = {
  collection: string;
  formFields: any[];
  label: string;
};

export const FormPage = ({ collection, formFields, label }: Props) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/new`}>
        <Form
          heading={label}
          formFieldsArray={formFields}
          formName={collection}
        />
      </Route>
      <Route path={`${match.url}/:id`}>
        <CompletedForm
          heading={label}
          collection={collection}
          formFieldsArray={formFields}
        />
      </Route>
      <Route path={`${match.url}`}>
        <CollectionDataTable collection={collection} />
      </Route>
    </Switch>
  );
};
