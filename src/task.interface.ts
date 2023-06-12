export interface ITask {
    description?: string;
    //ponto de interrogação deixa opicional o preenchimento desse atributo

    title: string;

    create_at: Date;

    id: string;

    done: boolean;

    conclusion_date?: Date;
}