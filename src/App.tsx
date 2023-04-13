import Header from './components/header/header.component'
import './App.scss';
import ProfileCard from './components/profileCard/profileCard.component';
import SelectedService from './components/selectedService/selectedService.component';
import PaymentForm from './components/paymentForm/paymentForm.component';
import Footer from './components/footer/footer.component';

function App() {

  return (
    <>
      <Header />
      <main>
        <ProfileCard />
        <SelectedService />
        <PaymentForm />

      </main>
      <Footer />
    </>
  )
}

export default App
