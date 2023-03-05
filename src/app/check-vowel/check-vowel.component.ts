import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-vowel',
  templateUrl: './check-vowel.component.html',
  styleUrls: ['./check-vowel.component.scss']
})
export class CheckVowelComponent implements OnInit {
  vowelsList:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
allVowels(val:string)
{this.vowelsList=[]
  for(let i=0;i<val.length;i++)
{
    if(val[i]=='a' || val[i]=='i' ||val[i]=='e' ||val[i]=='o' ||val[i]=='u')
    this.vowelsList.push(val[i])
}
}
}
