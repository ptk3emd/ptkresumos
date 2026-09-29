# Guia de Design System · Resumo Clínica Médica

Este documento estabelece a constituição visual, regras arquiteturais de interface e padrões de componentes para a plataforma **Resumo Clínica Médica**.

---

## 1. Filosofia de Design & Princípios Fundamentais

1. **Minimalismo Editorial e Foco Clínico**: A interface prioriza a legibilidade de dados médicos densos (quadros clínicos, esquemas terapêuticos, critérios diagnósticos e doses). Elementos decorativos supérfluos, molduras duplicadas e poluição visual são estritamente proibidos.
2. **Zero Degradê (Anti-Gradient Discipline)**: É expressamente vedado o uso de degradês (`bg-gradient-*`, `linear-gradient`, `from-*`, `to-*`, `via-*`), desfoques translúcidos (`backdrop-blur`) e sombras pesadas difusas (`shadow-xl`, `shadow-2xl`). Todas as superfícies são 100% sólidas e planas (*flat*).
3. **Monocromatismo Estrito (Branco, Cinza e Preto)**: Nenhuma cor cromática (verde, esmeralda, azul, roxo, âmbar, vermelho) é permitida na interface operacional. O contraste e os estados ativos são representados exclusivamente através de contraste neutro sólido em escala de cinza (`zinc`).
4. **Disciplina de Superfícies Planas**: Divisões visuais são criadas com bordas de alta precisão de 1 pixel (`border-zinc-200` / `border-zinc-800`), e não por sombras difusas ou caixas aninhadas.

---

## 2. Paleta de Cores e Tokens Neutros

A plataforma suporta temas Claro (*Light*) e Escuro (*Dark*), operando exclusivamente com tons sólidos da família **Zinc**:

| Token Semântico | Modo Claro | Modo Escuro | Aplicação |
|---|---|---|---|
| **Fundo da Aplicação** | `#ffffff` (`bg-white`) / `#fafafa` (`bg-zinc-50`) | `#09090b` (`bg-zinc-950`) | Telas, viewport base, cards primários |
| **Superfície Secundária** | `#f4f4f5` (`bg-zinc-100`) | `#18181b` (`bg-zinc-900`) | Cabeçalhos de tabelas, inputs, linhas alternadas |
| **Superfície Terciária** | `#e4e4e7` (`bg-zinc-200`) | `#27272a` (`bg-zinc-850`) | Hover de botões, badges secundários |
| **Bordas e Divisores** | `#e4e4e7` (`border-zinc-200`) | `#27272a` (`border-zinc-800`) | Linhas de tabela, divisores de seção |
| **Texto Primário** | `#09090b` (`text-zinc-950`) / `#18181b` (`text-zinc-900`) | `#fafafa` (`text-zinc-50`) / `#f4f4f5` (`text-zinc-100`) | Títulos, células principais, cabeçalhos |
| **Texto Secundário** | `#71717a` (`text-zinc-500`) / `#52525b` (`text-zinc-600`) | `#a1a1aa` (`text-zinc-400`) / `#71717a` (`text-zinc-500`) | Breadcrumbs, legendas, metadados |
| **Estado Ativo / Destaque** | `#18181b` com texto `#ffffff` | `#f4f4f5` com texto `#18181b` | Botão selecionado, badge de revisão |

---

## 3. Tipografia & Números

