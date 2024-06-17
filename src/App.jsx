import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (data) => {
    setProjectState((prevState) => {
      const newTask = {
        text: data,
        projectId: prevState.projectId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: id,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
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

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
        projects: prevState.projects.filter((project) => {
          return project.id !== prevState.projectId;
        }),
      };
    });
  };

  const projectSelected = projectState.projects.find(
    (project) => project.id === projectState.projectId
  );

  let content = (
    <SelectedProject
      project={projectSelected}
      tasks={projectState.tasks}
      onAddTask={handleAddTask}
      onDelete={handleDeleteProject}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.projectId === null) {
    content = (
      <NewProject
        onStartAddProject={handleAddProject}
        onCancelAddProject={handleCancelAddProject}
      />
    );
  } else if (projectState.projectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        onHandleSelectProject={handleSelectProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
