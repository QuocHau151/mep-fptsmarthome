import React from "react";
import Top_Nav from "./top-nav/page";
import Nav from "./nav/page";
import { Bot } from "lucide-react";
import Bottom_Nav from "./bottom-nav/page";

export default function Header() {
  return (
    <div>
      {/* <Top_Nav /> */}
      <Nav />
      <Bottom_Nav />
    </div>
  );
}
