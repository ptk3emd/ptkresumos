import { Chapter } from '../types/clinical';

export const chapter12: Chapter = {
  id: 12,
  title: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
  shortTitle: 'Onco-hematologia',
  iconName: 'Droplets',
  topics: [
    {
      id: '12.1',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.1 Neutropenia febril',
      tables: [
        {
          id: '12.1-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.1-t1-r1',
              cells: [
                'Definição',
                '**Neutrófilos <500/mm³** (ou <1.000 com queda esperada para <500) e **febre ≥38,3 °C única ou ≥38 °C por 1 hora**. **Emergência**: mortalidade elevada sem antibiótico precoce.'
              ]
            },
            {
              id: '12.1-t1-r2',
              cells: [
                'Etiologia',
                'Quimioterapia mielossupressora, leucemias agudas, transplante. Bactérias (gram-negativas, incluindo *Pseudomonas*, e gram-positivas), fungos (*Candida*, *Aspergillus* após neutropenia prolongada) e vírus. Foco muitas vezes não identificado.'
              ]
            },
            {
              id: '12.1-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Febre pode ser o **único sinal** (sem pus ou infiltrado por falta de neutrófilos). Examinar pele, cateter, orofaringe, região perianal (sem toque retal).'
              ]
            },
            {
              id: '12.1-t1-r4',
              cells: [
                'Diagnóstico e exames',
                '**Duas hemoculturas** (periférica e do cateter), urina, radiografia de tórax, lactato, função renal e hepática; TC de tórax se persistência. Escore **MASCC ≥21 = baixo risco**.'
              ]
            },
            {
              id: '12.1-t1-r5',
              cells: [
                'Tratamento',
                '**Antibiótico empírico anti-Pseudomonas em até 60 minutos**: cefepime, piperacilina-tazobactam ou carbapenêmico. Adicionar **vancomicina** se instabilidade, infecção de pele/cateter, pneumonia, colonização por MRSA. **Baixo risco (MASCC ≥21)**: ciprofloxacino + amoxicilina-clavulanato, ambulatorial.'
              ]
            },
            {
              id: '12.1-t1-r6',
              cells: [
                'Febre persistente (4–7 dias)',
                '**Antifúngico empírico** (caspofungina, anfotericina lipossomal) e TC de tórax (galactomanana se aspergilose). **G-CSF** profilático quando risco de neutropenia febril >20%; terapêutico apenas em situações selecionadas.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.2',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.2 Síndrome de lise tumoral',
      tables: [
        {
          id: '12.2-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.2-t1-r1',
              cells: [
                'Definição',
                'Liberação maciça de conteúdo intracelular por destruição rápida de células tumorais (espontânea ou pós-quimioterapia): **hiperuricemia, hipercalemia, hiperfosfatemia e hipocalcemia**.'
              ]
            },
            {
              id: '12.2-t1-r2',
              cells: [
                'Fatores de risco',
                'Tumores de crescimento rápido e alta carga: **linfoma de Burkitt, LLA, LMA com hiperleucocitose**, linfomas de alto grau; DHL elevado, insuficiência renal prévia, desidratação.'
              ]
            },
            {
              id: '12.2-t1-r3',
              cells: [
                'Critérios de Cairo-Bishop',
                '**Laboratorial**: ≥2 de: ácido úrico ≥8 mg/dL, potássio ≥6, fósforo ≥4,5 e cálcio corrigido ≤7 (ou aumento/queda de 25%). **Clínica**: creatinina ≥1,5× o limite, arritmia/morte súbita ou convulsão.'
              ]
            },
            {
              id: '12.2-t1-r4',
              cells: [
                'Sinais e sintomas',
                'Náusea, letargia, câimbras, tetania, **arritmia**, convulsão, oligúria/insuficiência renal aguda (cristais de urato e fosfato de cálcio).'
              ]
            },
            {
              id: '12.2-t1-r5',
              cells: [
                'Prevenção',
                '**Hidratação vigorosa** (≈3 L/m²/dia), **alopurinol** (baixo/moderado risco) e **rasburicase** (alto risco); evitar alcalinização de rotina. **Rasburicase é contraindicada na deficiência de G6PD** (hemólise, metemoglobinemia); dosar ácido úrico com amostra em gelo.'
              ]
            },
            {
              id: '12.2-t1-r6',
              cells: [
                'Tratamento',
                'Hidratação, rasburicase, controle do potássio (gluconato de cálcio se alteração no ECG, insulina + glicose), **não repor cálcio** exceto se sintomático (precipita cálcio-fosfato), quelantes de fósforo, **diálise** em oligúria/refratariedade.'
              ]
            }
          ]
        },
        {
          id: '12.2-t2',
          headers: ['Fármaco/medida', 'Indicação e cuidados'],
          rows: [
            {
              id: '12.2-t2-r1',
              cells: [
                'Hidratação IV vigorosa',
                'Base da prevenção e do tratamento; manter diurese alta'
              ]
            },
            {
              id: '12.2-t2-r2',
              cells: [
                'Alopurinol',
                'Inibe a formação de ácido úrico; risco baixo/intermediário; não reduz o ácido úrico já formado'
              ]
            },
            {
              id: '12.2-t2-r3',
              cells: [
                'Rasburicase',
                'Degrada o ácido úrico; risco alto; **contraindicada na deficiência de G6PD**'
              ]
            },
            {
              id: '12.2-t2-r4',
              cells: [
                'Gluconato de cálcio',
                'Só se arritmia/convulsão por hipocalcemia ou hipercalemia com alteração de ECG'
              ]
            },
            {
              id: '12.2-t2-r5',
              cells: [
                'Diálise',
                'Hipercalemia refratária, oligúria, hiperfosfatemia grave'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.3',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.3 Compressão medular, síndrome da veia cava superior e hipercalcemia da malignidade',
      tables: [
        {
          id: '12.3-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.3-t1-r1',
              cells: [
                'Compressão medular neoplásica',
                'Metástase vertebral (pulmão, mama, próstata, mieloma, linfoma). **Dor dorsal progressiva** que piora à noite e ao decúbito, depois fraqueza, alteração sensitiva e esfíncteres. **RM de coluna total urgente**; **dexametasona** (10 mg IV em ataque, depois 4 mg 6/6 h) e **radioterapia** ou cirurgia descompressiva conforme estabilidade e prognóstico. Déficit motor há mais de 24–48 h tem pouca chance de recuperação.'
              ]
            },
            {
              id: '12.3-t1-r2',
              cells: [
                'Síndrome da veia cava superior',
                'Obstrução do retorno venoso por tumor mediastinal (**câncer de pulmão**, linfoma) ou trombo em cateter. **Edema de face e membros superiores, circulação colateral torácica, turgência jugular, dispneia**, estridor (emergência). **TC de tórax com contraste**; **elevar a cabeceira**, corticoide se linfoma, **radioterapia, quimioterapia ou stent**; obter biópsia sempre que possível antes do tratamento (exceto estridor).'
              ]
            },
            {
              id: '12.3-t1-r3',
              cells: [
                'Hipercalcemia da malignidade',
                'Mecanismos: **PTHrP** (escamosos, pulmão, mama), osteólise (mieloma, mama), calcitriol (linfomas). **Poliúria, desidratação, constipação, confusão, coma, arritmia, encurtamento do QT**. Cálcio **corrigido pela albumina**.'
              ]
            },
            {
              id: '12.3-t1-r4',
              cells: [
                'Tratamento da hipercalcemia',
                '**Soro fisiológico** em volume (4–6 L/dia) + **zoledronato 4 mg IV** (ou pamidronato); **calcitonina** para efeito rápido (48 h, taquifilaxia); **denosumabe** se refratária ou insuficiência renal; **glicocorticoide** em linfomas/mieloma; diálise em casos extremos. Diurético de alça só se sobrecarga.'
              ]
            }
          ]
        },
        {
          id: '12.3-t2',
          headers: ['Emergência', 'Achado-chave', 'Conduta imediata'],
          rows: [
            {
              id: '12.3-t2-r1',
              cells: [
                'Compressão medular',
                'Dor dorsal + déficit motor/sensitivo',
                'RM de coluna total, dexametasona, radioterapia/cirurgia'
              ]
            },
            {
              id: '12.3-t2-r2',
              cells: [
                'Síndrome da veia cava superior',
                'Edema facial, colaterais torácicas, estridor',
                'TC com contraste, cabeceira elevada, radioterapia/quimioterapia/stent'
              ]
            },
            {
              id: '12.3-t2-r3',
              cells: [
                'Hipercalcemia da malignidade',
                'Cálcio corrigido elevado, poliúria, confusão',
                'Hidratação + zoledronato ± calcitonina'
              ]
            },
            {
              id: '12.3-t2-r4',
              cells: [
                'Tamponamento cardíaco',
                'Tríade de Beck, pulso paradoxal',
                'Pericardiocentese'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.4',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.4 Leucostase, leucemia promielocítica, hiperviscosidade e tamponamento',
      tables: [
        {
          id: '12.4-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.4-t1-r1',
              cells: [
                'Leucostase',
                'Leucócitos **>100.000/mm³** (LMA, LMC em blástica; LLA/LLC mais raramente) com **sintomas neurológicos** (cefaleia, confusão, AVC) ou **pulmonares** (hipoxemia). Tratar com **hidratação, hidroxiureia e leucoaférese/citorredução**; **evitar transfusão de concentrado de hemácias** e diuréticos; profilaxia de lise tumoral.'
              ]
            },
            {
              id: '12.4-t1-r2',
              cells: [
                'Leucemia promielocítica aguda (LPA)',
                '**t(15;17) PML-RARA**; **coagulopatia (CIVD e fibrinólise)**, hemorragia grave. **Emergência**: iniciar **ácido all-trans retinoico (ATRA)** **imediatamente na suspeita**, sem esperar confirmação; associar **trióxido de arsênico**; transfundir plaquetas e crioprecipitado (fibrinogênio >150 mg/dL, plaquetas >30–50 mil). Complicação: **síndrome de diferenciação** (febre, dispneia, derrame, hipotensão): dexametasona.'
              ]
            },
            {
              id: '12.4-t1-r3',
              cells: [
                'Síndrome de hiperviscosidade',
                'Macroglobulinemia de Waldenström (IgM) e mieloma IgA. **Visão turva, cefaleia, sangramento de mucosas, alteração neurológica**, retina em "salsicha". **Plasmaférese** de urgência; evitar transfusão de hemácias antes.'
              ]
            },
            {
              id: '12.4-t1-r4',
              cells: [
                'Tamponamento cardíaco',
                'Derrame pericárdico neoplásico (pulmão, mama, linfoma). **Tríade de Beck** (hipotensão, bulhas abafadas, turgência jugular), taquicardia, **pulso paradoxal**. Ecocardiograma e **pericardiocentese**; janela pericárdica em recorrência.'
              ]
            },
            {
              id: '12.4-t1-r5',
              cells: [
                'Anemia hemolítica e trombocitopenia',
                'PTI e AHAI em LLC/linfomas: corticoide; **PTT** (pêntade: febre, anemia hemolítica microangiopática, plaquetopenia, alteração neurológica, insuficiência renal): **plasmaférese** urgente.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.5',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.5 Leucemia mieloide aguda e leucemia promielocítica',
      tables: [
        {
          id: '12.5-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.5-t1-r1',
              cells: [
                'Definição',
                'Neoplasia clonal de progenitores mieloides com **≥20% de blastos** na medula ou sangue (critério clássico; ≥10% em alguns subtipos definidos por alterações genéticas na classificação recente).'
              ]
            },
            {
              id: '12.5-t1-r2',
              cells: [
                'Fatores de risco',
                'Idade, síndrome mielodisplásica prévia, quimio/radioterapia prévia, benzeno, síndrome de Down, anemia de Fanconi.'
              ]
            },
            {
              id: '12.5-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Falência medular: **anemia** (fadiga), **neutropenia** (infecções), **plaquetopenia** (sangramento); febre, dor óssea, hepatoesplenomegalia; infiltração gengival (M4/M5), **cloroma**; CIVD (LPA).'
              ]
            },
            {
              id: '12.5-t1-r4',
              cells: [
                'Diagnóstico',
                '**Hemograma** (citopenias, blastos), **mielograma**: blastos ≥20%, **bastonetes de Auer**, mieloperoxidase positiva; **imunofenotipagem** (CD13, CD33, CD117, MPO), **cariótipo, FISH e biologia molecular** (FLT3, NPM1, CEBPA, IDH1/2, TP53).'
              ]
            },
            {
              id: '12.5-t1-r5',
              cells: [
                'Tratamento',
                '**Indução "7+3"** (citarabina por 7 dias + antraciclina por 3 dias) em aptos; consolidação com citarabina em alta dose ou **transplante alogênico** conforme risco genético. Inibidores de FLT3 (midostaurina) se mutação; **venetoclax + azacitidina** em inaptos (idosos). LPA: **ATRA + trióxido de arsênico** (alta taxa de cura).'
              ]
            },
            {
              id: '12.5-t1-r6',
              cells: [
                'Complicações',
                'Neutropenia febril, hemorragia, lise tumoral, leucostase, CIVD, síndrome de diferenciação.'
              ]
            }
          ]
        },
        {
          id: '12.5-t2',
          headers: ['Fármaco', 'Indicação', 'Reações adversas e cuidados'],
          rows: [
            {
              id: '12.5-t2-r1',
              cells: [
                'Citarabina + daunorrubicina/idarrubicina (7+3)',
                'Indução da LMA em aptos',
                'Mielossupressão grave, cardiotoxicidade (antraciclina), mucosite'
              ]
            },
            {
              id: '12.5-t2-r2',
              cells: [
                'Midostaurina; gilteritinibe',
                'LMA com mutação FLT3',
                'Náusea, toxicidade hepática; QT'
              ]
            },
            {
              id: '12.5-t2-r3',
              cells: [
                'Venetoclax + azacitidina',
                'LMA em inaptos',
                'Neutropenia, lise tumoral (iniciar com escalonamento)'
              ]
            },
            {
              id: '12.5-t2-r4',
              cells: [
                'ATRA + trióxido de arsênico',
                '**LPA**',
                'Síndrome de diferenciação; QT longo e arritmia (arsênico)'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.6',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.6 Leucemia linfoblástica aguda',
      tables: [
        {
          id: '12.6-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.6-t1-r1',
              cells: [
                'Definição',
                'Neoplasia de precursores linfoides B ou T (**≥20% de linfoblastos**); mais comum em **crianças** (pico 2–5 anos); pior prognóstico em adultos e lactentes.'
              ]
            },
            {
              id: '12.6-t1-r2',
              cells: [
                'Sinais e sintomas',
                'Falência medular (anemia, infecção, sangramento), **febre, dor óssea/articular**, linfonodomegalia e hepatoesplenomegalia, **massa mediastinal (LLA-T)**, infiltração de **SNC e testículos**.'
              ]
            },
            {
              id: '12.6-t1-r3',
              cells: [
                'Diagnóstico',
                'Mielograma com linfoblastos; **imunofenotipagem** (TdT+, CD19/CD10 na B; CD3 na T); **citogenética**: **t(9;22) BCR-ABL1 (cromossomo Philadelphia)** em ~25% dos adultos (pior prognóstico), hiperdiploidia (bom prognóstico, criança), t(12;21) (bom), t(4;11) (pior). **Punção lombar** para avaliar SNC.'
              ]
            },
            {
              id: '12.6-t1-r4',
              cells: [
                'Tratamento',
                'Quimioterapia multiagente em fases (indução, consolidação, manutenção por 2 anos) **com profilaxia do SNC (quimioterapia intratecal)**; **Ph+**: adicionar **inibidor de tirosina-quinase** (imatinibe, dasatinibe, ponatinibe); imunoterapia (**blinatumomabe**, inotuzumabe, CAR-T) em recaída/doença residual; **transplante alogênico** em alto risco.'
              ]
            },
            {
              id: '12.6-t1-r5',
              cells: [
                'Complicações',
                'Lise tumoral, infecções, neurotoxicidade, hiperglicemia e pancreatite (asparaginase), trombose, esterilidade.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.7',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.7 Leucemia mieloide crônica',
      tables: [
        {
          id: '12.7-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.7-t1-r1',
              cells: [
                'Definição',
                'Neoplasia mieloproliferativa por **t(9;22) — gene de fusão *BCR-ABL1* (cromossomo Philadelphia)**, com tirosina-quinase constitutivamente ativa.'
              ]
            },
            {
              id: '12.7-t1-r2',
              cells: [
                'Fases',
                '**Crônica** (maioria; leucocitose com maturação), **acelerada** (10–19% de blastos, basofilia ≥20%) e **blástica** (≥20% blastos; comportamento de leucemia aguda).'
              ]
            },
            {
              id: '12.7-t1-r3',
              cells: [
                'Sinais e sintomas',
                'Muitas vezes achado de **leucocitose**; fadiga, sudorese, perda de peso, **esplenomegalia volumosa** (plenitude), priapismo; sintomas de leucostase.'
              ]
            },
            {
              id: '12.7-t1-r4',
              cells: [
                'Diagnóstico',
                '**Leucocitose com desvio à esquerda até mieloblastos e basofilia**, plaquetas aumentadas; **fosfatase alcalina leucocitária (FAL) baixa** (diferencia de reação leucemoide); **BCR-ABL1** por PCR/FISH; cariótipo; mielograma.'
              ]
            },
            {
              id: '12.7-t1-r5',
              cells: [
                'Tratamento',
                '**Inibidor de tirosina-quinase** (imatinibe; dasatinibe, nilotinibe, bosutinibe, ponatinibe). Monitorizar resposta molecular (BCR-ABL PCR quantitativo) aos 3, 6 e 12 meses; transplante em blástica/falha. Descontinuação em subgrupo com resposta profunda sustentada.'
              ]
            }
          ]
        },
        {
          id: '12.7-t2',
          headers: ['Fármaco', 'Indicação', 'Reações adversas e cuidados'],
          rows: [
            {
              id: '12.7-t2-r1',
              cells: [
                'Imatinibe',
                'Primeira linha',
                'Edema, náusea, cãibras, mielossupressão, hepatotoxicidade'
              ]
            },
            {
              id: '12.7-t2-r2',
              cells: [
                'Dasatinibe',
                '2ª geração; T315I resistente ao dasatinibe',
                '**Derrame pleural**, hipertensão pulmonar, trombocitopenia'
              ]
            },
            {
              id: '12.7-t2-r3',
              cells: [
                'Nilotinibe',
                '2ª geração',
                '**QT longo**, hiperglicemia, doença arterial oclusiva'
              ]
            },
            {
              id: '12.7-t2-r4',
              cells: [
                'Ponatinibe',
                'Mutação **T315I** e falha',
                'Trombose arterial, hipertensão, pancreatite'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.8',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.8 Leucemia linfocítica crônica',
      tables: [
        {
          id: '12.8-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.8-t1-r1',
              cells: [
                'Definição',
                'Neoplasia de **linfócitos B maduros clonais** (CD5+, CD19+, CD23+) com **≥5.000/µL** no sangue por ≥3 meses. Doença de idosos (mediana ~70 anos), a leucemia mais comum no Ocidente.'
              ]
            },
            {
              id: '12.8-t1-r2',
              cells: [
                'Sinais e sintomas',
                'Frequentemente **assintomática** (leucocitose no hemograma); linfonodomegalia indolor, esplenomegalia, fadiga, sintomas B, infecções de repetição (**hipogamaglobulinemia**).'
              ]
            },
            {
              id: '12.8-t1-r3',
              cells: [
                'Diagnóstico',
                'Hemograma com linfocitose de células pequenas maduras e **sombras de Gumprecht (smudge cells)**; **citometria de fluxo** (CD5+, CD19+, CD23+, CD20 fraco, imunoglobulina de superfície fraca); FISH para **del(17p)/TP53**, del(11q), trissomia 12, del(13q); mutação IGHV. **Estadiamento de Rai e Binet.**'
              ]
            },
            {
              id: '12.8-t1-r4',
              cells: [
                'Complicações',
                '**Anemia hemolítica autoimune e PTI**, hipogamaglobulinemia e infecções, segundas neoplasias, **transformação de Richter** (linfoma de grandes células; febre, DHL alto, crescimento rápido).'
              ]
            },
            {
              id: '12.8-t1-r5',
              cells: [
                'Tratamento',
                '**Só tratar se doença ativa** (critérios iwCLL): citopenias progressivas, esplenomegalia/linfonodomegalia volumosa ou sintomática, sintomas B, tempo de duplicação linfocitária <6 meses. **Observação** em estádios iniciais assintomáticos. Terapia: **inibidores de BTK** (ibrutinibe, acalabrutinibe, zanubrutinibe) ou **venetoclax + obinutuzumabe**; **del(17p)/TP53**: evitar quimioimunoterapia, preferir iBTK/venetoclax. Reposição de imunoglobulina se infecções graves recorrentes.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.9',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.9 Linfoma de Hodgkin',
      tables: [
        {
          id: '12.9-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.9-t1-r1',
              cells: [
                'Definição',
                'Linfoma de células B com **células de Reed-Sternberg** (CD15+, CD30+) em fundo inflamatório reativo; disseminação **contígua**.'
              ]
            },
            {
              id: '12.9-t1-r2',
              cells: [
                'Epidemiologia',
                'Distribuição **bimodal** (jovens 20–30 e >55 anos); subtipo mais comum: **esclerose nodular**. Associação com **EBV** e HIV.'
              ]
            },
            {
              id: '12.9-t1-r3',
              cells: [
                'Sinais e sintomas',
                '**Adenomegalia cervical/supraclavicular indolor**, massa mediastinal (tosse, dispneia), **sintomas B** (febre >38 °C, sudorese noturna, perda >10% do peso em 6 meses), **prurido**, **dor nos linfonodos após ingestão de álcool**.'
              ]
            },
            {
              id: '12.9-t1-r4',
              cells: [
                'Diagnóstico',
                '**Biópsia excisional** do linfonodo com imuno-histoquímica (CD15+, CD30+, CD20 fraco/negativo). **PET-CT** para estadiamento (Ann Arbor/Lugano); hemograma, VHS, DHL, função hepática/renal, sorologias, ecocardiograma antes de antraciclina.'
              ]
            },
            {
              id: '12.9-t1-r5',
              cells: [
                'Tratamento',
                '**ABVD** (doxorrubicina, bleomicina, vimblastina, dacarbazina) ± radioterapia; estádios avançados: ABVD, BEACOPP ou brentuximabe-AVD; adaptação pelo PET intermediário; recaída: quimioterapia de resgate + **transplante autólogo**; **brentuximabe vedotina** e **anti-PD-1** (nivolumabe, pembrolizumabe). Cura em ~80–90%.'
              ]
            },
            {
              id: '12.9-t1-r6',
              cells: [
                'Complicações tardias',
                '**Cardiotoxicidade** (doxorrubicina), **toxicidade pulmonar da bleomicina**, **segundas neoplasias** (mama, pulmão), hipotireoidismo pós-radioterapia, infertilidade.'
              ]
            }
          ]
        },
        {
          id: '12.9-t2',
          headers: ['Fármaco (esquema)', 'Componente', 'Reações adversas e cuidados'],
          rows: [
            {
              id: '12.9-t2-r1',
              cells: [
                'ABVD',
                'Doxorrubicina, bleomicina, vimblastina, dacarbazina',
                '**Cardiotoxicidade** (doxorrubicina), **fibrose pulmonar** (bleomicina), neutropenia'
              ]
            },
            {
              id: '12.9-t2-r2',
              cells: [
                'BEACOPP escalonado',
                'Bleomicina, etoposídeo, doxorrubicina, ciclofosfamida, vincristina, procarbazina, prednisona',
                'Mais eficaz e mais tóxico; infertilidade, segundas neoplasias'
              ]
            },
            {
              id: '12.9-t2-r3',
              cells: [
                'Brentuximabe vedotina',
                'Anti-CD30 conjugado',
                'Neuropatia periférica; LEMP raro'
              ]
            },
            {
              id: '12.9-t2-r4',
              cells: [
                'Nivolumabe; pembrolizumabe',
                'Anti-PD-1 em recaída',
                'Toxicidade imunomediada (tireoide, pneumonite, colite)'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.10',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.10 Linfomas não Hodgkin',
      tables: [
        {
          id: '12.10-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.10-t1-r1',
              cells: [
                'Definição e classificação',
                'Grupo heterogêneo de neoplasias linfoides. **Indolentes**: folicular, zona marginal (MALT), linfocítico. **Agressivos**: **difuso de grandes células B (LDGCB)**, manto, linfoma T periférico. **Altamente agressivos**: **Burkitt**, linfoblástico.'
              ]
            },
            {
              id: '12.10-t1-r2',
              cells: [
                'Sinais e sintomas',
                'Adenomegalia (indolor, não contígua), esplenomegalia, **sintomas B**, massa abdominal, acometimento extranodal (estômago, SNC, pele, medula); citopenias; lise tumoral espontânea (Burkitt).'
              ]
            },
            {
              id: '12.10-t1-r3',
              cells: [
                'Diagnóstico',
                '**Biópsia excisional** (não usar só punção); imuno-histoquímica (CD20, CD10, BCL6, MUM1, ki-67, ciclina D1); **PET-CT**; hemograma, **DHL** (prognóstico), ácido úrico, HIV, hepatites B e C (**reativação do vírus B com rituximabe**); biópsia de medula, punção lombar conforme risco.'
              ]
            },
            {
              id: '12.10-t1-r4',
              cells: [
                'Translocações e associações',
                '**Folicular: t(14;18) BCL2**. **Manto: t(11;14) ciclina D1**. **Burkitt: t(8;14) c-MYC** ("céu estrelado", EBV/HIV, lise tumoral, crescimento muito rápido). **MALT gástrico: *H. pylori*** (erradicação). LDGCB: os "double hit" (MYC + BCL2/BCL6) têm pior prognóstico.'
              ]
            },
            {
              id: '12.10-t1-r5',
              cells: [
                'Tratamento',
                '**LDGCB: R-CHOP** (rituximabe, ciclofosfamida, doxorrubicina, vincristina, prednisona), cura em ~60–70%; Burkitt: esquemas intensivos com profilaxia de SNC e lise tumoral; **folicular**: observação se baixo volume; rituximabe ± quimioterapia; manto: R-CHOP alternando citarabina/ibrutinibe; **MALT gástrico**: erradicação do *H. pylori*; recaída: transplante autólogo, **CAR-T**, anticorpos biespecíficos.'
              ]
            },
            {
              id: '12.10-t1-r6',
              cells: [
                'Complicações',
                'Lise tumoral, infiltração do SNC, neutropenia febril, cardiotoxicidade (antraciclina), reativação de hepatite B, transformação de linfoma indolente em agressivo.'
              ]
            }
          ]
        },
        {
          id: '12.10-t2',
          headers: ['Linfoma', 'Alteração típica', 'Ponto-chave'],
          rows: [
            {
              id: '12.10-t2-r1',
              cells: [
                'Difuso de grandes células B',
                'CD20+; BCL6; ki-67 alto',
                'Mais comum; **R-CHOP**'
              ]
            },
            {
              id: '12.10-t2-r2',
              cells: [
                'Folicular',
                '**t(14;18) BCL2**',
                'Indolente; observar se assintomático'
              ]
            },
            {
              id: '12.10-t2-r3',
              cells: [
                'Manto',
                '**t(11;14) ciclina D1**',
                'Acometimento de TGI (polipose linfomatoide)'
              ]
            },
            {
              id: '12.10-t2-r4',
              cells: [
                'Burkitt',
                '**t(8;14) c-MYC**',
                'Céu estrelado; **lise tumoral**; SNC'
              ]
            },
            {
              id: '12.10-t2-r5',
              cells: [
                'MALT gástrico',
                '***H. pylori***',
                'Erradicar o *H. pylori*'
              ]
            },
            {
              id: '12.10-t2-r6',
              cells: [
                'Linfoma T periférico',
                'CD3+; mau prognóstico',
                'CHOP; transplante'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.11',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.11 Mieloma múltiplo e discrasias plasmocitárias',
      tables: [
        {
          id: '12.11-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.11-t1-r1',
              cells: [
                'Definição',
                'Neoplasia de **plasmócitos clonais** na medula óssea com produção de proteína monoclonal e lesão de órgão-alvo. Idosos (mediana ~70 anos).'
              ]
            },
            {
              id: '12.11-t1-r2',
              cells: [
                'Sinais e sintomas (CRAB)',
                '**C**álcio elevado (hipercalcemia), **R**enal (insuficiência renal por cilindros de cadeia leve), **A**nemia, **B**one (lesões líticas, dor óssea, fraturas patológicas). Também infecções recorrentes, neuropatia, hiperviscosidade, amiloidose.'
              ]
            },
            {
              id: '12.11-t1-r3',
              cells: [
                'Critérios diagnósticos',
                '**≥10% de plasmócitos clonais** na medula (ou plasmocitoma) **+** evento definidor de mieloma: **CRAB** ou biomarcadores **SLiM** (**≥60% de plasmócitos**, **relação de cadeias leves livres ≥100**, **>1 lesão focal na RM**).'
              ]
            },
            {
              id: '12.11-t1-r4',
              cells: [
                'Exames e resultados esperados',
                '**Eletroforese e imunofixação de proteínas** no soro e na urina (pico monoclonal, **proteína de Bence-Jones**), **cadeias leves livres**, **beta-2-microglobulina** e albumina (estadiamento ISS/R-ISS), DHL, cálcio, creatinina; **esfregaço com rouleaux**, VHS muito alto; **mielograma/biópsia**; **FISH** (t(4;14), t(14;16), del(17p)); **imagem** (TC de baixa dose, RM ou PET-CT; radiografia de crânio com lesões em "saca-bocado").'
              ]
            },
            {
              id: '12.11-t1-r5',
              cells: [
                'Tratamento',
                '**Elegível a transplante**: indução (**daratumumabe + bortezomibe + lenalidomida + dexametasona**) → **transplante autólogo** → manutenção com lenalidomida. **Inelegível**: daratumumabe + lenalidomida + dexametasona (ou VRd). Suporte: **bisfosfonato/denosumabe**, profilaxia antiviral (aciclovir) e de trombose (aspirina ou anticoagulante com IMiD), radioterapia para dor/compressão.'
              ]
            },
            {
              id: '12.11-t1-r6',
              cells: [
                'MGUS e mieloma indolente',
                '**MGUS**: componente M **<3 g/dL**, plasmócitos **<10%**, sem CRAB; risco de progressão ~1%/ano; apenas seguimento. **Mieloma indolente**: componente M ≥3 g/dL ou plasmócitos 10–60%, sem CRAB; observação (risco ~10%/ano).'
              ]
            },
            {
              id: '12.11-t1-r7',
              cells: [
                'Macroglobulinemia de Waldenström',
                '**IgM** monoclonal + infiltração linfoplasmocitária; **mutação MYD88 L265P**; hiperviscosidade, adenomegalia, neuropatia. Tratamento: rituximabe + quimioterapia ou inibidor de BTK; plasmaférese na hiperviscosidade.'
              ]
            }
          ]
        },
        {
          id: '12.11-t2',
          headers: ['Fármaco', 'Classe e indicação', 'Reações adversas e cuidados'],
          rows: [
            {
              id: '12.11-t2-r1',
              cells: [
                'Bortezomibe',
                'Inibidor de proteassoma; base da indução',
                '**Neuropatia periférica**, herpes-zóster (aciclovir)'
              ]
            },
            {
              id: '12.11-t2-r2',
              cells: [
                'Lenalidomida; talidomida',
                'Imunomoduladores (IMiD)',
                '**Tromboembolismo** (profilaxia), citopenias; **teratogênicos**; neuropatia (talidomida)'
              ]
            },
            {
              id: '12.11-t2-r3',
              cells: [
                'Daratumumabe',
                'Anti-CD38',
                'Reações à infusão; interferência em testes de compatibilidade transfusional'
              ]
            },
            {
              id: '12.11-t2-r4',
              cells: [
                'Dexametasona',
                'Glicocorticoide',
                'Hiperglicemia, infecções, psicose'
              ]
            },
            {
              id: '12.11-t2-r5',
              cells: [
                'Bisfosfonato / denosumabe',
                'Prevenção de eventos ósseos',
                'Osteonecrose de mandíbula, hipocalcemia, insuficiência renal (bisfosfonato)'
              ]
            }
          ]
        }
      ]
    },
    {
      id: '12.12',
      chapterId: 12,
      chapterTitle: '12. EMERGÊNCIAS ONCO-HEMATOLÓGICAS E NEOPLASIAS HEMATOLÓGICAS',
      title: '12.12 Neoplasias mieloproliferativas e síndromes mielodisplásicas',
      tables: [
        {
          id: '12.12-t1',
          headers: ['Tópico', 'Conteúdo'],
          rows: [
            {
              id: '12.12-t1-r1',
              cells: [
                'Neoplasias mieloproliferativas clássicas (BCR-ABL negativas)',
                '**Policitemia vera (PV)**, **trombocitemia essencial (TE)** e **mielofibrose primária (MF)**. Mutações *JAK2 V617F* (PV ~95%; TE ~50–60%; MF ~60%), *CALR* e *MPL*.'
              ]
            },
            {
              id: '12.12-t1-r2',
              cells: [
                'Policitemia vera',
                '**Eritrocitose** (Hb >16,5 g/dL homens, >16 mulheres, ou hematócrito elevado), **eritropoetina baixa**, **JAK2 V617F**, **prurido aquagênico**, eritromelalgia, esplenomegalia, trombose (inclusive esplâncnica). **Tratamento**: **flebotomia (alvo hematócrito <45%)** + **AAS em baixa dose**; **hidroxiureia** (alto risco: >60 anos ou trombose prévia) ou ruxolitinibe.'
              ]
            },
            {
              id: '12.12-t1-r3',
              cells: [
                'Trombocitemia essencial',
                'Plaquetas **≥450.000/µL** persistentes, excluídas outras causas; trombose e sangramento (síndrome de von Willebrand adquirida se >1.000.000). **AAS**; **hidroxiureia** em alto risco.'
              ]
            },
            {
              id: '12.12-t1-r4',
              cells: [
                'Mielofibrose',
                '**Esplenomegalia volumosa**, sintomas constitucionais, anemia, **hemácias em lágrima (dacriócitos)** e reação leucoeritroblástica, **fibrose medular** na biópsia; **ruxolitinibe** para sintomas e esplenomegalia; transplante alogênico é o único potencialmente curativo.'
              ]
            },
            {
              id: '12.12-t1-r5',
              cells: [
                'Síndromes mielodisplásicas (SMD)',
                '**Citopenias** por hematopoese ineficaz, **displasia** morfológica, risco de evolução para LMA; idosos. Diagnóstico: mielograma com displasia + cariótipo (del(5q), monossomia 7); **IPSS-R**. **Tratamento**: baixo risco: suporte (transfusão, eritropoetina, **lenalidomida na del(5q)**); alto risco: **azacitidina/decitabina** e transplante alogênico se elegível.'
              ]
            }
          ]
        },
        {
          id: '12.12-t2',
          headers: ['Doença', 'Marcador/achado', 'Tratamento-chave'],
          rows: [
            {
              id: '12.12-t2-r1',
              cells: [
                'Policitemia vera',
                '*JAK2* V617F, EPO baixa, prurido aquagênico',
                'Flebotomia (Ht <45%) + AAS; hidroxiureia se alto risco'
              ]
            },
            {
              id: '12.12-t2-r2',
              cells: [
                'Trombocitemia essencial',
                'Plaquetas ≥450.000; *JAK2*/*CALR*/*MPL*',
                'AAS; hidroxiureia se alto risco'
              ]
            },
            {
              id: '12.12-t2-r3',
              cells: [
                'Mielofibrose',
                'Dacriócitos, esplenomegalia, fibrose medular',
                'Ruxolitinibe; transplante alogênico'
              ]
            },
            {
              id: '12.12-t2-r4',
              cells: [
                'SMD',
                'Displasia, citopenias, del(5q)',
                'Baixo risco: suporte/lenalidomida; alto risco: azacitidina/transplante'
              ]
            }
          ]
        }
      ]
    }
  ]
};
