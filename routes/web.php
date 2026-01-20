<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\Japanese;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/silya', function () {
    return Inertia::render('silya');
});

Route::get('/learn_new_words', function () {
    return Inertia::render('learnNewWords');
});
Route::get('/review_words', function () {
    return Inertia::render('reviewWords');
});

Route::get('/mixed-mode', function () {
    $words = Japanese::with('image')->get();
    
    // Fix encoding for each word
    $fixedWords = $words->map(function ($word) {
        return [
            'id' => $word->id,
            'furigana' => $this->fixJapaneseEncoding($word->furigana),
            'kanji' => $word->kanji ? $this->fixJapaneseEncoding($word->kanji) : null,
            'english' => $word->english,
            'memorized' => $word->memorized,
            'katakana' => $word->katakana ? $this->fixJapaneseEncoding($word->katakana) : null,
            'display_name' => $this->fixJapaneseEncoding($word->display_name),
            'image' => $word->image,
        ];
    })->toArray();
    
    return Inertia::render('MixedMode', [
        'title' => 'Mixed Mode',
        'japaneseWords' => $fixedWords,
    ]);
})->setDefaults(['fixJapaneseEncoding' => function ($string) {
    if (!$string) return '';
    
    // If string contains <E3> etc pattern (hex entities)
    if (preg_match('/<[A-F0-9]{2}>/i', $string)) {
        // Convert <E3><81><82> to actual characters
        return preg_replace_callback('/<([A-F0-9]{2})>/i', function ($matches) {
            return chr(hexdec($matches[1]));
        }, $string);
    }
    
    // Try UTF-8 conversion
    $converted = mb_convert_encoding($string, 'UTF-8', 'UTF-8');
    if ($converted !== $string) {
        return $converted;
    }
    
    return $string;
}]);