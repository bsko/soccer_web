import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameEvent} from '../types/game-event';

@Injectable()
export class GamesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.request('GET', '/api/gameevent/');
  }

  get(id: number) {
    return this.httpClient.request('GET', `/api/gameevent/${id}`);
  }

  createGame(data: GameEvent) {
    return this.httpClient.request('POST', '/api/gameevent', {body: data});
  }

  updateGame(id: number, data: GameEvent) {
    return this.httpClient.request('PUT', `/api/gameevent/${id}`, {body: data});
  }

  deleteGame(id: number) {
    return this.httpClient.request('DELETE', `/api/gameevent/${id}`);
  }
}
