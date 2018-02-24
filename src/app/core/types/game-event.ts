import {Player} from './player';

export class GameEvent {
  location
  datetime: Date;
  description: string;
  players: Player[];
}
