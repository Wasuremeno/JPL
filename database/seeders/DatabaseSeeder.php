<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Set default character set and collation for all tables
        DB::statement('SET NAMES utf8mb4');
        DB::statement('SET CHARACTER SET utf8mb4');
        DB::statement('SET character_set_connection = utf8mb4');
        
        // Create tables if they don't exist
        if (!Schema::hasTable('japanese')) {
            DB::statement("
                CREATE TABLE japanese (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    furigana VARCHAR(255),
                    kanji VARCHAR(255),
                    katakana VARCHAR(255),
                    english VARCHAR(255) NOT NULL,
                    memorized TINYINT(1) DEFAULT 0,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
            ");
        }
        
        if (!Schema::hasTable('japanese_img')) {
            DB::statement("
                CREATE TABLE japanese_img (
                    img_ID INT PRIMARY KEY AUTO_INCREMENT,
                    img_path INT NOT NULL,
                    id INT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                    FOREIGN KEY (id) REFERENCES japanese(id) ON DELETE CASCADE
                ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
            ");
        }
        
        $this->call([
            JapaneseSeeder::class,
            JapaneseImgSeeder::class,
        ]);
    }
}