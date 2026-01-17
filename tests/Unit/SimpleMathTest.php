<?php

test('addition', function () {
    expect(2 + 2)->toBe(4);
});

test('string concatenation', function () {
    expect('Hello' . ' ' . 'World')->toBe('Hello World');
});