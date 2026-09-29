# Período Clínica Médica — análise do deck e lacunas

> Material de estudo. Não é orientação clínica. As fichas novas foram feitas a partir de diretrizes citadas ao final e de conhecimento clássico de livro-texto. **Confira na sua referência antes de memorizar**, principalmente os itens marcados como "conferir".

## 1. O que o arquivo é

Exportação do Anki com **2.504 cartões** (colunas `pergunta`, `resposta`, `extra`), em quatro blocos:

| Faixa aproximada | Formato | Conteúdo |
|---|---|---|
| 0–1.490 | Perguntas e respostas curtas | Arritmias, hipertensão, infecções, tireoide, diabetes, hipófise e adrenal |
| 1.500–2.340 | Cloze ou pares "tema ⇒ resposta" | Revisão rápida de pontos de prova |
| 2.339–2.504 | Resumos "Tema: Sinais e Sintomas / Conduta" | 165 cartões de resumo por tema |

## 2. Problema técnico: a coluna `extra` está embaralhada

**283 cartões** têm texto na coluna `extra`, e as palavras estão fora de ordem. Exemplos do arquivo:

| Pergunta | `extra` no arquivo |
|---|---|
| Primeira prioridade ao abordar uma arritmia | `de Depois, deve forma lido o ser sistemática. traçado` |
| Faixa do intervalo PR | `>200 atraso atrioventricular; curto em ms ocorrer pode PR pré-excitação. sugere` |
| Largura do QRS | `A determina do Ela impulso. necessariamente Não origem` |

Isso parece ser defeito de geração ou exportação. As explicações estão inutilizáveis como estão.

**Sugestão:** regenerar essa coluna. Posso reescrever as 283 explicações em ordem correta a partir do par pergunta/resposta, se você quiser.

## 3. Mapa de cobertura

As contagens vêm de busca por palavras-chave. Termos ambíguos foram checados à mão; por exemplo, "asma" aparecia dentro de "plasma", "hemianopsia" e "quiasma". Trate os números como ordem de grandeza.

### Bem coberto

| Área | Situação |
|---|---|
| Tireoide | Mais de 300 menções: tireoidites, hipo e hipertireoidismo, nódulos e câncer |
| Diabetes | Cerca de 170 menções, com hipoglicemia (77) e cetoacidose (33) |
| Hipófise e adrenal | Acromegalia (63), Cushing (56), insuficiência adrenal (51), feocromocitoma (32) |
| Arritmias | FA, TV, bradiarritmias, WPW e flutter |
| Hipertensão | Secundária, crise, gestação e situações especiais |
| Vasculites, LES, SAF | Cobertura sólida |
| Infecções | Pneumonia, ITU, pele e diarreia |
| Geriatria | Boa cobertura |

### Rasos

- **Insuficiência cardíaca:** só cartões curtos de revisão (ICFER e ICFEN); não há bloco de resumo próprio.
- **Sepse:** aparece apenas em contexto de pneumonia (choque séptico por PAC) e de urosepse; não há bloco próprio.
- **Infecções:** faltam HIV e endocardite.
- **Distúrbios do sódio e do potássio:** existem, mas sem protocolo de correção.
- **Osteoporose:** só citada de passagem.

### Ausentes ou quase ausentes

| Área | Assunto |
|---|---|
| Pneumologia | DPOC, TEP, pneumotórax, câncer de pulmão, doenças intersticiais, insuficiência respiratória |
| Cardiologia | SCA e IAM como tema próprio, valvopatias, pericardite, miocardite, síncope, dissecção de aorta como tema próprio |
| Gastroenterologia e hepatologia | Refluxo, úlcera, HDA, cirrose e complicações, hepatites, pancreatite, colecistite |
| Nefrologia | LRA, ácido-base, glomerulopatias em profundidade, litíase |
| Hematologia | Anemias, leucemias, mieloma, neutropenia febril |
| Reumatologia | AR, espondiloartrites, esclerose sistêmica, gota, osteoartrite |
| Neurologia | AVC isquêmico em profundidade, epilepsia, meningite, demências, Parkinson |
| Infectologia | HIV, sífilis, dengue e arboviroses (há só cartões soltos), endocardite |
| Outros | Cuidados paliativos, intoxicações, perioperatório |

