import { useEffect, useState } from "react";

type Repos = {
  full_name: string;
  description: string;
};

function App() {
  const [repos, setRepos] = useState<Repos[]>([]);

  useEffect(() => {
    fetch("http://api.github.com/users/lucasfernandodev/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <>
      {repos &&
        repos?.map((repos) => (
          <li key={repos.full_name}>
            {repos.full_name} <br />
            {repos.description}
          </li>
        ))}
    </>
  );
}

export default App;
