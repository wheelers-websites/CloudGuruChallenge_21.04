import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Skill, SkillLevel} from "./skill.model";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  get(): Observable<Skill[]> {
    return of(this.load());
  }

  getById(id: number): Skill {
    return Object.assign({}, this.load().find(s => s.id == id));
  }

  private load(): Skill[] {

    const data: Skill[] = [
      {
        id: 1,
        level: SkillLevel.Master,
        _filterByProjectIds: [],
        skill: 'Auto Scaling Group (ASG)',
        type: 'Amazon Web Services (AWS)',
      },
      {
        id: 2,
        level: SkillLevel.Expert,
        _filterByProjectIds: [],
        skill: 'Elastic Compute Cloud (EC2)',
        type: 'Amazon Web Services (AWS)'
      },
      {
        id: 3,
        level: SkillLevel.Master,
        _filterByProjectIds: ['project.1'],
        skill: 'Lambda',
        type: 'Amazon Web Services (AWS)'
      },
      {
        id: 4,
        level: SkillLevel.Master,
        _filterByProjectIds: ['project.1'],
        skill: 'Simple Storage Service (S3)',
        type: 'Amazon Web Services (AWS)'
      },
      {
        id: 5,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'CosmosDB',
        type: 'Microsoft Azure'
      },
      {
        id: 6,
        level: SkillLevel.Master,
        _filterByProjectIds: [],
        skill: 'Java',
        type: 'Programming Language'
      },
      {
        id: 7,
        level: SkillLevel.Proficient,
        _filterByProjectIds: ['project.1'],
        skill: 'Python',
        type: 'Programming Language'
      },
      {
        id: 8,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'Ruby',
        type: 'Programming Language'
      },
      {
        id: 9,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'C#',
        type: 'Programming Language'
      },
      {
        id: 10,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'PHP',
        type: 'Programming Language'
      },
      {
        id: 11,
        level: SkillLevel.Competent,
        _filterByProjectIds: [],
        skill: 'Angular',
        type: 'Web Framework'
      },
      {
        id: 12,
        level: SkillLevel.Competent,
        _filterByProjectIds: [],
        skill: 'React',
        type: 'Web Framework'
      },
      {
        id: 13,
        level: SkillLevel.Competent,
        _filterByProjectIds: [],
        skill: 'JavaScript',
        type: 'Programming Language'
      },
      {
        id: 14,
        level: SkillLevel.Competent,
        _filterByProjectIds: [],
        skill: 'TypeScript',
        type: 'Programming Language'
      },
      {
        id: 15,
        level: SkillLevel.Competent,
        _filterByProjectIds: [],
        skill: 'Node.js',
        type: 'Programming Language'
      },
      {
        id: 16,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'FrontDoor',
        type: 'Microsoft Azure'
      },
      {
        id: 17,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'App Service',
        type: 'Microsoft Azure'
      },
      {
        id: 18,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'Blob',
        type: 'Microsoft Azure'
      },
      {
        id: 18,
        level: SkillLevel.Novice,
        _filterByProjectIds: [],
        skill: 'Pipelines',
        type: 'Microsoft Azure DevOps'
      },
      {
        id: 19,
        level: SkillLevel.Expert,
        _filterByProjectIds: [],
        skill: 'Virtual Private Cloud (VPC)',
        type: 'Amazon Web Services (AWS)'
      },
      {
        id: 20,
        level: SkillLevel.Expert,
        _filterByProjectIds: ['project.1'],
        skill: 'Event Bridge',
        type: 'Amazon Web Services (AWS)'
      },
      {
        id: 21,
        level: SkillLevel.Proficient,
        _filterByProjectIds: ['project.1'],
        skill: 'DynamoDB',
        type: 'Amazon Web Services (AWS)'
      },
      {
        id: 22,
        level: SkillLevel.Master,
        _filterByProjectIds: ['project.1'],
        skill: 'Simple Notification Service (SNS)',
        type: 'Amazon Web Services (AWS)'
      },
      {
        id: 23,
        level: SkillLevel.Competent,
        _filterByProjectIds: ['project.1'],
        skill: 'Quick Sight',
        type: 'Amazon Web Services (AWS)'
      }
    ];
    return data.sort((n1, n2) => {
      const c1 = SkillService.compareType(n1, n2, true);
      const c2 = SkillService.compareSkill(n1, n2, true);
      return c1 == 0 ? c2 : c1;
    })
  }

  private static compareSkill(n1: Skill, n2: Skill, asc: boolean) : number {
    return (n1.skill == n2.skill ? 0 : n1.skill > n2.skill ? 1 : -1) * (asc ? 1 : -1);
  }

  private static compareType(n1: Skill, n2: Skill, asc: boolean) : number {
    return (n1.type == n2.type ? 0 : n1.type > n2.type ? 1 : -1) * (asc ? 1 : -1);
  }
}
