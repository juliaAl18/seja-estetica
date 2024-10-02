import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';


interface Question {
  question: string;
  options: string[];
  answer: string | null;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  currentQuestion = 0;

  questions = [
    {
      question: 'Qual é o seu tipo de pele?',
      options: ['Oleosa', 'Seca', 'Mista', 'Normal'],
      answer: '',
    },
    {
      question: 'Você tem alguma alergia a produtos de beleza?',
      options: ['Sim', 'Não'],
      answer: '',
    },
    {
      question: 'Com que frequência você realiza procedimentos estéticos?',
      options: ['Nunca', 'Uma vez por ano', 'Duas a três vezes por ano', 'Mensalmente'],
      answer: '',
    },
    {
      question: 'Você utiliza protetor solar diariamente?',
      options: ['Sim', 'Não'],
      answer: '',
    },
    {
      question: 'Qual é a sua idade?',
      options: ['Menos de 20', '20-30', '31-40', '41-50', 'Mais de 50'],
      answer: '',
    },
    {
      question: 'Você já fez algum procedimento estético anteriormente?',
      options: ['Sim', 'Não'],
      answer: '',
    },
    {
      question: 'Qual é a sua principal preocupação estética?',
      options: ['Rugas', 'Flacidez', 'Manchas', 'Acne', 'Outros'],
      answer: '',
    },
    {
      question: 'Qual é o seu nível de estresse diário?',
      options: ['Baixo', 'Moderado', 'Alto'],
      answer: '',
    },
    {
      question: 'Você tem hábitos saudáveis?',
      options: ['Sim', 'Não'],
      answer: '',
    },
  ];

  currentQuestionIndex: number = 0;
  quizFinished: boolean = false; // Nova propriedade para rastrear se o quiz foi finalizado
  

