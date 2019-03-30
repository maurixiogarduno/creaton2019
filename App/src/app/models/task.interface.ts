export interface TaskI {
    id?: string;
    task: string;
    priority: number;
    //mas parametros
    campo1: string;
    campo2: string;
    campo3: string;
};

//SEGUNDA INTERFACE

export interface ParametrosInterface {
    id?: string;
    nombre: string;
    nivelViolencia: number;
    //mas parametros
    materia: string;
};