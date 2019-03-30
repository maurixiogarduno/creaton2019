import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI, ParametrosInterface } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  //TODO COLLECTION
  private todosCollection: AngularFirestoreCollection<TaskI>;
  private todos: Observable<TaskI[]>;

  //PARAMS COLECCION
  private paramsCollection: AngularFirestoreCollection<ParametrosInterface>;
  private parametro: Observable<ParametrosInterface[]>;

  constructor(db: AngularFirestore) {

//TODO COLECTION
    this.todosCollection = db.collection<TaskI>('todos');
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
//PARAMAS COLECTION
    this.paramsCollection = db.collection<ParametrosInterface>('parametro');
    this.parametro = this.paramsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

  }

  //METODOS TODO

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todosCollection.doc<TaskI>(id).valueChanges();
  }

  //PUT TODO
  updateTodo(todo:TaskI, id: string){
    return this.todosCollection.doc(id).update(todo);
  }
  
  //PUSH TODO
  addTodo(todo: TaskI) {
    return this.todosCollection.add(todo);
  }
  //DELETE TODO
  removeTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }


  ////METODOS PARAMS

  getParams() {
    return this.parametro;
  }

  getParam(id: string) {
    return this.paramsCollection.doc<ParametrosInterface>(id).valueChanges();
  }

  //PUT TODO
  updateParam(param: ParametrosInterface, id: string){
    return this.paramsCollection.doc(id).update(param);
  }
  
  //PUSH TODO
  addParam(param: ParametrosInterface) {
    return this.paramsCollection.add(param);
  }
  //DELETE TODO
  removeParam(id: string) {
    return this.paramsCollection.doc(id).delete();
  }
  
}
