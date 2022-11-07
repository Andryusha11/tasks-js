const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const splitFullName = fullName.split(' ');
    this.firstName = splitFullName[0];
    this.lastName = splitFullName[1];
  },
};
