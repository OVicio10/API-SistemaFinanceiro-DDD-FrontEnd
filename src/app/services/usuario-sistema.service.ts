import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { SistemaFinanceiro } from '../models/SistemaFinanceiro';

@Injectable({
    providedIn: 'root'
})

export class UsuarioSistemaFinanceiro {

    constructor(private httpClient: HttpClient) {
    }

    private readonly baseURL = environment["endPoint"];

    CadastrarUsuarioNoSistema(idSistema:number,emailUsuario:string) {
        var model =  {idSistema:idSistema,emailUsuario:emailUsuario}
        return this.httpClient.post<SistemaFinanceiro>(`${this.baseURL}/CadastrarUsuarioNoSistema?idSistema${idSistema}&emailUsuario=${emailUsuario}`,
            null)
    }

    ListarUsuariosSistema(idSistema: number) {
        return this.httpClient.get(`${this.baseURL}/ListarUsuariosSistema?idSistema=${idSistema}`);
    }

    DeleteUsuarioSistemaFinanceiro(id: number) {
        return this.httpClient.delete(`${this.baseURL}/DeleteUsuarioSistemaFinanceiro?id=${id}`);
    }


}