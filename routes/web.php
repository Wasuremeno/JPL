<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/silya', function () {
    return Inertia::render('silya');
});
Route::get('/mixed_mode', function () {
    return Inertia::render('mixedMode');
});
Route::get('/learn_new_words', function () {
    return Inertia::render('learnNewWords');
});
Route::get('/review_words', function () {
    return Inertia::render('reviewWords');
});