- **Família Tipográfica**: `Plus Jakarta Sans`, com fallback para system sans-serif (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`).
- **Alinhamento Numérico (`tabular-nums`)**: Obrigatório em todas as contagens, cronômetros, páginas, estatísticas de revisão e células com números/dosagens, garantindo que colunas não oscilem.
- **Hierarquia de Tamanhos**:
  - `text-lg sm:text-2xl font-bold`: Título principal do tema clínico.
  - `text-base font-bold`: Título de capítulo e modais.
  - `text-xs sm:text-sm font-semibold`: Cabeçalhos de colunas de tabelas (`th`).
  - `text-[12.5px] sm:text-[13px]`: Células de categoria (primeira coluna).
  - `text-[13.5px] sm:text-[14px]`: Células de conteúdo médico.
  - `text-[10px] / text-[11px]`: Badges, breadcrumbs, atalhos de teclado `<kbd>`.

---

## 4. Componentes e Padrões Estruturais

### 4.1 Cabeçalho Global (`Header.tsx`)
- **Fixação**: `sticky top-0 z-30`.
- **Fundo**: `bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800` (sem transparência e sem blur).
- **Conteúdo**:
  - Marca minimalista com indicador de status circular neutro.
  - Indicador de progresso de estudo tabular (`x/96`).
  - Botão de lembretes de revisão espaçada com badge de destaque neutro quando há tópicos pendentes (`dueReviewsCount > 0`).
  - Temporizador Pomodoro discreto (`StudyTimer`).
  - Alternador de visualização segmentado compacto (`1 Tópico` vs `Todas`).
  - Ações rápidas de gaveta (Índice, Google Sheets, Backup e Modo Escuro/Claro).
  - Linha inferior de progresso de 1px com preenchimento sólido.

### 4.2 Modo Zen (`Focus Mode`)
- **Objetivo**: Foco absoluto nas tabelas comparativas para estudo sem distrações.
- **Ocultação**: Cabeçalho padrão, barra de busca, filtros de capítulos, badges de ações, rodapé e notas contextuais são completamente removidos da tela.
- **Barra Superior Dedicada**: Não utiliza botão flutuante sobreposto. Renderiza uma barra fixa limpa no topo (`h-12`) com o título do tema à esquerda e o botão **"Sair do Modo Zen"** com atalho <kbd>ESC</kbd> à direita.
- **Navegação**: O conteúdo abaixo é renderizado com espaçamento seguro, impedindo qualquer sobreposição de texto.

### 4.3 Tabelas Médicas (`MedicalTableView.tsx` & `ClinicalCell.tsx`)
- **Moldura**: Borda única sólida `border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden`.
- **Cabeçalho de Colunas**: Fundo sólido `bg-zinc-100 dark:bg-zinc-900` com texto em caixa-alta espaçado (`text-[11px] uppercase tracking-wider`).
- **Linhas Alternadas**: `even:bg-zinc-50 dark:even:bg-zinc-900` (100% sólidos, sem opacidades fracionadas).
- **Active Recall (Modo Teste)**:
  - Células podem ser ocultadas individualmente (duplo clique / toque) ou em lote.
  - Célula mascarada: caixa com borda tracejada neutra e ícone `EyeOff`.
- **Anotações e Edições**:
  - Células editadas exibem badge neutro discreto.
  - Anotações clínicas exibem caixa sólida com borda esquerda de 2px `border-l-2 border-zinc-900 dark:border-zinc-100`.

### 4.4 Sistema de Lembretes de Revisão Espaçada
- **Botão de Revisão no Tópico**: Presente no cabeçalho de cada tema clínico (`SingleTopicView` e `AllTopicsView`).
- **Lógica de Agendamento**:
  - Opções pré-definidas de intervalo: +1 dia (Amanhã), +3 dias, +7 dias, +14 dias, +30 dias, +60 dias ou data no calendário.
  - Cálculo de data simples (`YYYY-MM-DD`): identifica tópicos vencidos (*overdue*), para hoje (*due today*) ou futuros (*upcoming*).
- **Painel de Revisões (`DueReviewsDrawer.tsx`)**:
  - Gaveta lateral direita com abas: **Pendentes**, **Próximos** e **Todos**.
  - Permite estudar imediatamente (abrindo no modo individual) ou concluir/reagendar a revisão com um clique.

### 4.5 Modais e Gavetas (`Modals & Drawers`)
- **Backdrop**: Fundo escuro sólido e uniforme `bg-black/60` (sem `backdrop-blur`).
- **Container**: Fundo `bg-white dark:bg-zinc-950` com bordas nítidas `border border-zinc-200 dark:border-zinc-800`.
- **Sombras**: Utilizar exclusivamente `shadow-sm` ou `shadow-none` para manter estética flat nítida.

---

## 5. Regras Inegociáveis para Novas Alterações

1. **Nunca adicionar gradientes**: Não utilizar `bg-gradient-to-*`, `from-*`, `to-*`, `via-*` ou `linear-gradient` em nenhum elemento, fundo, botão ou borda.
2. **Nunca reintroduzir cores cromáticas**: Nenhum componente novo deve introduzir botões verdes, vermelhos, azuis, amarelos ou roxos. Utilizar sempre escala de cinza (`zinc-900`, `zinc-800`, `zinc-100`, `white`, `black`).
3. **Não usar `backdrop-blur`**: Efeitos de desfoque criam artefatos visuais semelhantes a degradê e reduzem performance em dispositivos móveis.
4. **Preservar a Barra Superior do Modo Zen**: O botão de saída do Modo Zen nunca deve ser renderizado como elemento `fixed` solto que sobreponha o conteúdo das tabelas; deve sempre residir em sua barra superior dedicada.
5. **Garantir Acessibilidade e Contraste**: No modo claro, textos de ação devem ter fundo escuro com texto branco. No modo escuro, fundo claro com texto escuro ou bordas de alto contraste.
