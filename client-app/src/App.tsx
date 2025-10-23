import Header from './components/Header';
import CompanyForm from './components/CompanyForm';
import './styles/theme.css';

function App() {
  return (
    <div className="wrap">
      <Header
        title="Cadastro de Cliente"
        subtitle="Registre os dados básicos da empresa"
      />
      
      <main>
        <div className="container">
          <CompanyForm />
        </div>
      </main>
    </div>
  );
}

export default App;