## 4. Prioridade sugerida

1. **Alta rentabilidade e ausente:** DPOC, TEP, SCA, HDA e hemorragia varicosa, cirrose (PBE), sepse, HIV, LRA e eletrólitos.
2. **Alta rentabilidade, mas só citada:** AVC, endocardite, dislipidemia, AR e gota, neutropenia febril.
3. **Média:** valvopatias, pericardite, síncope, leucemias e mieloma, osteoporose, epilepsia e meningite.
4. **Completar depois:** pancreatite, colecistite, hepatites, doenças intersticiais, câncer de pulmão, paliativos.

## 5. O que foi entregue

`cards-complementares.txt`: **104 cartões novos** para importar no Anki (Arquivo → Importar; separador tab; HTML ativado).

- Cobrem DPOC, asma, TEP, SCA, dislipidemia, HDA, cirrose, sepse, endocardite, HIV, nefro e eletrólitos, reumato, hemato, neuro, cardio geral e osteoporose.
- A coluna `extra` de cada cartão traz a fonte e, quando cabe, um "conferir".
- O prefixo `[TEMA]` na pergunta permite filtrar e organizar por baralho.

**Ainda não cobertos:** pancreatite, colecistite, hepatites, doenças intersticiais, câncer de pulmão, valvopatias em detalhe, paliativos, intoxicações e perioperatório. Posso fazer uma segunda leva.

### Segunda leva: `cards-temas-solicitados.txt`

**197 cartões** dos 15 temas pedidos: LES, SAAF, vasculites, miopatias inflamatórias, esclerose sistêmica, Sjögren, Guillain-Barré, síncope e crise convulsiva, esclerose múltipla, miastenia gravis, DII, doença celíaca, neoplasia colorretal, emergências onco-hematológicas e neoplasias hematológicas.

- LES, SAF, vasculites, DII e doença celíaca já tinham cartões curtos no deck; os novos aprofundam, sem repetir as perguntas.
- Esclerose sistêmica e miastenia não apareciam no deck; Sjögren e miopatias tinham menções isoladas.
- Fontes verificadas na web: EULAR 2023 (LES), ACR/EULAR 2023 (SAF), McDonald 2024, EAN 2025 (miastenia), USPSTF/USMSTF (CCR) e AGA (DII). O resto vem de livro-texto e está marcado como tal na coluna `extra`.
- Para o rastreamento do CCR no Brasil, a diretriz do SUS estava em consulta pública; o cartão pede para conferir a versão vigente.

## 6. Atualizações de diretriz encontradas na pesquisa

| Tema | O que mudou |
|---|---|
| **DPOC (GOLD 2026)** | Atividade da doença como alvo. Limiar menor para o grupo E. Eosinófilos guiam o corticoide inalatório. Reabilitação, vacinas e cessação do tabagismo como pilares. Dupilumabe e mepolizumabe aprovados pelo FDA. |
| **TEP (ACC/AHA 2026)** | Classificação nova em categorias A–E. Hestia, PESI e sPESI para baixo risco. DOAC preferido. Varfarina na SAF trombótica. |
| **SCA (ACC/AHA 2025)** | Ticagrelor ou prasugrel preferidos ao clopidogrel. DAPT de no mínimo 12 meses. Estratégias para reduzir sangramento. |
| **Sepse (SSC 2026)** | NEWS, MEWS ou SIRS em vez do qSOFA. Cristaloide balanceado. Noradrenalina periférica. Vasopressina adicionada quando a dose sobe. Beta-lactâmico em infusão prolongada. |
| **Dislipidemia (SBC 2025)** | Metas: muito alto risco < 50 e extremo < 40 mg/dL. Terapia combinada inicial. Lp(a) dosada uma vez na vida. |
| **Endocardite (Duke-ISCVID 2023)** | PET-TC, PCR e sequenciamento como novos métodos. Inspeção intraoperatória como critério maior. |
| **Asma (GINA 2025)** | Reliever anti-inflamatório com ICS-formoterol. SABA isolado desaconselhado. |
| **HIV (MS 2024–2025)** | TDF/3TC + dolutegravir como esquema inicial. Dupla 3TC/DTG para simplificação, com critérios definidos. |

