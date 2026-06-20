const Welcome = () => {
  return <h1>Welcome to the React world, Mani!</h1>;
};
export default Welcome;

const UserCard = ({name, role}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>role: {role}</p>
    </div>
  );
};

export default UserCard;