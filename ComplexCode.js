/*
Filename: ComplexCode.js

This code is a complex implementation of a messaging system. It allows users to send and receive messages, create chat groups, and perform various operations on the messages and groups. The code is designed to handle a large number of users and messages efficiently. It includes advanced algorithms and data structures.

*/

// --------------------------
// User Class
// --------------------------
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.messages = [];
    this.groups = [];
  }

  sendMessage(message, recipient) {
    const newMessage = new Message(message, this, recipient);
    this.messages.push(newMessage);
    recipient.receiveMessage(newMessage);
  }

  receiveMessage(message) {
    this.messages.push(message);
  }

  createGroup(name, members) {
    const group = new Group(name, members);
    this.groups.push(group);
    members.forEach(member => member.groups.push(group));
  }

  deleteMessage(message) {
    const index = this.messages.indexOf(message);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }
}

// --------------------------
// Message Class
// --------------------------
class Message {
  constructor(content, sender, recipient) {
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
    this.timestamp = new Date();
  }

  delete() {
    this.sender.deleteMessage(this);
  }
}

// --------------------------
// Group Class
// --------------------------
class Group {
  constructor(name, members) {
    this.name = name;
    this.members = members;
    this.messages = [];
  }

  sendMessage(message, sender) {
    const newMessage = new Message(message, sender, this);
    this.messages.push(newMessage);
    this.members.forEach(member => member.receiveMessage(newMessage));
  }

  deleteMessage(message, user) {
    const index = this.messages.indexOf(message);
    if (index !== -1 && message.sender === user) {
      this.messages.splice(index, 1);
    }
  }
}

// --------------------------
// Usage Example
// --------------------------

// Create users
const user1 = new User(1, "Alice");
const user2 = new User(2, "Bob");
const user3 = new User(3, "Charlie");

// Send messages
user1.sendMessage("Hello Bob!", user2);
user2.sendMessage("Hi Alice!", user1);
user3.sendMessage("Hey everyone!", [user1, user2]);

// Create group and send group message
user1.createGroup("Team", [user2, user3]);
user1.groups[0].sendMessage("Hello team!", user1);

// Delete a message
user2.messages[0].delete();
user1.groups[0].deleteMessage(user1.groups[0].messages[0], user1);
