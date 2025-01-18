<script setup lang="ts">
import { ref } from 'vue'
import Editor from '../components/Editor.vue'
import { useUserStore } from '../../stores/user'

const users = useUserStore()

interface User {
  firstName: string
  lastName: string
  email: string
  phoneNumber: number
  state: string
  status: boolean
  customerDetails: string
}

const user = ref<User>({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: 0,
  state: '',
  status: true,
  customerDetails: '',
})

function register() {
  const data = JSON.parse(JSON.stringify(user.value))
  // eslint-disable-next-line no-console
  console.log('Registered: ', data)
  users.addUser(user.value)
  user.value = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    state: '',
    status: true,
    customerDetails: '',
  }
}
</script>

<template>
  <div>
    <h3 class="text-3xl font-semibold text-gray-700">
      New Customer
    </h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <form @submit.prevent="register">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="first_name">First Name</label>
                <input
                  v-model="user.firstName"
                  v-validate="{ rule: 'required' }"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                >
              </div>

              <div>
                <label class="text-gray-700" for="last_name">Last Name</label>
                <input
                  v-model="user.lastName"
                  v-validate="{ rule: 'required' }"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                >
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress">Email Address</label>
                <input
                  v-model="user.email"
                  v-validate="{ rule: 'email' }"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="email"
                >
              </div>

              <div>
                <label class="text-gray-700" for="last_name">Phone Number</label>
                <input
                  v-model="user.phoneNumber"
                  v-validate="{ rule: 'number' }"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                >
              </div>

              <div>
                <label class="text-gray-700" for="state">State</label>
                <select
                  v-model="user.state"
                  v-validate="{ rule: 'select' }"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                >
                  <option value="">
                    Select a state
                  </option>
                  <option value="Abia">
                    Abia
                  </option>
                  <option value="Adamawa">
                    Adamawa
                  </option>
                  <option value="Akwa Ibom">
                    Akwa Ibom
                  </option>
                  <option value="Anambra">
                    Anambra
                  </option>
                  <option value="Bauchi">
                    Bauchi
                  </option>
                  <option value="Bayelsa">
                    Bayelsa
                  </option>
                  <option value="Benue">
                    Benue
                  </option>
                  <option value="Borno">
                    Borno
                  </option>
                  <option value="Cross River">
                    Cross River
                  </option>
                  <option value="Delta">
                    Delta
                  </option>
                  <option value="Ebonyi">
                    Ebonyi
                  </option>
                  <option value="Edo">
                    Edo
                  </option>
                  <option value="Ekiti">
                    Ekiti
                  </option>
                  <option value="Enugu">
                    Enugu
                  </option>
                  <option value="Gombe">
                    Gombe
                  </option>
                  <option value="Imo">
                    Imo
                  </option>
                  <option value="Jigawa">
                    Jigawa
                  </option>
                  <option value="Kaduna">
                    Kaduna
                  </option>
                  <option value="Kano">
                    Kano
                  </option>
                  <option value="Katsina">
                    Katsina
                  </option>
                  <option value="Kebbi">
                    Kebbi
                  </option>
                  <option value="Kogi">
                    Kogi
                  </option>
                  <option value="Kwara">
                    Kwara
                  </option>
                  <option value="Lagos">
                    Lagos
                  </option>
                  <option value="Nasarawa">
                    Nasarawa
                  </option>
                  <option value="Niger">
                    Niger
                  </option>
                  <option value="Ogun">
                    Ogun
                  </option>
                  <option value="Ondo">
                    Ondo
                  </option>
                  <option value="Osun">
                    Osun
                  </option>
                  <option value="Oyo">
                    Oyo
                  </option>
                  <option value="Plateau">
                    Plateau
                  </option>
                  <option value="Rivers">
                    Rivers
                  </option>
                  <option value="Sokoto">
                    Sokoto
                  </option>
                  <option value="Taraba">
                    Taraba
                  </option>
                  <option value="Yobe">
                    Yobe
                  </option>
                  <option value="Zamfara">
                    Zamfara
                  </option>
                  <option value="FCT">
                    FCT
                  </option>
                </select>
              </div>
            </div>

            <div class="mt-5">
              <label>
                <input
                  v-model="user.status"
                  type="checkbox"
                  class="w-5 h-5 text-indigo-600 rounded-md focus:ring-indigo-500"
                  name="radio"
                ><span class="ml-2 text-gray-700">Set to Active</span>
              </label>
            </div>

            <div class="mt-5">
              <Editor
                v-model="user.customerDetails"
              />
            </div>

            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
