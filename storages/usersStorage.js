// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
    constructor() {
      this.storage = {};
      this.id = 0;
    }
  
    addUser({ name, role, status, promoted, rating }) {
      const id = this.id;
      this.storage[id] = { id, name, role, status, promoted, rating };
      this.id++;
    }
  
    getUsers() {
      return Object.values(this.storage);
    }
  
    getUser(id) {
      return this.storage[id];
    }
  
    updateUser(id, {  name, role, status, promoted, rating }) {
      this.storage[id] = { id,  name, role, status, promoted, rating };
    }
  
    deleteUser(id) {
      delete this.storage[id];
    }
  }
  // Rather than exporting the class, we can export an instance of the class by instantiating it.
  // This ensures only one instance of this class can exist, also known as the "singleton" pattern.
  module.exports = new UsersStorage();
  