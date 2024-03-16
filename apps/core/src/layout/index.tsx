import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from "@xarc/react";
import { Header } from "@teleoffice/ui";
import "bootstrap/dist/css/bootstrap.min.css";
import electrodePng from "../../static/electrode.png";
import { message } from "./message";

const Layout = (props) => {
  import("bootstrap/dist/js/bootstrap.bundle");
  return (
    <>
      <header className="p-3">
        <Header />
      </header>
      <main>
        <aside>SideNav Component here</aside>
        <section>Container Component here</section>
      </main>
      <footer>Footer Component here</footer>
    </>
  );
};

export const subapp: ReactSubApp = {
  Component: Layout,
};
