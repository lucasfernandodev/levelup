import { StudentRepository } from "../../application/repositories/studentRepository";
import { Student } from "../../domain/entities/student";

export class InMemoryStudentRepository implements StudentRepository{
  public items: Student[] = [

  ]
  
  async findById(id: string): Promise<Student | null>{
    const student =  this.items.find(student => student.id === id);


    if(!student){
      return null
    };

    return student;

  }
}