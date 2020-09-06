<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/status', 'Api\medicosController@status');

Route::namespace('Api')->group( function () {
    Route::post('/medicos/add', 'medicosController@add');
    Route::get('/medicos', 'medicosController@list');
    Route::get('/medicos/{nome}', 'medicosController@selectNome');
    Route::get('/medicos/{crm}', 'medicosController@selectCrm');
    Route::put('/medicos/{id}', 'medicosController@update');
    Route::delete('/medicos/{id}', 'medicosController@delete');

    Route::post('/especialidades/add', 'especialidadesController@add');
    Route::get('/especialidades', 'especialidadesController@list');
    Route::put('/especialidades/{id}', 'especialidadesController@update');
    Route::delete('/especialidades/{id}', 'especialidadesController@delete');
});
