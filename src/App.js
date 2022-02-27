import Layout from './js/components/Layout';
import injectContext from './js/store/appContext';
import './App.css';

function App() {
  return (
    <Layout />
  );
}

export default injectContext(App);
