//Day-25

// Problem Statement:
// Today’s task is to implement insertion operations in a Singly Linked List.
// You need to write functions for the following:

// Insert at Head – Add a new node at the beginning of the linked list.

// Insert at Tail – Add a new node at the end of the linked list.

// Insert at Position – Add a new node at a given position (index-based).

// 📥 Input / Operations:

// Start with an empty linked list.

// Perform the above insert operations.

// Print the list after each operation.

// 📤 Output:

// The final linked list after all operations.


class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null,
        this.tail=null
    }
    insertAtHead(data){
        let newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
        console.log(`insert ${data} at head ->`+this.printList());
    }
    insertAttail(data){
        let newNode=new Node(data);
        let current=this.head
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
        this.tail=newNode;
        console.log(`insert ${data} at tail ->`+this.printList());
    }
    insertAtAnyPosition(data,position){
        let newNode=new Node(data);
        if(position==0){
            newNode.next=this.head;
            this.head=newNode;
            console.log(`Insert ${data} at position ${position + 1}`+this.printList());
        }
        let current=this.head;
        for(let i=0;current!==null&&i<position-1;i++){
            current=current.next;
        }
        if(current==null){
            console.log('position out of range');
        }
        newNode.next=current.next;
        current.next=newNode;
        if(newNode==null){
            this.tail=newNode;
        }
        console.log(`Insert ${data} at position ${position+1} ->` +this.printList());
    }
    printList(){
        let current=this.head;
        let result='';
        while(current){
            result+=current.data+" ->";
            current=current.next;
        }
        return "List:" + result + "null";
    }
}let ll=new Linkedlist;
ll.insertAtHead(27);
ll.insertAtHead(23);
ll.insertAttail(4);
ll.insertAtAnyPosition(19,2);
//output:
// insert 27 at head ->List:27 ->null
// insert 23 at head ->List:23 ->27 ->null
// insert 4 at tail ->List:23 ->27 ->4 ->null
// Insert 19 at position 3 ->List:23 ->27 ->19 ->4 ->null
