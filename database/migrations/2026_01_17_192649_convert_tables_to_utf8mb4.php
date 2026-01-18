<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ConvertTablesToUtf8Mb4 extends Migration
{
    public function up()
    {
        // Convert the entire database
        DB::statement('ALTER DATABASE '.env('DB_DATABASE').' CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci');
        
        // Convert specific tables if they exist
        if (Schema::hasTable('japanese')) {
            DB::statement('ALTER TABLE japanese CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
        }
        
        if (Schema::hasTable('japanese_img')) {
            DB::statement('ALTER TABLE japanese_img CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
        }
    }

    public function down()
    {
        // Optional: define rollback
        DB::statement('ALTER DATABASE '.env('DB_DATABASE').' CHARACTER SET = utf8 COLLATE = utf8_unicode_ci');
    }
}