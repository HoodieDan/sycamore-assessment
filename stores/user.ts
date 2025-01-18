import { defineStore } from 'pinia'

interface User {
  firstName: string
  lastName: string
  email: string
  phoneNumber: number
  state: string
  status: boolean
  customerDetails: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'Johndoe@gmail.com',
        phoneNumber: 9039335002,
        state: 'Lagos',
        status: true,
        customerDetails: 'This is a customer.',
      },
    ] as User[],
    filteredUsers: [] as User[],
    searching: false,
  }),
  getters: {
  },
  actions: {
    filterUsers(searchString: string) {
      this.filteredUsers = this.users.filter((user) => {
        return Object.values(user).some(value =>
          value.toString().toLowerCase().includes(searchString.toLowerCase()),
        )
      })
    },
    addUser(user: User) {
      this.users.push(user)
    },
    isSearching(bool: boolean) {
      this.searching = bool
    },
  },
})
