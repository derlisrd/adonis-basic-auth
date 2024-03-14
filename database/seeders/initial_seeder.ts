
import User from '#models/user'

import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
   await User.create({email:'admin@blupy.com.py',name:'Admin',password:'12345',username:'000',rol:0})

  }
}