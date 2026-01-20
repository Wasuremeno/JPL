<?php

namespace App\Console\Commands;

use App\Models\Japanese;
use Illuminate\Console\Command;

class FixJapaneseEncoding extends Command
{
    protected $signature = 'fix:japanese-encoding';
    protected $description = 'Fix Japanese text encoding in database';

    public function handle()
    {
        $words = Japanese::all();
        
        foreach ($words as $word) {
            $this->info("Processing word ID: {$word->id}");
            
            // Fix furigana
            if ($word->furigana && str_contains($word->furigana, '<E')) {
                $fixed = preg_replace_callback('/<([A-F0-9]{2})>/i', function($matches) {
                    return chr(hexdec($matches[1]));
                }, $word->furigana);
                
                $word->furigana = $fixed;
                $this->line("  Fixed furigana: {$fixed}");
            }
            
            // Fix kanji
            if ($word->kanji && str_contains($word->kanji, '<E')) {
                $fixed = preg_replace_callback('/<([A-F0-9]{2})>/i', function($matches) {
                    return chr(hexdec($matches[1]));
                }, $word->kanji);
                
                $word->kanji = $fixed;
                $this->line("  Fixed kanji: {$fixed}");
            }
            
            $word->save();
        }
        
        $this->info("Fixed {$words->count()} records.");
    }
}