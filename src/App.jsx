import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';

function App() {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log('Projects: ', projectState.projects);

  let content = <NoProjectSelected />;

  if (projectState.projectId === null) {
    content = <NewProject onSubmit={handleAddProject} />;
  } else if (projectState.projectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
