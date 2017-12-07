import { Component, OnInit } from '@angular/core';

declare const ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  languages: string[] = ["Java", "Python"];
  selectedLanguage: string = "Python";

  defaultContent = {
    'Java': `function foo(items) {
      var x = "All this is syntax highlighted";
      return x;
    }`,
    'Python': `function foo(items) {
      return x;
    }`
  }

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.editor.getSession().setMode("ace/mode/java");

    this.editor.setValue(this.defaultContent["Java"])
  }

}
