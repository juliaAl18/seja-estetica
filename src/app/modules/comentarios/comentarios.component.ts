import { Component } from '@angular/core';

interface Comentario {
  foto: string;
  nome: string;
  texto: string;
  estrelas: number;
}

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent {

  comentarios: Comentario[] = [
    {
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvE3oVMEOk2TnOQutR_To3k4L4R40pvon2Q&s',
      nome: 'Pamela',
      texto: '"Júlia é simplesmente incrível! O preenchimento labial ficou perfeito, natural, e exatamente como eu queria. Ela é super atenciosa e uma verdadeira especialista. Recomendo muito!"',
      estrelas: 5,
    },
    {
      foto: 'https://diadebeaute.com/wp-content/uploads/2023/03/formato-rosto.jpg',
      nome: 'Sofia',
      texto: '"A experiência na Jus Beauty foi incrível! O preenchimento labial que fiz ficou perfeito, e a equipe foi super atenciosa e profissional. Com certeza voltarei para mais tratamentos!"',
      estrelas: 5,
    },
    {
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-_nsnp-3naWrlLzEGSx84G37adg0tCvMbw&s',
      nome: 'Ana',
      texto: '"O atendimento foi bom, mas a espera foi um pouco longa. Seria ótimo se pudesse ser mais ágil na marcação de consultas."',
      estrelas: 5,
    },
  ];

  comentarioAtual: Comentario | null = null;
  comentarioIndex: number = 0;

  ngOnInit() {
    this.mostrarComentario();
  }

  mostrarComentario() {
    if (this.comentarios.length === 0) return;

    this.comentarioAtual = this.comentarios[this.comentarioIndex];

    setTimeout(() => {
      this.mostrarComentario();
    }, 5000);
  }

  proximoComentario() {
    this.comentarioIndex = (this.comentarioIndex + 1) % this.comentarios.length;
    this.mostrarComentarioManual();
  }

  anteriorComentario() {
    this.comentarioIndex = (this.comentarioIndex - 1 + this.comentarios.length) % this.comentarios.length;
    this.mostrarComentarioManual();
  }

  mostrarComentarioManual() {
    this.comentarioAtual = this.comentarios[this.comentarioIndex];
  }

}
