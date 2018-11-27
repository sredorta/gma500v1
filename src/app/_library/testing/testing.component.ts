import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {SelectItem} from 'primeng/api';
import {ColorPickerModule} from 'primeng/colorpicker';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {GMapModule} from 'primeng/gmap';
import {CKEditorModule} from 'ng2-ckeditor';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  text :string ="test";
  ckeConfig : any = null;
  @ViewChild("ckeditor") ckeditor: any;
  constructor() { }

  ngOnInit() {
    this.ckeConfig = {
      height: 400,
      language: "en",
      allowedContent: true,
      toolbar: [
          { name: "clipboard", items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"] },
          { name: "links", items: ["Link", "Unlink", "Anchor"] },
          { name: "insert", items: ["Table", "HorizontalRule", "SpecialChar", "Iframe", "imageExplorer"] }
        ]
      };
  }
  openImageExplorer($event: any) {
    console.log("Need to open gallery !");
    //We should now open the gallery select a picture and when we accept then:


    try
    {
        let link = this.ckeditor.instance.document.createElement("img");
        link.setAttribute("alt", "Image");
        link.setAttribute("src", "http://localhost:8000/storage/defaults/user-default.jpg");

        this.ckeditor.instance.insertElement(link);
    }
    catch(error)
    {
        console.log((<Error>error).message);
    }   
  }
}
