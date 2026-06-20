const ProjectList = ({Projects}) => {
  return (
    <ul>
      {Projects.map((Project, index) => (
        <li key={index}>{Project}</li>
      ))}
    </ul>
  );
};

export default ProjectList;