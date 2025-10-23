# Cadastro de Cliente - React App

Uma aplicação React moderna para cadastro de clientes empresariais, baseada no design do arquivo `cadastro.html`.

## 🚀 Funcionalidades

- **Formulário de Cadastro**: Interface intuitiva para cadastro de empresas
- **Validação em Tempo Real**: Validação de CNPJ e telefone com feedback visual
- **Máscaras de Input**: Formatação automática para CNPJ e telefone
- **Design Responsivo**: Interface adaptável para desktop e mobile
- **Notificações Toast**: Feedback visual para ações do usuário
- **Tema Dark**: Interface moderna com tema escuro
- **Validação de Formulário**: Validação completa com mensagens de erro

## 🛠️ Tecnologias

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Lucide React** para ícones
- **CSS Custom Properties** para tema
- **Hooks personalizados** para lógica de formulário

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Design System

O projeto utiliza um sistema de design baseado em:

- **Cores**: Paleta de cores escura com acentos roxos
- **Tipografia**: System fonts para melhor performance
- **Espaçamento**: Grid system responsivo
- **Componentes**: Componentes reutilizáveis e acessíveis

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: 640px para tablets e desktop
- **Grid Adaptativo**: Layout que se adapta ao tamanho da tela

## 🔧 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Input.tsx
│   ├── Panel.tsx
│   ├── Toast.tsx
│   └── CompanyForm.tsx
├── hooks/              # Hooks personalizados
│   └── useForm.ts
├── styles/             # Estilos CSS
│   └── theme.css
├── types/              # Definições TypeScript
│   └── index.ts
├── utils/              # Utilitários
│   └── masks.ts
├── App.tsx
└── main.tsx
```

## 🚀 Deploy

Para fazer deploy da aplicação:

```bash
# Build de produção
npm run build

# Os arquivos estarão na pasta dist/
```

## 📄 Licença

Este projeto é de uso interno e educacional.