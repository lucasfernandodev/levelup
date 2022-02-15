import { Submission } from "../../domain/entities/submission"
import { ChallengeRepository } from "../repositories/ChallengesRepository";
import { StudentRepository } from "../repositories/studentRepository";

type CreateChallengeSubmissionProps = {
  studentId: string,
  challengeId: string,
}


export class CreateChallengeSubmission{
  constructor(
    private studentsRepository: StudentRepository,
    private challengesRepository: ChallengeRepository

  ){}


  async execute({studentId, challengeId} : CreateChallengeSubmissionProps){

    const student = await this.studentsRepository.findById(studentId);

    if(!student){
      throw new Error("Students doe not exists");
    }


    const challenge = await this.challengesRepository.findById(challengeId);

    if(!challenge){
      throw new Error("Challenge doe not exists");
    }

    

    const submission = Submission.create({
      studentId,
      challengeId,
    });

    return submission;
  }
}