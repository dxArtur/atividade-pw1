import { v4 as uuidv4 } from 'uuid';

export class Technology {
  public id: string;
  public title: string;
  public studied: boolean;
  public deadline: Date;
  public created_at: Date;

  constructor(title: string, deadline: string) {
    this.id = uuidv4();
    this.title = title;
    this.studied = false;
    this.deadline = new Date(deadline);
    this.created_at = new Date();
  }
}