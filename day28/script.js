// 📌 Topic: Linked List

// You are given a singly linked list representing roll numbers of students. Implement the following rules:

// Insert a new student roll number at any given position.

// If position = 1 → insert at head.

// If position = length+1 → insert at tail.

// Otherwise → insert at that middle position.

// If the given position is invalid (<1 or > length+1), print "Invalid Position".

// If the roll number already exists, print "Duplicate Entry Not Allowed".

// After successful insertion, print the linked list.

// Example:
// Input: 1 -> 2 -> 4 -> 5, Insert 3 at position 3
// Output:
// 1 -> 2 -> 3 -> 4 -> 5

class node{
    constructor(data){
       this.data=data;
       this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insertAtPosition(data,pos){
        if(pos<1){
            console.log("invalid position");
            return;
        }
        let temp=this.head;
        while(temp!==null){
            if(temp.data===data){
                console.log("duplicate entries not allowed");
                return;
            }
            temp=temp.next;
        }
        const newNode=new node(data);
        if(pos===1){
            newNode.next=this.head;
            this.head=newNode;
            if(this.tail===null){
                this.tail=newNode;
            }
            return;
        }
        let current=this.head;
        let count=1;
        while(current!==null&& count<pos-1){
            current=current.next;
            count++
        }
        if(current===null){
            console.log("invalid position");
            return;
        }
        newNode.next=current.next;
        current.next=newNode;
        if(newNode.next===null){
            this.tail=newNode;
        }
    }
    printList(){
        let result="";
        let temp=this.head;
        while(temp!==null){
            result+=temp.data+"->";
            temp=temp.next;
        }
        result+="null";
        console.log(result);
    }
}

let list=new LinkedList();

list.insertAtPosition(1,1);
list.insertAtPosition(2, 2);   // 1 -> 2 -> null
list.insertAtPosition(4, 3);   // 1 -> 2 -> 4 -> null
list.insertAtPosition(5, 4);   // 1 -> 2 -> 4 -> 5 -> null
list.printList();
list.insertAtPosition(3, 3);   // 1 -> 2 -> 3 -> 4 -> 5 -> null
list.insertAtPosition(5, 2);   // Duplicate Entry Not Allowed
list.insertAtPosition(10, 10); // Invalid Position
list.printList();
