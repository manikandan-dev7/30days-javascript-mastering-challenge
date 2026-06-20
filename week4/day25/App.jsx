import UserCard from "./UserCard.jsx";
import ProjectList from "./ProjectList.jsx"
const App = () => {
  const myProjects = [
    "QR Code Generator",
    "Netflix Clone",
    "E-commerce Platform",
  ];
  return <ProjectList Projects = {myProjects}/>;
};
export default App