## Introduction:

Output bindings in Angular facilitate communication from child components back to parent components by emitting events. This memo aims to explain the purpose and usage of output bindings to enhance our team's understanding and efficiency in Angular development.

---

## Output Bindings:

1. **Definition:**
    - Output bindings allow a child component to send data or events to its parent component. This is achieved using the `@Output` decorator along with Angular's `EventEmitter` class.
    
2. **Usage:**
    - **Child Component:**
        
        ```typescript
        import { Component, Output, EventEmitter } from '@angular/core';
        
        @Component({   
	        selector: 'app-child',   
	        template: `<button (click)="sendMessage()">Send Message</button>` 
	    }) 
	    
	    export class ChildComponent {   
		    @Output() messageEvent = new EventEmitter<string>();    
		    
		    sendMessage() {     
			    this.messageEvent.emit('Hello from Child');  
			} 
		}
		```
    - **Parent Component:**

        ```html
        <app-child (messageEvent)="receiveMessage($event)"></app-child>
        ```
        
        ```typescript
        export class ParentComponent {   
	        receiveMessage(message: string) {     
		        console.log(message); // "Hello from Child"   
		    } 
		}
	```
        
3. **Purpose:**
    - Facilitates communication from child to parent components.
    - Allows child components to notify parent components of events or changes.
    - Promotes interaction and data sharing between different parts of the application.

**Example:**

```typescript
// child.component.ts 
import { Component, Output, EventEmitter } from '@angular/core';  

@Component({   
	selector: 'app-child',   
	template: `<button (click)="notifyParent()">Click Me</button>` 
}) 

export class ChildComponent {   
	@Output() notify = new EventEmitter<string>();    
	
	notifyParent() {     
		this.notify.emit('Notification from Child');   
	} 
}  

// parent.component.html 
<app-child (notify)="handleNotification($event)"></app-child>  

// parent.component.ts 
export class ParentComponent {   
	handleNotification(message: string) {     
		console.log(message); // "Notification from Child"   
	} 
}
```

---

## Conclusion:

Output bindings are essential for child-to-parent communication within Angular applications. By understanding and effectively using `@Output` and `EventEmitter`, we can create more interactive and responsive components that enhance the overall functionality of our applications.

> Used ChatGPT : make a memo on @Output