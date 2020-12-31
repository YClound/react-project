import React, { Suspense } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { CacheSwitch, CacheRoute } from "react-router-cache-route";

import LoadingPage from "../components/loadingPage";
import config from "./config";
import { fakeAuth } from "../utils/fakeAuth";

const renderRoutes = (routes) => {
  if (!Array.isArray(routes)) {
    return null;
  }

  return (
    <CacheSwitch>
      {routes.map((route, index) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}
            />
          );
        }
        const RouteCom = route.cache ? CacheRoute : Route;

        return (
          <RouteCom
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              const renderChildRoutes = renderRoutes(route.children);
              if (route.component) {
                return (
                  <Suspense fallback={<LoadingPage />}>
                    {fakeAuth.authenticate() ||
                    route.path.indexOf("user") > -1 ? (
                      <route.component route={route} {...props}>
                        {renderChildRoutes}
                      </route.component>
                    ) : (
                      <Redirect
                        to={{
                          pathname: "/user/login",
                          state: { from: props.location },
                        }}
                      />
                    )}
                  </Suspense>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </CacheSwitch>
  );
};

const AddRouter = () => {
  return <Router>{renderRoutes(config)}</Router>;
};

export default AddRouter;
