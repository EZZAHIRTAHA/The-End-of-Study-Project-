<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/info', function () {
    return [
        'Host' => request()->getHost(),
        'Version' => app()->version(),
        'User Agent' => request()->header('User-Agent'),
        'Remote Address' => request()->ip(),
        'Request Time' => request()->server('REQUEST_TIME'),
    ];
});

require __DIR__.'/auth.php';
