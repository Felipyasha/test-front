import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Container } from './container/container';
@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {
  private apiURL='http://localhost:8080';


  constructor(private http: HttpClient) { }

  public getContainers(): Observable<Container[]> {
    return this.http.get<Container[]>(`${this.apiURL}/conteiner/all`);
  }

  public addContainers(container: Container): Observable<Container> {
    return this.http.post<Container>(`${this.apiURL}/conteiner/add`, container);
  }

  public updateContainers(container: Container): Observable<Container> {
    return this.http.put<Container>(`${this.apiURL}/conteiner/update`, container);
  }

  public deleteContainers(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/conteiner/delete/${id}`);
  }
}
