//put your code here
export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const func = user.getFullName();

func;
