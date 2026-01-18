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
        Schema::create('japanese', function (Blueprint $table) {
            $table->id();
            $table->string('furigana', 255)->nullable();
            $table->string('kanji', 255)->nullable();
            $table->string('english', 255);
            $table->boolean('memorized')->default(0);
            $table->string('katakana', 255)->nullable();
            $table->timestamps();
        });
        
        // Set charset and collation
        DB::statement('ALTER TABLE japanese CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('japanese');
    }
};