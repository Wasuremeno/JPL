<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('japanese', function (Blueprint $table) {
            $table->id();
            $table->string('furigana')->nullable();
            $table->string('kanji')->nullable();
            $table->string('katakana')->nullable();
            $table->string('english');
            $table->boolean('memorized')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('japanese');
    }
};