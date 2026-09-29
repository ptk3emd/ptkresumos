import { Chapter } from '../types/clinical';

export const chapter2: Chapter = {
  id: 2,
  title: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
  shortTitle: 'Hipertensão',
  iconName: 'HeartPulse',
  note: 'Atualizado conforme a Diretriz Brasileira de Hipertensão Arterial 2025 (SBC/SBH/SBN). Principais mudanças: 120/80 passa a ser pré-hipertensão, meta única <130/80, estratificação pelo escore PREVENT, combinação dupla inicial para a maioria e fim do termo "urgência hipertensiva".',
  topics: [
    {
      id: '2.1',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.1 Hipertensão arterial: diagnóstico, classificação e metas',
      tables: [
        {
          id: '2.1-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.1-t1-r1',
              cells: [
                'Definição',
                'Pressão arterial sustentada **≥140/90 mmHg no consultório**, com técnica correta, confirmada em **duas ou mais consultas** (intervalo de dias a semanas) **ou** por monitorização residencial ou ambulatorial. Diagnóstico já na primeira consulta se **≥180/110** ou se houver lesão de órgão-alvo ou doença cardiovascular.'
              ]
            },
            {
              id: '2.1-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                '90–95% primária (genética, sal, obesidade, sedentarismo, álcool, apneia; ativação simpática e do sistema renina-angiotensina-aldosterona, disfunção endotelial, rigidez arterial); 5–10% secundária.'
              ]
            },
            {
              id: '2.1-t1-r3',
              cells: [
                'Classificação',
                '**Normal**: <120 **e** <80. **Pré-hipertensão**: 120–139 e/ou 80–89 (**novidade de 2025**: 120/80 deixou de ser normal; as categorias "ótima" e "normal 120–129" foram extintas). **Estágio 1**: 140–159 e/ou 90–99; **estágio 2**: 160–179 e/ou 100–109; **estágio 3**: ≥180 e/ou ≥110. Se sistólica e diastólica caírem em categorias diferentes, vale a mais alta. Hipertensão sistólica isolada: sistólica ≥140 com diastólica <90.'
              ]
            },
            {
              id: '2.1-t1-r4',
              cells: [
                'Diagnóstico',
                'Consultório ≥140/90. **Monitorização residencial (MRPA)**: média ≥130/80. **Monitorização ambulatorial de 24 horas (MAPA)**: 24 horas ≥130/80; vigília ≥135/85; sono ≥120/70. **Hipertensão do avental branco**: consultório ≥140/90 e fora dele <130/80. **Mascarada**: consultório <140/90 e fora dele ≥130/80. Nos tratados, os equivalentes são "efeito do avental branco" e "hipertensão mascarada não controlada".'
              ]
            },
            {
              id: '2.1-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Creatinina e taxa de filtração glomerular, potássio, sódio, glicemia de jejum, perfil lipídico, ácido úrico, urina tipo 1, albuminúria, eletrocardiograma; fundo de olho e ecocardiograma se indicado. Procurar lesão de órgão-alvo (hipertrofia ventricular, albuminúria, retinopatia).'
              ]
            },
            {
              id: '2.1-t1-r6',
              cells: [
                'Estratificação de risco',
                'Sem doença cardiovascular estabelecida: **escore PREVENT** (risco cardiovascular em 10 anos; substitui o escore de Framingham). **Alto risco automático**: doença cardiovascular manifesta, **diabetes**, **doença renal crônica**, hipercolesterolemia familiar ou **lesão de órgão-alvo**.'
              ]
            },
            {
              id: '2.1-t1-r7',
              cells: [
                'Metas',
                '**Meta única <130/80 para todos os hipertensos**, independentemente do risco e da idade, se tolerada. Quem não tolera: a **menor pressão tolerada**. Idosos frágeis ou ≥80 anos: individualizar, com atenção a hipotensão ortostática e quedas.'
              ]
            },
            {
              id: '2.1-t1-r8',
              cells: [
                'Complicações',
                'Acidente vascular encefálico, infarto, insuficiência cardíaca, doença renal, retinopatia, aneurisma e dissecção de aorta, demência.'
              ]
            },
            {
              id: '2.1-t1-r9',
              cells: [
                'Tratamento e conduta',
                '**Medidas não medicamentosas para todos**: sódio <2 g/dia (≈5 g de sal), dieta DASH, perda de peso, atividade física aeróbica ≥150 min/semana + exercício resistido, moderar álcool, cessar tabagismo, sono adequado. **Quando medicar**: pré-hipertensão de baixo risco: só medidas não medicamentosas; **pré-hipertensão 130–139/80–89 de alto risco**: medidas por 3 meses e, se fora da meta, medicamento; **hipertensão estágio 1, inclusive de baixo risco**: medicamento **já ao diagnóstico** (a diretriz de 2025 abandonou os 3–6 meses de espera); estágios 2 e 3, diabetes ou doença renal: medicamento imediato em combinação.'
              ]
            }
          ]
        },
        {
          id: '2.1-t2',
          subheading: 'Estratificação de risco pelo esquema tradicional (passo a passo)',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.1-t2-r1',
              cells: [
                'Contexto',
                'A Diretriz 2025 recomenda o **escore PREVENT** (ver linha "Estratificação de risco" acima). O passo a passo abaixo é o **esquema tradicional com escore de Framingham**, ainda usado em muitos serviços e cobrado em provas; as tabelas de pontos estão logo a seguir.'
              ]
            },
            {
              id: '2.1-t2-r2',
              cells: [
                '1º passo: alto risco direto',
                'É de **alto risco** se tiver qualquer um: **diabetes mellitus**, **AVC** ou **infarto agudo do miocárdio** prévios, **lesão de órgão-alvo** ou doença aterosclerótica — **AIT**, **hipertrofia de ventrículo esquerdo**, **nefropatia**, **retinopatia**, **aneurisma de aorta abdominal**, **estenose de carótida sintomática**.'
              ]
            },
            {
              id: '2.1-t2-r3',
              cells: [
                '2º passo: contar outros fatores de risco',
                '**Tabagismo**, hipertensão, **obesidade**, **sedentarismo**, **sexo masculino**, **idade >65 anos** e **história familiar** de evento cardiovascular em parente de primeiro grau (**homem <55 anos; mulher <65 anos**).'
              ]
            },
            {
              id: '2.1-t2-r4',
              cells: [
                '3º passo: classificar',
                '**0–1 fator de risco**: baixo risco. **≥2 fatores**: calcular o **escore de Framingham** (probabilidade de infarto ou AVC em 10 anos): **risco >20%: alto**; **risco <20%: intermediário**.'
              ]
            }
          ]
        },
        {
          id: '2.1-t3',
          subheading: 'Framingham: pontos por idade',
          headers: ['Idade (anos)', 'Homens', 'Mulheres'],
          rows: [
            {
              id: '2.1-t3-r1',
              cells: [
                '20–34',
                '−9',
                '−7'
              ]
            },
            {
              id: '2.1-t3-r2',
              cells: [
                '35–39',
                '−4',
                '−3'
              ]
            },
            {
              id: '2.1-t3-r3',
              cells: [
                '40–44',
                '0',
                '0'
              ]
            },
            {
              id: '2.1-t3-r4',
              cells: [
                '45–49',
                '3',
                '3'
              ]
            },
            {
              id: '2.1-t3-r5',
              cells: [
                '50–54',
                '6',
                '6'
              ]
            },
            {
              id: '2.1-t3-r6',
              cells: [
                '55–59',
                '8',
                '8'
              ]
            },
            {
              id: '2.1-t3-r7',
              cells: [
                '60–64',
                '10',
                '10'
              ]
            },
            {
              id: '2.1-t3-r8',
              cells: [
                '65–69',
                '11',
                '12'
              ]
            },
            {
              id: '2.1-t3-r9',
              cells: [
                '70–74',
                '12',
                '14'
              ]
            },
            {
              id: '2.1-t3-r10',
              cells: [
                '75–79',
                '13',
                '16'
              ]
            }
          ]
        },
        {
          id: '2.1-t4',
          subheading: 'Framingham (homens): pontos por colesterol total e idade',
          headers: ['Colesterol total (mg/dL)', 'Idade 20–39', 'Idade 40–49', 'Idade 50–59', 'Idade 60–69', 'Idade 70–79'],
          rows: [
            {
              id: '2.1-t4-r1',
              cells: [
                '<160',
                '0',
                '0',
                '0',
                '0',
                '0'
              ]
            },
            {
              id: '2.1-t4-r2',
              cells: [
                '160–199',
                '4',
                '3',
                '2',
                '1',
                '0'
              ]
            },
            {
              id: '2.1-t4-r3',
              cells: [
                '200–239',
                '7',
                '5',
                '3',
                '1',
                '0'
              ]
            },
            {
              id: '2.1-t4-r4',
              cells: [
                '240–279',
                '9',
                '6',
                '4',
                '2',
                '1'
              ]
            },
            {
              id: '2.1-t4-r5',
              cells: [
                '≥280',
                '11',
                '8',
                '5',
                '3',
                '1'
              ]
            }
          ]
        },
        {
          id: '2.1-t5',
          subheading: 'Framingham (mulheres): pontos por colesterol total e idade',
          headers: ['Colesterol total (mg/dL)', 'Idade 20–39', 'Idade 40–49', 'Idade 50–59', 'Idade 60–69', 'Idade 70–79'],
          rows: [
            {
              id: '2.1-t5-r1',
              cells: [
                '<160',
                '0',
                '0',
                '0',
                '0',
                '0'
              ]
            },
            {
              id: '2.1-t5-r2',
              cells: [
                '160–199',
                '4',
                '3',
                '2',
                '1',
                '1'
              ]
            },
            {
              id: '2.1-t5-r3',
              cells: [
                '200–239',
                '8',
                '6',
                '4',
                '2',
                '1'
              ]
            },
            {
              id: '2.1-t5-r4',
              cells: [
                '240–279',
                '11',
                '8',
                '5',
                '3',
                '2'
              ]
            },
            {
              id: '2.1-t5-r5',
              cells: [
                '≥280',
                '13',
                '10',
                '7',
                '4',
                '2'
              ]
            }
          ]
        },
        {
          id: '2.1-t6',
          subheading: 'Framingham: pontos por tabagismo e idade',
          headers: ['Grupo', 'Idade 20–39', 'Idade 40–49', 'Idade 50–59', 'Idade 60–69', 'Idade 70–79'],
          rows: [
            {
              id: '2.1-t6-r1',
              cells: [
                'Homens não fumantes',
                '0',
                '0',
                '0',
                '0',
                '0'
              ]
            },
            {
              id: '2.1-t6-r2',
              cells: [
                'Homens fumantes',
                '8',
                '5',
                '3',
                '1',
                '1'
              ]
            },
            {
              id: '2.1-t6-r3',
              cells: [
                'Mulheres não fumantes',
                '0',
                '0',
                '0',
                '0',
                '0'
              ]
            },
            {
              id: '2.1-t6-r4',
              cells: [
                'Mulheres fumantes',
                '9',
                '7',
                '4',
                '2',
                '1'
              ]
            }
          ]
        },
        {
          id: '2.1-t7',
          subheading: 'Framingham: pontos por HDL (homens e mulheres)',
          headers: ['HDL (mg/dL)', 'Pontos'],
          rows: [
            {
              id: '2.1-t7-r1',
              cells: [
                '≥60',
                '−1'
              ]
            },
            {
              id: '2.1-t7-r2',
              cells: [
                '50–59',
                '0'
              ]
            },
            {
              id: '2.1-t7-r3',
              cells: [
                '40–49',
                '1'
              ]
            },
            {
              id: '2.1-t7-r4',
              cells: [
                '<40',
                '2'
              ]
            }
          ]
        },
        {
          id: '2.1-t8',
          subheading: 'Framingham: pontos por pressão arterial sistólica',
          headers: ['PA sistólica (mmHg)', 'Homens não tratados', 'Homens tratados', 'Mulheres não tratadas', 'Mulheres tratadas'],
          rows: [
            {
              id: '2.1-t8-r1',
              cells: [
                '<120',
                '0',
                '0',
                '0',
                '0'
              ]
            },
            {
              id: '2.1-t8-r2',
              cells: [
                '120–129',
                '0',
                '1',
                '1',
                '3'
              ]
            },
            {
              id: '2.1-t8-r3',
              cells: [
                '130–139',
                '1',
                '2',
                '2',
                '4'
              ]
            },
            {
              id: '2.1-t8-r4',
              cells: [
                '140–159',
                '1',
                '2',
                '3',
                '5'
              ]
            },
            {
              id: '2.1-t8-r5',
              cells: [
                '≥160',
                '2',
                '3',
                '4',
                '6'
              ]
            }
          ]
        },
        {
          id: '2.1-t9',
          subheading: 'Framingham (homens): total de pontos e risco em 10 anos',
          headers: ['Total de pontos', 'Risco em 10 anos (%)'],
          rows: [
            {
              id: '2.1-t9-r1',
              cells: [
                '<0',
                '<1'
              ]
            },
            {
              id: '2.1-t9-r2',
              cells: [
                '0',
                '1'
              ]
            },
            {
              id: '2.1-t9-r3',
              cells: [
                '1',
                '1'
              ]
            },
            {
              id: '2.1-t9-r4',
              cells: [
                '2',
                '1'
              ]
            },
            {
              id: '2.1-t9-r5',
              cells: [
                '3',
                '1'
              ]
            },
            {
              id: '2.1-t9-r6',
              cells: [
                '4',
                '1'
              ]
            },
            {
              id: '2.1-t9-r7',
              cells: [
                '5',
                '2'
              ]
            },
            {
              id: '2.1-t9-r8',
              cells: [
                '6',
                '2'
              ]
            },
            {
              id: '2.1-t9-r9',
              cells: [
                '7',
                '3'
              ]
            },
            {
              id: '2.1-t9-r10',
              cells: [
                '8',
                '4'
              ]
            },
            {
              id: '2.1-t9-r11',
              cells: [
                '9',
                '5'
              ]
            },
            {
              id: '2.1-t9-r12',
              cells: [
                '10',
                '6'
              ]
            },
            {
              id: '2.1-t9-r13',
              cells: [
                '11',
                '8'
              ]
            },
            {
              id: '2.1-t9-r14',
              cells: [
                '12',
                '10'
              ]
            },
            {
              id: '2.1-t9-r15',
              cells: [
                '13',
                '12'
              ]
            },
            {
              id: '2.1-t9-r16',
              cells: [
                '14',
                '16'
              ]
            },
            {
              id: '2.1-t9-r17',
              cells: [
                '15',
                '20'
              ]
            },
            {
              id: '2.1-t9-r18',
              cells: [
                '16',
                '25'
              ]
            },
            {
              id: '2.1-t9-r19',
              cells: [
                '≥17',
                '≥30'
              ]
            }
          ]
        },
        {
          id: '2.1-t10',
          subheading: 'Framingham (mulheres): total de pontos e risco em 10 anos',
          headers: ['Total de pontos', 'Risco em 10 anos (%)'],
          rows: [
            {
              id: '2.1-t10-r1',
              cells: [
                '<9',
                '<1'
              ]
            },
            {
              id: '2.1-t10-r2',
              cells: [
                '9',
                '1'
              ]
            },
            {
              id: '2.1-t10-r3',
              cells: [
                '10',
                '1'
              ]
            },
            {
              id: '2.1-t10-r4',
              cells: [
                '11',
                '1'
              ]
            },
            {
              id: '2.1-t10-r5',
              cells: [
                '12',
                '1'
              ]
            },
            {
              id: '2.1-t10-r6',
              cells: [
                '13',
                '2'
              ]
            },
            {
              id: '2.1-t10-r7',
              cells: [
                '14',
                '2'
              ]
            },
            {
              id: '2.1-t10-r8',
              cells: [
                '15',
                '3'
              ]
            },
            {
              id: '2.1-t10-r9',
              cells: [
                '16',
                '4'
              ]
            },
            {
              id: '2.1-t10-r10',
              cells: [
                '17',
                '5'
              ]
            },
            {
              id: '2.1-t10-r11',
              cells: [
                '18',
                '6'
              ]
            },
            {
              id: '2.1-t10-r12',
              cells: [
                '19',
                '8'
              ]
            },
            {
              id: '2.1-t10-r13',
              cells: [
                '20',
                '11'
              ]
            },
            {
              id: '2.1-t10-r14',
              cells: [
                '21',
                '14'
              ]
            },
            {
              id: '2.1-t10-r15',
              cells: [
                '22',
                '17'
              ]
            },
            {
              id: '2.1-t10-r16',
              cells: [
                '23',
                '22'
              ]
            },
            {
              id: '2.1-t10-r17',
              cells: [
                '24',
                '27'
              ]
            },
            {
              id: '2.1-t10-r18',
              cells: [
                '≥25',
                '≥30'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.2',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.2 Hipertensão arterial: fármacos de primeira linha e combinações',
      tables: [
        {
          id: '2.2-t1',
          headers: ['Classe', 'Exemplos', 'Indicações preferenciais', 'Efeitos adversos e contraindicações'],
          rows: [
            {
              id: '2.2-t1-r1',
              cells: [
                'Inibidores da enzima conversora de angiotensina (IECA)',
                'Enalapril, captopril, ramipril',
                'Diabetes com albuminúria, insuficiência cardíaca, pós-infarto, doença renal',
                'Tosse (bradicinina), angioedema, hipercalemia; **contraindicados na gestação e na estenose bilateral de artéria renal**'
              ]
            },
            {
              id: '2.2-t1-r2',
              cells: [
                'Bloqueadores do receptor de angiotensina II (BRA)',
                'Losartana, valsartana, olmesartana',
                'Mesmas dos IECA, sem tosse',
                'Hipercalemia; contraindicados na gestação'
              ]
            },
            {
              id: '2.2-t1-r3',
              cells: [
                'Bloqueadores de canal de cálcio diidropiridínicos',
                'Anlodipino, nifedipino',
                'Idosos, hipertensão sistólica isolada, angina',
                'Edema de tornozelo, cefaleia, rubor'
              ]
            },
            {
              id: '2.2-t1-r4',
              cells: [
                'Diuréticos tiazídicos e similares',
                'Clortalidona, indapamida, hidroclorotiazida',
                'Idosos, osteoporose',
                'Hipocalemia, hiponatremia, hiperuricemia, hiperglicemia'
              ]
            },
            {
              id: '2.2-t1-r5',
              cells: [
                'Espironolactona',
                '—',
                'Quarto fármaco na resistente, hiperaldosteronismo',
                'Hipercalemia, ginecomastia; **eplerenona** é alternativa (incluída em 2025) se efeitos adversos'
              ]
            },
            {
              id: '2.2-t1-r6',
              cells: [
                'Betabloqueadores',
                'Bisoprolol, metoprolol, carvedilol',
                'Pós-infarto, insuficiência cardíaca com fração reduzida, fibrilação atrial',
                'Broncoespasmo, bradicardia. Não são primeira linha sem indicação específica: insuficiência cardíaca, angina, pós-infarto, fibrilação atrial, pacientes em diálise, mulheres que planejam engravidar'
              ]
            },
            {
              id: '2.2-t1-r7',
              cells: [
                'Combinação',
                '—',
                '**Combinação dupla inicial para a maioria dos hipertensos**, inclusive estágio 1: IECA ou BRA + bloqueador de cálcio **ou** + diurético tiazídico/similar, de preferência em **comprimido único**. **Monoterapia** apenas em: pré-hipertensão de alto risco, estágio 1 de baixo risco selecionado, **≥80 anos**, **frágeis** e hipotensão ortostática sintomática. Sem controle: **tripla** (IECA/BRA + bloqueador de cálcio + tiazídico), que controla ~90%; depois espironolactona',
                '**Nunca associar IECA e BRA** (nem com alisquireno)'
              ]
            }
          ]
        },
        {
          id: '2.2-t2',
          subheading: 'Tratamento não medicamentoso (mudança do estilo de vida)',
          headers: ['Medida', 'Recomendação', 'Redução esperada da PA'],
          rows: [
            {
              id: '2.2-t2-r1',
              cells: [
                'Restrição de sódio',
                'Material tradicional: **até 2,4 g de sódio/dia (~6 g de sal)**. **Diretriz 2025: <2 g de sódio/dia (~5 g de sal)**. Reduzir ultraprocessados, embutidos e temperos prontos.',
                'Cerca de 2–8 mmHg'
              ]
            },
            {
              id: '2.2-t2-r2',
              cells: [
                'Dieta DASH',
                'Rica em **potássio** (frutas e vegetais), com **cálcio** (laticínios desnatados) e pouca **gordura saturada e colesterol**. Cuidado com o potássio na doença renal avançada.',
                'Cerca de 8–14 mmHg'
              ]
            },
            {
              id: '2.2-t2-r3',
              cells: [
                'Atividade física',
                'Exercício **aeróbico, dinâmico e isométrico**, **3–6 vezes por semana**, em sessões de **30–60 minutos**.',
                'Cerca de 4–9 mmHg'
              ]
            },
            {
              id: '2.2-t2-r4',
              cells: [
                'Perda de peso',
                'Objetivo: **IMC entre 18,5 e 24,9**. Regra prática: **cada 1 kg perdido reduz cerca de 1 mmHg** na pressão.',
                'Cerca de 5–20 mmHg a cada 10 kg'
              ]
            },
            {
              id: '2.2-t2-r5',
              cells: [
                'Controle do estresse',
                'Psicoterapia, meditação e técnicas de relaxamento; sono adequado.',
                'Efeito variável'
              ]
            },
            {
              id: '2.2-t2-r6',
              cells: [
                'Álcool',
                'Controlar: **até 30 mL/dia de etanol** (≈625 mL de cerveja ou 240 mL de vinho) para homens; metade para mulheres e pessoas de menor peso.',
                'Cerca de 2–4 mmHg'
              ]
            },
            {
              id: '2.2-t2-r7',
              cells: [
                'Tabagismo',
                '**Cessar o tabagismo**: principal fator de risco cardiovascular modificável associado.',
                'Reduz risco cardiovascular global'
              ]
            }
          ]
        },
        {
          id: '2.2-t3',
          subheading: 'Abordagem terapêutica por estágio: esquema tradicional × Diretriz 2025',
          headers: ['Situação', 'Esquema tradicional', 'Diretriz 2025 (Brasil)'],
          rows: [
            {
              id: '2.2-t3-r1',
              cells: [
                'Pré-hipertensão (PA elevada)',
                'Apenas tratamento não medicamentoso',
                'Baixo risco: só medidas não medicamentosas; **alto risco**: medidas por 3 meses e, se fora da meta, medicamento'
              ]
            },
            {
              id: '2.2-t3-r2',
              cells: [
                'Estágio 1, risco baixo/intermediário',
                'Medidas não medicamentosas; se sem melhora em **1–2 meses**, **monoterapia**',
                '**Medicamento já ao diagnóstico**; monoterapia só em baixo risco selecionado, ≥80 anos e frágeis'
              ]
            },
            {
              id: '2.2-t3-r3',
              cells: [
                'Estágio 1 de alto risco; estágios 2 e 3',
                'Medidas + **dois fármacos de classes diferentes** desde o início',
                '**Combinação dupla inicial** (de preferência em comprimido único)'
              ]
            },
            {
              id: '2.2-t3-r4',
              cells: [
                'Sem atingir a meta',
                'Aumentar a dose e/ou associar 2º ou 3º fármaco e/ou trocar o medicamento',
                '**Tripla** (IECA/BRA + bloqueador de cálcio + tiazídico); depois espironolactona'
              ]
            },
            {
              id: '2.2-t3-r5',
              cells: [
                'Primeira e segunda linha',
                'Fármacos usados de início são de **primeira linha**; quando **3–4 classes** de primeira linha não bastam, passa-se a fármacos de **segunda linha**',
                'Espironolactona é o 4º fármaco de escolha na resistente'
              ]
            }
          ]
        },
        {
          id: '2.2-t4',
          subheading: 'Primeira linha: ficha por classe',
          headers: ['Classe', 'Mecanismo de ação', 'Indicação preferencial', 'Reações adversas', 'Quando evitar ou suspender', 'Exemplos e doses usuais*'],
          rows: [
            {
              id: '2.2-t4-r1',
              cells: [
                '**Diuréticos tiazídicos**',
                'Redução da volemia: inibem a reabsorção de **NaCl no túbulo contorcido distal**',
                'Anti-hipertensivo de escolha na população geral; muito bom em **negros e idosos**; osteoporose',
                'Clássicos **4 HIPO** (hipovolemia, **hipocalemia, hiponatremia, hipomagnesemia**) e **3 HIPER** (**hiperglicemia, hiperlipidemia, hiperuricemia**); impotência; *rash* cutâneo',
                'Gota, hipocalemia ou hiponatremia importantes; alergia a sulfonamida',
                'Hidroclorotiazida 12,5–25 mg/dia; **clortalidona 12,5–25 mg/dia**; indapamida 1,5 mg/dia'
              ]
            },
            {
              id: '2.2-t4-r2',
              cells: [
                '**IECA** (inibidores da enzima conversora de angiotensina)',
                'Bloqueiam a formação de angiotensina II; vasodilatação e menor retenção de sódio',
                'Diabetes com albuminúria, doença renal, insuficiência cardíaca com fração reduzida, pós-infarto',
                '**Tosse seca** (bradicinina), **angioedema**, **hipercalemia**, aumento da creatinina',
                '**Gestação**, estenose bilateral de artéria renal, angioedema prévio, hipercalemia grave',
                'Captopril 25–150 mg/dia (2–3×); enalapril 5–40 mg/dia (1–2×); ramipril 2,5–10 mg/dia'
              ]
            },
            {
              id: '2.2-t4-r3',
              cells: [
                '**BRA** (bloqueadores do receptor de angiotensina II)',
                'Bloqueiam o receptor AT1 da angiotensina II',
                'Mesmas indicações dos IECA, **sem tosse**; alternativa na intolerância ao IECA',
                'Hipercalemia, aumento da creatinina; angioedema raro',
                '**Gestação**, estenose bilateral de artéria renal. **Nunca associar IECA + BRA** (mecanismos semelhantes)',
                'Losartana 50–100 mg/dia; valsartana 80–320 mg/dia; olmesartana 20–40 mg/dia'
              ]
            },
            {
              id: '2.2-t4-r4',
              cells: [
                '**Bloqueadores de canal de cálcio diidropiridínicos**',
                'Vasodilatação arterial por bloqueio dos canais de cálcio tipo L',
                'Idosos, hipertensão sistólica isolada, angina, doença arterial periférica',
                '**Edema de tornozelo**, cefaleia, rubor, taquicardia reflexa (nifedipino de curta ação)',
                'Insuficiência cardíaca com fração reduzida grave (cautela); evitar nifedipino de curta ação',
                'Anlodipino 2,5–10 mg/dia; nifedipino retard 20–60 mg/dia'
              ]
            }
          ]
        },
        {
          id: '2.2-t5',
          subheading: 'Segunda linha e outras classes: ficha por classe',
          headers: ['Classe', 'Mecanismo de ação', 'Indicação', 'Reações adversas', 'Quando evitar ou suspender', 'Exemplos e doses usuais*'],
          rows: [
            {
              id: '2.2-t5-r1',
              cells: [
                '**Betabloqueadores**',
                'Redução do débito cardíaco por antagonizar catecolaminas endógenas nos receptores beta-adrenérgicos. **Não seletivos** bloqueiam β1 (miocárdio) e β2 (músculo liso, pulmões, vasos). **Seletivos** bloqueiam sobretudo β1 (coração, sistema nervoso e rins), sem os efeitos periféricos indesejáveis; em doses muito altas perdem a seletividade',
                'Indivíduos com outra doença que justifique: **enxaqueca**, **tremor essencial**, taquiarritmias, **doença coronariana sintomática**, **insuficiência cardíaca sistólica**, **pós-infarto**. Não são de primeira linha como monoterapia sem essas indicações',
                '**Fadiga, impotência, broncoespasmo, insônia, indisposição**; bradicardia e bloqueio AV; mascaram hipoglicemia',
                '**Broncoespasmo** (asma/DPOC) e **depressão**; bloqueio AV avançado; doença arterial periférica grave',
                'Não seletivo: **propranolol 40–160 mg/dia em 2 tomadas**. Seletivos: atenolol 25–100 mg/dia; metoprolol succinato 50–200 mg/dia; bisoprolol 2,5–10 mg/dia. Com ação vasodilatadora: carvedilol 12,5–50 mg/dia (2×)'
              ]
            },
            {
              id: '2.2-t5-r2',
              cells: [
                '**Antagonistas da aldosterona**',
                'Bloqueio do receptor mineralocorticoide (poupador de potássio)',
                '**4º fármaco na resistente**, hiperaldosteronismo, insuficiência cardíaca',
                '**Hipercalemia**, ginecomastia (espironolactona)',
                'Hipercalemia, insuficiência renal avançada; **eplerenona** se ginecomastia',
                'Espironolactona 25–50 mg/dia (até 100); eplerenona 25–50 mg/dia'
              ]
            },
            {
              id: '2.2-t5-r3',
              cells: [
                '**Diuréticos de alça**',
                'Bloqueiam o cotransportador Na-K-2Cl na alça de Henle',
                'Doença renal com TFG <30 mL/min, congestão, insuficiência cardíaca',
                'Hipocalemia, hipovolemia, ototoxicidade',
                'Depleção de volume; alergia a sulfonamida',
                'Furosemida 20–80 mg/dia (1–2×)'
              ]
            },
            {
              id: '2.2-t5-r4',
              cells: [
                '**Bloqueadores de canal de cálcio não diidropiridínicos**',
                'Reduzem frequência e condução cardíacas além de vasodilatar',
                'Fibrilação atrial com resposta ventricular alta, angina',
                'Bradicardia, bloqueio AV, constipação (verapamil)',
                'Insuficiência cardíaca com fração reduzida; associação com betabloqueador',
                'Verapamil 120–360 mg/dia; diltiazem 120–360 mg/dia'
              ]
            },
            {
              id: '2.2-t5-r5',
              cells: [
                '**Alfabloqueadores**',
                'Bloqueiam receptores alfa-1 (vasodilatação)',
                'Hiperplasia prostática benigna; quinto fármaco na resistente',
                '**Hipotensão postural e síncope da primeira dose**, tontura',
                'Hipotensão ortostática',
                'Doxazosina 1–16 mg/dia'
              ]
            },
            {
              id: '2.2-t5-r6',
              cells: [
                '**Simpatolíticos de ação central**',
                'Estimulam alfa-2 centrais e reduzem o tônus simpático',
                '**Gestação (metildopa)**, resistente ou refratária',
                'Sedação, boca seca, **hipertensão de rebote** na suspensão brusca de clonidina; hepatotoxicidade (metildopa)',
                'Depressão; suspensão abrupta da clonidina',
                'Clonidina 0,1–0,6 mg/dia (2–3×); metildopa 500–2.000 mg/dia (2–3×)'
              ]
            },
            {
              id: '2.2-t5-r7',
              cells: [
                '**Vasodilatadores diretos**',
                'Relaxamento direto da musculatura lisa arterial',
                'Resistente ou refratária; **hidralazina** na gestação e emergências',
                'Taquicardia reflexa, retenção hídrica; **lúpus induzido por hidralazina**; **hirsutismo e derrame pericárdico com minoxidil**',
                'Angina não protegida por betabloqueador; associar diurético e betabloqueador',
                'Hidralazina 50–200 mg/dia (2–3×); minoxidil 2,5–40 mg/dia'
              ]
            }
          ]
        },
        {
          id: '2.2-t6',
          subheading: 'Forte indicação para escolha farmacológica',
          headers: ['Condição associada', 'Fármacos preferidos', 'Evitar ou cuidados'],
          rows: [
            {
              id: '2.2-t6-r1',
              cells: [
                'Diabetes com albuminúria; doença renal crônica',
                '**IECA ou BRA**; tiazídico/alça conforme TFG; iSGLT2 pelos benefícios renais',
                'Dosar creatinina e potássio 1–2 semanas após iniciar ou aumentar a dose'
              ]
            },
            {
              id: '2.2-t6-r2',
              cells: [
                'Insuficiência cardíaca com fração reduzida',
                'IECA/BRA (ou sacubitril-valsartana), **betabloqueador** (bisoprolol, carvedilol, metoprolol succinato), espironolactona, diurético de alça',
                '**Evitar bloqueadores de cálcio não diidropiridínicos**'
              ]
            },
            {
              id: '2.2-t6-r3',
              cells: [
                'Pós-infarto e doença coronariana sintomática',
                '**Betabloqueador + IECA/BRA**; bloqueador de cálcio na angina',
                'Evitar nifedipino de curta ação'
              ]
            },
            {
              id: '2.2-t6-r4',
              cells: [
                'Idosos e hipertensão sistólica isolada',
                '**Tiazídico** e **bloqueador de cálcio diidropiridínico**',
                'Hipotensão ortostática e quedas'
              ]
            },
            {
              id: '2.2-t6-r5',
              cells: [
                'Negros',
                '**Tiazídico e bloqueador de cálcio** (respondem melhor)',
                'Menor resposta a monoterapia com IECA/BRA/betabloqueador'
              ]
            },
            {
              id: '2.2-t6-r6',
              cells: [
                'Enxaqueca; tremor essencial',
                'Betabloqueador (propranolol); bloqueador de cálcio na enxaqueca',
                'Asma'
              ]
            },
            {
              id: '2.2-t6-r7',
              cells: [
                'Fibrilação atrial e taquiarritmias',
                'Betabloqueador; bloqueador de cálcio não diidropiridínico',
                'Bloqueio AV'
              ]
            },
            {
              id: '2.2-t6-r8',
              cells: [
                'Osteoporose',
                'Tiazídico (reduz a calciúria)',
                'Gota e hipercalcemia'
              ]
            },
            {
              id: '2.2-t6-r9',
              cells: [
                'Hiperplasia prostática benigna',
                'Alfabloqueador (doxazosina)',
                'Hipotensão postural'
              ]
            },
            {
              id: '2.2-t6-r10',
              cells: [
                'Gestação',
                '**Metildopa, nifedipino e hidralazina**',
                '**IECA, BRA, alisquireno e espironolactona são contraindicados**'
              ]
            },
            {
              id: '2.2-t6-r11',
              cells: [
                'Asma e DPOC',
                'IECA/BRA, bloqueador de cálcio, tiazídico',
                '**Betabloqueadores** (sobretudo não seletivos)'
              ]
            },
            {
              id: '2.2-t6-r12',
              cells: [
                'Gota',
                'Losartana (efeito uricosúrico), bloqueador de cálcio',
                'Evitar tiazídicos e diuréticos de alça'
              ]
            }
          ]
        },
        {
          id: '2.2-t7',
          subheading: 'Observações sobre as doses (*)',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.2-t7-r1',
              cells: [
                'Como usar',
                '*As doses são **valores usuais de referência** para estudo, com base no material tradicional e nas diretrizes; conferir sempre a **bula** e a **diretriz vigente**, ajustando a idade, função renal, comorbidades e interações.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.3',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.3 Hipertensão arterial resistente e pseudorresistência',
      tables: [
        {
          id: '2.3-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.3-t1-r1',
              cells: [
                'Definição',
                '**Resistente**: pressão **acima da meta (≥130/80)** apesar de **três fármacos** de classes diferentes (bloqueador do sistema renina-angiotensina, bloqueador de cálcio e **diurético tiazídico de longa ação**) em **doses máximas toleradas**, com adesão confirmada. **Resistente controlada**: na meta com **quatro ou mais**. **Refratária**: fora da meta com **cinco ou mais**, incluindo espironolactona (predomínio simpático).'
              ]
            },
            {
              id: '2.3-t1-r2',
              cells: [
                'Pseudorresistência',
                'Efeito do avental branco, medida incorreta (manguito pequeno), **má adesão** (principal), inércia terapêutica, doses baixas, interferentes (anti-inflamatórios, corticoides, descongestionantes, contraceptivos, cocaína, álcool, alcaçuz), excesso de sal.'
              ]
            },
            {
              id: '2.3-t1-r3',
              cells: [
                'Causas verdadeiras',
                'Obesidade, apneia do sono, **hiperaldosteronismo primário**, doença renal crônica, estenose de artéria renal, feocromocitoma, síndrome de Cushing.'
              ]
            },
            {
              id: '2.3-t1-r4',
              cells: [
                'Diagnóstico',
                'Confirmar com monitorização ambulatorial ou residencial; checar adesão e interferentes.'
              ]
            },
            {
              id: '2.3-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Relação aldosterona/renina, potássio, creatinina, polissonografia, Doppler ou angiotomografia de artérias renais conforme suspeita.'
              ]
            },
            {
              id: '2.3-t1-r6',
              cells: [
                'Tratamento e conduta',
                'Otimizar diurético (clortalidona ou indapamida; alça se taxa de filtração <30); **espironolactona 25–50 mg como quarto fármaco de escolha** (eplerenona se ginecomastia), com vigilância do potássio; quinto fármaco: betabloqueador, depois simpatolítico central (clonidina), alfabloqueador, hidralazina ou minoxidil. **Refratária** responde melhor a simpatolíticos, betabloqueadores e alfabloqueadores; **denervação renal** em casos selecionados. Tratar a causa secundária.'
              ]
            }
          ]
        },
        {
          id: '2.3-t2',
          subheading: 'Pensar em hipertensão resistente: definição tradicional e o que investigar',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.3-t2-r1',
              cells: [
                'Definição tradicional',
                'Falta de resposta ao tratamento com **3 classes de fármacos distintas, sendo necessariamente uma delas um diurético**.'
              ]
            },
            {
              id: '2.3-t2-r2',
              cells: [
                'Diante de má resposta, pensar em',
                '1) **Falta de aderência ao tratamento**; 2) **efeito do avental branco** (confirmar por MRPA/MAPA); 3) **hipertensão arterial secundária**, isto é, com condição subjacente específica identificada (hiperaldosteronismo, apneia do sono, doença renovascular, feocromocitoma, Cushing, doença renal).'
              ]
            }
          ]
        },
        {
          id: '2.3-t3',
          subheading: 'Quando internar e seguimento',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.3-t3-r1',
              cells: [
                'Quando internar',
                '**Emergência hipertensiva** (elevação acentuada com lesão aguda de órgão-alvo: encefalopatia, dissecção de aorta, edema agudo de pulmão, infarto, AVC, pré-eclâmpsia grave/eclâmpsia, lesão renal aguda); **hipertensão estágio 3 sintomática** ou sem acesso a controle ambulatorial; intolerância à via oral; gestante com PA ≥160/110. Ver 2.10.'
              ]
            },
            {
              id: '2.3-t3-r2',
              cells: [
                'Seguimento',
                'Retornos frequentes (**mensais ou a cada 2–4 semanas**) até atingir a meta; depois a cada **3–6 meses**. Em cada visita: **adesão, efeitos adversos, medidas não medicamentosas** e medida correta da pressão (MRPA/MAPA quando possível). Exames anuais: **creatinina/TFG, potássio, glicemia, perfil lipídico, albuminúria, eletrocardiograma**. Após iniciar IECA/BRA/diurético: dosar creatinina e potássio em 1–2 semanas.'
              ]
            },
            {
              id: '2.3-t3-r3',
              cells: [
                'Exemplo didático de prescrição ambulatorial',
                'Iniciando combinação dupla em comprimido único: **losartana 50 mg + anlodipino 5 mg, 1 comprimido VO pela manhã**; ajustar a dose ou acrescentar **clortalidona 12,5 mg** se fora da meta; **espironolactona 25 mg** como quarto fármaco. Orientar dieta com pouco sal, atividade física e retorno em 2–4 semanas.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.4',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.4 Hiperaldosteronismo primário',
      tables: [
        {
          id: '2.4-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.4-t1-r1',
              cells: [
                'Definição',
                'Produção autônoma de aldosterona, independente da renina.'
              ]
            },
            {
              id: '2.4-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                '**Hiperplasia adrenal bilateral** (mais comum) ou **adenoma de Conn**; raramente carcinoma. Retenção de sódio e água, perda de potássio e hidrogênio, supressão da renina.'
              ]
            },
            {
              id: '2.4-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Hipertensão frequentemente resistente; **hipocalemia** espontânea ou induzida por diuréticos (fraqueza, cãibras, poliúria); alcalose metabólica; sem edema. O potássio pode ser normal.'
              ]
            },
            {
              id: '2.4-t1-r4',
              cells: [
                'Quando rastrear',
                'Hipertensão resistente, hipocalemia, incidentaloma adrenal, apneia do sono, hipertensão precoce.'
              ]
            },
            {
              id: '2.4-t1-r5',
              cells: [
                'Diagnóstico',
                'Rastreamento: **relação aldosterona plasmática/atividade de renina plasmática >30**, com renina suprimida. Corrigir o potássio e suspender espironolactona por 4–6 semanas. Teste confirmatório (sobrecarga salina, captopril).'
              ]
            },
            {
              id: '2.4-t1-r6',
              cells: [
                'Exames e resultados esperados',
                'Aldosterona alta, renina baixa, potássio baixo; tomografia de adrenais (adenoma ou hiperplasia); **cateterismo de veias adrenais** para distinguir doença unilateral de bilateral.'
              ]
            },
            {
              id: '2.4-t1-r7',
              cells: [
                'Complicações',
                'Lesão de órgão-alvo maior que na hipertensão essencial, fibrilação atrial, doença renal.'
              ]
            },
            {
              id: '2.4-t1-r8',
              cells: [
                'Tratamento e conduta',
                '**Adenoma unilateral: adrenalectomia**; hiperplasia bilateral ou sem cirurgia: **espironolactona** (ou eplerenona).'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.5',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.5 Feocromocitoma',
      tables: [
        {
          id: '2.5-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.5-t1-r1',
              cells: [
                'Definição',
                'Tumor de células cromafins (adrenal: feocromocitoma; extra-adrenal: paraganglioma) produtor de catecolaminas.'
              ]
            },
            {
              id: '2.5-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Esporádico ou hereditário: neoplasia endócrina múltipla 2A e 2B (gene RET), von Hippel-Lindau, neurofibromatose tipo 1.'
              ]
            },
            {
              id: '2.5-t1-r3',
              cells: [
                'Sinais e sintomas',
                '**Cefaleia, sudorese e palpitações** em paroxismos; hipertensão sustentada ou paroxística; hipotensão ortostática, palidez, ansiedade, perda de peso, hiperglicemia. Crises desencadeadas por anestesia, contraste, glucagon, metoclopramida ou betabloqueador isolado.'
              ]
            },
            {
              id: '2.5-t1-r4',
              cells: [
                'Diagnóstico',
                'Bioquímico: **metanefrinas plasmáticas livres** ou **metanefrinas fracionadas em urina de 24 horas** (mais de 2–3 vezes o normal), depois localização.'
              ]
            },
            {
              id: '2.5-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Tomografia ou ressonância magnética de abdome (massa adrenal, hiperintensa em T2); cintilografia com metaiodobenzilguanidina ou PET em extra-adrenal e metastático; teste genético.'
              ]
            },
            {
              id: '2.5-t1-r6',
              cells: [
                'Complicações',
                'Crise hipertensiva, cardiomiopatia por catecolaminas, arritmias, acidente vascular, edema pulmonar, malignidade (~10%).'
              ]
            },
            {
              id: '2.5-t1-r7',
              cells: [
                'Tratamento e conduta',
                'Cirurgia após preparo: **bloqueio alfa-adrenérgico completo** por 7–14 dias (fenoxibenzamina ou doxazosina) **antes** do betabloqueador, para evitar crise vasoconstritora; depois betabloqueador se taquicardia; dieta com sal e hidratação. Crise: fentolamina ou nitroprussiato.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.6',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.6 Outras causas endócrinas de hipertensão',
      tables: [
        {
          id: '2.6-t1',
          headers: ['Doença', 'Mecanismo da hipertensão', 'Pistas clínicas', 'Exame inicial'],
          rows: [
            {
              id: '2.6-t1-r1',
              cells: [
                'Síndrome de Cushing',
                'Excesso de cortisol ativa o receptor mineralocorticoide; retenção de sódio',
                'Obesidade central, fácies em lua cheia, estrias violáceas, miopatia',
                'Cortisol salivar noturno, cortisol livre urinário, supressão com dexametasona'
              ]
            },
            {
              id: '2.6-t1-r2',
              cells: [
                'Acromegalia',
                'Expansão de volume independente de renina, resistência à insulina',
                'Aumento de extremidades, prognatismo, apneia',
                'Fator de crescimento semelhante à insulina tipo 1'
              ]
            },
            {
              id: '2.6-t1-r3',
              cells: [
                'Hiperparatireoidismo primário',
                'Hipercalcemia com vasoconstrição',
                'Cálculos renais, fraturas, dor óssea, constipação',
                'Cálcio e paratormônio'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.7',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.7 Hipertensão secundária vascular e pulmonar',
      tables: [
        {
          id: '2.7-t1',
          headers: ['Tópico', 'Apneia obstrutiva do sono', 'Hipertensão renovascular', 'Coarctação de aorta'],
          rows: [
            {
              id: '2.7-t1-r1',
              cells: [
                'Definição e causa',
                'Principal causa secundária associada à hipertensão resistente; hiperatividade simpática por hipóxia noturna',
                'Estenose de artéria renal: **aterosclerótica** (idosos) ou **displasia fibromuscular** (mulheres jovens)',
                'Estreitamento congênito da aorta, próximo à origem da artéria subclávia esquerda'
              ]
            },
            {
              id: '2.7-t1-r2',
              cells: [
                'Sinais',
                'Ronco, sonolência, obesidade, pescoço largo; hipertensão sem queda noturna',
                'Sopro abdominal, assimetria renal, hipocalemia, piora da função renal com bloqueador do sistema renina-angiotensina',
                'Hipertensão em braços, **pulsos femorais diminuídos e atrasados**, gradiente de pressão sistólica >10–20 mmHg entre braços e pernas, sopro interescapular'
              ]
            },
            {
              id: '2.7-t1-r3',
              cells: [
                'Diagnóstico',
                '**Polissonografia**: índice de apneia-hipopneia >5 por hora com sintomas ou >15 por hora',
                'Ultrassom com Doppler, angiotomografia ou angiorressonância, arteriografia',
                'Ecocardiograma, angiotomografia; radiografia com "sinal do 3" e erosão de costelas'
              ]
            },
            {
              id: '2.7-t1-r4',
              cells: [
                'Tratamento',
                'Pressão positiva contínua nas vias aéreas (CPAP), perda de peso',
                'Controle pressórico; **inibidores da enzima conversora e bloqueadores do receptor de angiotensina contraindicados na estenose bilateral ou em rim único**; angioplastia com stent (displasia); revascularização em casos selecionados',
                'Correção cirúrgica ou por cateter'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.8',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.8 Hipertensão na gestação: classificação, pré-eclâmpsia e síndrome HELLP',
      tables: [
        {
          id: '2.8-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.8-t1-r1',
              cells: [
                'Classificação',
                '**Hipertensão crônica**: antes da 20ª semana ou prévia. **Hipertensão gestacional**: após 20 semanas, sem proteinúria nem disfunção de órgão, resolve em até 12 semanas após o parto. **Pré-eclâmpsia**: após 20 semanas com proteinúria (≥300 mg em 24 horas ou relação proteína/creatinina ≥0,3) **ou**, sem proteinúria, sinais de gravidade. **Pré-eclâmpsia sobreposta** à crônica. **Eclâmpsia**: convulsão. **Síndrome HELLP**: hemólise, elevação de enzimas hepáticas e plaquetopenia.'
              ]
            },
            {
              id: '2.8-t1-r2',
              cells: [
                'Fisiopatologia',
                'Invasão trofoblástica deficiente e remodelação inadequada das artérias espiraladas, isquemia placentária, fatores antiangiogênicos e disfunção endotelial.'
              ]
            },
            {
              id: '2.8-t1-r3',
              cells: [
                'Sinais de gravidade',
                'Pressão ≥160/110, plaquetas <100.000, creatinina >1,1 mg/dL, transaminases duas vezes o normal, edema agudo de pulmão, cefaleia refratária ou sintomas visuais, dor epigástrica.'
              ]
            },
            {
              id: '2.8-t1-r4',
              cells: [
                'Exames e resultados esperados',
                'Hemograma com plaquetas e esfregaço (esquizócitos), desidrogenase lática elevada, bilirrubina indireta, transaminases, creatinina, ácido úrico, proteinúria, coagulograma; ultrassonografia obstétrica com Doppler e cardiotocografia.'
              ]
            },
            {
              id: '2.8-t1-r5',
              cells: [
                'Complicações',
                'Eclâmpsia, descolamento prematuro da placenta, edema agudo de pulmão, hemorragia cerebral, insuficiência renal, hematoma ou ruptura hepática, restrição de crescimento, prematuridade.'
              ]
            },
            {
              id: '2.8-t1-r6',
              cells: [
                'Diagnósticos diferenciais',
                'Hipertensão crônica, glomerulopatias, lúpus, púrpura trombocitopênica trombótica, síndrome hemolítico-urêmica, esteatose aguda da gravidez.'
              ]
            },
            {
              id: '2.8-t1-r7',
              cells: [
                'Conduta',
                '**O parto é o tratamento definitivo** (indicado na pré-eclâmpsia grave a partir de 34 semanas e na síndrome HELLP após estabilização). Ver tratamento farmacológico abaixo.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.9',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.9 Tratamento da hipertensão na gestação e sulfato de magnésio',
      tables: [
        {
          id: '2.9-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.9-t1-r1',
              cells: [
                'Quando iniciar',
                '**Pressão ≥140/90 mmHg persistente** (hipertensão crônica, gestacional ou pré-eclâmpsia), com base no estudo CHAP, conforme as recomendações brasileiras atuais (Rede Brasileira de Estudos sobre Hipertensão na Gravidez e diretriz de 2025). Alvo aproximado: diastólica ~85 mmHg e sistólica 110–140, evitando hipotensão materna.'
              ]
            },
            {
              id: '2.9-t1-r2',
              cells: [
                'Fármacos seguros',
                '**Metildopa** e **nifedipino de ação prolongada ou retard** (primeira linha); **betabloqueadores exceto atenolol** (labetalol, pindolol, metoprolol); **hidralazina oral** como associação. Anlodipino é opção aceita.'
              ]
            },
            {
              id: '2.9-t1-r3',
              cells: [
                'Contraindicados',
                '**inibidores da enzima conversora de angiotensina, bloqueadores do receptor de angiotensina, espironolactona e atenolol** (teratogênicos ou prejudiciais ao feto).'
              ]
            },
            {
              id: '2.9-t1-r4',
              cells: [
                'Prevenção da pré-eclâmpsia',
                'Em alto risco: **ácido acetilsalicílico 100–150 mg à noite**, iniciado entre 12 e 16 semanas e mantido até 36 semanas; **carbonato de cálcio 1–2 g/dia** se ingestão baixa (realidade brasileira).'
              ]
            },
            {
              id: '2.9-t1-r5',
              cells: [
                'Sulfato de magnésio',
                'Prevenção e tratamento de convulsão na pré-eclâmpsia grave e na eclâmpsia. **Esquema de Pritchard**: 4 g venosos + 10 g intramusculares, depois 5 g intramusculares a cada 4 horas. **Esquema de Zuspan**: 4–6 g venosos, depois 1–2 g/hora venosos. Manter 24 horas após o parto.'
              ]
            },
            {
              id: '2.9-t1-r6',
              cells: [
                'Monitorização',
                '**Reflexo patelar** (desaparece na intoxicação), frequência respiratória ≥16/min, diurese ≥25–30 mL/hora. **Antídoto**: gluconato de cálcio a 10%, 1 g venoso lento.'
              ]
            },
            {
              id: '2.9-t1-r7',
              cells: [
                'Crise hipertensiva na gestação',
                'Pressão **≥160/110** é emergência obstétrica: tratar em até 30–60 minutos com **hidralazina 5 mg venosa** a cada 20 minutos (máximo 30 mg) ou **nifedipino 10 mg por via oral** (não sublingual) a cada 20–30 minutos; associar sulfato de magnésio. Evitar queda brusca (meta 140–150/90–100).'
              ]
            },
            {
              id: '2.9-t1-r8',
              cells: [
                'Pós-parto',
                'Enalapril e captopril são compatíveis com amamentação.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.10',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.10 Crise hipertensiva',
      tables: [
        {
          id: '2.10-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.10-t1-r1',
              cells: [
                'Definição',
                'Pressão **≥180 e/ou ≥110 mmHg**. A diretriz de 2025 **abandonou o termo "urgência hipertensiva"**: passa a **"elevação importante da pressão sem lesão aguda de órgão-alvo"**. **Emergência hipertensiva**: mesma elevação **com lesão aguda e progressiva de órgão-alvo** e risco iminente de morte. Pseudocrise: elevação por dor, ansiedade ou suspensão de medicação, sem lesão.'
              ]
            },
            {
              id: '2.10-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Suspensão de anti-hipertensivo, cocaína, pré-eclâmpsia, feocromocitoma, doença renal. Falha da autorregulação com lesão endotelial e necrose fibrinoide.'
              ]
            },
            {
              id: '2.10-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Emergência: encefalopatia hipertensiva (cefaleia intensa, confusão, convulsão), papiledema, dor torácica (síndrome coronariana), edema agudo de pulmão, dor dorsal (dissecção de aorta), oligúria.'
              ]
            },
            {
              id: '2.10-t1-r4',
              cells: [
                'Exames e resultados esperados',
                'Eletrocardiograma, troponina, creatinina, urina tipo 1 (hematúria, proteinúria), fundo de olho (hemorragias, papiledema), radiografia de tórax, tomografia de crânio ou angiotomografia de aorta conforme suspeita.'
              ]
            },
            {
              id: '2.10-t1-r5',
              cells: [
                'Tratamento: elevação sem lesão de órgão-alvo',
                '**Elevação sem lesão de órgão-alvo**: observar em ambiente calmo (~30 minutos), tratar dor e ansiedade, retomar ou ajustar a medicação oral; **redução gradual em 24–48 horas**; **reavaliação ambulatorial em até 7 dias**. **Não usar nifedipino de liberação rápida/sublingual** (hipoperfusão cerebral e coronariana).'
              ]
            },
            {
              id: '2.10-t1-r6',
              cells: [
                'Tratamento: emergência',
                '**Internação em terapia intensiva com infusão venosa contínua**: nitroprussiato de sódio, nitroglicerina (isquemia e edema pulmonar), esmolol (dissecção de aorta), hidralazina ou sulfato de magnésio (eclâmpsia), fentolamina (feocromocitoma). **Redução de até 25% na primeira hora**, depois 160/100 em 2–6 horas e normalização em 24–48 horas. **Exceções**: **dissecção de aorta** (betabloqueador primeiro; **frequência <60 e sistólica 100–120 em ~20 minutos**); edema agudo de pulmão (redução guiada pela resposta); acidente vascular (ver 2.11); pré-eclâmpsia (ver 2.9).'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.11',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.11 Hipertensão no acidente vascular encefálico e nas coronariopatias',
      tables: [
        {
          id: '2.11-t1',
          headers: ['Situação', 'Conduta'],
          rows: [
            {
              id: '2.11-t1-r1',
              cells: [
                'AVC isquêmico candidato a trombólise (alteplase)',
                'Reduzir para **<185/110 antes** da infusão; manter **<180/105 nas primeiras 24 horas**.'
              ]
            },
            {
              id: '2.11-t1-r2',
              cells: [
                'AVC isquêmico sem trombólise',
                'Tratar apenas se **>220/120**, com redução gradual (cerca de 15% nas primeiras 24 horas) para preservar a penumbra.'
              ]
            },
            {
              id: '2.11-t1-r3',
              cells: [
                'AVC hemorrágico',
                'Sistólica 150–220: redução rápida e controlada para **~140 mmHg** (faixa 130–150), **evitando <130**. Sistólica >220: redução com infusão venosa contínua e monitorização (inicialmente para <180).'
              ]
            },
            {
              id: '2.11-t1-r4',
              cells: [
                'Prevenção secundária',
                'Após estabilidade (24–72 horas), meta **<130/80** (reduz eventos cardiovasculares maiores e recorrência); inibidor do sistema renina-angiotensina + diurético tiazídico/similar ou bloqueador de cálcio.'
              ]
            },
            {
              id: '2.11-t1-r5',
              cells: [
                'Doença arterial coronariana e infarto',
                'Meta <130/80, **evitando pressão diastólica <60–70** (curva em J: queda da perfusão coronariana na diástole); priorizar **betabloqueador** e inibidor do sistema renina-angiotensina; bloqueador de cálcio para angina.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.12',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.12 Hipertensão no diabético e no nefropata',
      tables: [
        {
          id: '2.12-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.12-t1-r1',
              cells: [
                'Meta',
                '<130/80 mmHg.'
              ]
            },
            {
              id: '2.12-t1-r2',
              cells: [
                'Primeira linha',
                '**Iniciar ao diagnóstico com dois fármacos** (alto risco automático). **Inibidor da enzima conversora ou bloqueador do receptor de angiotensina, obrigatório se houver albuminúria**, na dose máxima tolerada; nunca associar os dois.'
              ]
            },
            {
              id: '2.12-t1-r3',
              cells: [
                'Diuréticos',
                'Tiazídicos se taxa de filtração glomerular estimada **>30 mL/min/1,73 m²**; **diuréticos de alça (furosemida) se <30**.'
              ]
            },
            {
              id: '2.12-t1-r4',
              cells: [
                'Outros benefícios',
                '**Inibidores do cotransportador sódio-glicose 2** (dapagliflozina, empagliflozina): proteção cardiorrenal comprovada, discreta queda pressórica. **Finerenona** (diabetes com albuminúria): nefro e cardioproteção. **Agonistas do receptor de GLP-1** (semaglutida): benefício renal e cardiovascular, com queda modesta de peso e pressão.'
              ]
            },
            {
              id: '2.12-t1-r5',
              cells: [
                'Monitorização',
                'Creatinina e potássio 1–2 semanas após iniciar; tolerar aumento de creatinina de até 30%; evitar anti-inflamatórios.'
              ]
            },
            {
              id: '2.12-t1-r6',
              cells: [
                'Atenção',
                'Neuropatia autonômica: hipotensão ortostática.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '2.13',
      chapterId: 2,
      chapterTitle: '2. HIPERTENSÃO ARTERIAL SISTÊMICA',
      title: '2.13 Hipertensão na insuficiência cardíaca e no idoso',
      tables: [
        {
          id: '2.13-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '2.13-t1-r1',
              cells: [
                'Insuficiência cardíaca com fração de ejeção preservada',
                'Controle da volemia com diurético; **espironolactona** e **inibidor do cotransportador sódio-glicose 2**; controle pressórico rigoroso.'
              ]
            },
            {
              id: '2.13-t1-r2',
              cells: [
                'Insuficiência cardíaca com fração de ejeção reduzida: quatro pilares',
                '1) **Sacubitril-valsartana** (inibidor da neprilisina + bloqueador do receptor de angiotensina) ou inibidor da enzima conversora/bloqueador do receptor; 2) **betabloqueador** (succinato de metoprolol, carvedilol, bisoprolol); 3) **antagonista do receptor mineralocorticoide** (espironolactona, eplerenona); 4) **inibidor do cotransportador sódio-glicose 2**. Evitar verapamil, diltiazem e alfabloqueadores.'
              ]
            },
            {
              id: '2.13-t1-r3',
              cells: [
                'Idoso',
                'Hipertensão sistólica isolada por rigidez arterial; risco de **hipotensão ortostática e pós-prandial** (medir também em pé); começar com doses baixas e titular devagar; meta **<130/80 também no idoso** se tolerado (diretriz de 2025); em **≥80 anos ou frágeis**, considerar **monoterapia inicial** e individualizar a meta pela tolerância; preferir tiazídico ou bloqueador de cálcio; atenção a hiponatremia e quedas.'
              ]
            }
          ]
        }
      ]
    }
  ]
};
