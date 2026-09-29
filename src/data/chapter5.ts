import { Chapter } from '../types/clinical';

export const chapter5: Chapter = {
  id: 5,
  title: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
  shortTitle: 'Diabetes Especial',
  iconName: 'Droplets',
  topics: [
    {
      id: '5.1',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.1 Doença renal do diabetes',
      tables: [
        {
          id: '5.1-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '5.1-t1-r1',
              cells: [
                'Definição',
                'Nefropatia crônica por diabetes, com albuminúria e/ou queda da taxa de filtração glomerular.'
              ]
            },
            {
              id: '5.1-t1-r2',
              cells: [
                'Rastreamento',
                '**Anual**: creatinina com taxa de filtração glomerular estimada + **relação albumina/creatinina em amostra isolada**.'
              ]
            },
            {
              id: '5.1-t1-r3',
              cells: [
                'Classificação da albuminúria',
                '**A1**: <30 mg/g; **A2** (microalbuminúria): 30–300 mg/g; **A3** (macroalbuminúria): >300 mg/g.'
              ]
            },
            {
              id: '5.1-t1-r4',
              cells: [
                'Tratamento',
                'Controle glicêmico e pressórico; **inibidor da enzima conversora ou bloqueador do receptor de angiotensina** se albuminúria; **inibidor do cotransportador sódio-glicose 2** (nefroprotetor se taxa ≥20 mL/min/1,73 m²); **finerenona** (antagonista mineralocorticoide não esteroide) reduz progressão da proteinúria; estatina.'
              ]
            },
            {
              id: '5.1-t1-r5',
              cells: [
                'Ajuste de fármacos',
                '**Metformina**: reduzir para 1.000 mg/dia se taxa 30–44; **suspender se <30** (acidose láctica). **Linagliptina** não precisa de ajuste em nenhum estágio. **Evitar glibenclamida** (hipoglicemia grave e prolongada).'
              ]
            },
            {
              id: '5.1-t1-r6',
              cells: [
                'Diagnósticos diferenciais',
                'Causas não diabéticas se hematúria, ausência de retinopatia, queda rápida da função, início precoce.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.2',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.2 Diabetes com doença cardiovascular aterosclerótica e insuficiência cardíaca',
      tables: [
        {
          id: '5.2-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '5.2-t1-r1',
              cells: [
                'Princípio',
                'Escolher fármacos com **benefício cardiovascular independente da glicemia**.'
              ]
            },
            {
              id: '5.2-t1-r2',
              cells: [
                'Doença aterosclerótica (infarto, acidente vascular, doença coronariana)',
                '**Agonistas do receptor de peptídeo semelhante ao glucagon 1** (semaglutida, dulaglutida, liraglutida) ou **inibidores do cotransportador sódio-glicose 2**, pela redução de eventos cardiovasculares maiores.'
              ]
            },
            {
              id: '5.2-t1-r3',
              cells: [
                'Insuficiência cardíaca (fração reduzida ou preservada)',
                '**Inibidores do cotransportador sódio-glicose 2** (dapagliflozina, empagliflozina): reduzem internações e mortalidade cardiovascular.'
              ]
            },
            {
              id: '5.2-t1-r4',
              cells: [
                'Contraindicação',
                '**Pioglitazona** (retenção hídrica e piora da insuficiência cardíaca).'
              ]
            },
            {
              id: '5.2-t1-r5',
              cells: [
                'Outros cuidados',
                'Estatina, controle pressórico, antiagregante em prevenção secundária.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.3',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.3 Diabetes na internação (paciente não crítico)',
      tables: [
        {
          id: '5.3-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '5.3-t1-r1',
              cells: [
                'Antidiabéticos orais',
                '**Suspender na admissão**: metformina (acidose láctica com contraste ou sepse), sulfonilureias (hipoglicemia com jejum), inibidores do cotransportador sódio-glicose 2 (cetoacidose euglicêmica e infecção urinária grave).'
              ]
            },
            {
              id: '5.3-t1-r2',
              cells: [
                'Insulina',
                '**Abandonar a escala móvel isolada** ("sliding scale"). Usar **esquema basal-bolus com correção**: basal (NPH, glargina ou degludeca) + prandial (regular, lispro ou asparte) + doses corretivas.'
              ]
            },
            {
              id: '5.3-t1-r3',
              cells: [
                'Meta glicêmica',
                '**100–180 mg/dL** na maioria dos leitos de enfermaria; evitar hipoglicemia (<70).'
              ]
            },
            {
              id: '5.3-t1-r4',
              cells: [
                'Monitorização',
                'Glicemia capilar antes das refeições e ao deitar; ajustar diariamente.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.4',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.4 Diabetes no paciente grave',
      tables: [
        {
          id: '5.4-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '5.4-t1-r1',
              cells: [
                'Fisiopatologia',
                '**Hiperglicemia de estresse** por citocinas, cortisol e catecolaminas.'
              ]
            },
            {
              id: '5.4-t1-r2',
              cells: [
                'Tratamento',
                '**Insulina regular venosa contínua** em bomba, por protocolo com glicemia capilar horária.'
              ]
            },
            {
              id: '5.4-t1-r3',
              cells: [
                'Meta',
                '**140–180 mg/dL**. O estudo **NICE-SUGAR** mostrou **maior mortalidade** com controle intensivo (80–110) por hipoglicemia grave.'
              ]
            },
            {
              id: '5.4-t1-r4',
              cells: [
                'Cuidados',
                'Repor potássio; evitar hipoglicemia; transição para insulina subcutânea ao estabilizar.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.5',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.5 Diabetes no perioperatório',
      tables: [
        {
          id: '5.5-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '5.5-t1-r1',
              cells: [
                'Avaliação',
                'Hemoglobina glicada prévia (adiar cirurgia eletiva se muito descompensado).'
              ]
            },
            {
              id: '5.5-t1-r2',
              cells: [
                'Insulina basal',
                'No dia da cirurgia, **reduzir a dose basal em 20–30%** (na véspera e na manhã) e monitorar a glicemia.'
              ]
            },
            {
              id: '5.5-t1-r3',
              cells: [
                'Inibidores do cotransportador sódio-glicose 2',
                '**Suspender 3–4 dias antes** de cirurgia de médio e grande porte (**cetoacidose euglicêmica** no pós-operatório).'
              ]
            },
            {
              id: '5.5-t1-r4',
              cells: [
                'Agonistas do receptor de peptídeo semelhante ao glucagon 1',
                'Suspender antes de anestesia geral: **esvaziamento gástrico lento** e risco de **broncoaspiração**.'
              ]
            },
            {
              id: '5.5-t1-r5',
              cells: [
                'Outros antidiabéticos',
                'Metformina e sulfonilureias suspensos no dia da cirurgia.'
              ]
            },
            {
              id: '5.5-t1-r6',
              cells: [
                'Meta perioperatória',
                '100–180 mg/dL.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.6',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.6 Diabetes no idoso e na fragilidade',
      tables: [
        {
          id: '5.6-t1',
          headers: ['Perfil', 'Meta de hemoglobina glicada'],
          rows: [
            {
              id: '5.6-t1-r1',
              cells: [
                'Idoso funcional, sem comorbidades complexas',
                '**<7,0–7,5%**'
              ]
            },
            {
              id: '5.6-t1-r2',
              cells: [
                'Múltiplas comorbidades, declínio funcional ou cognitivo',
                '**<8,0%**'
              ]
            },
            {
              id: '5.6-t1-r3',
              cells: [
                'Frágil, dependente, institucionalizado ou em cuidados paliativos',
                '**Até 8,5%** (meta permissiva)'
              ]
            },
            {
              id: '5.6-t1-r4',
              cells: [
                'Princípios gerais',
                '**Evitar hipoglicemia** e desidratação; **desprescrever sulfonilureias**; simplificar esquemas de insulina; hipoglicemia causa quedas, fraturas de fêmur, arritmias e declínio cognitivo.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.7',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.7 Diabetes na gestação',
      tables: [
        {
          id: '5.7-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '5.7-t1-r1',
              cells: [
                'Classificação',
                '**Diabetes pré-gestacional** e **diabetes mellitus gestacional**.'
              ]
            },
            {
              id: '5.7-t1-r2',
              cells: [
                'Diagnóstico no 1º trimestre',
                'Glicemia de jejum **92–125 mg/dL** = diabetes gestacional; **≥126** ou hemoglobina glicada **≥6,5%** = diabetes pré-gestacional.'
              ]
            },
            {
              id: '5.7-t1-r3',
              cells: [
                'Teste oral de tolerância com 75 g (24–28 semanas)',
                'Em gestantes sem diagnóstico prévio: **um valor alterado fecha** o diagnóstico: jejum **≥92**, 1 hora **≥180**, 2 horas **≥153** mg/dL.'
              ]
            },
            {
              id: '5.7-t1-r4',
              cells: [
                'Metas',
                'Jejum **<95**, 1 hora após refeição **<140**, 2 horas **<120** mg/dL.'
              ]
            },
            {
              id: '5.7-t1-r5',
              cells: [
                'Tratamento',
                'Dieta e exercício; **insulina é a primeira escolha** (NPH, detemir, regular, asparte, lispro). Antidiabéticos orais são evitados no Brasil.'
              ]
            },
            {
              id: '5.7-t1-r6',
              cells: [
                'Complicações fetais',
                'Macrossomia, poli-hidrâmnio, sofrimento fetal, hipoglicemia neonatal; malformações no diabetes pré-gestacional descompensado.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.8',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.8 Cetoacidose diabética e estado hiperglicêmico hiperosmolar: diagnóstico',
      tables: [
        {
          id: '5.8-t1',
          headers: ['Tópico', 'Cetoacidose diabética', 'Estado hiperglicêmico hiperosmolar'],
          rows: [
            {
              id: '5.8-t1-r1',
              cells: [
                'Glicemia',
                '**≥200 mg/dL** ou diabetes conhecido (consenso internacional de 2024; pode ser normal na cetoacidose euglicêmica)',
                '**≥600 mg/dL**'
              ]
            },
            {
              id: '5.8-t1-r2',
              cells: [
                'pH e bicarbonato',
                '**pH <7,30 e/ou** bicarbonato **<18 mEq/L**, **ânion gap elevado**',
                'pH ≥7,30, bicarbonato ≥15'
              ]
            },
            {
              id: '5.8-t1-r3',
              cells: [
                'Cetonas',
                '**Beta-hidroxibutirato ≥3,0 mmol/L** ou cetonúria ≥2+',
                'Ausentes ou mínimas (<3,0 mmol/L)'
              ]
            },
            {
              id: '5.8-t1-r4',
              cells: [
                'Osmolaridade efetiva',
                'Variável',
                '**>300 mOsm/kg** (consenso de 2024; antes >320)'
              ]
            },
            {
              id: '5.8-t1-r5',
              cells: [
                'Clínica',
                'Respiração de **Kussmaul**, hálito cetônico, **dor abdominal** simulando abdome agudo, vômitos',
                'Desidratação grave, **torpor a coma**, focais neurológicos'
              ]
            },
            {
              id: '5.8-t1-r6',
              cells: [
                'Precipitantes',
                'Infecção, omissão de insulina, infarto, pancreatite, drogas',
                'Idosos, diabetes tipo 2, infecção'
              ]
            },
            {
              id: '5.8-t1-r7',
              cells: [
                'Exames',
                'Gasometria, cetonas, sódio (corrigir pela glicemia), potássio, ureia/creatinina, fosfato, hemograma, eletrocardiograma, culturas',
                'Mesmos'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5.9',
      chapterId: 5,
      chapterTitle: '5. DIABETES EM SITUAÇÕES ESPECIAIS',
      title: '5.9 Cetoacidose diabética e estado hiperglicêmico hiperosmolar: tratamento',
      tables: [
        {
          id: '5.9-t1',
          headers: ['Etapa', 'Conduta'],
          rows: [
            {
              id: '5.9-t1-r1',
              cells: [
                '1. Hidratação',
                '**Soro fisiológico 0,9% 1.000–1.500 mL na 1ª hora**, depois ajustar pelo sódio corrigido e pelo estado de hidratação.'
              ]
            },
            {
              id: '5.9-t1-r2',
              cells: [
                '2. Potássio (antes da insulina)',
                '**Potássio <3,3 mEq/L: contraindicada a insulina**; repor cloreto de potássio venoso primeiro (risco de arritmia e parada). **3,3–5,2**: adicionar **20–30 mEq por litro** de soro e iniciar insulina. **>5,2**: não repor; iniciar insulina e dosar de hora em hora.'
              ]
            },
            {
              id: '5.9-t1-r3',
              cells: [
                '3. Insulina',
                '**Insulina regular venosa contínua 0,1 U/kg/hora**.'
              ]
            },
            {
              id: '5.9-t1-r4',
              cells: [
                '4. Glicose',
                'Adicionar **soro glicosado a 5%** quando a glicemia chegar a **200 mg/dL na cetoacidose** (**300 no estado hiperosmolar**), para corrigir a acidose sem hipoglicemia e sem **edema cerebral**.'
              ]
            },
            {
              id: '5.9-t1-r5',
              cells: [
                'Resolução da cetoacidose',
                'Consenso de 2024: **beta-hidroxibutirato <0,6 mmol/L** + **pH venoso ≥7,30** ou **bicarbonato ≥18**. Critério clássico: glicemia <200 + dois de bicarbonato ≥15–18, pH >7,30, ânion gap normal. Estado hiperosmolar: osmolaridade <300, diurese e consciência normalizadas.'
              ]
            },
            {
              id: '5.9-t1-r6',
              cells: [
                'Transição',
                '**Insulina subcutânea 2 horas antes de suspender a bomba venosa.**'
              ]
            },
            {
              id: '5.9-t1-r7',
              cells: [
                'Bicarbonato',
                'Reservado a pH <6,9. Tratar o fator precipitante.'
              ]
            }
          ]
        }
      ]
    }
  ]
};
