import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuHeader = () => {
  const navigate = useNavigate();
  let addInfo="param_diff_page"
  let path=`/param/${addInfo}`
  return (
    <div>
      <button>
        <Link to="/hm">Go to Page One</Link>
      </button>
      <button>
        <Link to="home">Page Two</Link>
      </button>
      <button>
        <Link to="/home/page">Page Three</Link>
      </button>
      <button>
        <Link to={path}>Page With Param</Link>
      </button>
      <button onClick={() => navigate("/param/this@is a new message")}>Navigate</button>
    </div>
  );
};

export default MenuHeader;
