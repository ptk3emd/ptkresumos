import { Chapter } from '../types/clinical';

export const chapter4: Chapter = {
  id: 4,
  title: '4. TIREOIDITES E HIPOTIREOIDISMO',
  shortTitle: 'Tireoidites & Hipotireoidismo',
  iconName: 'Flame',
  topics: [
    {
      id: '4.1',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.1 Classificação das tireoidites',
      tables: [
        {
          id: '4.1-t1',
          headers: ['Tipo', 'Causa', 'Dor', 'Evolução e captação de iodo radioativo'],
          rows: [
            {
              id: '4.1-t1-r1',
              cells: [
                '**Aguda supurativa**',
                'Bactéria (dias)',
                'Intensa, unilateral',
                'Função normal; localizada'
              ]
            },
            {
              id: '4.1-t1-r2',
              cells: [
                '**Subaguda granulomatosa (De Quervain)**',
                'Pós-viral (semanas a meses)',
                'Intensa, com irradiação',
                'Tireotoxicose → hipotireoidismo → normal; captação **baixa**'
              ]
            },
            {
              id: '4.1-t1-r3',
              cells: [
                '**Subaguda indolor (linfocítica silenciosa e pós-parto)**',
                'Autoimune (semanas a meses)',
                'Ausente',
                'Mesmas fases; captação **baixa** na tireotoxicose'
              ]
            },
            {
              id: '4.1-t1-r4',
              cells: [
                '**Crônica de Hashimoto**',
                'Autoimune (anos)',
                'Ausente',
                'Hipotireoidismo progressivo'
              ]
            },
            {
              id: '4.1-t1-r5',
              cells: [
                '**Crônica de Riedel**',
                'Fibrose relacionada à imunoglobulina G4',
                'Ausente (bócio pétreo)',
                'Compressão cervical, hipotireoidismo'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.2',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.2 Tireoidite aguda supurativa',
      tables: [
        {
          id: '4.2-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.2-t1-r1',
              cells: [
                'Definição',
                'Infecção bacteriana rara da tireoide.'
              ]
            },
            {
              id: '4.2-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Disseminação hematogênica ou por contiguidade: *Staphylococcus aureus*, *Streptococcus*, anaeróbios orais. **Fístula do seio piriforme** (congênita, lado esquerdo) em crianças e adultos jovens com episódios recorrentes.'
              ]
            },
            {
              id: '4.2-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Dor cervical lancinante unilateral, hiperemia, calor local, febre alta, flutuação.'
              ]
            },
            {
              id: '4.2-t1-r4',
              cells: [
                'Exames e resultados esperados',
                'Ultrassonografia (coleção); **punção aspirativa por agulha fina** com Gram e cultura; leucocitose; função tireoidiana geralmente normal.'
              ]
            },
            {
              id: '4.2-t1-r5',
              cells: [
                'Complicações',
                'Abscesso, mediastinite, compressão de via aérea.'
              ]
            },
            {
              id: '4.2-t1-r6',
              cells: [
                'Diagnósticos diferenciais',
                'Tireoidite subaguda, hemorragia em cisto, carcinoma anaplásico.'
              ]
            },
            {
              id: '4.2-t1-r7',
              cells: [
                'Tratamento e conduta',
                'Internação, **antibiótico venoso** e **drenagem cirúrgica**; investigar a fístula (esofagograma, tomografia) e ressecar após a cura.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.3',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.3 Tireoidite subaguda de De Quervain',
      tables: [
        {
          id: '4.3-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.3-t1-r1',
              cells: [
                'Definição',
                'Tireoidite granulomatosa dolorosa, autolimitada.'
              ]
            },
            {
              id: '4.3-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Mulheres de 30–50 anos, **infecção viral respiratória 2–3 semanas antes**. Destruição folicular libera hormônio pré-formado.'
              ]
            },
            {
              id: '4.3-t1-r3',
              cells: [
                'Sinais e sintomas',
                '**Bócio doloroso e endurecido**, dor cervical anterior com irradiação para mandíbula e ouvidos, febre baixa, astenia. **Evolução em três fases**: tireotoxicose autolimitada → hipotireoidismo transitório → recuperação.'
              ]
            },
            {
              id: '4.3-t1-r4',
              cells: [
                'Exames e resultados esperados',
                'Velocidade de hemossedimentação **>50–80 mm/h** e proteína C reativa elevadas; T4 livre alto e **hormônio tireoestimulante (TSH) suprimido** (fase inicial); **captação de iodo radioativo em 24 horas baixa (<1–5%)**, o que diferencia da doença de Graves; ultrassonografia com áreas hipoecogênicas.'
              ]
            },
            {
              id: '4.3-t1-r5',
              cells: [
                'Diagnósticos diferenciais',
                'Doença de Graves, tireoidite indolor, tireoidite supurativa, hemorragia intranodular.'
              ]
            },
            {
              id: '4.3-t1-r6',
              cells: [
                'Tratamento e conduta',
                '**Anti-inflamatório não esteroide** (formas leves) ou **prednisona 20–40 mg/dia** com desmame (dor intensa). **Propranolol** para tremor e palpitações. **Tionamidas são ineficazes e contraindicadas** (não há hiperprodução hormonal).'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.4',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.4 Tireoidites indolores: linfocítica silenciosa e pós-parto',
      tables: [
        {
          id: '4.4-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.4-t1-r1',
              cells: [
                'Definição',
                'Tireoidite autoimune sem dor. **Pós-parto**: até 12 meses após a gestação.'
              ]
            },
            {
              id: '4.4-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Variante da autoimunidade de Hashimoto; anticorpo antiperoxidase positivo em 50–80%.'
              ]
            },
            {
              id: '4.4-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Tireotoxicose transitória (semanas), depois hipotireoidismo, depois eutireoidismo; **sem dor nem sensibilidade**; bócio pequeno.'
              ]
            },
            {
              id: '4.4-t1-r4',
              cells: [
                'Exames e resultados esperados',
                'Hormônio tireoestimulante (TSH) suprimido com T4 livre alto (fase inicial); **captação de iodo radioativo baixa**; velocidade de hemossedimentação normal.'
              ]
            },
            {
              id: '4.4-t1-r5',
              cells: [
                'Tratamento e conduta',
                '**Betabloqueador** sintomático; **levotiroxina temporária** se hipotireoidismo sintomático; tionamidas não indicadas. Risco de recorrência e de hipotireoidismo permanente.'
              ]
            },
            {
              id: '4.4-t1-r6',
              cells: [
                'Diagnóstico diferencial',
                'Doença de Graves (captação alta, anticorpo contra o receptor de TSH positivo).'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.5',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.5 Tireoidite de Hashimoto',
      tables: [
        {
          id: '4.5-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.5-t1-r1',
              cells: [
                'Definição',
                'Tireoidite linfocítica crônica autoimune; **principal causa de hipotireoidismo em regiões com iodo suficiente**.'
              ]
            },
            {
              id: '4.5-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Infiltração linfocítica com centros germinativos, **células de Hürthle (Askanazy)**, atrofia folicular e fibrose; anticorpos antiperoxidase e antitireoglobulina em títulos altos e persistentes.'
              ]
            },
            {
              id: '4.5-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Bócio indolor, firme, ou glândula atrófica; hipotireoidismo gradual; pode haver fase inicial de hashitoxicose.'
              ]
            },
            {
              id: '4.5-t1-r4',
              cells: [
                'Associações',
                'Vitiligo, diabetes tipo 1, insuficiência adrenal, doença celíaca, anemia perniciosa; **linfoma não Hodgkin da tireoide** (crescimento rápido).'
              ]
            },
            {
              id: '4.5-t1-r5',
              cells: [
                'Diagnóstico',
                'Anticorpo antiperoxidase positivo com hormônio tireoestimulante elevado; ultrassonografia com parênquima heterogêneo e hipoecogênico.'
              ]
            },
            {
              id: '4.5-t1-r6',
              cells: [
                'Tratamento e conduta',
                '**Levotiroxina** quando há hipotireoidismo; observação com hormônio tireoestimulante normal.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.6',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.6 Tireoidite de Riedel',
      tables: [
        {
          id: '4.6-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.6-t1-r1',
              cells: [
                'Definição',
                'Doença fibroinflamatória rara, relacionada à imunoglobulina G4.'
              ]
            },
            {
              id: '4.6-t1-r2',
              cells: [
                'Fisiopatologia',
                'Fibrose densa que substitui o parênquima e invade estruturas do pescoço (traqueia, esôfago, nervo laríngeo recorrente).'
              ]
            },
            {
              id: '4.6-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Bócio **de consistência pétrea ("lenhosa")**, fixo, com disfagia, dispneia, rouquidão; pode haver fibrose retroperitoneal e outras manifestações de doença relacionada à imunoglobulina G4.'
              ]
            },
            {
              id: '4.6-t1-r4',
              cells: [
                'Diagnóstico e diferencial',
                '**Simula carcinoma anaplásico**; biópsia cirúrgica confirma.'
              ]
            },
            {
              id: '4.6-t1-r5',
              cells: [
                'Tratamento e conduta',
                '**Glicocorticoide**; tamoxifeno; cirurgia descompressiva (istmectomia) se obstrução; reposição de levotiroxina.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.7',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.7 Hipotireoidismo: classificação e diagnóstico',
      tables: [
        {
          id: '4.7-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.7-t1-r1',
              cells: [
                'Definição',
                'Deficiência de hormônio tireoidiano.'
              ]
            },
            {
              id: '4.7-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                '**Primário** (glândula): Hashimoto, pós-tratamento (iodo radioativo, cirurgia), deficiência de iodo, fármacos (amiodarona, lítio). **Central** (hipófise ou hipotálamo): tumores, cirurgia, apoplexia, síndrome de Sheehan.'
              ]
            },
            {
              id: '4.7-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Fadiga, intolerância ao frio, ganho de peso, constipação, pele seca, bradicardia, voz rouca, mixedema, atraso do relaxamento dos reflexos, dislipidemia, anemia, infertilidade.'
              ]
            },
            {
              id: '4.7-t1-r4',
              cells: [
                'Diagnóstico',
                '**Primário**: hormônio tireoestimulante (TSH) elevado com T4 livre baixo. **Central**: T4 livre baixo com TSH **inapropriadamente normal, baixo ou pouco elevado**.'
              ]
            },
            {
              id: '4.7-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'TSH, T4 livre, anticorpo antiperoxidase (Hashimoto); colesterol elevado, creatina quinase elevada, hiponatremia. No central: **ressonância da sela túrcica** e **avaliação de todos os eixos hipofisários**, principalmente o **cortisol**.'
              ]
            },
            {
              id: '4.7-t1-r6',
              cells: [
                'Conduta importante',
                'No central, **repor glicocorticoide antes da levotiroxina** se houver insuficiência adrenal; guiar a dose pelo T4 livre (não pelo TSH).'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.8',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.8 Hipotireoidismo subclínico',
      tables: [
        {
          id: '4.8-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.8-t1-r1',
              cells: [
                'Definição',
                'Hormônio tireoestimulante (TSH) persistentemente acima do limite superior com **T4 livre normal**.'
              ]
            },
            {
              id: '4.8-t1-r2',
              cells: [
                'Diagnóstico',
                'Confirmar a alteração em **3 a 6 meses**; excluir causas transitórias (recuperação de doença, tireoidite, erro laboratorial).'
              ]
            },
            {
              id: '4.8-t1-r3',
              cells: [
                'Indicação de levotiroxina',
                '**TSH ≥10 mUI/L**; gestantes ou mulheres tentando engravidar; idade <65 anos com sintomas; bócio; anticorpo antiperoxidase fortemente elevado; doença cardiovascular ou insuficiência cardíaca.'
              ]
            },
            {
              id: '4.8-t1-r4',
              cells: [
                'Idosos',
                '**>65–70 anos assintomáticos com TSH entre 4,5 e 9,9**: vigilância clínica, sem reposição de rotina.'
              ]
            },
            {
              id: '4.8-t1-r5',
              cells: [
                'Progressão',
                'Maior risco quando há anticorpo antiperoxidase positivo.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.9',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.9 Reposição de levotiroxina',
      tables: [
        {
          id: '4.9-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.9-t1-r1',
              cells: [
                'Dose plena',
                '**1,6–1,8 mcg/kg/dia**, em jejum, 30–60 minutos antes do café ou à noite, longe de outros fármacos.'
              ]
            },
            {
              id: '4.9-t1-r2',
              cells: [
                'Idosos e coronariopatas',
                'Iniciar com **12,5–25 mcg/dia**, aumentar a cada 6–8 semanas (evita isquemia e arritmia).'
              ]
            },
            {
              id: '4.9-t1-r3',
              cells: [
                'Interferem na absorção',
                '**Carbonato de cálcio, sulfato ferroso, inibidores da bomba de prótons, colestiramina, soja, fibras**, hidróxido de alumínio.'
              ]
            },
            {
              id: '4.9-t1-r4',
              cells: [
                'Aumentam a necessidade',
                'Gestação (aumentar ~25–30% ao saber da gravidez), cirrose, síndromes de má absorção, indutores enzimáticos (fenitoína, carbamazepina, rifampicina).'
              ]
            },
            {
              id: '4.9-t1-r5',
              cells: [
                'Monitorização',
                'Hormônio tireoestimulante (TSH) após **6–8 semanas** de cada ajuste; depois a cada 6–12 meses. Meta de TSH na faixa normal (central: T4 livre).'
              ]
            },
            {
              id: '4.9-t1-r6',
              cells: [
                'Efeitos do excesso',
                'Tireotoxicose iatrogênica, fibrilação atrial, osteoporose.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.10',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.10 Coma mixedematoso',
      tables: [
        {
          id: '4.10-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.10-t1-r1',
              cells: [
                'Definição',
                'Descompensação grave do hipotireoidismo com alta letalidade.'
              ]
            },
            {
              id: '4.10-t1-r2',
              cells: [
                'Fatores precipitantes',
                'Infecção (pulmonar, urinária), **frio intenso**, suspensão do tratamento, cirurgia, fármacos depressores do sistema nervoso central, insuficiência cardíaca.'
              ]
            },
            {
              id: '4.10-t1-r3',
              cells: [
                'Sinais e sintomas',
                '**Hipotermia (<35 °C)**, alteração do nível de consciência (torpor a coma), bradicardia, hipoventilação com retenção de dióxido de carbono, íleo paralítico, edema mixedematoso, **hiponatremia**, hipoglicemia, derrame pericárdico.'
              ]
            },
            {
              id: '4.10-t1-r4',
              cells: [
                'Exames',
                'T4 livre muito baixo, hormônio tireoestimulante (TSH) elevado (primário), gasometria com acidose respiratória, sódio baixo, glicemia, cortisol, culturas.'
              ]
            },
            {
              id: '4.10-t1-r5',
              cells: [
                'Tratamento e conduta',
                'Terapia intensiva: suporte ventilatório, reaquecimento **passivo**, cuidado com líquidos. **Regra mandatória: hidrocortisona 100 mg venosa a cada 8 horas antes ou junto com a levotiroxina** (venosa ou por sonda), para evitar **crise adrenal fatal**. Tratar o fator precipitante.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4.11',
      chapterId: 4,
      chapterTitle: '4. TIREOIDITES E HIPOTIREOIDISMO',
      title: '4.11 Alterações tireoidianas por amiodarona e por imunoterapia',
      tables: [
        {
          id: '4.11-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '4.11-t1-r1',
              cells: [
                'Fisiopatologia',
                'A amiodarona é **rica em iodo** (37% do peso) e tem efeito tóxico direto sobre a tireoide.'
              ]
            },
            {
              id: '4.11-t1-r2',
              cells: [
                'Hipotireoidismo',
                'Ocorre por falha do escape do **efeito Wolff-Chaikoff** (a síntese hormonal permanece bloqueada). Tratar com **levotiroxina**, **sem** necessidade de suspender a amiodarona se ela for indispensável.'
              ]
            },
            {
              id: '4.11-t1-r3',
              cells: [
                'Tireotoxicose tipo 1',
                '**Efeito Jod-Basedow**: excesso de iodo em glândula com nódulo autônomo ou Graves subjacente; captação normal ou alta; tratar com **tionamidas**.'
              ]
            },
            {
              id: '4.11-t1-r4',
              cells: [
                'Tireotoxicose tipo 2',
                '**Tireoidite destrutiva** (toxicidade direta), captação baixa; tratar com **glicocorticoide**.'
              ]
            },
            {
              id: '4.11-t1-r5',
              cells: [
                'Imunoterapia (anti-PD-1, anti-CTLA-4)',
                'Causa tireoidite, hipotireoidismo e tireotoxicose; **monitorar função tireoidiana** e também hipófise e adrenal.'
              ]
            },
            {
              id: '4.11-t1-r6',
              cells: [
                'Monitorização',
                'Hormônio tireoestimulante (TSH) antes do início e a cada 3–6 meses em uso de amiodarona.'
              ]
            }
          ]
        }
      ]
    }
  ]
};
