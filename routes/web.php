<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MixedModeController;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\Japanese;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/silya', function () {
    return Inertia::render('silya');
});



Route::get('/mixed-mode', [MixedModeController::class, 'index'])->name('mixed-mode');

Route::get('/review-words', [MixedModeController::class, 'index'])->name('review-words');

Route::get('/learn-new-words', [MixedModeController::class, 'index'])->name('learn-words');