  nextQuestion2() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizFinished = true; // Marca o quiz como finalizado
    }
  }

 // Adicione aqui o caminho da imagem do seu logo
 private logoUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHMmrXq2dnXTtaSS-8Epivi2jHyn4Qp7M3A&s'; // Altere para o caminho correto do seu logo
 private clinicPhone: string = '(11) 1234-5678'; // Altere para o telefone da clínica
 private clinicAddress: string = 'Rua XXXXXXXX, 123 - Brasilia, DF'; // Altere para o endereço da clínica

 nextQuestion() {
   if (this.currentQuestion < this.questions.length - 1) {
     this.currentQuestion++;
   }
 }

 generatePDF() {
  const pdf = new jsPDF();
  const title = 'Recomendações do Quiz';

  // Adiciona logo
  pdf.addImage(this.logoUrl, 'PNG', 10, 10, 30, 30); // Ajuste a posição e tamanho conforme necessário

  // Alinhamento das informações da clínica
  const clinicInfoX = 50; // X position for clinic info
  const clinicInfoY = 25; // Y position for clinic info
  pdf.setFontSize(12);
  pdf.setTextColor(0, 0, 0); // Preto
  pdf.text(this.clinicPhone, clinicInfoX, clinicInfoY);
  pdf.text(this.clinicAddress, clinicInfoX, clinicInfoY + 5);

  // Adiciona um cabeçalho
  pdf.setFontSize(22);
  pdf.setTextColor(255, 192, 203); // Rosa
  pdf.text(title, 10, 60);

  const recommendations = this.getRecommendations();

  // Configura tabela para recomendações
  autoTable(pdf, {
    startY: 70,
    head: [['Pergunta', 'Resposta', 'Recomendações']],
    body: recommendations.map(rec => [rec.question, rec.answer, rec.recommendation]),
    styles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },
    headStyles: { fillColor: [255, 215, 0], textColor: [0, 0, 0] }, // Dourado
    alternateRowStyles: { fillColor: [240, 240, 240] },
    theme: 'striped',
  });


  // Salva o PDF
  pdf.save('recomendacoes-esteticas.pdf');
}

  getRecommendations() {
    const recommendations: { question: string; answer: string; recommendation: string; }[] = [];

    this.questions.forEach(q => {
      if (q.answer) {
        const recommendation = {
          question: q.question,
          answer: q.answer,
          recommendation: this.getRecommendationText(q),
        };
        recommendations.push(recommendation);
      }
    });

    return recommendations;
  }

  getRecommendationText(q: { question: any; options?: string[]; answer: any; }) {
    // Adicionando recomendações para novas perguntas
    if (q.question === 'Qual é a sua idade?') {
      return this.getAgeRecommendations(q.answer);
    }
    if (q.question === 'Você já fez algum procedimento estético anteriormente?') {
      return this.getPreviousProceduresRecommendations(q.answer);
    }
    if (q.question === 'Qual é a sua principal preocupação estética?') {
      return this.getConcernRecommendations(q.answer);
    }
    if (q.question === 'Qual é o seu nível de estresse diário?') {
      return this.getStressRecommendations(q.answer);
    }
    if (q.question === 'Você tem hábitos saudáveis?') {
      return this.getHealthyHabitsRecommendations(q.answer);
    }

    // Retornar recomendações existentes
    if (q.question === 'Qual é o seu tipo de pele?') {
      return this.getSkinTypeRecommendations(q.answer);
    }
    if (q.question === 'Você tem alguma alergia a produtos de beleza?') {
      return this.getAllergyRecommendations(q.answer);
    }
    if (q.question === 'Com que frequência você realiza procedimentos estéticos?') {
      return this.getProcedureFrequencyRecommendations(q.answer);
    }
    if (q.question === 'Você utiliza protetor solar diariamente?') {
      return this.getSunscreenRecommendations(q.answer);
    }
    return '';
  }

  // Novas funções de recomendação
  getAgeRecommendations(age: string): string {
    switch (age) {
      case 'Menos de 20':
        return 'Recomendação: Cuidados básicos são importantes. Avalie iniciar com tratamentos preventivos e sempre use protetor solar.';
      case '20-30':
        return 'Recomendação: Comece a considerar botox preventivo para rugas de expressão. Mantenha uma rotina de cuidados com a pele.';
      case '31-40':
        return 'Recomendação: Avalie tratamentos de preenchimento para melhorar o volume e botox para rugas. Considere peelings químicos para renovação da pele.';
      case '41-50':
        return 'Recomendação: Procedimentos de harmonização facial podem ser benéficos. Considere também tratamentos de lifting não cirúrgico.';
      case 'Mais de 50':
        return 'Recomendação: Avalie preenchimentos, botox e tratamentos de rejuvenescimento. Procedimentos mais avançados podem ser apropriados para restaurar a firmeza da pele.';
      default:
        return '';
    }
  }

  getPreviousProceduresRecommendations(previous: string): string {
    return previous === 'Sim'
      ? 'Recomendação: Avalie o que funcionou para você no passado e considere procedimentos adicionais. Consulte um especialista para personalizar seu plano de tratamento.'
      : 'Recomendação: Como você é novo em procedimentos estéticos, considere começar com algo simples, como um tratamento facial ou botox para linhas de expressão.';
  }

  getConcernRecommendations(concern: string): string {
    switch (concern) {
      case 'Rugas':
        return 'Recomendação: O uso de botox e preenchimentos pode ajudar a reduzir rugas e restaurar a juventude. Tratamentos de pele como laser também podem ser eficazes.';
      case 'Flacidez':
        return 'Recomendação: Considere tratamentos de lifting não cirúrgico e preenchimentos para dar volume e sustentação à pele.';
      case 'Manchas':
        return 'Recomendação: Avalie tratamentos de clareamento, como peelings químicos e laser. A proteção solar é essencial.';
      case 'Acne':
        return 'Recomendação: Considere tratamentos de acne e cuidado com a pele. Produtos específicos podem ajudar a controlar a oleosidade.';
      case 'Outros':
        return 'Recomendação: Consulte um especialista para discutir suas preocupações específicas e personalizar seu plano de tratamento.';
      default:
        return '';
    }
  }

  getStressRecommendations(stress: string): string {
    return stress === 'Alto'
      ? 'Recomendação: O estresse pode afetar a saúde da pele. Considere técnicas de relaxamento e rotinas de cuidados para aliviar os efeitos do estresse na sua pele.'
      : '';
  }

  getHealthyHabitsRecommendations(habits: string): string {
    return habits === 'Não'
      ? 'Recomendação: Melhore seus hábitos alimentares, evite fumar e limite o consumo de álcool. Uma dieta equilibrada é crucial para a saúde da pele.'
      : 'Recomendação: Continue com seus hábitos saudáveis. Considere também hidratação e suplementação para potencializar os resultados dos tratamentos.';
  }

  getSkinTypeRecommendations(type: string): string {
    switch (type) {
      case 'Oleosa':
        return 'Recomendação: Utilize produtos não comedogênicos e com ácido salicílico para controlar a oleosidade. Tratamentos com peelings e laser podem ser benéficos para minimizar os poros.';
      case 'Seca':
        return 'Recomendação: Aplique hidratantes intensivos e evite sabonetes agressivos. Considere tratamentos com ácido hialurônico para aumentar a hidratação da pele.';
      case 'Mista':
        return 'Recomendação: Use produtos específicos para cada área do rosto. Hidratação leve na zona T e cremes mais ricos nas áreas secas podem ajudar a equilibrar a pele.';
      case 'Normal':
        return 'Recomendação: Mantenha uma rotina equilibrada com produtos suaves. Um bom protetor solar é essencial para preservar a saúde da sua pele.';
      default:
        return 'Recomendação: Consulte um dermatologista para obter um diagnóstico mais preciso e recomendações personalizadas.';
    }
  }
  
  getAllergyRecommendations(allergy: string): string {
    return allergy === 'Sim'
      ? 'Recomendação: Informe-se sobre a composição dos produtos que você usa e evite ingredientes que possam causar reações alérgicas. Considere realizar testes de alergia antes de novos tratamentos.'
      : 'Recomendação: Continue usando produtos hipoalergênicos e com pouca fragrância para manter a pele saudável.';
  }
  
  getProcedureFrequencyRecommendations(frequency: string): string {
    switch (frequency) {
      case 'Nunca':
        return 'Recomendação: Comece com tratamentos básicos, como limpeza de pele e hidratação. O botox pode ser uma boa opção preventiva a partir de agora.';
      case 'Uma vez por ano':
        return 'Recomendação: Considere aumentar a frequência dos tratamentos. Intervenções como peelings químicos e aplicação de botox podem ser realizadas semestralmente.';
      case 'Duas a três vezes por ano':
        return 'Recomendação: Você está no caminho certo! Considere adicionar um tratamento de preenchimento para otimizar os resultados e manter a pele saudável.';
      case 'Mensalmente':
        return 'Recomendação: Isso é excelente para a saúde da pele! Avalie a possibilidade de procedimentos mais avançados, como laser ou microagulhamento, para resultados ainda melhores.';
      default:
        return '';
    }
  }
  
  getSunscreenRecommendations(sunscreen: string): string {
    if (sunscreen === 'Sim') {
      return 'Recomendação: Continue usando protetor solar diariamente. Opte por um com fator de proteção alto e que se adeque ao seu tipo de pele.';
    } else {
      return 'Recomendação: É essencial começar a usar protetor solar todos os dias para proteger sua pele dos danos solares e prevenir o envelhecimento precoce. Considere opções com antioxidantes para melhores resultados.';
    }
  }
  
  
}


