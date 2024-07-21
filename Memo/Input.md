## Introduction:

Input bindings in Angular allow for effective communication between parent and child components by passing data from the parent to the child. This memo aims to explain the purpose and usage of input bindings to enhance our team's understanding and efficiency in Angular development.

---
## Input Bindings:

1. **Definition:**
    - Input bindings allow a parent component to pass data to a child component. This is achieved using the `@Input` decorator.
    
2. **Usage:**
    - **Child Component:**
        
        ```typescript
	import { Component, Input } from '@angular/core';  
	
	@Component({   
		selector: 'app-child',   
		template: `<p>{{ data }}</p>` 
	}) 
	
	export class ChildComponent {   
		@Input() data!: string; }
		```
        
    - **Parent Component:**
        
        ```html
        <app-child [data]="parentData"></app-child>
        ```
        
3. **Purpose:**
    
    - Enables communication between parent and child components.
    - Allows the parent component to pass dynamic data to the child component.
    - Promotes reusable and modular component design by decoupling data handling from the child component.

**Example:**

```typescript
// parent.component.ts 
export class ParentComponent {   
	parentData = 'Data from Parent'; 
}  

// parent.component.html 
<app-child [data]="parentData"></app-child>  

// child.component.ts 
@Component({   
	selector: 'app-child',   
	template: `<p>{{ data }}</p>` 
}) 

export class ChildComponent {   
	@Input() data!: string; 
}
```

---
## Conclusion:

Input bindings are essential for passing data between components, promoting a clear and efficient communication structure within Angular applications. Mastery of input bindings will lead to more reusable and modular components.

> Used ChatGPT : make a memo on @Input()