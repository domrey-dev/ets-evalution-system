<?php

<<<<<<< HEAD
test('that true is true', function () {
    expect(true)->toBeTrue();
});
=======
namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_that_true_is_true(): void
    {
        $this->assertTrue(true);
    }
}
>>>>>>> df8059f90f580f33f75bfd1471413ea02080d777
