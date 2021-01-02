<?php

use App\Topic;
use App\User;
use App\Post;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create();

        $date = now();

        Topic::insert([
            ['slug' => 'featured', 'name' => 'Featured Sites', 'created_at' => $date, 'updated_at' => $date],
            ['slug' => 'links', 'name' => 'Useful Links', 'created_at' => $date, 'updated_at' => $date],
            ['slug' => 'tutorials', 'name' => 'Guides & Tutorials', 'created_at' => $date, 'updated_at' => $date],
        ]);

        factory(Post::class, 20)->create();
    }
}
