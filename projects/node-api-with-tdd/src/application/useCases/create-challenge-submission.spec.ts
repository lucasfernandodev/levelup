import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengeRepository } from "../../test/repositories/in-memory-challenge-repository";
import { InMemoryStudentRepository } from "../../test/repositories/in-memory-student-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission useCase', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentRepository();
    const challengeRepository = new InMemoryChallengeRepository();

    const student = Student.create({
      name: "Lucas Fernando",
      email: "does@example.com",
    });

    const challenge = Challenge.create({
      instructionUrl: "http://teste.com",
      title: "Aprender com facilidade"
    })

    studentsRepository.items.push(student);
    challengeRepository.items.push(challenge);


    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengeRepository
    );

    const response = await sut.execute({
      studentId : student.id,
      challengeId: challenge.id
    })

    expect(response).toBeTruthy();
  });
});