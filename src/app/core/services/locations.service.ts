import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Location} from '../types/location';

@Injectable()
export class LocationsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.request('GET', '/api/location/');
  }

  get(id: number) {
    return this.httpClient.request('GET', `/api/location/${id}`);
  }

  createLocation(data: Location) {
    return this.httpClient.request('POST', '/api/location/', {body: data});
  }

  updateLocation(id: number, data: Location) {
    return this.httpClient.request('PUT', `/api/location/${id}`, {body: data});
  }

  deleteLocation(id: number) {
    return this.httpClient.request('DELETE', `/api/location/${id}`);
  }
}
