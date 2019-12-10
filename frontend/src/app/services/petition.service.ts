import { Injectable } from '@angular/core';
import { Petition } from '../model/petition.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PetitionService {

  constructor(private http: HttpClient) { }
  private petitionUrl = 'http://localhost:3000/petition';
  // All the common services go here

  // Call create petition API
  public createPetition(petition) {
    console.log('Request Object' + petition);
    return this.http.post<Petition>(this.petitionUrl, petition);
  }

  // Call update petition API
  public updatePetition(petition, id) {
    console.log('From petition Service Update - '+ id);
    return this.http.put<Petition>(this.petitionUrl + "/" + id, petition);
  }

  // Call delete petition API
  public deletePetition(id) {
    console.log(this.petitionUrl + '/' + id);
    return this.http.delete(this.petitionUrl + '/' + id);
  }
  // call get all petition API
  public getPetition() {
    return this.http.get<Petition[]>(this.petitionUrl);
  }

  // call get by ID petition API
  public getbyIDPetition(id) {
    console.log(this.petitionUrl + '/' + id);
    return this.http.get<Petition>(this.petitionUrl + '/' + id);
  }
}