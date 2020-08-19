import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ROUTES } from "constants/navigation";

import store from "store";

import { LayoutApp, ProgressLoader } from "components/ui-own";

import ThemeProvider from "context/theme.context";
import SnackbarProvider from "context/notification.context";

// Private

// Public
import Home from "pages/public/home/home.route";

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SnackbarProvider>
          <Router>
            <LayoutApp>
              <Suspense fallback={<ProgressLoader />}>
                <Route exact path={ROUTES.HOME} component={Home} />
              </Suspense>
            </LayoutApp>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
