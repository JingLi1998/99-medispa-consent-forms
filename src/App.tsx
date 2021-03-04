import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { useFirebaseAuth } from "./hooks/useFirebaseAuth";
import { Spinner } from "./components/ui/Spinner";
import { Login } from "./pages/login";
import { Route, Switch } from "react-router-dom";
import { Logo } from "./components/Logo";
import { Home } from "./pages/home";
import { routes } from "./routes";
import { FormPage } from "./pages/formPage";
import { CreateForm } from "./pages/createForm";

const ApplicationWrapper = styled.div`
  width: 768px;
  padding: 1.5rem;
  margin: 0 auto;
`;

const Application = styled.div`
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  min-height: 800px;
  border-radius: 10px;
  padding: 3rem;
  margin: auto;
`;

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogout = useCallback(() => setIsLoggedIn(false), []);

  useFirebaseAuth(setIsLoggedIn, setIsLoading);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <ApplicationWrapper>
        <Application>
          <Logo />
          {isLoading ? (
            <Spinner />
          ) : (
            <Switch>
              {routes.map((route) => (
                <Route path={route.to}>
                  <FormPage
                    collection={route.collection}
                    formFields={route.formFields}
                    label={route.label}
                  />
                </Route>
              ))}
              <Route path="/create-form">
                <CreateForm />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          )}
        </Application>
      </ApplicationWrapper>
    </>
  );
};
