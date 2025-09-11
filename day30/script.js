// Today’s challenge continues with Linked Lists 

// Problem Statement

// Implement the following operations on a Singly Linked List:
// ⿡ Insert a node at the end
// ⿢ Insert a node at the beginning
// ⿣ Delete a node from the beginning
// ⿤ Delete a node from the end

// => Input Example:
// Insert 10 at end  
// Insert 20 at end  
// Insert 5 at beginning  
// Delete node from end  
// Delete node from beginning  
// Print Linked List

// ⚡ Hint:

// Take care when the list is empty.
// For deletion at end, traverse till the second-last node.
// Always check boundary conditions.
class Node{
    constructor(data){
        this.data=data;
        this.next=null;

    }
}
class linkedList{
    constructor(data){
       this.head=null;
        this.tail=null;
    }
    insertAtHead(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            
        }else{
            newNode.next=this.head;
              this.head=newNode;

        }
        this.printList()

    }
    insertAtEnd(data){
        let newNode=new Node(data);
        if(!this.tail){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.printList()
    }
   
    deleteAtHead(data){
         if(!this.head){
            return
        }
        this.head=this.head.next;
        if(this.head){
            this.tail=null;
        }
        this.printList()
    }
    deleteAtEnd(data){
         if(!this.head){
            return
        }
        if(!this.head.next){
            this.head=null;
            return;
            
        }
        let current =this.head;
        while(current.next.next){
            current=current.next;

        }
        current.next=null;
        this.printList()

    }
    printList(data){
        let current=this.head;
        let result="";
        while(current){
            result+=current.data+"->"
            current=current.next;
        }
        console.log(result+"null");
    }
}

let list = new linkedList;
list.insertAtHead(1)
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(4)
list.insertAtEnd(5)
list.deleteAtEnd()
list.deleteAtHead()
