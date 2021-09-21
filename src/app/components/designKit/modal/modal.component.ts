import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  /** Mostrar modal sim ou não */
  isShowing: boolean = false;
  /** Título que aparecera no header da modal */
  @Input("title") title: string = "Título";
  /** Texto do botão de enviar */
  @Input("btnText") buttonText: string = "Cadastrar";
  /** Tamanhos padrões da modal */
  @Input("size") sizeModal: 'xs' | 'sm' | 'md' | 'lg' = 'sm'
  /** Texto do botão de cancelar ou fechar modal */
  @Input("dismiss-buttonText") dismissButtonText: string = "Cancelar";
  /** Mostrar ou esconder botões de acões da modal */
  @Input("action") action: boolean = true;
  /** Mensagem de error da modal caso ocorra algum evento */
  @Input("error-message") errorMessage: string = "";
  /** Evento de ação da modal */
  @Output("btnClick") okCliqued: EventEmitter<void> = new EventEmitter();
  /** Evento de fechar modal */
  @Output("onClose") onClose: EventEmitter<void> = new EventEmitter();

  waiting: boolean = false;

  constructor() {}

  public showContent(data?: any) {
    this.isShowing = true;
    this.waiting = false;
    this.stopWait();
  }

  handleClick() {
    this.okCliqued.emit();
  }

  shadowClick() {
    this.dismiss();
  }

  wait() {
    this.waiting = true;
  }

  stopWait() {
    this.waiting = false;
  }

  getEvent(e){
    e.preventDefault();
  }

  @HostListener("document:keyup", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && this.isShowing) this.dismiss();
  }
/** função de fechar modal */
  closeModal() {
    this.onClose.emit();
  }
  public dismiss(event?: Event) {
    if (event) event.preventDefault();
    this.isShowing = false;
  }

}
