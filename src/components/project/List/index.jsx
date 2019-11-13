

import React from "react";
import Detail from "../Detail";

const List = props => {
  const { projects } = props;
  return (
    <div>
      {projects.map(project => 
        <Detail project={project} />
        )}
    </div>
  );
};

export default List;
