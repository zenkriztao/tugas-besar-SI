import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#0F0F53", color: "#FFFFFF" }}
        className="z-10 py-6 px-4 md:px-12 text-center font-semibold"
      >
       Kelompok 1 © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
