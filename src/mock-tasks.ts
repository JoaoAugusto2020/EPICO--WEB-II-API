import { ITask } from "./task.interface";

export const mocketdTasks: ITask[] = [
    {
        create_at: new Date(),
        //sem parâmetros significa a data de agora
        done: true,
        id: "abcdef",
        title: "Tirar o lixo",
    },
    {
        create_at: new Date(),
        done: false,
        id: "asfsdfsd",
        title: "Lavar a louça",
        conclusion_date: new Date(),
    },
    {
        create_at: new Date(),
        done: true,
        id: "dfhdfh",
        title: "Arrumar a cama",
        description: "Todos os dias!",
    },
];