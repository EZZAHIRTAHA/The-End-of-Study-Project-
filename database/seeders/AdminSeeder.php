<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            "name"=>"achraf",
            "email"=>"achrafassal@gmail.com",
            "password"=>bcrypt("0123456789"),
            "role_id"=>2
        ]);
    }
}
