import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent  {

  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;

  beforeImage: string | undefined;
  afterImage: string | undefined;
  photoCaptured = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.startCamera();
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.videoElement.nativeElement.srcObject = stream;
    });
  }

  capturePhoto() {
    const canvas = this.canvasElement.nativeElement;
    const video = this.videoElement.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    this.beforeImage = canvas.toDataURL('image/png'); // "Antes" da modificação
    this.simulateAfterEffect(context, canvas); // Simula o "Depois"
  }

  simulateAfterEffect(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    // Simula um efeito estético no "Depois"
    context.globalAlpha = 0.5;
    context.fillStyle = '#ff9999'; // Exemplo de tom avermelhado para lábios preenchidos
    context.fillRect(100, 200, 150, 100); // Modifica a região desejada do rosto

    this.afterImage = canvas.toDataURL('image/png'); // "Depois" da modificação
    this.photoCaptured = true;
  }
}
