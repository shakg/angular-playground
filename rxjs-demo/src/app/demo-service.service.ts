import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { Observable,Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  private _ipc: IpcRenderer | undefined = this.cipc();

  private im:string= "0";

  observable:any;

  constructor() {
    if (window.require) {
      try {
        this._ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }

  createObservable():Observable<string>{
    const obs = new Observable<string>(data=>{
      this._ipc?.on('demo-channel', (evet,message)=>{
        data.next(message);
      })
    });
    return obs;
  }

  cipc():IpcRenderer{
    return window.require('electron').ipcRenderer;
  }

}
