import { Component } from '@angular/core';
import { Command } from '../models/command';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent {

  command: Command = {
    logo:"https://logosandtypes.com/wp-content/uploads/2024/01/angular.svg",
    id: 1,
    framework: 'Angular',
    content: 'ng new appointment-app',
    flags: ['options', 'project_name'],
    syntax: new Map<string, string[]>([['options', ['standalone', 'create']], ['project_name', ['project']]]),
    purpose: 'Create new application'
  };

}
