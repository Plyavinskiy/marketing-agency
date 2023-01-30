import React from "react";

import Layout from "../../components/Layout";
import Address from "./Address";

function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-2 px-32">
        <Address />
      </div>
    </Layout>
  );
}

export default Contact;
