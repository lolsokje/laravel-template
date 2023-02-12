<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Index', [
            'laravel_version' => Application::VERSION,
            'php_version' => PHP_VERSION,
        ]);
    }
}
