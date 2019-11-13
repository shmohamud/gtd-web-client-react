import React, { useState } from "react";

function ProjectsHook() {
  const [selected, setSelected] = useState(false);
  const selectProject = project => {
    setSelected(project);
  }

  return {
    selectProject
  };
}

export default ProjectsHook;
