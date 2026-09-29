import { Chapter } from '../types/clinical';

export const chapter1: Chapter = {
  id: 1,
  title: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
  shortTitle: 'Infecções',
  iconName: 'ShieldAlert',
  topics: [
    {
      id: '1.1',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.1 Pneumonia adquirida na comunidade',
      tables: [
        {
          id: '1.1-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.1-t1-r1',
              cells: [
                'Definição',
                'Infecção aguda do parênquima pulmonar adquirida fora do hospital (ou com início antes de 48 horas da internação), com sintomas respiratórios e infiltrado novo na imagem.'
              ]
            },
            {
              id: '1.1-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Microaspiração da orofaringe ou inalação, com resposta inflamatória e consolidação alveolar. **Típica**: *Streptococcus pneumoniae* (mais comum), *Haemophilus influenzae*. **Atípica**: *Mycoplasma pneumoniae*, *Chlamydophila pneumoniae*, *Legionella pneumophila* (grave, com hiponatremia, diarreia, alteração hepática, exposição a ar-condicionado ou água contaminada). Vírus também são frequentes.'
              ]
            },
            {
              id: '1.1-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Febre, tosse com secreção, dispneia, dor pleurítica, taquipneia, estertores crepitantes, sopro tubário, macicez à percussão, aumento do frêmito. Atípica: início insidioso, tosse seca, sintomas extrapulmonares (cefaleia, mialgia, diarreia), imagem pior que a clínica.'
              ]
            },
            {
              id: '1.1-t1-r4',
              cells: [
                'Classificação de gravidade',
                '**CURB-65** (1 ponto cada): confusão mental, ureia >50 mg/dL, frequência respiratória ≥30, pressão sistólica <90 ou diastólica ≤60, idade ≥65. Pontuação 0–1: tratamento ambulatorial; 2: enfermaria; ≥3: internação, considerar unidade de terapia intensiva (4–5). **CRB-65**: mesma escala sem ureia, útil sem exames. Gravidade grave: ventilação mecânica ou choque séptico.'
              ]
            },
            {
              id: '1.1-t1-r5',
              cells: [
                'Diagnóstico',
                'Quadro clínico compatível + infiltrado novo na radiografia de tórax.'
              ]
            },
            {
              id: '1.1-t1-r6',
              cells: [
                'Exames e resultados esperados',
                'Radiografia de tórax em duas incidências (consolidação lobar com broncograma aéreo; infiltrado intersticial nas atípicas). Hemograma (leucocitose com desvio; leucopenia indica pior prognóstico), ureia, creatinina, saturação/gasometria, proteína C reativa. Se internado: hemocultura e cultura de escarro. Graves: antígeno urinário de pneumococo e de *Legionella*.'
              ]
            },
            {
              id: '1.1-t1-r7',
              cells: [
                'Complicações',
                'Derrame parapneumônico e empiema, abscesso, insuficiência respiratória, sepse, síndrome do desconforto respiratório agudo.'
              ]
            },
            {
              id: '1.1-t1-r8',
              cells: [
                'Diagnósticos diferenciais',
                'Tuberculose, embolia pulmonar, edema pulmonar, neoplasia, pneumonite, vasculites.'
              ]
            },
            {
              id: '1.1-t1-r9',
              cells: [
                'Tratamento e conduta',
                '**Ambulatorial sem comorbidade**: amoxicilina (ou macrolídeo). **Com comorbidade ou antibiótico recente**: amoxicilina-clavulanato + macrolídeo, ou fluoroquinolona respiratória (levofloxacino, moxifloxacino). **Enfermaria**: ceftriaxona + azitromicina, ou fluoroquinolona respiratória isolada. **Terapia intensiva**: ceftriaxona + azitromicina (ou fluoroquinolona); cobrir *Pseudomonas* e *Staphylococcus aureus* resistente à meticilina (MRSA) se fatores de risco. Duração 5–7 dias, afebril por 48–72 horas. *Legionella*: azitromicina ou levofloxacino por 7–14 dias. **Pneumonia grave em terapia intensiva**: considerar **hidrocortisona 200 mg/dia** por 4–7 dias (estudo CAPE COD), exceto em influenza.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.2',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.2 Pneumonia hospitalar e associada à ventilação mecânica',
      tables: [
        {
          id: '1.2-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.2-t1-r1',
              cells: [
                'Definição',
                '**Hospitalar**: início após 48 horas da admissão. **Associada à ventilação**: após 48 horas da intubação orotraqueal. Infiltrado novo ou progressivo com febre, secreção purulenta, leucocitose e piora da oxigenação.'
              ]
            },
            {
              id: '1.2-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Microaspiração de secreção colonizada e biofilme do tubo. Agentes multirresistentes: *Staphylococcus aureus* resistente à meticilina (MRSA), *Pseudomonas aeruginosa*, *Acinetobacter baumannii*, enterobactérias produtoras de betalactamase de espectro estendido (ESBL) ou de carbapenemase (KPC). Fatores de risco: internação prolongada, antibiótico prévio, choque séptico, síndrome do desconforto respiratório, terapia renal substitutiva.'
              ]
            },
            {
              id: '1.2-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Febre, secreção traqueal purulenta, aumento da necessidade de oxigênio ou de suporte ventilatório, leucocitose ou leucopenia.'
              ]
            },
            {
              id: '1.2-t1-r4',
              cells: [
                'Diagnóstico',
                'Clínico-radiológico (infiltrado novo) mais coleta de amostra respiratória antes do antibiótico, sem atrasar o tratamento.'
              ]
            },
            {
              id: '1.2-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Radiografia ou tomografia (infiltrado novo). Hemoculturas. **Aspirado traqueal quantitativo** (≥10⁶ UFC/mL), **lavado broncoalveolar** (≥10⁴), escovado protegido (≥10³). Proteína C reativa ou procalcitonina para acompanhar resposta.'
              ]
            },
            {
              id: '1.2-t1-r6',
              cells: [
                'Complicações',
                'Empiema, abscesso, sepse e choque, falência respiratória, prolongamento da ventilação.'
              ]
            },
            {
              id: '1.2-t1-r7',
              cells: [
                'Diagnósticos diferenciais',
                'Atelectasia, edema pulmonar, síndrome do desconforto respiratório, embolia pulmonar, hemorragia alveolar, traqueobronquite.'
              ]
            },
            {
              id: '1.2-t1-r8',
              cells: [
                'Tratamento e conduta',
                'Antibiótico empírico precoce conforme o perfil local: piperacilina-tazobactam, cefepima ou meropeném (Gram-negativos e *Pseudomonas*), **associado a vancomicina ou linezolida** (MRSA) se fatores de risco. **Desescalonar pela cultura**. Duração 7 dias. Prevenção: cabeceira elevada 30–45°, suspensão diária da sedação, aspiração subglótica, higiene oral.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.3',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.3 Pneumonia aspirativa',
      tables: [
        {
          id: '1.3-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.3-t1-r1',
              cells: [
                'Definição',
                'Pneumonia por aspiração de conteúdo da orofaringe colonizado (infecção). Difere da **pneumonite química** (Mendelson), lesão inflamatória por conteúdo gástrico ácido, inicialmente sem infecção.'
              ]
            },
            {
              id: '1.3-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Fatores de risco: rebaixamento da consciência, alcoolismo, convulsão, disfagia neurogênica (acidente vascular, demência), sonda, refluxo, má higiene dentária. Agentes: anaeróbios orais (*Peptostreptococcus*, *Fusobacterium*, *Prevotella*) e estreptococos.'
              ]
            },
            {
              id: '1.3-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Curso subagudo, febre, tosse com escarro fétido, perda de peso; pode evoluir para abscesso.'
              ]
            },
            {
              id: '1.3-t1-r4',
              cells: [
                'Topografia',
                'Segmentos dependentes: **segmento posterior do lobo superior e apical do lobo inferior** (paciente deitado); basais posteriores em ortostase; predomínio à direita.'
              ]
            },
            {
              id: '1.3-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Radiografia ou tomografia: consolidação em segmentos dependentes; cavitação com nível hidroaéreo no abscesso. Hemocultura. Broncoscopia se obstrução ou dúvida.'
              ]
            },
            {
              id: '1.3-t1-r6',
              cells: [
                'Complicações',
                'Abscesso pulmonar, empiema, síndrome do desconforto respiratório.'
              ]
            },
            {
              id: '1.3-t1-r7',
              cells: [
                'Diagnósticos diferenciais',
                'Tuberculose cavitária, neoplasia, embolia séptica, granulomatose com poliangiite.'
              ]
            },
            {
              id: '1.3-t1-r8',
              cells: [
                'Tratamento e conduta',
                '**Ampicilina-sulbactam, amoxicilina-clavulanato ou clindamicina** (cobertura de anaeróbios orais). Duração de 5–7 dias na pneumonia; abscesso por semanas até resolução radiológica. Pneumonite química: suporte, sem antibiótico se sem infecção. Avaliar deglutição, fonoterapia, higiene oral e posição.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.4',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.4 Derrame pleural parapneumônico e empiema',
      tables: [
        {
          id: '1.4-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.4-t1-r1',
              cells: [
                'Definição',
                'Derrame pleural associado a pneumonia. **Empiema**: pus na cavidade pleural.'
              ]
            },
            {
              id: '1.4-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Passagem de líquido e inflamação para o espaço pleural, com evolução em fases: exsudativa, fibrinopurulenta e organização (encarceramento).'
              ]
            },
            {
              id: '1.4-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Febre persistente apesar do antibiótico, dor pleurítica, dispneia, macicez, abolição do murmúrio vesicular e do frêmito.'
              ]
            },
            {
              id: '1.4-t1-r4',
              cells: [
                'Classificação',
                '**Não complicado**: pH >7,20, glicose >60 mg/dL, cultura negativa. **Complicado**: pH <7,20, glicose <40–60 mg/dL, desidrogenase lática >1.000 UI/L, ou Gram/cultura positivos. **Empiema**: pus.'
              ]
            },
            {
              id: '1.4-t1-r5',
              cells: [
                'Diagnóstico',
                'Toracocentese diagnóstica. **Critérios de Light (exsudato)**: proteína pleural/sérica >0,5; desidrogenase lática pleural/sérica >0,6; desidrogenase lática pleural >2/3 do limite superior do soro.'
              ]
            },
            {
              id: '1.4-t1-r6',
              cells: [
                'Exames e resultados esperados',
                'Radiografia (velamento, menisco); ultrassonografia (septações); tomografia com contraste (espessamento pleural). Líquido: pH, glicose, desidrogenase lática, proteínas, celularidade neutrofílica, Gram e cultura.'
              ]
            },
            {
              id: '1.4-t1-r7',
              cells: [
                'Complicações',
                'Encarceramento pulmonar, fibrotórax, fístula broncopleural, sepse.'
              ]
            },
            {
              id: '1.4-t1-r8',
              cells: [
                'Diagnósticos diferenciais',
                'Transudato (insuficiência cardíaca), tuberculose, neoplasia, embolia pulmonar, quilotórax.'
              ]
            },
            {
              id: '1.4-t1-r9',
              cells: [
                'Tratamento e conduta',
                "Antibiótico + **drenagem torácica fechada em selo d'água** de urgência nos complicados e no empiema. Se loculado: fibrinolítico intrapleural (alteplase com dornase) ou videotoracoscopia/decorticação. Antibiótico por 2–6 semanas."
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.5',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.5 Infecção urinária baixa e bacteriúria assintomática',
      tables: [
        {
          id: '1.5-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.5-t1-r1',
              cells: [
                'Definição',
                '**Cistite**: infecção da bexiga com sintomas. **Bacteriúria assintomática**: ≥10⁵ UFC/mL na urocultura sem sintomas.'
              ]
            },
            {
              id: '1.5-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Ascensão de bactérias pela uretra. *Escherichia coli* (75–90%), *Staphylococcus saprophyticus* (mulher jovem), *Klebsiella*, *Proteus*, *Enterococcus*. Fatores: sexo feminino, atividade sexual, menopausa, diabetes, espermicida.'
              ]
            },
            {
              id: '1.5-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Disúria, polaciúria, urgência, dor suprapúbica, hematúria; sem febre nem dor lombar.'
              ]
            },
            {
              id: '1.5-t1-r4',
              cells: [
                'Classificação',
                '**Não complicada** (mulher jovem, sem anormalidades) e **complicada** (homem, gestante, diabético, sonda, obstrução, imunossuprimido).'
              ]
            },
            {
              id: '1.5-t1-r5',
              cells: [
                'Diagnóstico',
                'Cistite não complicada em mulher jovem: **clínico** (urocultura dispensável).'
              ]
            },
            {
              id: '1.5-t1-r6',
              cells: [
                'Exames e resultados esperados',
                'Urina tipo 1: leucocitúria, nitrito positivo, bacteriúria, hematúria. Urocultura com antibiograma na complicada, recorrente, gestante ou falha terapêutica.'
              ]
            },
            {
              id: '1.5-t1-r7',
              cells: [
                'Bacteriúria assintomática',
                '**Não tratar**, exceto em **gestantes**, antes de **procedimento urológico com sangramento de mucosa** e em **transplantados renais recentes**.'
              ]
            },
            {
              id: '1.5-t1-r8',
              cells: [
                'Complicações',
                'Pielonefrite, sepse, parto prematuro na gestação.'
              ]
            },
            {
              id: '1.5-t1-r9',
              cells: [
                'Diagnósticos diferenciais',
                'Uretrite (clamídia, gonococo), vaginite, herpes, cistite intersticial, litíase, prostatite.'
              ]
            },
            {
              id: '1.5-t1-r10',
              cells: [
                'Tratamento e conduta',
                'Nitrofurantoína 100 mg de 6/6 h por 5 dias (não usar em pielonefrite ou função renal reduzida); **fosfomicina trometamol 3 g em dose única**; sulfametoxazol-trimetoprima por 3 dias se resistência local <20%. Gestante: amoxicilina, cefalexina ou nitrofurantoína por 7 dias. Evitar fluoroquinolona como primeira escolha.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.6',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.6 Pielonefrite aguda, prostatite e infecção urinária de repetição',
      tables: [
        {
          id: '1.6-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.6-t1-r1',
              cells: [
                'Definição',
                '**Pielonefrite**: infecção do parênquima e da pelve renal. **Prostatite bacteriana aguda**: infecção aguda da próstata. **Infecção de repetição**: ≥2 episódios em 6 meses ou ≥3 em 1 ano.'
              ]
            },
            {
              id: '1.6-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Ascensão de bactérias, sobretudo *Escherichia coli*; prostatite também por enterobactérias e *Enterococcus*.'
              ]
            },
            {
              id: '1.6-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Pielonefrite: febre alta, calafrios, dor lombar, náuseas, vômitos, toxemia, **sinal de Giordano positivo** (punho-percussão lombar dolorosa). Prostatite: dor perineal, disúria, febre, retenção urinária, próstata dolorosa.'
              ]
            },
            {
              id: '1.6-t1-r4',
              cells: [
                'Classificação',
                'Pielonefrite não complicada ou complicada (obstrução, diabetes, gestação, enfisematosa).'
              ]
            },
            {
              id: '1.6-t1-r5',
              cells: [
                'Diagnóstico',
                'Clínica + **urocultura com antibiograma obrigatória**; hemocultura se internado.'
              ]
            },
            {
              id: '1.6-t1-r6',
              cells: [
                'Exames e resultados esperados',
                'Urina tipo 1 (piúria, cilindros leucocitários), hemograma (leucocitose), creatinina. Ultrassonografia ou tomografia se falha em 48–72 horas, sepse, litíase ou suspeita de obstrução/abscesso.'
              ]
            },
            {
              id: '1.6-t1-r7',
              cells: [
                'Complicações',
                'Sepse, abscesso renal ou perinéfrico, pielonefrite enfisematosa, necrose papilar, prostatite crônica, abscesso prostático.'
              ]
            },
            {
              id: '1.6-t1-r8',
              cells: [
                'Critérios de internação',
                'Vômitos, sepse, gestante, imunossuprimido, obstrução, idoso, falha do tratamento oral.'
              ]
            },
            {
              id: '1.6-t1-r9',
              cells: [
                'Tratamento e conduta',
                'Pielonefrite: ciprofloxacino ou cefalosporina oral (7–14 dias) em ambulatorial; **ceftriaxona ou ciprofloxacino venosos** na internação; carbapenêmico se ESBL; desobstruir. Prostatite: **evitar toque retal vigoroso** (bacteremia e choque séptico); fluoroquinolona por **4 a 6 semanas**. Repetição: investigar anatomia; estrogênio vaginal pós-menopausa; profilaxia noturna com nitrofurantoína ou sulfametoxazol-trimetoprima por 6–12 meses, ou pós-coito.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.7',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.7 Erisipela e celulite não purulenta',
      tables: [
        {
          id: '1.7-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.7-t1-r1',
              cells: [
                'Definição',
                '**Erisipela**: infecção da derme superficial e dos linfáticos. **Celulite**: derme profunda e tecido subcutâneo.'
              ]
            },
            {
              id: '1.7-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                '*Streptococcus pyogenes* (erisipela); celulite também por *Staphylococcus aureus*. Porta de entrada: intertrigo, úlcera, insuficiência venosa, linfedema.'
              ]
            },
            {
              id: '1.7-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Erisipela: início súbito com febre e calafrios, placa eritematosa brilhante, quente, dolorosa, **bordas nítidas, elevadas e bem demarcadas**. Celulite: **margens mal definidas e difusas**.'
              ]
            },
            {
              id: '1.7-t1-r4',
              cells: [
                'Diagnóstico',
                'Clínico. Culturas raramente positivas.'
              ]
            },
            {
              id: '1.7-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Hemograma (leucocitose), proteína C reativa. Ultrassonografia se suspeita de abscesso; Doppler venoso se suspeita de trombose.'
              ]
            },
            {
              id: '1.7-t1-r6',
              cells: [
                'Complicações',
                'Abscesso, bacteremia, fasciíte necrotizante, recorrência, linfedema, glomerulonefrite pós-estreptocócica.'
              ]
            },
            {
              id: '1.7-t1-r7',
              cells: [
                'Diagnósticos diferenciais',
                'Trombose venosa profunda, dermatite de estase ou de contato, gota, fasciíte necrotizante, herpes-zóster.'
              ]
            },
            {
              id: '1.7-t1-r8',
              cells: [
                'Tratamento e conduta',
                'Ambulatorial: cefalexina; internação: **oxacilina, cefazolina** ou penicilina cristalina; 5–7 dias. Elevar o membro, tratar a porta de entrada. Cobrir MRSA (sulfametoxazol-trimetoprima, clindamicina, doxiciclina, vancomicina) se pus, trauma penetrante ou colonização. Recorrência (≥3 por ano): penicilina benzatina a cada 3–4 semanas.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.8',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.8 Celulite purulenta, abscessos e infecções necrotizantes',
      tables: [
        {
          id: '1.8-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.8-t1-r1',
              cells: [
                'Definição',
                '**Abscesso/celulite purulenta**: coleção com pus, geralmente *Staphylococcus aureus*. **Infecção necrotizante**: necrose de fáscia e tecidos moles, emergência cirúrgica.'
              ]
            },
            {
              id: '1.8-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Abscesso: *Staphylococcus aureus* sensível ou resistente à meticilina. Necrotizante **tipo I** polimicrobiana (diabéticos, pós-cirúrgico, gangrena de Fournier), **tipo II** estreptocócica (*Streptococcus pyogenes* ± estafilococo), tipo III por *Clostridium*. Fournier: períneo e genitália.'
              ]
            },
            {
              id: '1.8-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Abscesso: nódulo flutuante e doloroso. Necrotizante: **dor desproporcional à lesão visível**, toxemia, edema além do eritema, **bolhas hemorrágicas**, anestesia da pele, **enfisema subcutâneo e crepitação**, necrose e rápida progressão.'
              ]
            },
            {
              id: '1.8-t1-r4',
              cells: [
                'Diagnóstico',
                'Abscesso: clínico e ultrassonografia. Necrotizante: **suspeita clínica é indicação de cirurgia**; escore LRINEC ≥6 sugere, mas não exclui.'
              ]
            },
            {
              id: '1.8-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Hemograma (leucocitose), proteína C reativa alta, sódio baixo, creatinina e glicose elevadas, lactato, creatina quinase; radiografia ou tomografia com gás em partes moles; culturas de pus e sangue.'
              ]
            },
            {
              id: '1.8-t1-r6',
              cells: [
                'Complicações',
                'Choque séptico, falência de múltiplos órgãos, amputação, alta mortalidade.'
              ]
            },
            {
              id: '1.8-t1-r7',
              cells: [
                'Diagnósticos diferenciais',
                'Celulite simples, piomiosite, trombose, síndrome compartimental.'
              ]
            },
            {
              id: '1.8-t1-r8',
              cells: [
                'Tratamento e conduta',
                'Abscesso: **drenagem cirúrgica** com cultura; antibiótico (sulfametoxazol-trimetoprima, doxiciclina ou clindamicina) se sinais sistêmicos, imunossupressão ou celulite extensa. Necrotizante: **desbridamento cirúrgico imediato e repetido** + antibiótico venoso de amplo espectro (piperacilina-tazobactam ou carbapenêmico + vancomicina ou linezolida + clindamicina para inibir toxina) e suporte intensivo.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '1.9',
      chapterId: 1,
      chapterTitle: '1. PRINCIPAIS INFECÇÕES NA CLÍNICA MÉDICA',
      title: '1.9 Pé diabético infectado e mordeduras de animais',
      tables: [
        {
          id: '1.9-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '1.9-t1-r1',
              cells: [
                'Definição',
                'Infecção de tecidos moles ou osso do pé de pessoa com diabetes. **Mal perfurante plantar**: úlcera neuropática em pontos de pressão.'
              ]
            },
            {
              id: '1.9-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                '**Neuropatia periférica** (perda de sensibilidade protetora, deformidades, pele seca) + **insuficiência arterial** + **deformidade osteoarticular** (dedos em garra, Charcot) + trauma repetido. Agentes: leve, cocos Gram-positivos; moderada/grave, polimicrobiana (bacilos Gram-negativos e anaeróbios).'
              ]
            },
            {
              id: '1.9-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Úlcera com calor, eritema, edema, dor (pode faltar), secreção purulenta, odor; sinais sistêmicos nas graves.'
              ]
            },
            {
              id: '1.9-t1-r4',
              cells: [
                'Classificação',
                'Leve (superficial, eritema <2 cm), moderada (>2 cm ou profunda), grave (resposta inflamatória sistêmica), com osteomielite. Wagner ou Texas para a úlcera.'
              ]
            },
            {
              id: '1.9-t1-r5',
              cells: [
                'Diagnóstico',
                'Clínico (≥2 sinais inflamatórios). **Sonda que toca o osso** sugere osteomielite.'
              ]
            },
            {
              id: '1.9-t1-r6',
              cells: [
                'Exames e resultados esperados',
                '**Radiografia** (gás, reação periosteal, lise óssea tardia); ressonância magnética se dúvida; velocidade de hemossedimentação >70 mm/h sugere osteomielite; cultura de tecido profundo (não de swab superficial); avaliação arterial (índice tornozelo-braquial, Doppler).'
              ]
            },
            {
              id: '1.9-t1-r7',
              cells: [
                'Complicações',
                'Osteomielite, gangrena, amputação, sepse, artropatia de Charcot.'
              ]
            },
            {
              id: '1.9-t1-r8',
              cells: [
                'Tratamento e conduta',
                'Descarga de peso, desbridamento, controle glicêmico, **revascularização** se isquemia. Leve: cefalexina ou amoxicilina-clavulanato; moderada/grave: piperacilina-tazobactam ou ampicilina-sulbactam ± vancomicina. Osteomielite: cerca de 6 semanas.'
              ]
            },
            {
              id: '1.9-t1-r9',
              cells: [
                'Mordeduras de cães e gatos',
                '*Pasteurella multocida* (celulite em <24 horas), *Capnocytophaga* (sepse em asplênicos), anaeróbios orais. Lavar, desbridar, **não suturar** (exceto face); **amoxicilina-clavulanato** profilático em mordeduras profundas, na mão, na face, em imunossuprimidos e de gato; profilaxia antitetânica e **antirrábica** (soro e vacina conforme o animal e a lesão).'
              ]
            }
          ]
        }
      ]
    }
  ]
};
