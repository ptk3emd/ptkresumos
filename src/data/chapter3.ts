import { Chapter } from '../types/clinical';

export const chapter3: Chapter = {
  id: 3,
  title: '3. ARRITMIAS CARDÍACAS',
  shortTitle: 'Arritmias',
  iconName: 'Activity',
  topics: [
    {
      id: '3.1',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.1 Abordagem inicial das taquiarritmias no pronto-atendimento',
      tables: [
        {
          id: '3.1-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.1-t1-r1',
              cells: [
                'Definição',
                'Frequência cardíaca >100 batimentos por minuto.'
              ]
            },
            {
              id: '3.1-t1-r2',
              cells: [
                'Avaliação de instabilidade ("4 D")',
                '**D**ispneia ou congestão pulmonar, **d**or torácica anginosa, **d**iminuição do nível de consciência e **d**iminuição da pressão arterial (choque). Qualquer um caracteriza instabilidade.'
              ]
            },
            {
              id: '3.1-t1-r3',
              cells: [
                'Conduta imediata',
                '**Instável**: cardioversão elétrica sincronizada com sedação e analgesia. **Exceção**: taquicardia ventricular polimórfica e fibrilação ventricular recebem desfibrilação assincrônica. **Estável**: monitorização, acesso venoso, oxigênio se hipoxemia, eletrocardiograma de 12 derivações.'
              ]
            },
            {
              id: '3.1-t1-r4',
              cells: [
                'Energias sugeridas (bifásico)',
                'Fibrilação atrial 120–200 J; flutter ou taquicardia supraventricular 50–100 J; taquicardia ventricular monomórfica com pulso 100 J; polimórfica ou fibrilação ventricular 200 J.'
              ]
            },
            {
              id: '3.1-t1-r5',
              cells: [
                'Classificação pelo eletrocardiograma',
                '**QRS estreito (<120 ms)**: regular (sinusal, reentrada nodal, via acessória, flutter 2:1) ou irregular (fibrilação atrial, flutter variável, taquicardia atrial multifocal). **QRS largo (≥120 ms)**: presumir taquicardia ventricular até prova em contrário.'
              ]
            },
            {
              id: '3.1-t1-r6',
              cells: [
                'Causas a corrigir',
                'Hipóxia, distúrbio de potássio e magnésio, tireotoxicose, isquemia, febre, dor, drogas.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.2',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.2 Taquicardias de QRS estreito regulares: sinusal e reentrada nodal',
      tables: [
        {
          id: '3.2-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.2-t1-r1',
              cells: [
                'Taquicardia sinusal',
                'Resposta fisiológica a sepse, anemia, desidratação, febre, dor, hipertireoidismo, embolia pulmonar. Frequência geralmente <150, onda P normal antes de cada QRS. **Tratar a causa; não cardioverter.**'
              ]
            },
            {
              id: '3.2-t1-r2',
              cells: [
                'Reentrada nodal (definição)',
                'Taquicardia supraventricular mais comum, por **dupla via** no nó atrioventricular (lenta e rápida). Mulheres jovens; início e fim súbitos.'
              ]
            },
            {
              id: '3.2-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Palpitações, poliúria, pescoço "batendo" (**sinal do sapo**, ondas A em canhão na jugular), tontura, dor torácica.'
              ]
            },
            {
              id: '3.2-t1-r4',
              cells: [
                'Eletrocardiograma',
                'Frequência 150–250, QRS estreito regular, **pseudo-S em DII, DIII e aVF e pseudo-R\' em V1** (onda P retrógrada dentro do QRS).'
              ]
            },
            {
              id: '3.2-t1-r5',
              cells: [
                'Diagnósticos diferenciais',
                'Taquicardia por via acessória ortodrômica (P retrógrada após o QRS), taquicardia atrial, **flutter 2:1** (frequência fixa de 150).'
              ]
            },
            {
              id: '3.2-t1-r6',
              cells: [
                'Tratamento estável',
                '**Manobra vagal modificada** (Valsalva com elevação passiva das pernas); depois **adenosina 6 mg** em bolus rápido com flush de soro e elevação do braço; repetir **12 mg** se necessário. Segunda linha: betabloqueador, verapamil ou diltiazem. Adenosina: rubor, dor torácica, dispneia, pausa breve; cautela em asma e transplantados.'
              ]
            },
            {
              id: '3.2-t1-r7',
              cells: [
                'Tratamento instável',
                'Cardioversão sincronizada 50–100 J.'
              ]
            },
            {
              id: '3.2-t1-r8',
              cells: [
                'Cura',
                '**Ablação por radiofrequência da via lenta** (mais de 95% de sucesso), indicada nos recorrentes.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.3',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.3 Síndrome de Wolff-Parkinson-White',
      tables: [
        {
          id: '3.3-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.3-t1-r1',
              cells: [
                'Definição',
                'Pré-excitação ventricular por via acessória (**feixe de Kent**) que liga átrio e ventrículo, com risco de taquiarritmias.'
              ]
            },
            {
              id: '3.3-t1-r2',
              cells: [
                'Eletrocardiograma em ritmo sinusal',
                '**Tríade**: intervalo PR curto (<120 ms), **onda delta** (empastamento inicial do QRS) e QRS alargado.'
              ]
            },
            {
              id: '3.3-t1-r3',
              cells: [
                'Taquicardias',
                '**Ortodrômica** (mais comum): condução anterógrada pelo nó atrioventricular e retrógrada pela via; QRS estreito. **Antidrômica**: condução anterógrada pela via; QRS largo. **Fibrilação atrial pré-excitada**: QRS largo, **irregularmente irregular**, frequência >200–250, risco de degeneração para fibrilação ventricular.'
              ]
            },
            {
              id: '3.3-t1-r4',
              cells: [
                'Regra de ouro',
                'Na fibrilação atrial pré-excitada, **contraindicados bloqueadores isolados do nó atrioventricular**: adenosina, betabloqueadores, verapamil, diltiazem e digoxina (desviam a condução para a via e podem causar fibrilação ventricular).'
              ]
            },
            {
              id: '3.3-t1-r5',
              cells: [
                'Tratamento',
                'Ortodrômica estável: manobra vagal e adenosina. Fibrilação atrial pré-excitada estável: **procainamida** (ou amiodarona, conforme diretriz). **Instável: cardioversão elétrica.** Curativo: **ablação por cateter da via acessória**.'
              ]
            },
            {
              id: '3.3-t1-r6',
              cells: [
                'Complicações',
                'Morte súbita; associação com anomalia de Ebstein.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.4',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.4 Fibrilação atrial: diagnóstico, causas e anticoagulação',
      tables: [
        {
          id: '3.4-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.4-t1-r1',
              cells: [
                'Definição',
                'Arritmia supraventricular com ativação atrial desorganizada e resposta ventricular irregular.'
              ]
            },
            {
              id: '3.4-t1-r2',
              cells: [
                'Classificação',
                'Primeiro episódio; **paroxística** (<7 dias, cessa sozinha); **persistente** (>7 dias); persistente de longa duração (>12 meses); **permanente**. **Valvar** (estenose mitral moderada a grave ou prótese mecânica) versus não valvar.'
              ]
            },
            {
              id: '3.4-t1-r3',
              cells: [
                'Etiologia e fisiopatologia',
                'Hipertensão, idade, doença valvar mitral, insuficiência cardíaca, obesidade, apneia, **hipertireoidismo**, álcool (*holiday heart*), infecção, pós-operatório. Focos nas veias pulmonares e remodelamento atrial.'
              ]
            },
            {
              id: '3.4-t1-r4',
              cells: [
                'Sinais e sintomas',
                'Palpitações, dispneia, fadiga, síncope; **pulso irregularmente irregular**.'
              ]
            },
            {
              id: '3.4-t1-r5',
              cells: [
                'Eletrocardiograma',
                '**Ausência de ondas P**, oscilações caóticas da linha de base e intervalos RR irregularmente irregulares.'
              ]
            },
            {
              id: '3.4-t1-r6',
              cells: [
                'Exames',
                'Ecocardiograma, hormônio tireoestimulante, eletrólitos, creatinina, hemograma, função hepática.'
              ]
            },
            {
              id: '3.4-t1-r7',
              cells: [
                'Estratificação de risco',
                '**CHA₂DS₂-VASc**: insuficiência cardíaca (1), hipertensão (1), idade ≥75 (2), diabetes (1), acidente vascular ou embolia prévia (2), doença vascular (1), idade 65–74 (1), sexo feminino (1). **Anticoagular** homens com ≥2 e mulheres com ≥3. **Diretriz europeia de 2024**: **CHA₂DS₂-VA** (retira o sexo feminino): anticoagular com ≥2 e considerar com 1.'
              ]
            },
            {
              id: '3.4-t1-r8',
              cells: [
                'Anticoagulante',
                'Preferir **anticoagulantes orais diretos** (apixabana, rivaroxabana, dabigatrana, edoxabana). **Varfarina obrigatória** (razão normalizada internacional 2,0–3,0) na estenose mitral moderada a grave e na prótese valvar mecânica. **Escore HAS-BLED**: identifica fatores de sangramento modificáveis (pressão descontrolada, álcool, função anormal, medicamentos); não contraindica sozinho.'
              ]
            },
            {
              id: '3.4-t1-r9',
              cells: [
                'Complicações',
                'Acidente vascular cardioembólico (risco cinco vezes maior), insuficiência cardíaca por taquicardiomiopatia.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.5',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.5 Fibrilação atrial: manejo agudo e crônico',
      tables: [
        {
          id: '3.5-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.5-t1-r1',
              cells: [
                'Paciente instável',
                '**Cardioversão elétrica sincronizada imediata** (120–200 J).'
              ]
            },
            {
              id: '3.5-t1-r2',
              cells: [
                'Controle da frequência (estável)',
                'Meta <100–110 em repouso: **betabloqueador** (metoprolol, bisoprolol) ou **diltiazem/verapamil** se fração de ejeção >40%. Na insuficiência cardíaca descompensada com fração reduzida: **digoxina ou amiodarona**.'
              ]
            },
            {
              id: '3.5-t1-r3',
              cells: [
                'Controle do ritmo',
                'Cardioversão química com **amiodarona** ou **propafenona** (esta só em coração sem doença estrutural ou isquêmica); ou elétrica.'
              ]
            },
            {
              id: '3.5-t1-r4',
              cells: [
                'Regra das 48 horas',
                '**Início comprovado <48 horas**: cardioversão precoce com heparina. **>48 horas ou incerto**: **3–4 semanas de anticoagulação plena antes**, ou ecocardiograma transesofágico sem trombo no apêndice atrial esquerdo; manter anticoagulação **por ao menos 4 semanas depois**.'
              ]
            },
            {
              id: '3.5-t1-r5',
              cells: [
                'Ablação por cateter',
                'Isolamento das veias pulmonares: sintomas refratários a antiarrítmicos, ou primeira linha em selecionados (inclusive insuficiência cardíaca).'
              ]
            },
            {
              id: '3.5-t1-r6',
              cells: [
                'Prevenção',
                'Controlar hipertensão, apneia, obesidade, álcool e tireoide.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.6',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.6 Flutter atrial',
      tables: [
        {
          id: '3.6-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.6-t1-r1',
              cells: [
                'Definição e fisiopatologia',
                'Macrorreentrada no **átrio direito** em torno da valva tricúspide (**istmo cavotricuspídeo**).'
              ]
            },
            {
              id: '3.6-t1-r2',
              cells: [
                'Eletrocardiograma',
                '**Ondas F em "dente de serra"**, negativas em DII, DIII e aVF, frequência atrial ~300/min; condução **2:1** gera taquicardia fixa em **150 bpm**.'
              ]
            },
            {
              id: '3.6-t1-r3',
              cells: [
                'Diagnóstico diferencial',
                'Taquicardia sinusal ou supraventricular com frequência fixa de 150; a manobra vagal ou a adenosina revela as ondas F.'
              ]
            },
            {
              id: '3.6-t1-r4',
              cells: [
                'Antitrombótico',
                '**Idêntico ao da fibrilação atrial** (CHA₂DS₂-VASc).'
              ]
            },
            {
              id: '3.6-t1-r5',
              cells: [
                'Tratamento',
                'Baixa resposta medicamentosa; **cardioversão elétrica sincronizada com baixa energia (50 J)** é muito eficaz; **ablação do istmo cavotricuspídeo é curativa** e preferida.'
              ]
            },
            {
              id: '3.6-t1-r6',
              cells: [
                'Cuidados',
                'Antiarrítmicos da classe IC sem bloqueio nodal podem causar condução 1:1.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.7',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.7 Taquicardias de QRS largo e taquicardia ventricular',
      tables: [
        {
          id: '3.7-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.7-t1-r1',
              cells: [
                'Definição',
                'QRS ≥120 ms com frequência >100. Taquicardia ventricular: **sustentada** (>30 segundos ou com colapso) ou **não sustentada**; monomórfica ou polimórfica.'
              ]
            },
            {
              id: '3.7-t1-r2',
              cells: [
                'Etiologia',
                'Cicatriz de infarto (mais comum), cardiomiopatias, displasia arritmogênica, canalopatias, distúrbios eletrolíticos, fármacos; forma idiopática em coração normal.'
              ]
            },
            {
              id: '3.7-t1-r3',
              cells: [
                'Diferenciação com supraventricular aberrante',
                '**Critérios de Brugada**: ausência de complexo RS em precordiais, intervalo RS >100 ms, **dissociação atrioventricular** (batimentos de captura e fusão), critérios morfológicos. **Algoritmo de Vereckei** (derivação aVR). Cardiopatia estrutural favorece taquicardia ventricular; **na dúvida, tratar como ventricular**.'
              ]
            },
            {
              id: '3.7-t1-r4',
              cells: [
                'Tratamento instável',
                '**Cardioversão sincronizada 100–200 J.**'
              ]
            },
            {
              id: '3.7-t1-r5',
              cells: [
                'Tratamento estável monomórfica',
                '**Amiodarona 150 mg venosa** em 10 minutos, depois infusão contínua; alternativas: procainamida, lidocaína (isquêmica). **Evitar verapamil** (colapso).'
              ]
            },
            {
              id: '3.7-t1-r6',
              cells: [
                'Prevenção',
                'Cardioversor-desfibrilador implantável (fração de ejeção ≤35% ou após arritmia sustentada sem causa reversível); ablação por cateter; tratar isquemia.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.8',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.8 Taquicardia ventricular polimórfica, Torsades de Pointes e fibrilação ventricular',
      tables: [
        {
          id: '3.8-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.8-t1-r1',
              cells: [
                'Taquicardia ventricular polimórfica',
                'Associada a **isquemia miocárdica aguda**: desfibrilação assincrônica se instável e suporte coronariano agudo.'
              ]
            },
            {
              id: '3.8-t1-r2',
              cells: [
                'Torsades de Pointes: definição',
                'Taquicardia ventricular polimórfica com **intervalo QT prolongado**; o eixo do QRS gira em torno da linha de base.'
              ]
            },
            {
              id: '3.8-t1-r3',
              cells: [
                'Causas de QT longo',
                'Congênito (Romano-Ward, Jervell e Lange-Nielsen) ou adquirido: **antiarrítmicos** (amiodarona, sotalol, quinidina), **psicotrópicos** (haloperidol, tricíclicos), **macrolídeos**, fluoroquinolonas, ondansetrona, metadona; **hipocalemia, hipomagnesemia, hipocalcemia**, bradicardia.'
              ]
            },
            {
              id: '3.8-t1-r4',
              cells: [
                'Tratamento de Torsades',
                '**Sulfato de magnésio 2 g venoso em bolus**, mesmo com magnésio normal; corrigir potássio; suspender fármacos; **marcapasso provisório ou isoproterenol** para aumentar a frequência e encurtar o QT; **desfibrilação** se sem pulso. Evitar antiarrítmicos que prolongam o QT.'
              ]
            },
            {
              id: '3.8-t1-r5',
              cells: [
                'Fibrilação ventricular',
                'Ritmo de parada **chocável**. Compressões de alta qualidade, **desfibrilação imediata (200 J bifásico)**, adrenalina 1 mg a cada 3–5 minutos (após o 2º choque), **amiodarona 300 mg** após o 3º choque. Tratar causas reversíveis; cuidados pós-parada (controle de temperatura, coronariografia).'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.9',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.9 Bradiarritmias e bloqueios de condução',
      tables: [
        {
          id: '3.9-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.9-t1-r1',
              cells: [
                'Definição',
                'Frequência <50–60 por minuto: bradicardia sinusal, pausa e parada sinusal, **síndrome taqui-bradi** (doença do nó sinusal) e bloqueios atrioventriculares.'
              ]
            },
            {
              id: '3.9-t1-r2',
              cells: [
                'Bloqueio de 1º grau',
                '**PR >200 ms fixo**; benigno; observar.'
              ]
            },
            {
              id: '3.9-t1-r3',
              cells: [
                'Bloqueio de 2º grau Mobitz I (Wenckebach)',
                '**Alongamento progressivo do PR** até uma onda P não conduzida; nodal; geralmente benigno; comum em atletas, infarto inferior, fármacos.'
              ]
            },
            {
              id: '3.9-t1-r4',
              cells: [
                'Bloqueio de 2º grau Mobitz II',
                '**PR constante e bloqueio súbito** da onda P; **infranodal (His-Purkinje)**, QRS frequentemente largo; **alto risco de bloqueio total**: marcapasso definitivo.'
              ]
            },
            {
              id: '3.9-t1-r5',
              cells: [
                'Bloqueio de 3º grau (total)',
                '**Dissociação atrioventricular completa**; escape juncional (QRS estreito, 40–60, mais estável) ou ventricular (QRS largo, 20–40, instável); síncope de Stokes-Adams.'
              ]
            },
            {
              id: '3.9-t1-r6',
              cells: [
                'Causas',
                'Fibrose degenerativa, isquemia (infarto inferior reversível; anterior, pior), fármacos (betabloqueador, bloqueador de cálcio, digoxina, amiodarona), hipotireoidismo, hipercalemia, apneia, **doença de Chagas**, miocardite, doença de Lyme.'
              ]
            },
            {
              id: '3.9-t1-r7',
              cells: [
                'Marcapasso definitivo',
                'Bloqueio total ou Mobitz II; doença do nó sinusal sintomática; pausas prolongadas sintomáticas.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3.10',
      chapterId: 3,
      chapterTitle: '3. ARRITMIAS CARDÍACAS',
      title: '3.10 Manejo das bradiarritmias no pronto-atendimento',
      tables: [
        {
          id: '3.10-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '3.10-t1-r1',
              cells: [
                'Avaliação',
                'Instabilidade pelos "4 D" (dispneia, dor torácica, diminuição da consciência, diminuição da pressão).'
              ]
            },
            {
              id: '3.10-t1-r2',
              cells: [
                'Primeira linha',
                '**Atropina 0,5 a 1 mg venosa a cada 3–5 minutos, máximo 3 mg.** **Ineficaz ou contraindicada** no bloqueio infranodal de alto grau (Mobitz II, total com QRS largo) e em **transplantados cardíacos**.'
              ]
            },
            {
              id: '3.10-t1-r3',
              cells: [
                'Refratária à atropina',
                '**Marcapasso transcutâneo** (com sedoanalgesia) ou infusão de **dopamina 2–20 mcg/kg/min** ou **adrenalina 2–10 mcg/min**, como ponte para marcapasso transvenoso provisório e definitivo.'
              ]
            },
            {
              id: '3.10-t1-r4',
              cells: [
                'Causas e antídotos',
                'Suspender fármacos causadores; corrigir potássio; **glucagon** (betabloqueador e bloqueador de cálcio), cálcio, **fragmentos Fab de digoxina**.'
              ]
            },
            {
              id: '3.10-t1-r5',
              cells: [
                'Estável',
                'Observação e monitorização (cautela em infarto inferior).'
              ]
            }
          ]
        }
      ]
    }
  ]
};
