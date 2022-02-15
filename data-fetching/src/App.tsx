import { useFetch } from "./hooks/useFetch";

type Repos = {
  full_name: string;
  description: string;
};

function App() {
 
  const {data : repositories} = useFetch<Repos[]>("http://api.github.com/users/lucasfernandodev/repos")

  return (
    <>
      {repositories && repositories?.map((repo) => (
          <li key={repo.full_name}>
            {repo.full_name} <br />
            {repo.description}
          </li>
        ))}
    </>
  );
}

export default App;
