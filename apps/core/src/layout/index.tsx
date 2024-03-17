import { React, ReactSubApp } from "@xarc/react";
import { reactRouterFeature, Route, Routes } from "@xarc/react-router";
import { Header, Footer, SideNav } from "@teleoffice/ui";
import "bootstrap/dist/css/bootstrap.min.css";
import electrodePng from "../../static/electrode.png";
import { copyRightMessage } from "../info";

const Layout = (props) => {
  import("bootstrap/dist/js/bootstrap.bundle");
  return (
    <>
      <header className="p-3">
        <Header />
      </header>
      <main className="row">
        <aside className="col-auto">
          <SideNav />
        </aside>
        <section className="col">
          <Routes>
            <Route path="/" element={<div>Home subapp</div>} />
            <Route path="/dashboard" element={<div>Dashboard subapp</div>} />
            <Route path="/orders" element={<div>Orders subapp</div>} />
            <Route path="/products" element={<div>Products subapp</div>} />
            <Route path="/customers" element={<div>Customers subapp</div>} />
          </Routes>
        </section>
      </main>
      <footer className="p-3">
        <Footer logoApp={electrodePng} legalMsg={copyRightMessage} />
      </footer>
    </>
  );
};

export const subapp: ReactSubApp = {
  Component: Layout,
  wantFeatures: [reactRouterFeature({ React, history: true })],
};
