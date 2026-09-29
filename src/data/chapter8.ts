import { Chapter } from '../types/clinical';

export const chapter8: Chapter = {
  id: 8,
  title: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
  shortTitle: 'Lúpus, SAF & Vasculites',
  iconName: 'ShieldPlus',
  note: 'Os critérios de classificação ACR/EULAR 2023 substituem Sydney em pesquisa para SAF: entrada com anticorpo positivo em até 3 anos do evento clínico e soma de ≥3 pontos clínicos e ≥3 laboratoriais. Sydney segue padrão prático de estudo.',
  topics: [
    {
      id: '8.1',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.1 Lúpus eritematoso sistêmico: critérios de classificação',
      tables: [
        {
          id: '8.1-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.1-t1-r1',
              cells: [
                'Definição',
                'Doença autoimune multissistêmica, com produção de autoanticorpos e imunocomplexos. Mais em mulheres jovens.'
              ]
            },
            {
              id: '8.1-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Predisposição genética (deficiência de complemento C1q, C2, C4), hormônios, luz ultravioleta, vírus (Epstein-Barr), fármacos. Falha na remoção de células apoptóticas → autoantígenos nucleares → imunocomplexos e consumo de complemento.'
              ]
            },
            {
              id: '8.1-t1-r3',
              cells: [
                '**Critério de entrada (EULAR/ACR 2019)**',
                '**Fator antinuclear ≥1:80** em células HEp-2 (se negativo, não classifica). Depois somar pontos nos domínios; **≥10 pontos e ao menos um critério clínico**.'
              ]
            },
            {
              id: '8.1-t1-r4',
              cells: [
                'Domínios clínicos',
                '**Constitucional**: febre. **Hematológico**: leucopenia (<4.000), plaquetopenia (<100.000), **anemia hemolítica autoimune** (Coombs direto positivo, reticulocitose, desidrogenase lática elevada). **Neuropsiquiátrico**: delirium, psicose, convulsão. **Mucocutâneo**: alopecia não cicatricial, úlceras orais indolores, lúpus subagudo ou discoide, **erupção malar poupando o sulco nasolabial**. **Seroso**: derrame pleural, pericárdico, pericardite. **Musculoesquelético**: artrite inflamatória de ≥2 articulações (não erosiva; **artropatia de Jaccoud**). **Renal**: proteinúria >0,5 g/24 h ou nefrite na biópsia.'
              ]
            },
            {
              id: '8.1-t1-r5',
              cells: [
                'Domínios imunológicos',
                '**Anticorpos antifosfolipídeos** (anticoagulante lúpico, anticardiolipina, anti-beta-2-glicoproteína I); **complemento baixo** (C3, C4); **anti-DNA de dupla hélice** e **anti-Sm** (altamente específicos).'
              ]
            },
            {
              id: '8.1-t1-r6',
              cells: [
                'Exames de acompanhamento',
                'Hemograma, creatinina, urina tipo 1 e relação proteína/creatinina, complemento, anti-DNA.'
              ]
            },
            {
              id: '8.1-t1-r7',
              cells: [
                'Complicações',
                'Nefrite, envolvimento neuropsiquiátrico, aterosclerose precoce, infecções, trombose (com antifosfolipídeos), osteonecrose por corticoide.'
              ]
            },
            {
              id: '8.1-t1-r8',
              cells: [
                'Tratamento base',
                '**Hidroxicloroquina para todos** (exceto contraindicação; risco de maculopatia, com exame oftalmológico periódico), fotoproteção, glicocorticoide em menor dose possível, imunossupressor (azatioprina, metotrexato, micofenolato) conforme gravidade, controle de risco cardiovascular.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.2',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.2 Autoanticorpos no lúpus e associações clínicas',
      tables: [
        {
          id: '8.2-t1',
          headers: ['Anticorpo', 'Significado'],
          rows: [
            {
              id: '8.2-t1-r1',
              cells: [
                '**Fator antinuclear**',
                'Sensibilidade **>98%**, baixa especificidade; **excelente valor preditivo negativo** (negativo praticamente exclui)'
              ]
            },
            {
              id: '8.2-t1-r2',
              cells: [
                '**Anti-DNA de dupla hélice**',
                '**Muito específico**; acompanha **atividade** e **nefrite lúpica**'
              ]
            },
            {
              id: '8.2-t1-r3',
              cells: [
                '**Anti-Sm**',
                '**O mais específico** para lúpus; sensibilidade baixa'
              ]
            },
            {
              id: '8.2-t1-r4',
              cells: [
                '**Anti-RNP**',
                'Presente no lúpus; em **títulos altos e isolado**, marca a **doença mista do tecido conjuntivo**'
              ]
            },
            {
              id: '8.2-t1-r5',
              cells: [
                '**Anti-Ro (SSA) e anti-La (SSB)**',
                '**Lúpus cutâneo subagudo**, fotossensibilidade, **síndrome de Sjögren** secundária, **lúpus neonatal** e **bloqueio atrioventricular total congênito** em filhos de mães positivas'
              ]
            },
            {
              id: '8.2-t1-r6',
              cells: [
                '**Anti-histona**',
                '**Lúpus induzido por fármacos** (hidralazina, procainamida, isoniazida, minociclina, metildopa, anti-fator de necrose tumoral): anti-DNA negativo, complemento normal, regressão ao suspender o fármaco'
              ]
            },
            {
              id: '8.2-t1-r7',
              cells: [
                'Complemento (C3 e C4)',
                'Baixo na atividade, sobretudo na nefrite'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.3',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.3 Nefrite lúpica',
      tables: [
        {
          id: '8.3-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.3-t1-r1',
              cells: [
                'Definição',
                'Glomerulonefrite por imunocomplexos no lúpus; principal determinante de prognóstico.'
              ]
            },
            {
              id: '8.3-t1-r2',
              cells: [
                'Sinais e sintomas',
                'Espuma na urina, edema, hipertensão, hematúria dismórfica, cilindros celulares, síndrome nefrótica ou nefrítica, queda da função renal.'
              ]
            },
            {
              id: '8.3-t1-r3',
              cells: [
                'Indicação de **biópsia renal**',
                '**Proteinúria >500 mg/24 h**, hematúria glomerular ou cilindros celulares, perda de função sem outra causa.'
              ]
            },
            {
              id: '8.3-t1-r4',
              cells: [
                'Classificação (ISN/RPS)',
                '**I**: mesangial mínima. **II**: proliferativa mesangial. **III**: proliferativa **focal** (<50% dos glomérulos). **IV**: proliferativa **difusa** (>50%; alças de arame, crescentes, necrose; **pior prognóstico**). **V**: **membranosa** (proteinúria nefrótica). **VI**: esclerosante avançada (>90%).'
              ]
            },
            {
              id: '8.3-t1-r5',
              cells: [
                'Exames e resultados esperados',
                'Proteinúria, sedimento ativo, creatinina, complemento baixo, anti-DNA alto. Biópsia com depósitos "**full house**" na imunofluorescência.'
              ]
            },
            {
              id: '8.3-t1-r6',
              cells: [
                'Tratamento',
                '**Classes III e IV**: indução com **pulso de metilprednisolona** + **micofenolato** ou **ciclofosfamida** venosa; manutenção com micofenolato ou azatioprina; considerar belimumabe ou voclosporina. Classe V: micofenolato conforme proteinúria. **Hidroxicloroquina e bloqueio do sistema renina-angiotensina** para todos.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.4',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.4 Síndrome do anticorpo antifosfolipídeo: critérios de Sydney',
      tables: [
        {
          id: '8.4-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.4-t1-r1',
              cells: [
                'Definição',
                'Trombofilia autoimune com trombose e/ou morbidade gestacional, por anticorpos contra fosfolipídios e suas proteínas carreadoras.'
              ]
            },
            {
              id: '8.4-t1-r2',
              cells: [
                'Etiologia e fisiopatologia',
                'Anticorpos ativam endotélio, plaquetas e complemento, gerando **trombose de vasos de qualquer calibre** (venosa ou arterial). Primária ou secundária ao lúpus.'
              ]
            },
            {
              id: '8.4-t1-r3',
              cells: [
                'Classificação',
                '**Obrigatório**: ≥1 critério clínico **+** ≥1 critério laboratorial.'
              ]
            },
            {
              id: '8.4-t1-r4',
              cells: [
                '**Critérios clínicos**',
                '**Trombose** vascular (arterial, venosa ou de pequenos vasos) confirmada, sem inflamação da parede. **Morbidade gestacional**: (a) ≥1 **morte fetal** de feto normal com ≥10 semanas; (b) ≥1 **parto prematuro <34 semanas** por pré-eclâmpsia grave, eclâmpsia ou insuficiência placentária; (c) ≥3 **perdas embrionárias consecutivas <10 semanas**.'
              ]
            },
            {
              id: '8.4-t1-r5',
              cells: [
                '**Critérios laboratoriais** (repetidos após **12 semanas**)',
                '**Anticoagulante lúpico** (testes de coagulação prolongados que não corrigem com plasma normal); **anticardiolipina IgG ou IgM** em título médio ou alto (>40); **anti-beta-2-glicoproteína I IgG ou IgM** acima do percentil 99. **Triplo positivo**: risco mais alto.'
              ]
            },
            {
              id: '8.4-t1-r6',
              cells: [
                'Exames',
                'Tempo de tromboplastina parcial ativada prolongado (não corrige), plaquetopenia, testes sorológicos, imagem do evento.'
              ]
            },
            {
              id: '8.4-t1-r7',
              cells: [
                'Manifestações',
                'Trombose venosa profunda, embolia pulmonar, acidente vascular, livedo reticular, plaquetopenia, valvopatia, abortos de repetição.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.5',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.5 Tratamento da síndrome antifosfolipídeo e forma catastrófica',
      tables: [
        {
          id: '8.5-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.5-t1-r1',
              cells: [
                'Trombose estabelecida',
                '**Anticoagulação plena por tempo indeterminado com varfarina** (razão normalizada internacional **2,0–3,0**). **Evitar anticoagulantes orais diretos** (rivaroxabana, apixabana), sobretudo em **triplo positivos** (mais retrombose arterial e acidente vascular).'
              ]
            },
            {
              id: '8.5-t1-r2',
              cells: [
                'Gestação',
                '**Heparina de baixo peso molecular** (enoxaparina) profilática ou terapêutica + **ácido acetilsalicílico em dose baixa**; **suspender varfarina** (embriopatia).'
              ]
            },
            {
              id: '8.5-t1-r3',
              cells: [
                '**Forma catastrófica (síndrome de Asherson)**',
                'Oclusões trombóticas disseminadas em **<1 semana**, com falência de múltiplos órgãos e microangiopatia; mortalidade alta. **Tratamento: heparina não fracionada venosa + pulsoterapia de metilprednisolona + plasmaférese e/ou imunoglobulina humana venosa.**'
              ]
            },
            {
              id: '8.5-t1-r4',
              cells: [
                'Diferenciais',
                'Púrpura trombocitopênica trombótica, coagulação intravascular disseminada, plaquetopenia induzida por heparina.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.6',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.6 Arterite de células gigantes',
      tables: [
        {
          id: '8.6-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.6-t1-r1',
              cells: [
                'Definição',
                'Vasculite granulomatosa de **grandes e médios vasos** em **idosos >50 anos**, predomínio feminino; associada à **polimialgia reumática**.'
              ]
            },
            {
              id: '8.6-t1-r2',
              cells: [
                'Sinais e sintomas',
                '**Cefaleia temporal unilateral**, artéria temporal espessada, dolorosa e sem pulso, **claudicação de mandíbula**, febre, perda de peso, dor e rigidez de cinturas. **Complicação temida: neuropatia óptica isquêmica anterior** com **cegueira** irreversível.'
              ]
            },
            {
              id: '8.6-t1-r3',
              cells: [
                'Exames e resultados esperados',
                '**Velocidade de hemossedimentação muito elevada (>50–100 mm/h)** e proteína C reativa alta; anemia. **Biópsia da artéria temporal** (padrão-ouro): infiltrado granulomatoso transmural com **células gigantes** e fragmentação da lâmina elástica interna. Ultrassonografia com sinal do "halo".'
              ]
            },
            {
              id: '8.6-t1-r4',
              cells: [
                'Diagnósticos diferenciais',
                'Arterite de Takayasu (jovens), polimialgia isolada, enxaqueca, infecção, amiloidose.'
              ]
            },
            {
              id: '8.6-t1-r5',
              cells: [
                '**Tratamento e conduta**',
                '**Iniciar glicocorticoide em dose alta imediatamente, ANTES da biópsia** (prednisona 40–60 mg/dia; **pulso de metilprednisolona se sintomas visuais**), para salvar a visão. Adjuvante: **tocilizumabe**, metotrexato. Aspirina em dose baixa.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.7',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.7 Arterite de Takayasu',
      tables: [
        {
          id: '8.7-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.7-t1-r1',
              cells: [
                'Definição',
                'Vasculite granulomatosa crônica da **aorta e seus ramos** em **mulheres <40 anos**.'
              ]
            },
            {
              id: '8.7-t1-r2',
              cells: [
                'Sinais e sintomas',
                '**Claudicação de membros superiores**, parestesias, síncope, **assimetria de pulsos**, **diferença de pressão sistólica >10 mmHg entre os braços**, **sopros** carotídeos, subclávios e aórticos, hipertensão **renovascular**, coarctação adquirida.'
              ]
            },
            {
              id: '8.7-t1-r3',
              cells: [
                'Exames e resultados esperados',
                'Velocidade de hemossedimentação e proteína C reativa altas; **angiotomografia, angiorressonância ou arteriografia**: estenoses, oclusões e aneurismas de vasos nobres.'
              ]
            },
            {
              id: '8.7-t1-r4',
              cells: [
                'Diferenciais',
                'Arterite de células gigantes, displasia fibromuscular, aterosclerose, doença de Behçet.'
              ]
            },
            {
              id: '8.7-t1-r5',
              cells: [
                'Tratamento',
                '**Glicocorticoide** + imunossupressor (**metotrexato**, azatioprina) ou **tocilizumabe**; revascularização em fase inativa.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.8',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.8 Poliarterite nodosa',
      tables: [
        {
          id: '8.8-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.8-t1-r1',
              cells: [
                'Definição',
                'Vasculite necrotizante de **artérias de médio calibre**, **sem glomerulonefrite e sem acometimento pulmonar**.'
              ]
            },
            {
              id: '8.8-t1-r2',
              cells: [
                'Etiologia',
                'Associação com **hepatite B**; idiopática na maioria. **Anticorpo anti-citoplasma de neutrófilo negativo**.'
              ]
            },
            {
              id: '8.8-t1-r3',
              cells: [
                'Sinais e sintomas',
                '**Hipertensão renovascular** (isquemia renal), **orquite/dor testicular**, **angina mesentérica** com dor pós-prandial, **livedo reticular**, nódulos subcutâneos, úlceras de perna, **mononeurite múltipla** (assimétrica).'
              ]
            },
            {
              id: '8.8-t1-r4',
              cells: [
                'Exames e resultados esperados',
                '**Angiografia visceral** (renal e mesentérica): **microaneurismas** e estenoses em "contas de colar"; ou biópsia de pele, nervo ou músculo; provas de atividade inflamatória elevadas; pesquisa de hepatite B.'
              ]
            },
            {
              id: '8.8-t1-r5',
              cells: [
                'Tratamento',
                '**Glicocorticoide** ± **ciclofosfamida** nas formas graves ou viscerais; **antivirais** e plasmaférese se hepatite B ativa.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.9',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.9 Doença de Kawasaki',
      tables: [
        {
          id: '8.9-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.9-t1-r1',
              cells: [
                'Definição',
                'Vasculite febril aguda da infância que afeta artérias de médio calibre, sobretudo **coronárias**.'
              ]
            },
            {
              id: '8.9-t1-r2',
              cells: [
                'Critérios diagnósticos',
                '**Febre ≥5 dias + ≥4 dos 5**: (1) **conjuntivite** bilateral não purulenta; (2) alterações de lábios e boca (**língua em framboesa**, fissuras); (3) **linfadenopatia cervical** >1,5 cm, unilateral; (4) **exantema polimorfo**; (5) alterações de extremidades (**eritema e edema palmoplantar**, descamação periungueal tardia).'
              ]
            },
            {
              id: '8.9-t1-r3',
              cells: [
                'Complicações',
                '**Aneurismas de coronárias** em cerca de 25% sem tratamento; infarto; síndrome de ativação de macrófagos.'
              ]
            },
            {
              id: '8.9-t1-r4',
              cells: [
                'Exames',
                'Leucocitose, plaquetose (2ª–3ª semana), proteína C reativa alta, anemia, **ecocardiograma** para coronárias.'
              ]
            },
            {
              id: '8.9-t1-r5',
              cells: [
                'Tratamento',
                '**Imunoglobulina humana venosa 2 g/kg em dose única até o 10º dia** + **ácido acetilsalicílico** (dose anti-inflamatória, depois antiagregante). Refratário: nova dose, corticoide, infliximabe.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.10',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.10 Granulomatose com poliangiite',
      tables: [
        {
          id: '8.10-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.10-t1-r1',
              cells: [
                'Definição',
                'Vasculite **necrotizante granulomatosa** de pequenos vasos (antiga granulomatose de Wegener), com tríade: **vias aéreas superiores, pulmões e rins**.'
              ]
            },
            {
              id: '8.10-t1-r2',
              cells: [
                'Sinais e sintomas',
                '**Sinusite crônica refratária**, crostas nasais, epistaxe, **perfuração de septo**, **nariz em sela**, estenose subglótica; **tosse, hemoptise, nódulos pulmonares cavitados**; **glomerulonefrite rapidamente progressiva** pauci-imune; olho (episclerite, pseudotumor de órbita).'
              ]
            },
            {
              id: '8.10-t1-r3',
              cells: [
                'Exames e resultados esperados',
                '**Anticorpo anti-citoplasma de neutrófilo citoplasmático (c-ANCA)** com anti-proteinase 3 positivo (altamente específico); tomografia de tórax (nódulos cavitados); urina com hematúria dismórfica e proteinúria; **biópsia renal com crescentes pauci-imunes**.'
              ]
            },
            {
              id: '8.10-t1-r4',
              cells: [
                'Tratamento',
                '**Indução**: pulso de glicocorticoide + **rituximabe** ou **ciclofosfamida**; manutenção com rituximabe ou azatioprina. Plasmaférese em hemorragia alveolar ou lesão renal grave.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.11',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.11 Poliangiite microscópica',
      tables: [
        {
          id: '8.11-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.11-t1-r1',
              cells: [
                'Definição',
                'Vasculite necrotizante de pequenos vasos **sem granulomas** e sem envolvimento obstrutivo das vias aéreas superiores.'
              ]
            },
            {
              id: '8.11-t1-r2',
              cells: [
                'Sinais e sintomas',
                '**Síndrome pulmão-rim**: **hemorragia alveolar** difusa (capilarite) com hemoptise e queda do hematócrito + **glomerulonefrite crescêntica pauci-imune**; **púrpura palpável**, **mononeurite múltipla**.'
              ]
            },
            {
              id: '8.11-t1-r3',
              cells: [
                'Exames e resultados esperados',
                '**Anticorpo anti-citoplasma de neutrófilo perinuclear (p-ANCA)** com anti-mieloperoxidase positivo; infiltrados alveolares bilaterais; biópsia renal com crescentes.'
              ]
            },
            {
              id: '8.11-t1-r4',
              cells: [
                'Tratamento',
                '**Glicocorticoide venoso em dose alta** + **rituximabe ou ciclofosfamida**; **plasmaférese** se hemorragia alveolar grave com hipoxemia refratária ou lesão renal grave.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.12',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.12 Granulomatose eosinofílica com poliangiite',
      tables: [
        {
          id: '8.12-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.12-t1-r1',
              cells: [
                'Definição',
                'Vasculite de pequenos e médios vasos, granulomatosa e rica em eosinófilos (antiga síndrome de Churg-Strauss).'
              ]
            },
            {
              id: '8.12-t1-r2',
              cells: [
                'Sinais e sintomas',
                '**Asma grave de início tardio**, rinite alérgica, **polipose nasal**; **eosinofilia** persistente (>1.000/mm³ ou >10%); infiltrados pulmonares migratórios; **mononeurite múltipla** (pé e mão caídos); **miocardite eosinofílica** e insuficiência cardíaca.'
              ]
            },
            {
              id: '8.12-t1-r3',
              cells: [
                'Exames e resultados esperados',
                'Eosinofilia; **p-ANCA / anti-mieloperoxidase positivo em 40–50%**; imunoglobulina E elevada; tomografia com infiltrados.'
              ]
            },
            {
              id: '8.12-t1-r4',
              cells: [
                'Tratamento',
                '**Glicocorticoide**; formas graves: ciclofosfamida ou rituximabe; **mepolizumabe** (anti-interleucina 5) na doença refratária ou de manutenção.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.13',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.13 Vasculite por imunoglobulina A (púrpura de Henoch-Schönlein)',
      tables: [
        {
          id: '8.13-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.13-t1-r1',
              cells: [
                'Definição',
                'Vasculite leucocitoclástica de pequenos vasos por **imunocomplexos de imunoglobulina A**, mais comum em crianças.'
              ]
            },
            {
              id: '8.13-t1-r2',
              cells: [
                'Sinais e sintomas',
                '**Púrpura palpável** em membros inferiores e nádegas (**sem plaquetopenia**); **artrite ou artralgia** de joelhos e tornozelos; **dor abdominal em cólica**, vômitos, sangramento digestivo e **invaginação intestinal**; **nefrite** com hematúria e proteinúria.'
              ]
            },
            {
              id: '8.13-t1-r3',
              cells: [
                'Exames e resultados esperados',
                '**Plaquetas normais**; biópsia de pele com vasculite leucocitoclástica e **depósito de imunoglobulina A** na imunofluorescência; urina com hematúria e proteinúria.'
              ]
            },
            {
              id: '8.13-t1-r4',
              cells: [
                'Diferenciais',
                'Púrpuras trombocitopênicas, meningococcemia, outras vasculites.'
              ]
            },
            {
              id: '8.13-t1-r5',
              cells: [
                'Tratamento',
                'Suporte e analgesia, geralmente **autolimitada**; **glicocorticoide** na dor abdominal intensa ou na nefrite progressiva; acompanhamento da urina e da pressão.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '8.14',
      chapterId: 8,
      chapterTitle: '8. LÚPUS ERITEMATOSO SISTÊMICO, SÍNDROME DO ANTICORPO ANTIFOSFOLIPÍDEO E VASCULITES',
      title: '8.14 Vasculite crioglobulinêmica',
      tables: [
        {
          id: '8.14-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '8.14-t1-r1',
              cells: [
                'Definição',
                'Vasculite por **crioglobulinas** (imunoglobulinas que precipitam abaixo de 37 °C e se dissolvem ao reaquecer).'
              ]
            },
            {
              id: '8.14-t1-r2',
              cells: [
                'Etiologia',
                '**Infecção crônica pelo vírus da hepatite C** (>80% das formas mistas, tipos II e III).'
              ]
            },
            {
              id: '8.14-t1-r3',
              cells: [
                'Sinais e sintomas',
                '**Tríade de Meltzer**: **púrpura palpável recorrente**, **artralgia** e **fraqueza**; neuropatia (mononeurite múltipla ou polineuropatia), **glomerulonefrite membranoproliferativa**.'
              ]
            },
            {
              id: '8.14-t1-r4',
              cells: [
                'Exames e resultados esperados',
                '**Crioglobulinas positivas (criócrito)**; **fator reumatoide em título alto**; **complemento C4 muito baixo** com C3 normal ou pouco reduzido; sorologia e carga viral da hepatite C.'
              ]
            },
            {
              id: '8.14-t1-r5',
              cells: [
                'Tratamento',
                '**Antivirais de ação direta** para erradicar o vírus da hepatite C; **glicocorticoide + rituximabe** nas formas graves (renal ou neurológica); plasmaférese em casos extremos.'
              ]
            }
          ]
        }
      ]
    }
  ]
};
