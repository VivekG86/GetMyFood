import { Injectable } from '@angular/core';

@Injectable()
export class loginService {

    validateCredentials(userName: string, password: string): boolean {        
        if ((userName === "Vivek") && (password === "1234")) {
            return true;
        }
        else {
            return false;
        }
    }

}