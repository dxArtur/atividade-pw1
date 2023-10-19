import { v4 as uuidv4 } from 'uuid';
import { Technology } from './TechInterface';

export class User {
  public id: string;
  public name: string;
  public username: string;
  public technologies: Technology[];

  constructor(name: string, username: string) {
    this.id = uuidv4();
    this.name = name;
    this.username = username;
    this.technologies = [];
  }
}