import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { CatListContainer } from '../components/CatList/CatListContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Catbreeds</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CatListContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
