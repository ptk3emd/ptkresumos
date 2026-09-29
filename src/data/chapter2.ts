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
