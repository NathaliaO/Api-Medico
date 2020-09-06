<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\especialidades;

class especialidadesController extends Controller
{
    
    public function add(Request $req){
        try {
            $especialidade = new especialidades();

            $especialidade->descricao = $req->descricao;

            $especialidade->save();
            return ['retorno'=>'ok'];
            
        } catch (\Exception $err) {
            return ['retorno'=>'erro', 'details'=>$err];
        }
    }

    public function list(){
        $especialidade = especialidades::all();

        return $especialidade;
    }

    public function selectNome($id){
        $especialidade = especialidades::find($nome);
        return $especialidade;
}

    public function update(Request $req, $id){
        try {
            $especialidade = especialidades::find($id);

            $especialidade->descricao = $req->descricao;

            $especialidade->save();
            return ['retorno'=>'ok', 'data'=>$req->all()];


        } catch (\Exception $err) {
            return ['retorno'=>'erro', 'details'=>$err];
        }
    }

    public function delete($id){
        try {
            $especialidade = especialidades::find($id);

            $especialidade->delete();

            return ['retorno'=>'ok'];
        } catch (\Exception $err) {
            return ['retorno'=>'erro', 'details'=>$err];
        }
    }
}
