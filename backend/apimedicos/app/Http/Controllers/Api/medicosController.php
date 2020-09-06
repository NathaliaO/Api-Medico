<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\medicos;

class medicosController extends Controller
{
    public function status(){
        return ['status' => 'ok'];
    }

    public function add(Request $req){
        try {
            $medico = new medicos();

            $medico->nome = $req->nome;
            $medico->crm = $req->crm;
            $medico->telefone = $req->telefone;
            $medico->especialidades = $req->especialidades;

            $medico->save();
            return ['retorno'=>'ok'];
            
        } catch (\Exception $err) {
            return ['retorno'=>'erro', 'details'=>$err];
        }
    }

    public function list(){
        $medico = medicos::all();

        return $medico;
    }

    public function selectNome($nome){
            $medico = medicos::find($nome);
            return $medico;
    }

    public function selectCrm($crm){    
        $medico = medicos::find($crm);
        return $medico;
    }

    public function update(Request $req, $id){
        try {
            $medico = medicos::find($id);

            $medico->nome = $req->nome;
            $medico->crm = $req->crm;
            $medico->telefone = $req->telefone;
            $medico->especialidades = $req->especialidades;

            $medico->save();
            return ['retorno'=>'ok', 'data'=>$req->all()];


        } catch (\Exception $err) {
            return ['retorno'=>'erro', 'details'=>$err];
        }
    }

    public function delete($id){
        try {
            $medico = medicos::find($id);

            $medico->delete();

            return ['retorno'=>'ok'];
        } catch (\Exception $err) {
            return ['retorno'=>'erro', 'details'=>$err];
        }
    }
}
