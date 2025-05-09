<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('role', 'admin')->first();
        $category = Category::inRandomOrder()->first();

        if (!$user || !$category) {
            $this->command->info('erreur');
            return;
        }
    
        Product::factory()->count(10)->create([
            'user_id' => $user->id,
            'category_id' => $category->id,
        ]);
    }

    
}
