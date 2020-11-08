import { Component } from "@angular/core";
import { Schema } from "@dashjoin/json-schema-form";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  /**
   * This JSON schema defines the form
   *
   * Examples: https://dashjoin.github.io/
   * Documentation: https://github.com/dashjoin/json-schema-form
   */
  schema: Schema = {
    type: "array",
    items: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", description: "Please enter your name" },
        bday: { type: "string", widget: "date", dateFormat: "yyyy-MM-dd" },
        hobbies: { type: "array", title: 'Hobbies', layout: 'chips', items: {type: 'string'}, style: {width: '400px'} }
      }
    }
  };

  /**
   * preset form value
   */
  value: any = [
    {
      name: "Joe",
      hobbies: ['swimming', 'reading']
    }
  ];

  /**
   * validation
   */
  error: string;

  /**
   * pretty print to show the current form data
   */
  print(): string {
    return JSON.stringify(this.value, null, 2);
  }
}
