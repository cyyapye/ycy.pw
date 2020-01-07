import React from 'react';
import { Link } from 'gatsby';
import "tachyons";


export default props => (
  <div className="bg-washed-red ph2 pv5 flex flex-column justify-center items-center">
    <h1 className="dark-gray display fw4 f1-l f2 tc">{props.title}</h1>
  </div>
)
