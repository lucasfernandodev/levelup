import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import {TypeRepos} from "../pages/Repos";

export function Repo (){
  const params = useParams();
  const currentRepository = params['*'] as string;

  const queryClient = useQueryClient()

  function handleChangeRepository(){
    queryClient.invalidateQueries(['repos']);

    const previosRepos = queryClient.getQueryData<TypeRepos[]>('repos');

    if(previosRepos){

      const nextRepost = previosRepos.map(repo => {
        if(repo.full_name === currentRepository){
          return {...repo, description: 'testando'}
        }else{
          return repo;
        }
      })

      queryClient.setQueriesData('repos', nextRepost);
    }

    }

  return (
    <>
    <h1 >{currentRepository}</h1>
    <button onClick={handleChangeRepository}>Atualizar</button>
    </>
  )
};