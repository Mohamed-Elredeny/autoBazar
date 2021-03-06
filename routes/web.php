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


Route::get('/',function(){
    return view('site.index');
})->name('home');
Route::get('/category/{name}',function(){
    return view('site.subcategory');
})->name('subcategory');
Route::get('/subcategory/details',function(){
    return view('site.categoryDetails');
})->name('subcategory.details');
Route::get('/product/details',function(){
    return view('site.productDetails');
})->name('product.details');

Route::get('/wishlist',function(){
    return view('site.wishlist');
})->name('wishlist');
Route::get('/subscription',function(){
    return view('site.subscription');
})->name('subscription');

Route::get('/login',function(){
    return view('site.login');
})->name('login');

Route::get('/register/info',function(){
    return view('site.registerInfo');
})->name('register.info');

Route::get('/register/subscription',function(){
    return view('site.registerSubscription');
})->name('register.subscription');

Route::get('/register/address',function(){
    return view('site.registerAddress');
})->name('register.address');

Route::get('/register/social',function(){
    return view('site.registerSocial');
})->name('register.social');

Route::get('/profile/maintenance', function () {
    return view('site.profileMaintenance');
})->name('profile/maintenance');
Route::get('/profile/seller', function () {
    return view('site.profileSeller');
})->name('profile/seller');
