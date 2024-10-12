import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-votes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './votes.component.html',
  styleUrl: './votes.component.css'
})
export class VotesComponent {
  votes = 0

  addVote(){
    this.votes += 1
  }

  downVote(){
    this.votes -= 1
  }

}
