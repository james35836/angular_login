<?php
 
Route::group(['middleware' => ['auth:api']], function() 
{
    // ONLY MEMBER AND ADMIN ACCOUNT ALLOWED

	Route::get('/user_data', 'Admin\AdminController@user_data');
    Route::post('/logout', 'SecretController@logout');
});

Route::group(['middleware' => ['auth:api', 'admin']], function() 
{
    // ONLY ADMIN ACCOUNT ALLOWED
   
    
    /*UPLOAD*/

});



Route::get('/client_secret', 'SecretController@get'); 
Route::post('/new_register',"RegisterController@new_register"); 
Route::post('/member/check_credentials',"RegisterController@check_credentials"); 
