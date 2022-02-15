import axios from 'axios';
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom';
export type TypeRepos = {
  full_name: string;
  description: string;
};

function Repos() {
 
  const url = "http://api.github.com/users/lucasfernandodev/repos";
  const {data : repositories, isFetching} = useQuery<TypeRepos[]>("repos", async () => {
    const response = await axios.get(url);

    return response.data
  },{
    staleTime: 1000 * 60, // 1 minuto
  })

  return (
    <ul>
      <li>
        {isFetching && <p>carregando...</p>}
      </li>

      {repositories && repositories?.map((repo) => (
          <li key={repo.full_name} >
            <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link><br />
            {repo.description}
          </li>
        ))}
    </ul>
  );
}

export default Repos;
