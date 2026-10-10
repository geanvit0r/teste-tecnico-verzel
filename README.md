# Verzel Store — Automação de Testes com Playwright

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte de um desafio técnico para uma oportunidade na área de Quality Assurance (QA).

O objetivo é validar funcionalidades e regras de negócio da aplicação **Verzel Store**, utilizando testes automatizados de interface Web com Playwright e JavaScript.

**Aplicação testada:** https://verzel-store.qa-test-verzel-store.workers.dev/

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Playwright
- Playwright Test Runner
- Visual Studio Code

## 📋 Pré-requisitos

Antes de executar a automação, é necessário ter instalado:

- Node.js e npm
- Git (para clonar o repositório)
- Um editor de código, preferencialmente VS Code

Para verificar a instalação do Node.js e do npm, execute:

```bash
node --version
npm --version
```

## 🚀 Como executar a automação

### 1. Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/geanvit0r/teste-tecnico-verzel.git
```

Acesse a pasta do projeto:

```bash
cd teste-tecnico-verzel
```


### 2. Instalar as dependências

Na raiz do projeto, execute:

```bash
npm install
```

Em seguida, instale os navegadores necessários para execução dos testes com Playwright.

```bash
npx playwright install
```

### 3. Executar os testes

Para executar todos os testes:

```bash
npx playwright test
```

Para executar os testes com a interface gráfica do Playwright:

```bash
npx playwright test --ui
```

Para executar os testes visualizando o navegador:

```bash
npx playwright test --headed
```

Para executar apenas um arquivo de teste:

```bash
npx playwright test tests/aplicarCupom.spec.js
```

Para executar um teste específico pelo nome:

```bash
npx playwright test -g "APLICAR CUPOM VÁLIDO"
```

### 4. Visualizar o relatório de execução

Após executar os testes, caso o relatório HTML esteja habilitado na configuração do Playwright, utilize:

```bash
npx playwright show-report
```

O relatório permite consultar os resultados das execuções, incluindo testes aprovados, reprovados e detalhes das falhas.

## 🧪 Cenários automatizados

A automação contempla os seguintes cenários:

| Cenário | Critério de aceite |
|---|---|
| Aplicar cupom válido | CA01 |
| Aplicar cupom com letras maiúsculas e minúsculas | CA02 |
| Aplicar cupom com espaços nas extremidades | CA02 |
| Aplicar cupom inválido | CA03 |
| Aplicar cupom expirado | CA04 |

Os testes também incluem validações de valores financeiros do carrinho, como subtotal, desconto, frete e total, conforme aplicável.

## 📁 Estrutura dos testes

O repositório está organizado em duas partes principais: a automação de testes e a documentação das evidências de execução.

**Automação de testes**

Os cenários automatizados estão localizados no arquivo `tests/aplicarCupom.spec.js`, desenvolvido utilizando Playwright e JavaScript. Os testes contemplam a validação de cupons promocionais, incluindo cenários positivos, negativos e verificações dos valores financeiros do carrinho.

**Evidências dos testes**

A pasta `EVIDÊNCIAS DOS TESTES` reúne os artefatos produzidos durante as validações manuais e de API, incluindo:

- Casos de teste Web, organizados por funcionalidade.
- Casos de teste e resultados das validações de API.
- Relatórios dos defeitos identificados.
- Relatório consolidado da execução dos testes.

Essa organização facilita a rastreabilidade dos cenários, a consulta às evidências e a compreensão dos resultados obtidos durante o desafio técnico.

## 🤖 Utilização de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, principalmente na análise e refatoração dos casos de teste.

Seu uso contribuiu para a aplicação de técnicas de teste que permitiram reduzir a redundância entre cenários, otimizar a documentação e buscar maior cobertura dos critérios de aceite.

Na etapa de automação com Playwright, a IA também foi utilizada para auxiliar na revisão do código, esclarecer dúvidas técnicas e identificar oportunidades de simplificação e melhoria da legibilidade.

As sugestões foram analisadas e adaptadas conforme as necessidades do projeto, mantendo o foco na compreensão das soluções implementadas e na validação dos comportamentos esperados da aplicação.

## 📊 Estratégia de qualidade

Os testes foram desenvolvidos com foco na validação de regras de negócio e na identificação de possíveis comportamentos divergentes dos critérios de aceite.

Foram consideradas técnicas como:

- Particionamento de equivalência
- Análise de valor limite
- Testes positivos e negativos
- Validação de resultados esperados
- Verificação de cálculos financeiros

## 📝 Considerações finais

O projeto busca demonstrar a aplicação prática de conhecimentos em Quality Assurance, desde a interpretação de requisitos até a execução de testes automatizados.

A automação contribui para a repetibilidade das verificações, a identificação de regressões e a confiabilidade das funcionalidades avaliadas.
