import { ChallengeRepository } from "../../application/repositories/ChallengesRepository";
import { Challenge } from "../../domain/entities/challenge";

export class InMemoryChallengeRepository implements ChallengeRepository{
  public items: Challenge[] = [

  ]
  
  async findById(id: string): Promise<Challenge | null>{
    const challenge =  this.items.find(Challenge => Challenge.id === id);


    if(!challenge){
      return null
    };

    return challenge;

  }
}