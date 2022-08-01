import React from "react";
import { App, Page, Navbar, Block } from "konsta/react";

export default function IOS() {
  return (
    <App theme="ios">
      <Page>
        <Navbar title="My App" />
        <Block>
          <p>Here comes my app</p>
        </Block>
      </Page>
    </App>
  );
}
