import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from "@xarc/react";
import { Header, Footer, SideNav } from "@teleoffice/ui";
import "bootstrap/dist/css/bootstrap.min.css";
import electrodePng from "../../static/electrode.png";
import { copyRightMessage } from "../info";

const Layout = (props) => {
  import('bootstrap/dist/js/bootstrap.bundle');
  return (
    <>
      <header className="p-3">
        <Header />
      </header>
      <main className="row">
        <aside className="col-auto">
          <SideNav />
        </aside>
        <section className="col">Container Component here</section>
      </main>
      <footer className="p-3">
        <Footer logoApp={electrodePng} legalMsg={copyRightMessage} />
      </footer>
    </>
  );
};

export const subapp: ReactSubApp = {
  Component: Layout,
};
