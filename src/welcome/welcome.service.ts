import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class WelcomeService {
  welcomeMessage(): Observable<string> {
    return of('Bievenue sur l\'API de gestion d\'animaux!\nIl n\'y a rien ici .. Mais la Documentation se trouve sur /documentation !');
  }
}