## 7. Limites desta análise

- Li e mapeei o arquivo inteiro, mas revisei o **conteúdo factual só por amostragem** (cerca de 125 cartões distribuídos ao longo do deck). Nessa amostra não achei erro factual, mas não é uma auditoria completa.
- As buscas na web retornaram resumos de segunda mão (portais de educação médica). Em alguns pontos (por exemplo, o limiar exato do grupo E no GOLD 2026 e os nomes das categorias A–E do TEP) o cartão diz "conferir".
- Uma busca sobre o consenso Baveno devolveu resultados inconsistentes sobre a data. As fichas de hemorragia varicosa usam a prática consolidada (vasoativo, antibiótico, ligadura e TIPS precoce em alto risco).
- Doses e condutas de pronto-atendimento devem ser conferidas no protocolo do seu serviço.

## 8. Sobre a skill `clinical-reports`

Ela foi instalada e lida, mas serve para outra coisa: montar rascunhos estruturados de relatórios clínicos, como caso clínico, CSR e segurança de ensaios. Não cobre resumo de estudo nem fichas de revisão. Aproveitei só os princípios úteis dela:

- toda ficha nova cita a fonte;
- o que não foi confirmado fica marcado;
- não há dados de paciente;
- há aviso de revisão qualificada.

## 9. Fontes

- [GOLD 2026 — resumo das mudanças](https://www.chestphysician.org/gold-2026-updates-in-global-strategy-for-diagnosis-management-and-prevention-of-copd/) e [key changes (GOLD)](https://goldcopd.org/wp-content/uploads/2025/11/KEY-CHANGES-GOLD-2026-10Nov2025.pdf)
- [Diretriz ACC/AHA 2026 de embolia pulmonar — Afya](https://portal.afya.com.br/cardiologia/diretriz-acc-aha-2026-atualiza-manejo-da-embolia-pulmonar-aguda)
- [Atualização ACC 2025 para SCA — Medway](https://www.medway.com.br/conteudos/atualizacao-acc-2025-para-a-sindrome-coronaria-aguda-o-que-voce-precisa-saber/)
- [Surviving Sepsis Campaign 2026 — SCCM](https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026)
- [Diretriz Brasileira de Dislipidemias 2025 — Afya](https://portal.afya.com.br/cardiologia/sbc-2025-nova-diretriz-brasileira-de-dislipidemias)
- [Critérios Duke-ISCVID 2023 — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10681650)
- [GINA 2025 — resumo](https://ipu.ie/ipu-review-article/asthma-update-gina-2025-guidelines/)
- [Nota Técnica 91/2025 — HIV, 3TC/DTG](https://www.gov.br/aids/pt-br/central-de-conteudo/notas-tecnicas/2025/nota-tecnica-no-91_2025-cgha_dathi_svsa_ms.pdf/@@download/file)
- [KDIGO — estadiamento da LRA](https://empendium.com/mcmtextbook/table/031_1990)
- [EULAR 2025 — artrite reumatoide](https://rheumnow.com/news/2025-update-eular-recommendations-rheumatoid-arthritis-management)
- [HDA e Glasgow-Blatchford — Afya](https://portal.afya.com.br/gastroenterologia/saiba-como-e-o-manejo-do-paciente-com-hemorragia-digestiva-alta)
