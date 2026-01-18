<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('japanese_img', function (Blueprint $table) {
            $table->id('img_ID');
            $table->string('img_path');
            $table->foreignId('id')->constrained('japanese')->onDelete('cascade');
            $table->timestamps();
        });
        
        // Set charset and collation
        DB::statement('ALTER TABLE japanese_img CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('japanese_img');
    }
};