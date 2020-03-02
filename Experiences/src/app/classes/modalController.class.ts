export class ModalController{
    visible: boolean = false;
    type: ModalType
}

export enum ModalType{
    Experience,
    Tip
}